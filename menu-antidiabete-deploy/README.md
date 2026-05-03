# Menu Antidiabète

Une application web interactive pour planifier des repas à faible indice glycémique, construite avec Vanilla JS et Vite.

## 🚀 Déploiement sur GitHub

Ce dossier est déjà initialisé comme un dépôt Git. Pour le pousser sur votre compte GitHub, suivez ces étapes :

1. Allez sur [GitHub](https://github.com/) et connectez-vous.
2. Créez un nouveau dépôt (New Repository) et nommez-le `menu-antidiabete`. Ne cochez pas l'option "Initialize this repository with a README".
3. Ouvrez un terminal (ou l'invite de commande) dans le dossier de ce projet et exécutez les commandes suivantes en remplaçant `<VOTRE_NOM_UTILISATEUR>` par votre pseudo GitHub :

```bash
git remote add origin https://github.com/<VOTRE_NOM_UTILISATEUR>/menu-antidiabete.git
git branch -M main
git push -u origin main
```

## 🌐 Déploiement sur Hostinger

Vous avez deux méthodes pour déployer ce site sur Hostinger :

### Méthode 1 : Utiliser le Gestionnaire de Fichiers (Le plus simple)
Un fichier `menu-antidiabete-deploy.zip` a été généré pour vous. Il contient la version optimisée (le dossier `dist`) prête à être mise en ligne.
1. Connectez-vous à votre panneau de contrôle Hostinger (hPanel).
2. Allez dans **Gestionnaire de fichiers** (File Manager) pour votre nom de domaine.
3. Allez dans le dossier `public_html`.
4. Uploadez le fichier `menu-antidiabete-deploy.zip` généré.
5. Faites un clic droit sur le fichier zip et choisissez **Extraire**.
6. Assurez-vous que les fichiers (index.html, etc.) se trouvent directement à la racine de `public_html`. (Si un dossier `dist` a été créé, déplacez son contenu vers `public_html`).

### Méthode 2 : Déploiement automatique depuis GitHub (Recommandé pour les mises à jour)
Si vous prévoyez de faire beaucoup de modifications, vous pouvez lier GitHub à Hostinger.
1. Poussez votre code sur GitHub (voir étape ci-dessus).
2. Dans le hPanel de Hostinger, allez dans la section **Avancé** > **GIT**.
3. Liez votre dépôt GitHub (`<VOTRE_NOM_UTILISATEUR>/menu-antidiabete`).
4. Dans les paramètres de déploiement, configurez une commande de build (ex: `npm install && npm run build`) et indiquez `dist` comme dossier de publication si Hostinger le permet pour votre type d'hébergement.

## 🛠️ Développement Local

Pour continuer à travailler sur l'application sur votre ordinateur :

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Pour créer une version de production manuellement :
```bash
npm run build
```
