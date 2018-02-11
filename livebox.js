var request = require('request-promise-native');
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
  // exemple: this.key = configuration.key;
  this.baseURL = "http://livebox.home:8080/remoteControl/cmd?operation=01&mode=0&key=";

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
  this.plugins = plugins;
  return Promise.resolve(this);
};

/**
 * @param {String} commande La commande envoyée depuis IFTTT par Pushbullet
 * @return {Promise}
 */
AssistantLivebox.prototype.action = function(cmd) {
  var _this=this;
  return new Promise(function(prom_res, prom_rej) {
    var key;
    switch(cmd.split(" ")[0]) {
      case 'zappe': {
        var nom = cmd.replace(/^zappe /,"").replace(/^sur /,"").toLowerCase().replace(/\s(\d)/g,"$1");
        var canal;
        // si on a "la#" ça signifie qu'on a appelé un nombre
        if (/la\d+/.test(nom)) {
          key = nom.match(/la(\d+)/)[1].split("").join(",");
          key = _this.commandes[key];
          console.log("[assistant-livebox] Chaine "+key);
        }
        break;
      }
      default:{
        key = _this.commandes[cmd];
        if (key) {
          console.log("[assistant-livebox] Key "+key);
        } else {
          console.log("[assistant-livebox] Erreur : commande inconnue");
          return prom_rej();
        }
      }
    }

    var url = _this.baseURL + key;
    console.log("[assistant-livebox] "+url)
    request({
      url:url
    })
    .then(function(data) {
      console.log(data);
      prom_res();
    })
    .catch(function(err) {
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
