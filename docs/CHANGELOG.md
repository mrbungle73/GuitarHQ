Voici un bon point de départ pour ton fichier **`docs/CHANGELOG.md`**.

````markdown
# 📋 Guitar HQ - Changelog

Toutes les modifications importantes du projet sont consignées ici.

---

# [1.0.0] - MVP Initial
Date : 2026-11-08

## ✅ Fonctionnalités

### Dashboard
- Page d'accueil Guitar HQ
- Navigation Jour 1 / Jour 2 / Jour 3
- Actions rapides

### Routine
- Blues & Technique
- The Cure / The Cult
- Doom & Création

### Mode Express
- Bouton "J'ai 20 minutes"
- Version condensée des trois journées

### Fretboard Focus
- Plan 12 semaines
- Priorité principale du programme

### Quiz
- Génération aléatoire de questions
- Focus manche

### Inspiration
- Bouton "Je ne sais pas quoi jouer"

### Progression
- Pourcentage de complétion
- Sauvegarde locale

### Riffs
- Bibliothèque de riffs
- Sauvegarde automatique

### Données
- guitars.json
- presets.json
- exercises.json

---

## 🎸 Parc de guitares

Ajout :

- Fender Jazzmaster American Performer
- Gibson Explorer
- Les Paul Vintage Eb
- Epiphone Jerry Cantrell D Standard
- Squier Telecaster HH C Standard
- Jackson LM-1987 B Standard

---

## 🎛️ Presets Spark

Ajout :

- Jazzmaster Study
- Blues King
- Cult Crunch
- Sanctuary
- Cure Atmosphere
- Cure Forest
- Cantrell Dirt
- Monolord
- Doom Cathedral
- Funeral Wizard
- Daily Driver

---

## 🎯 Objectifs 12 semaines

Ajout :

- Improvisation blues
- Maîtrise du manche
- A Forest
- Just Like Heaven
- She Sells Sanctuary
- Création de 12 riffs

---

# [1.1.0] - À venir

## Prévu

### Statistiques

- Nombre total de séances
- Temps total joué
- Progression hebdomadaire

### Tableau de bord

- Carte de progression
- Dernière séance effectuée
- Recommandation automatique

### Manche

- Quiz plus avancés
- Historique des résultats

---

# [1.2.0] - À venir

## Prévu

### Minuteries

- 5 min
- 10 min
- 15 min
- 20 min
- 45 min

### Notifications

- Fin d'exercice
- Fin de séance

---

# [1.3.0] - À venir

## Prévu

### Riffs

- Titre
- Accordage
- Niveau
- Catégorie

### Journal

- Notes quotidiennes
- Difficultés rencontrées
- Idées de composition

---

# [1.4.0] - À venir

## Prévu

### Morceaux

Suivi détaillé :

- A Forest
- Just Like Heaven
- She Sells Sanctuary
- Rain

Statuts :

- À apprendre
- En cours
- Solide
- Maîtrisé

---

# [2.0.0] - Phase Lampes

## Déblocage

Après les 12 semaines.

### Nouveaux modules

- Amplis à lampes
- Pedalboard
- Bibliothèque de sons

### Comparaison

- Spark vs Lampes
- Presets Spark vs pédales

### Gestion du rig

- Chaînes d'effets
- Presets personnels
- Sons favoris

---

# [3.0.0] - Compositeur

## Vision long terme

### Composition

- Bibliothèque de riffs
- Morceaux originaux
- Organisation des idées

### Enregistrement

- Démos
- Notes de production
- Versions des compositions

---

# Philosophie du projet

Le projet privilégie :

✅ La régularité

✅ Le plaisir de jouer

✅ La connaissance du manche

✅ La création musicale

Avant :

❌ L'achat de matériel

❌ La recherche infinie du son parfait

❌ La pratique sans objectif

---

Fin du document.
````

💡 Petit conseil : lorsque tu feras évoluer Guitar HQ, ajoute une entrée de changelog à chaque modification importante. Dans 6 mois, tu seras très content de pouvoir voir exactement quand tu as ajouté les minuteries, le suivi des riffs ou la phase « amplis à lampes ». C'est une habitude de développeur qui fonctionne aussi très bien pour les projets personnels. 🎸🤘



Excellente idée. Je mettrais cette checklist directement à la fin du `CHANGELOG.md` pour qu'elle serve à la fois de roadmap et de suivi du développement.

Ajoute la section suivante :

````markdown
---

# ✅ Checklist de développement

## Version 1.0 MVP

### Infrastructure

