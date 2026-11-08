# Babcock University - Student Hostels (Group 3)

A clean, modern React Native mobile application built with **Expo** and **Expo Router**, showcasing all student halls of residence across Babcock University, Ilishan-Remo, Ogun State.

Designed using Babcock's signature colors:
- **Navy Blue**: `#003366`
- **University Gold**: `#FFD700`
- **Font Family**: Outfit

---

## Important Notice for Collaborators & Setup

> **PLEASE READ BEFORE INSTALLING PACKAGES**
>
> **DO NOT** run manual individual package installations like:
> ```bash
> # STOP - DO NOT RUN THIS:
> npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
> ```
> All required dependencies, SDK versions, routing configurations, and fonts are already declared and locked in `package.json`. Manually installing individual packages one by one will cause peer dependency conflicts (especially with React 19) and configuration drift.

---

## Quick Start (Correct Setup Instructions)

Follow these steps once you clone this repository without `node_modules`:

### 1. Prerequisites
- **Node.js**: LTS version installed (v18, v20, or v22 recommended).
- **Mobile Device**: Install **Expo Go** from the Apple App Store (iOS) or Google Play Store (Android).

### 2. Clone the Repository
```bash
git clone https://github.com/Emix-Official/babcockuniversity.git
cd babcockuniversity
```

### 3. Install All Dependencies
Run this single command to install all dependencies from `package.json`:
```bash
npm install --legacy-peer-deps
```
*(Note: `--legacy-peer-deps` prevents peer resolution conflicts between React 19 and nested React Native libraries).*

### 4. Start the Development Server
```bash
npx expo start
```

### 5. Open on Your Phone
- **iOS**: Open your Camera app and scan the QR code displayed in the terminal / Metro bundler, then tap the prompt to open in **Expo Go**.
- **Android**: Open the **Expo Go** app and tap "Scan QR Code".
- **Reloading**: Press `r` in the terminal at any time to reload the app.

---

## Project Structure & Architecture

This project uses **Expo Router** file-based navigation:

```
babcockuniversity/
├── app/
│   ├── _layout.jsx                    # Root layout with Outfit fonts & Stack navigator
│   ├── index.jsx                      # Main screen with University crest & hall links
│   └── hostels/
│       ├── _layout.jsx                # Hostels sub-stack layout
│       ├── bethel-hall.jsx            # Bethel Hall screen
│       ├── crystal-hall.jsx           # Crystal Hall screen
│       ├── diamond-hall.jsx           # Diamond Hall screen
│       ├── felicia-adebisi-dada-hall.jsx # Felicia Adebisi Dada Hall screen
│       ├── gideon-troopers.jsx        # Gideon Troopers screen
│       ├── neal-wilson-hall.jsx       # Neal Wilson Hall screen
│       ├── nelson-mandela.jsx         # Nelson Mandela Hall screen
│       ├── nyberg-hall.jsx            # Nyberg Hall screen
│       ├── ogden-hall.jsx             # Ogden Hall screen
│       ├── platinum-hall.jsx          # Platinum Hall screen
│       ├── queen-esther-hall.jsx      # Queen Esther Hall screen
│       ├── samuel-akande-hall.jsx     # Samuel Akande Hall screen
│       ├── sapphire-hall.jsx          # Sapphire Hall screen
│       ├── topaz-hall.jsx             # Topaz Hall screen
│       ├── welch-hall.jsx             # Welch Hall screen
│       ├── white-hall.jsx             # White Hall screen
│       └── winslow-hall.jsx           # Winslow Hall screen
├── assets/
│   ├── icon.png                       # App icon
│   └── hostels/
│       └── crest.png                  # University crest placeholder
├── app.json                           # Expo app config (scheme: babcockuniversity)
├── package.json                       # Entry point ("main": "expo-router/entry")
└── README.md
```

---

## How to Add Real Photos for Each Hall

1. Download or capture the picture for the hall.
2. Save it inside `assets/hostels/` matching the name (e.g. `assets/hostels/winslow-hall.png`).
3. Open the corresponding file in `app/hostels/` (e.g. `winslow-hall.jsx`).
4. Uncomment the `require` statement and the Image component:
   ```jsx
   const hostelImage = require("../../assets/hostels/winslow-hall.png");
   ```
   and switch the placeholder view to render `<Image source={hostelImage} style={styles.image} resizeMode="cover" />`.

---

## Configuration Details

- **Entry point in `package.json`**: `"main": "expo-router/entry"`
- **App scheme in `app.json`**: `"scheme": "babcockuniversity"`
- **Plugins in `app.json`**: `["expo-router", "expo-status-bar"]`

---

## Common Troubleshooting

- **macOS Git / CLI `missing DEVELOPER_DIR` error**:
  If your terminal displays `missing DEVELOPER_DIR path: /Applications/Xcode.app/Contents/Developer`, run:
  ```bash
  sudo xcode-select --switch /Library/Developer/CommandLineTools
  # or prefix git commands with:
  DEVELOPER_DIR=/Library/Developer/CommandLineTools git <command>
  ```
- **Port already in use**:
  If port 8081 is busy, press `Y` when Expo asks to use port 8082, or kill the background process with `npx kill-port 8081`.
