# assistant-template

Dans le fichier `template.js` on retrouve la structure minimale à utiliser pour créer un autre plugin.

## Configuration

Si vous avez besoin de configuration, elle doit être stockée dans le fichier `configuration.json`.

## Utilisation

Le plugin sera appelé quand le message `template_XXX` sera envoyé à Pushbullet (depuis IFTTT), avec `template` le nom du plugin, et `XXX` la commande envoyée au plugin en question.

## Faire Valider

Une fois que tout est prêt, vous pouvez demander à ajouter votre plugin sur [https://github.com/Aymkdn/assistant-plugins](https://github.com/Aymkdn/assistant-plugins). Je vérifierai que tout est bon et je l'ajouterai.

## Publication

Une fois votre plugin validé et prêt, vous pouvez le publier sur [https://www.npmjs.com/](https://www.npmjs.com/)
