# GENTI - Rénovation Intérieure

Landing page professionnelle pour GENTI, entreprise spécialisée en rénovation intérieure complète en France.

## 🚀 Caractéristiques

- **Design moderne et responsive** avec TailwindCSS
- **Architecture React** avec Vite pour un développement rapide
- **Contenu optimisé pour la conversion** en français
- **Sections clés** :
  - Header avec navigation et CTA
  - Hero section avec message percutant
  - Section "Pourquoi nous choisir" avec 4 avantages
  - Services d'intérieur détaillés
  - Galerie Avant/Après
  - Formulaire de demande de devis
  - Footer complet avec informations de contact

## 🛠️ Stack Technique

- **React 18** - Framework UI
- **Vite** - Build tool et dev server
- **TailwindCSS** - Framework CSS utility-first
- **Lucide React** - Bibliothèque d'icônes

## 📦 Installation

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Ouvrir votre navigateur** :
   L'application sera disponible sur `http://localhost:5173`

## 🏗️ Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist`.

## 📁 Structure du projet

```
genti/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation et branding
│   │   ├── Hero.jsx            # Section hero principale
│   │   ├── WhyChooseUs.jsx     # Avantages et valeurs
│   │   ├── Services.jsx        # Services d'intérieur
│   │   ├── BeforeAfter.jsx     # Galerie avant/après
│   │   ├── QuoteForm.jsx       # Formulaire de devis
│   │   └── Footer.jsx          # Footer avec contact
│   ├── App.jsx                 # Composant principal
│   ├── main.jsx                # Point d'entrée
│   └── index.css               # Styles globaux
├── index.html                  # HTML principal
├── package.json                # Dépendances
├── tailwind.config.js          # Configuration Tailwind
└── vite.config.js              # Configuration Vite
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont configurées dans `tailwind.config.js` :
- **Primary** (bleu) : Pour les actions principales et accents
- **Accent** (jaune/or) : Pour les éléments de mise en valeur

### Contenu

Tous les textes en français sont situés dans les composants dans `src/components/`. Vous pouvez facilement modifier :
- Les titres et descriptions
- Les informations de contact
- Les services proposés
- Le formulaire de devis

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- **Mobile** (< 640px)
- **Tablette** (640px - 1024px)
- **Desktop** (> 1024px)

## ⚠️ Note importante

Les warnings CSS concernant `@tailwind` et `@apply` dans l'IDE sont normaux. Ils seront résolus une fois TailwindCSS correctement installé et le serveur de développement lancé.

## 🤝 Support

Pour toute question ou modification, n'hésitez pas à contacter l'équipe de développement.
