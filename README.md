# K-Food Compass - Customized Korean Culinary Explorer

K-Food Compass is an interactive, responsive Progressive Web App (PWA) designed to help foreigners visiting South Korea find customized dining and cafe establishments matching their dietary needs (Vegan, Halal, Gluten-Free, Pescatarian) and culinary tastes (Mild Tastes, Fermentation, Zero-Waste). 

Built with a clean forest-green and white eco-theme, the app reveals the cultural, biological, and historical wisdom behind traditional Korean dishes and integrates directly with Naver Maps for real-world navigation.

## 🗺️ Key Features
- **PWA support**: Runs offline using service worker caching and is installable directly as a standalone app.
- **National Proximity Sorting**: Supports neighborhood hotspots in **Seoul** (Insadong, Itaewon, Hongdae, Bukchon), **Busan** (Seomyeon), and **Jeonju** (Hanok Village). Listings automatically re-sort to show the closest matching establishments first.
- **Detailed Photo-Menus**: Displays dishes with Korean text, Romanised pronunciations, literal English translations, and KRW prices.
- **AI English Storytelling**: Reveals the philosophical harmony (e.g. *Cha-do*, *Yaksik-dongwon*) and health science of each culinary choice.
- **Naver Maps Integration**: One-click button to open Naver Maps and search for the chosen place for real-time walking and transit routing.

## 🛠️ Technology Stack
- **Frontend Core**: Vanilla HTML5, Vanilla CSS3 (Light Glassmorphism theme), Vanilla JS (ES6)
- **Mapping Library**: Leaflet.js
- **Map Tiles**: CartoDB Voyager Light Layer
- **App Wrapper**: PWA (Manifest.json & Service Worker sw.js)

## 🚀 Local Execution
To run the server locally, open your terminal in this directory and execute:
```bash
python -m http.server 8082
```
Then navigate to `http://localhost:8082`.

## 🌐 Deploy to Vercel
This project is structured as a static website, making it fully compatible with Vercel's zero-config deployment. Follow the steps in the Vercel guide to deploy in seconds!
