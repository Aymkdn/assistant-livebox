var request = require('request-promise-native');
var fs = require('fs');
var path = require('path');
function PromiseChain(n,r){var e=Promise.resolve(),i=n.map(function(n){return e=e.then(function(){return r(n)})});return Promise.all(i)}
/*

mode :
  0 : envoi unique de touche
  1 : appui prolongé de touche
  2 : relacher la touche après un appui prolongé

operation=10";//info decodeur

Commande "operation=01&mode=0&key=" :
108 //touche info
114 //vol
115 //vol+
352 //ok
402  //Prog+
403  //Prog-
512 //touche 0
513 //touche 1
514 //touche 2
515 //touche 3
516 //touche 4
517 //touche 5
518 //touche 6
519 //touche 7
520 //touche 8
521 //touche 9
139 //"Home/Menu"
103 //"Up"
108 //"Down"
105 //"Left"
106 //"Right"
158 //"Exit/Back"
393 //"VOD"
168 //"Rewind"
164 //"Play/Pause"
159 //"Forward"
164 //"Stop"
167 //"Record"
115 //"Vol+"
113 //"Mute"
114 //"VolDwn"
116 //"On/Off"


// détecter état Livebox
/remoteControl/cmd?operation=10
répond:
 si décodeur en stand-by
{ "result": { "responseCode": "0", "message": "ok", "data": { "osdContext": "MAIN_PROCESS", "macAddress": "18:62:2C:xx:xx:xx", "wolSupport": "0", "friendlyName": "décodeur TV d'Orange", "activeStandbyState": "1" } } }

 si décodeur ON
{ "result": { "responseCode": "0", "message": "ok", "data": { "osdContext": "HOMEPAGE", "macAddress": "18:62:2C:xx:xx:xx", "wolSupport": "0", "friendlyName": "décodeur TV d'Orange", "activeStandbyState": "0" } } }

  si décodeur ON et sur une chaine
{ "result": { "responseCode": "0", "message": "ok", "data": { "timeShiftingState": "0", "playedMediaType": "LIVE", "playedMediaState": "PLAY", "playedMediaId": "47", "playedMediaContextId": "1", "playedMediaPosition": "NA", "osdContext": "LIVE", "macAddress": "18:62:2C:xx:xx:xx", "wolSupport": "0", "friendlyName": "décodeur TV d'Orange", "activeStandbyState": "0" } } }


*/
/**
 * @param {Object} configuration L'objet `configuration` qui vient du fichier configuration.json
 */
var AssistantLivebox = function(configuration) {
  // par exemple configuration.key si on a `{ "key": "XXX" }` dans le fichier configuration.json
  this.baseURL = "http://"+configuration.ip_box+":8080/remoteControl/cmd?operation=01&key=&mode=0";

  // commandes
  this.commandes = {
    "up":103,
    "left":105,
    "right":106,
    "down":108,
    "mute":113,
    "vol_dec":114,
    "vol_inc":115,
    "on":116,
    "off":116,
    "menu":139,
    "back":158,
    "fwd":159,
    "play":164,
    "pause":164,
    "rec":167,
    "rwd":168,
    "ok":352,
    "vod":393,
    "prgm_inc":402,
    "prgm_dec":403,
    "0":512,
    "1":513,
    "2":514,
    "3":515,
    "4":516,
    "5":517,
    "6":518,
    "7":519,
    "8":520,
    "9":521
  }
}

/**
 * @param  {Object} plugins Un objet représentant les autres plugins chargés
 * @return {Promise}
 */
