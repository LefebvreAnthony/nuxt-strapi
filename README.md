# Starter Pack STRAPI CMS + NUXT3

Ce projet repose sur deux applications distinctes mais connectées :

- `/api` : Strapi CMS (backend)
- `/web` : Nuxt 3 (frontend)

---

## 🧩 Prérequis

- Node.js ≥ 22.x
- Docker (facultatif mais recommandé pour la base de données et les volumes persistants)
- Variables d’environnement à configurer

---

## 🔧 Installation

### 1. Cloner le projet

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Lancer le backend (Strapi)

```bash
cd api
npm install
npm run dev
```

#### ⚠️ Configuration du rôle "Public" dans Strapi

Après le premier démarrage de Strapi, configure les permissions du rôle Public :

Aller dans l'admin Strapi : http://localhost:1337/admin

Créer un compte admin

Aller dans Settings > Roles > Public

Autoriser uniquement les actions READ (lecture) sur les collections/publications nécessaires

Cela permet au frontend de consommer les données publiques sans authentification.

### 3. Lancer le frontend (Nuxt 3)

```bash
cd web
npm install
npm run dev
```

#### 🔗 Configuration de l'URL Strapi

Dans le fichier .env du frontend (/web/.env), changer la variable suivante :

```env
NUXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

<!-- Liens -->

## 🔗 Liens utiles

- [Documentation Strapi](https://docs.strapi.io/cms/intro)
- [Documentation Nuxt 3](https://nuxt.com/docs)
- [Documentation SEO nuxt](https://nuxt.com/docs/getting-started/seo-meta)
