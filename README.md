# assistant-livebox

Ce plugin de [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/) permet de contrôler la Livebox d'Orange.

> Consulter [le changelog](https://github.com/Aymkdn/assistant-livebox/blob/master/changelog.md) pour connaitre les dernières mises à jour.

**ATTENTION** : vous n'avez besoin **QUE** du plugin `assistant-livebox` pour piloter la Livebox (pas besoin de `assistant-ifttt` ou `assistant-wait`, ou autre....).  

Merci à [@ABOAT](https://github.com/ABOATDev) pour avoir testé le plugin, puisque je ne possède pas de Livebox !

## Sommaire

  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Utilisation](#utilisation)
  - [Personnalisation](#personnalisation)
  - [Commandes](#commandes)
  
## Installation

Si vous n'avez pas installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), alors il faut le faire, et sélectionner **livebox** comme plugin.

Si vous avez déjà installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), et que vous souhaitez ajouter ce plugin, alors :
  - Pour Windows, télécharger [`install_livebox.bat`](https://github-proxy.kodono.info/?q=https://raw.githubusercontent.com/Aymkdn/assistant-livebox/master/install_livebox.bat&download=install_livebox.bat) dans le répertoire `assistant-plugins`, puis l'exécuter en double-cliquant dessus.  
  - Pour Linux/MacOS, ouvrir une console dans le répertoire `assistant-plugins` et taper :  
  `npm install assistant-livebox@latest --save --loglevel error && npm run-script postinstall`

## Configuration

Éditer le fichier `configuration.json` du répertoire `assistant-plugins`.

Dans la section concernant le plugin `livebox`, on trouve plusieurs paramètres.

### Paramètre `ip_box`

Il s'agit de l'adresse IP de votre décodeur Livebox. Si la configuration de la Livebox n'a pas été modifiée, l'IP par défaut devrait être la bonne. Sinon il est possible de retrouver l'IP du décodeur en se rendant sur [http://livebox/](http://livebox/), puis cliquer sur le **décodeur**, et l'IP devrait s'afficher.


## Utilisation

J'ai créé des applets IFTTT pour vous faciliter la tâche.

Voici les phrases clés à dire — s'assurer d'avoir installé les applets associées (pour *Alexa* il faudra dire `Alexa déclenche` suivi de la phrasé-clé) :
  - `allume la livebox` : allume **seulement** la livebox  
    - Applet pour **Google Home** : [https://ifttt.com/applets/zXEgyuJZ-allume-la-livebox-avec-google-home](https://ifttt.com/applets/zXEgyuJZ-allume-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/FGJwvnBj-allume-la-livebox-avec-cortana](https://ifttt.com/applets/FGJwvnBj-allume-la-livebox-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/NF5ARJfx-allume-la-livebox-avec-alexa](https://ifttt.com/applets/NF5ARJfx-allume-la-livebox-avec-alexa)
  - `allume la télé` : allume la livebox **ET** va mettre une chaine télé
    - Applet pour **Google Home** : [https://ifttt.com/applets/bkVTxw7F-allume-la-tele-via-la-livebox-avec-google-home](https://ifttt.com/applets/bkVTxw7F-allume-la-tele-via-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/ssHvzJe7-allume-la-tele-via-la-livebox-avec-cortana](https://ifttt.com/applets/ssHvzJe7-allume-la-tele-via-la-livebox-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/XgB34kRD-allume-la-tele-via-la-livebox-avec-alexa](https://ifttt.com/applets/XgB34kRD-allume-la-tele-via-la-livebox-avec-alexa)
  - `allume la télé et zappe sur ...` : allume la livebox (si elle n'est pas allumée) puis va mettre la chaine de télé demandée   
    Exemples :  
    *OK Google, allume la télé et zappe sur M6*  
    *OK Google, allume la télé et zappe sur la 6*  
    - Applet pour **Google Home** : [https://ifttt.com/applets/qe296b8Y-allume-la-tele-via-la-livebox-et-zappe-sur-une-chaine-avec-google-home](https://ifttt.com/applets/qe296b8Y-allume-la-tele-via-la-livebox-et-zappe-sur-une-chaine-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/TFLVCX3x-allume-la-tele-via-la-livebox-et-zappe-sur-une-chaine-avec-cortana](https://ifttt.com/applets/TFLVCX3x-allume-la-tele-via-la-livebox-et-zappe-sur-une-chaine-avec-cortana)
    - Applet pour **Alexa** : *non disponible*
  - `éteins la livebox` : pour éteindre la livebox
    - Applet pour **Google Home** : [https://ifttt.com/applets/TaE7QPgp-eteins-la-livebox-avec-google-home](https://ifttt.com/applets/TaE7QPgp-eteins-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/tLgmPqHC-eteins-la-livebox-avec-cortana](https://ifttt.com/applets/tLgmPqHC-eteins-la-livebox-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/nytf5nC3-eteins-la-livebox-avec-alexa](https://ifttt.com/applets/nytf5nC3-eteins-la-livebox-avec-alexa)
  - `zappe sur ...` : zappe sur la chaine demandée, et fonctionne aussi avec le numéro de la chaine  
   Exemples :  
    *OK Google, zappe sur TMC*  
    *OK Google, zappe sur la 10*  
    - Applet pour **Google Home** : [https://ifttt.com/applets/Gkwdf5qX-zappe-sur-une-chaine-de-la-livebox-avec-google-home](https://ifttt.com/applets/Gkwdf5qX-zappe-sur-une-chaine-de-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/Ng9zaJCQ-zappe-sur-une-chaine-de-la-livebox-avec-cortana](https://ifttt.com/applets/Ng9zaJCQ-zappe-sur-une-chaine-de-la-livebox-avec-cortana)
    - Applet pour **Alexa** : *Alexa* est très limitée niveau personnalisation... Du coup il faut une applet par chaine ! Voici quelques applets déjà créées pour vous : [Zappe sur TF1](https://ifttt.com/applets/pRvZqkBg-zappe-sur-tf1-via-la-livebox-avec-alexa), [Zappe sur France 2](https://ifttt.com/applets/Dntr5NRg-zappe-sur-france-2-via-la-livebox-avec-alexa), [Zappe sur France 3](https://ifttt.com/applets/tJbDUT5c-zappe-sur-france-3-via-la-livebox-avec-alexa), [Zappe sur Canal+](https://ifttt.com/applets/bGeSQpaW-zappe-sur-canal-via-la-livebox-avec-alexa), [Zappe sur France 5](https://ifttt.com/applets/nWx6sSHR-zappe-sur-france-5-via-la-livebox-avec-alexa), [Zappe sur M6](https://ifttt.com/applets/SMwbTiz6-zappe-sur-m6-via-la-livebox-avec-alexa), [Zappe sur Arte](https://ifttt.com/applets/hhBUwJ3x-zappe-sur-arte-via-la-livebox-avec-alexa), [Zappe sur C8](https://ifttt.com/applets/c2dkegNL-zappe-sur-c8-via-la-livebox-avec-alexa), [Zappe sur W9](https://ifttt.com/applets/irYGEySi-zappe-sur-w9-via-la-livebox-avec-alexa), [Zappe sur TMC](https://ifttt.com/applets/Wygv8VLP-zappe-sur-tmc-via-la-livebox-avec-alexa), [Zappe sur TFX](https://ifttt.com/applets/kgDcuKWr-zappe-sur-tfx-via-la-livebox-avec-alexa), [Zappe sur NRJ12](https://ifttt.com/applets/rQfu5Ca6-zappe-sur-nrj12-via-la-livebox-avec-alexa), [Zappe sur LCP](https://ifttt.com/applets/FNyb8etf-zappe-sur-lcp-via-la-livebox-avec-alexa), [Zappe sur France 4](https://ifttt.com/applets/atkPsSVz-zappe-sur-france-4-via-la-livebox-avec-alexa), [Zappe sur BFM](https://ifttt.com/applets/MDg5B39L-zappe-sur-bfm-tv-via-la-livebox-avec-alexa), [Zappe sur Gulli](https://ifttt.com/applets/ZchPUyTJ-zappe-sur-gulli-via-la-livebox-avec-alexa)
  - `coupe le son de la livebox` 
    - Applet pour **Google Home** : [https://ifttt.com/applets/Zc2L69wm-coupe-le-son-de-la-livebox-avec-google-home](https://ifttt.com/applets/Zc2L69wm-coupe-le-son-de-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/tqUBLTxR-coupe-le-son-de-la-livebox-avec-cortana](https://ifttt.com/applets/tqUBLTxR-coupe-le-son-de-la-livebox-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/cNevq362-coupe-le-son-de-la-livebox-avec-alexa](https://ifttt.com/applets/cNevq362-coupe-le-son-de-la-livebox-avec-alexa)
  - `remets le son de la livebox` 
    - Applet pour **Google Home** : [https://ifttt.com/applets/qUct6bAs-remets-le-son-de-la-livebox-avec-google-home](https://ifttt.com/applets/qUct6bAs-remets-le-son-de-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/nU2pqZwJ-remets-le-son-de-la-livebox-avec-cortana](https://ifttt.com/applets/nU2pqZwJ-remets-le-son-de-la-livebox-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/hUbavGsB-remets-le-son-de-la-livebox-avec-alexa](https://ifttt.com/applets/hUbavGsB-remets-le-son-de-la-livebox-avec-alexa)
  - `baisse le son de la livebox` : va baisser le son de 3 barres
    - Applet pour **Google Home** : [https://ifttt.com/applets/VSAfav2p-baisse-le-son-de-la-livebox-avec-google-home](https://ifttt.com/applets/VSAfav2p-baisse-le-son-de-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/e7xAWTMt-baisse-le-son-de-la-livebox-avec-cortana](https://ifttt.com/applets/e7xAWTMt-baisse-le-son-de-la-livebox-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/Kqpmjx5S-baisse-le-son-de-la-livebox-avec-alexa](https://ifttt.com/applets/Kqpmjx5S-baisse-le-son-de-la-livebox-avec-alexa)
  - `monte le son de la livebox` : va augmenter le son de 3 barres
    - Applet pour **Google Home** : [https://ifttt.com/applets/v7MAerXS-augmente-le-son-de-la-livebox-avec-google-home](https://ifttt.com/applets/v7MAerXS-augmente-le-son-de-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/XxtNsW6E-augmente-le-son-de-la-livebox-avec-cortana](https://ifttt.com/applets/XxtNsW6E-augmente-le-son-de-la-livebox-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/keTCgsyp-augmente-le-son-de-la-livebox-avec-alexa](https://ifttt.com/applets/keTCgsyp-augmente-le-son-de-la-livebox-avec-alexa)
  - `mets la livebox sur pause` : met le programme en cours sur pause
    - Applet pour **Google Home** : [https://ifttt.com/applets/q8Lc5e6F-mets-la-livebox-sur-pause-avec-google-home](https://ifttt.com/applets/q8Lc5e6F-mets-la-livebox-sur-pause-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/HWMeqEBL-mets-la-livebox-sur-pause-avec-cortana](https://ifttt.com/applets/HWMeqEBL-mets-la-livebox-sur-pause-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/Gfb2Pgzr-mets-la-livebox-sur-pause-avec-alexa](https://ifttt.com/applets/Gfb2Pgzr-mets-la-livebox-sur-pause-avec-alexa)
  - `remets la livebox en lecture` : remet en lecture le programme en cours
    - Applet pour **Google Home** : [https://ifttt.com/applets/pqgLPWHN-remets-la-livebox-en-lecture-avec-google-home](https://ifttt.com/applets/pqgLPWHN-remets-la-livebox-en-lecture-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/Bpq6hL8K-remets-la-livebox-en-lecture-avec-cortana](https://ifttt.com/applets/Bpq6hL8K-remets-la-livebox-en-lecture-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/xFMtdnpB-remets-la-livebox-en-lecture-avec-alexa](https://ifttt.com/applets/xFMtdnpB-remets-la-livebox-en-lecture-avec-alexa)
  - `va dans le replay Livebox` : va dans le menu Replay de la Livebox
    - Applet pour **Google Home** : [https://ifttt.com/applets/uef42FEr-va-dans-le-replay-de-la-livebox-avec-google-home](https://ifttt.com/applets/uef42FEr-va-dans-le-replay-de-la-livebox-avec-google-home)
    - Applet pour **Cortana** : [https://ifttt.com/applets/KpCfdQJ9-va-dans-le-replay-de-la-livebox-avec-cortana](https://ifttt.com/applets/KpCfdQJ9-va-dans-le-replay-de-la-livebox-avec-cortana)
    - Applet pour **Alexa** : [https://ifttt.com/applets/pwPnM3RH-va-dans-le-replay-de-la-livebox-avec-alexa](https://ifttt.com/applets/pwPnM3RH-va-dans-le-replay-de-la-livebox-avec-alexa)

Une applet ne fonctionne pas ? [Merci de me prévenir](https://github.com/Aymkdn/assistant-plugins/issues) !

## Personnalisation

Il est également possible de créer ses propres applets et commandes pour piloter la livebox.

Il faut pour cela procéder ainsi :

  1. Créer une nouvelle *applet* dans IFTTT : [https://ifttt.com/create](https://ifttt.com/create)  
  2. Cliquer sur **this** puis choisir **Google Assistant** (ou **Cortana** ou **Amazon Alexa**)  
  3. Choisir la carte **Say a simple phrase** (ou autre, selon votre cas)  
  4. Dans *« What do you want to say? »* mettre la phrase qui va déclencher l'action  
  5. Remplir les autres champs de la carte  
  6. Maintenant, cliquer sur **that** puis choisir **Pushbullet**  
  7. Choisir la carte **Push a Note**  
  8. Dans le champs *« Title »*, mettre `Assistant`  
  9. Dans le champs *« Message »*, mettre `livebox_` suivi par la commande souhaitée (si plusieurs commandes, les séparer par une virgule) (voir plus bas)  
  10. Enregistrer puis cliquer sur **Finish**  
  11. Dites : « OK Google » (ou la phase qui déclenche votre assistant) suivi de votre phrase spéciale du point 4)  
  12. L'assitant va s'exécuter

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
