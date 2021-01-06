# assistant-livebox

Ce plugin de [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/) permet de contrôler la Livebox d'Orange.

> Consulter [le changelog](https://github.com/Aymkdn/assistant-livebox/blob/master/changelog.md) pour connaitre les dernières mises à jour.

**ATTENTION** : vous n'avez besoin **QUE** du plugin `assistant-livebox` pour piloter la Livebox (pas besoin de `assistant-ifttt` ou `assistant-wait`, ou autre....).  

Merci à [@ABOAT](https://github.com/ABOATDev) pour avoir testé le plugin, puisque je ne possède pas de Livebox !

## Sommaire

  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Utilisation](#utilisation)
  - [Commandes](#commandes)
  - [Exemple](#exemple)
  
## Installation

Si vous n'avez pas installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), alors il faut le faire, et sélectionner **livebox** comme plugin.

Si vous avez déjà installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), et que vous souhaitez ajouter ce plugin, alors :
  - Pour Windows, télécharger [`install_livebox.bat`](https://github-proxy.kodono.info/?q=https://raw.githubusercontent.com/Aymkdn/assistant-livebox/master/install_livebox.bat&download=install_livebox.bat) dans le répertoire `assistant-plugins`, puis l'exécuter en double-cliquant dessus.  
  - Pour Linux/MacOS, ouvrir une console dans le répertoire `assistant-plugins` et taper :  
  `npm install assistant-livebox@latest --save --loglevel error && npm run-script postinstall`

## Configuration

Éditer le fichier `configuration.json` du répertoire `assistant-plugins`.

Dans la section concernant le plugin `livebox`, on trouve le paramètre ci-dessous.

### Paramètre `ip_box`

Il s'agit de l'adresse IP de votre **décodeur Livebox**. Pour connaitre l'IP de votre décodeur il faut se rendre sur [http://livebox/](http://livebox/), puis cliquer sur le **décodeur**, et l'IP devrait s'afficher.

### Paramètre `autres_chaines`

Si vous souhaitez ajouter des chaines manuellement, vous pouvez le faire avec le paramètre `autres_chaines` dans le fichier de configuration.

Exemples:
```json
  "livebox":{
    "ip_box":"192.168.0.1",
    "autres_chaines":[
      {"canal":"1001","nom":"Ma Chaine 1"},
      {"canal":"1002","nom":"Ma Chaine 2"}
    ]
  }
```

## Utilisation

Il faut créer une applet IFTTT pour chaque commande vocale. On procède ainsi :

  1. Créer une nouvelle *applet* dans IFTTT : [https://ifttt.com/create](https://ifttt.com/create)  
  2. Cliquer sur **this** puis choisir **Google Assistant** (ou **Amazon Alexa** ou **Cortana**)  
  3. Choisir la carte **Say a simple phrase** (ou autre, selon votre cas)  
  4. Dans *« What do you want to say? »* mettre la phrase qui va déclencher l'action (par exemple **allume la Freebox**)  
  5. Remplir les autres champs de la carte  
  6. Maintenant, cliquer sur **that** puis choisir **Pushbullet**  
  7. Choisir la carte **Push a Note**  
  8. Dans le champs *« Title »*, mettre `Assistant`  
  9. Dans le champs *« Message »*, mettre `livebox_` suivi par la commande souhaitée (si plusieurs commandes, les séparer par une virgule). Par exemple, pour allume la Freebox on aura `livebox_on` (voir les commandes plus bas)  
  10. Enregistrer puis cliquer sur **Finish**  
  11. Dites : « OK Google » (ou le trigger de votre assistant) suivi de votre phrase spéciale du point 4)… Par exemple « OK Google, allume la Livebox » – à noter qu'il faut utiliser le mot-clé **"déclenche"** avec Alexa : « Alexa, déclenche allume la Livebox » (ou bien il faut créer une routine Alexa pour éviter le mot-clé "déclenche" : [consultez cet exemple complet](https://github.com/Aymkdn/assistant-freebox-cloud/wiki/Cr%C3%A9er-une-applet-IFTTT-pour-Alexa))  
  12. Votre assistant devrait s'exécuter

### Commandes

Dans l'étape 9) précédente, vous devez y indiquer une commande. Voici donc les commandes disponibles :

  - `up` : envoie la commande `up` (flèche haut)
  - `down` : envoie la commande `down` (flèche bas)
  - `left` : envoie la commande `left` (flèche gauche)
  - `right` : envoie la commande `right` (flèche droite)
  - `ok` : envoie la commande `OK`
  - `mute` : envoie la commande `mute` (sourdine)
  - `play` : envoie la commande `play` (met sur "play" si c'est sur "pause", ou met sur "pause" si c'est déjà en lecture)
  - `pause` : envoie la commande `pause` (met sur "pause" si c'est sur "play", ou met sur "play" si c'est déjà en pause)
  - `fwd` : envoie la commande `fwd` (avance rapide)
  - `rwd` : envoie la commande `rwd` (retour rapide)
  - `waitXXXX` : enclenche un timer de XXXX millisecondes
  - `on` : vérifie si le décodeur est allumé, sinon envoie `on` suivi d'un timer de 6 secondes (`wait6000`)
  - `off` : vérifie si le décodeur est éteint, sinon envoie `off`
  - `tv` : vérifie si le décodeur est déjà sur la TV, sinon l'allume (si éteint) et envoie la séquence `back`, `wait3000`
  - `menu` : envoie la séquence `menu`
  - `back` : envoie la commande `red`
  - `soundDown` : envoie la commande `vol_dec`
  - `soundUp` : envoie la commande `vol_inc`
  - `programUp` : envoie la commande `prgm_inc`
  - `programDown` : envoie la commande `prgm_dec`
  - `zappe sur ABC` : permet de zapper sur la chaine ABC (exemple : `livebox_zappe sur la 1` ou `livebox_zappe sur TF1`)
  - `vod` : permet d'accéder à la VOD (*non testé*)
  - `rec` : permet d'enregistrer (*non testé*)
  
### Exemple

Par exemple, pour zapper sur une chaine avec Google Assistant : on va créer une applet IFTTT de type **Say a phrase with a text ingredient**. Ensuite, on enverra la commande : `livebox_zappe sur $` (avec `$` qui est le text ingrédient).
