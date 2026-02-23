# 🎓 FRI Capsule

[![SvelteKit](https://img.shields.io/badge/SvelteKit-f22f46?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev)
[![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Anime.js](https://img.shields.io/badge/Anime.js-fbc02d?style=for-the-badge&logo=javascript&logoColor=black)](https://animejs.com/)

**FRI Capsule** is a modern, interactive web application designed for students to master academic subjects through digitized learning capsules and interactive testing. Built with speed and fluidity in mind, it provides a seamless experience for preparing for exams in subjects like Algorithms, Economics, and Information Systems.

---

## ✨ Features

- **🎯 Subject Selection:** Navigation through various academic modules including Graph Theory, Economics, and Law.
- **🧪 Interactive Tester:** Real-time testing environment with instant feedback on answers.
- **✨ Smooth Animations:** Powered by **Anime.js** for a tactile and engaging user interface.
- **📱 Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing using **Tailwind CSS**.
- **🔥 Serverless Backend:** Integrated with **Firebase Firestore** for real-time data and **Cloud Functions** for SSR.

---

## 📚 Included Subjects

Current modules supported in the capsule:

- **Princípy IKS** (`piks`) - Information and Communication Systems principles.
- **Ekonomické a právne aspekty podnikania** (`eapap`) - Business Law & Economics.
- **Základy ekonomickej teórie** (`zet`) - Foundations of Economic Theory.
- **Algoritmická teória grafov** (`atg`) - Algorithmic Graph Theory.

---

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev) (v1.5.0)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Database:** [Firebase Firestore](https://firebase.google.com/products/firestore)
- **Hosting:** [Firebase Hosting](https://firebase.google.com/products/hosting)
- **Adapter:** [Svelte-adapter-firebase](https://github.com/jthegedus/svelte-adapter-firebase)
- **Animations:** [Anime.js](https://animejs.com/)

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/fri-capsule.git
cd fri-capsule
npm install
```

### 3. Setup Firebase

Create a `.env` file or update `src/firebase.js` with your Firebase configuration keys:

```javascript
// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ...
};

const app = initializeApp(firebaseConfig);
```

### 4. Development

Start the development server:

```bash
npm run dev
```

---

## 🏗️ Building and Deployment

The project is configured to be deployed to **Firebase** using a serverless adapter.

### Build the project:

```bash
npm run build
```

### Deploy to Firebase:

Make sure you have the [Firebase CLI](https://firebase.google.com/docs/cli) installed.

```bash
firebase deploy
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the tester or add new subjects, feel free to open a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git checkout -b feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

_This project is private and intended for academic use._