- [x] Structure du projet
- [x] index.html
- [x] style.css
- [x] app.js
- [x] guitars.json
- [x] presets.json
- [x] exercises.json

### Dashboard

- [x] Jour 1
- [x] Jour 2
- [x] Jour 3
- [x] Mode 20 minutes
- [x] Bouton inspiration

### Sauvegarde

- [x] Sauvegarde des cases à cocher
- [x] Sauvegarde des riffs
- [x] LocalStorage

### Données

- [x] Chargement des guitares
- [x] Chargement des presets
- [x] Chargement des exercices

### Fretboard Focus

- [x] Programme 12 semaines
- [x] Quiz du jour

---

# Version 1.1

## Progression

- [ ] Barre de progression visuelle
- [ ] Nombre total de séances
- [ ] Nombre de séances cette semaine
- [ ] Dernière séance complétée

## Dashboard intelligent

- [ ] Recommandation automatique du jour
- [ ] Affichage du prochain objectif
- [ ] Affichage des points faibles

## Morceaux

- [ ] Statut :
  - [ ] À apprendre
  - [ ] En cours
  - [ ] Solide
  - [ ] Maîtrisé

---

# Version 1.2

## Minuteries

- [ ] Minuterie 5 minutes
- [ ] Minuterie 10 minutes
- [ ] Minuterie 15 minutes
- [ ] Minuterie 20 minutes
- [ ] Minuterie 45 minutes

## Séances guidées

- [ ] Début automatique
- [ ] Passage automatique à l'exercice suivant
- [ ] Signal sonore

---

# Version 1.3

## Fretboard Mastery

- [ ] Quiz adaptatif
- [ ] Score de réussite
- [ ] Historique des résultats
- [ ] Révision espacée

## Intervalles

- [ ] Octaves
- [ ] Quintes
- [ ] Tierces
- [ ] Quatrièmes
- [ ] Sixièmes

---

# Version 1.4

## Bibliothèque de riffs

- [ ] Titre
- [ ] Accordage
- [ ] Style
- [ ] Niveau

## Recherche

- [ ] Filtrer par accordage
- [ ] Filtrer par style
- [ ] Filtrer par date

---

# Version 1.5

## Journal de pratique

- [ ] Notes quotidiennes
- [ ] Humeur
- [ ] Difficultés
- [ ] Victoires

## Historique

- [ ] Calendrier des séances
- [ ] Streak de pratique
- [ ] Temps total joué

---

# Version 2.0

## Phase Lampes

Déblocage après les 12 semaines.

### Amplis

- [ ] Gestion Ampli 1
- [ ] Gestion Ampli 2

### Pedalboard

- [ ] Bibliothèque de pédales
- [ ] Chaînes d'effets
- [ ] Sons favoris

### Comparaison

- [ ] Spark vs Lampes
- [ ] Presets favoris

---

# Version 3.0

## Compositeur

### Projets

- [ ] Morceaux originaux
- [ ] Sections
- [ ] Riffs liés

### Enregistrement

- [ ] Liens vers démos
- [ ] Versions
- [ ] Notes de production

---

# Idées futures

## Intégration Spark

- [ ] Associer un preset à chaque séance
- [ ] Preset recommandé du jour

## Guitares

- [ ] Sélection automatique selon la séance
- [ ] Rotation intelligente des guitares

## Doom Mode

- [ ] Générateur de riffs
- [ ] Générateur d'accordages
- [ ] Générateur d'idées de composition

## The Cure Mode

- [ ] Arpège du jour
- [ ] Travail des textures

## Blues Mode

- [ ] Call & Response
- [ ] Notes cibles
- [ ] Phrases blues

---

# Dette technique

- [ ] Refactoriser app.js
- [ ] Centraliser les données
- [ ] Ajouter gestion d'erreurs
- [ ] Ajouter mode hors ligne complet
- [ ] Ajouter export/import sauvegarde

---

# Critère de succès

Le projet est considéré réussi lorsque :

- [ ] 30 séances complétées
- [ ] 12 riffs enregistrés
- [ ] Notes naturelles maîtrisées
- [ ] Cordes E et A maîtrisées
- [ ] A Forest consolidé
- [ ] She Sells Sanctuary jouable
- [ ] Impro blues 5 minutes
- [ ] Déblocage Lampes & Pedalboard
````

Ce que j'aime de cette checklist, c'est qu'elle suit exactement ton parcours de guitariste : d'abord **jouer régulièrement**, ensuite **maîtriser le manche**, puis seulement après **revenir aux amplis à lampes et au tone chasing**. C'est probablement l'ordre qui te donnera le plus de progrès réels dans les prochains mois. 🎸🤘🧠