AssistantLivebox.prototype.init = function(plugins) {
  var _this=this;
  _this.plugins = plugins;
  var chainesFileName = 'chaines_orange.json';
  var chainesFilePath = path.join(__dirname,chainesFileName);
  return Promise.resolve()
  .then(function() {
    _this.chaines = {}; // pour enregistrer le nom de chaine -> numéro de chaine
    // on regarde si on a une copie locale
    try {
      fs.accessSync(chainesFilePath, fs.constants.R_OK)
      var stat = fs.statSync(chainesFilePath);
      // on regarde si ça fait plus d'un mois depuis la dernière mise à jour
      var timelaps = Date.now()-stat.mtime.getTime();
      if (timelaps > 2419200000) throw "Rafraichissement des chaines via le Web";
      else {
        _this.chaines = require('./'+chainesFileName);
        return false;
      }
    } catch(err) {
      // on récupère les chaines Orange
      console.log("[assistant-livebox] Récupération des chaines télé...");
      return request({
        url:"https://assistant.kodono.info/livebox.php",
        agentOptions:{ "rejectUnauthorized":false }
      })
      .catch(function() {
        try {
          _this.chaines = require('./chaines.json');
        } catch(err) {
          console.log("[assistant-livebox] ERREUR : Impossible de récupérer la liste des chaines...");
        }
        return null
      })
    }
    return resource;
  })
  .then(function(response) {
    if (response) {
      // on va lire le fichier replace_chaine.json qui permet de substituer certaines chaines
      var substitution = require("./replace_chaine");

      // puis on s'occupe de la réponse du serveur
      var body =response.slice(9).replace(/\)\W+$/,"");
      body = JSON.parse(body);
      var i, chaines=[], nom, canal, slash;
      for (i=0, len=body.chaines.length; i<len; i++) {
        nom = _this.decodeEntities(body.chaines[i].nom);
        // on remplace certains noms
        nom = nom.toLowerCase().replace(/(.*)( \([^\)]+\))/,"$1").replace(/\s+/g," ").replace(/&/g," et ").replace(/\!/g,"").trim();
        slash = nom.indexOf('/');
        if (slash > -1) nom = nom.slice(0,slash);
        nom = nom.replace(/\s+$/,"").replace(/\s(\d)/g,"$1");
        // on fait la substitution
        if (substitution[nom]) nom=substitution[nom];
        if (!nom) continue;
        canal = body.chaines[i].canal;
        _this.chaines[nom] = canal;
        console.log("[DEBUG] Chaine « "+nom+" » = "+canal)
      }
      // on écrit dans le fichier local
      fs.writeFileSync(chainesFilePath, JSON.stringify(_this.chaines, null, 2));
    }

    if (response!==null) console.log("[assistant-livebox] Récupération des chaines terminée !");
    return _this;
  })
};

/**
 * @param {String} commande La commande envoyée depuis IFTTT par Pushbullet
 * @return {Promise}
 */
AssistantLivebox.prototype.action = function(cmd) {
  var _this=this;
  return new Promise(function(prom_res, prom_rej) {
    var key;
    console.log("[DEBUG] cmd=",cmd)
    switch(cmd.split(" ")[0]) {
      case 'zappe': {
        var nom = cmd.replace(/^zappe /,"").replace(/^sur /,"").toLowerCase().replace(/\s(\d)/g,"$1");
        var canal;
        console.log("[DEBUG] nom=",nom)
        // si on a "la#" ça signifie qu'on a appelé un nombre
        if (/la\d+/.test(nom)) {
          key = nom.match(/la(\d+)/)[1].split("").join(",");
          console.log("[DEBUG] zappe key=",key);
          if (key.length > 1) {
            // il faut faire plusieurs appels pour chaque chaine
            key = key.split("").map(function(k) { return _this.commandes[k] });
          } else {
            key = _this.commandes[key];
          }
          console.log("[assistant-livebox] Chaine "+key);
        }
        break;
      }
      default:{
        key = _this.commandes[cmd];
        console.log("[DEBUG] default key=",nom)
        if (key) {
          console.log("[assistant-livebox] Key "+key);
        } else {
          console.log("[assistant-livebox] Erreur : commande inconnue");
          return prom_rej();
        }
      }
    }

    if (!Array.isArray(key)) key=[key];
    console.log("[DEBUG] key=",key);
    PromiseChain(key, function(k) {
      var url = _this.baseURL.replace(/key=&/,"key="+key+"&");
      console.log("[assistant-livebox] "+url)
      request({
        url:url
      })
      .then(function(data) {
        console.log(data);
      })
    })
    .then(function() {
      prom_res();
    })
    .catch(function(err) {
      console.log("[DEBUG] erreur=>",err);
      prom_rej(err);
    })
  })
};

/**
 * Initialisation du plugin
 *
 * @param  {Object} configuration La configuration
 * @param  {Object} plugins Un objet qui contient tous les plugins chargés
 * @return {Promise} resolve(this)
 */
exports.init=function(configuration, plugins) {
  return new AssistantLivebox(configuration).init(plugins)
  .then(function(resource) {
    console.log("[assistant-livebox] Plugin chargé et prêt.");
    return resource;
  })
}

