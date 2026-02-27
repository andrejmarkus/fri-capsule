# 🎓 FRI Capsule

[![SvelteKit](https://img.shields.io/badge/SvelteKit-f22f46?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev)
[![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**FRI Capsule** is a modern, interactive web application designed for students to master academic subjects through digitized learning capsules and interactive testing. Built with speed and fluidity in mind, it provides a seamless experience for preparing for exams in various subjects.

---

## ✨ Features

- **🎯 Dynamic Subject Selection:** Fully dynamic navigation through various academic modules loaded directly from Firestore.
- **🧪 Interactive Tester:** Real-time testing environment with instant feedback, image support, and keyboard-friendly navigation.
- **🔐 CMS / Admin Dashboard:** Private control panel for managing subjects, themes, and questions without touching the code.
- **🔄 Adaptive Shuffling:** Intelligent shuffling of questions and answers on each reset for optimal learning.
- **📊 Progress Persistence:** State-based tracking that preserves your progress across sessions using LocalStorage.
- **📧 Reporting System:** Direct user feedback loop with automated email notifications powered by Firebase Cloud Functions.
- **📱 Responsive UI:** Fully mobile-first design built with **Tailwind CSS** and smooth **Svelte** transitions.
- **🔥 Serverless Infrastructure:** Integrated with **Firebase Firestore** and **Hosting** for maximum reliability and zero-maintenance.

---

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev) (v2.x) with [Static Adapter](https://kit.svelte.dev/docs/adapter-static)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Data Layer:** [FireORM](https://fireorm.js.org/) for type-safe, repository-based Firestore interactions
- **Database:** [Firebase Firestore](https://firebase.google.com/products/firestore)
- **Backend:** [Firebase Cloud Functions](https://firebase.google.com/products/functions) (Node.js 20+)
- **Storage:** [Firebase Storage](https://firebase.google.com/products/storage) for subject-related images
- **Language:** TypeScript 5+

---

## 📂 Project Structure

```text
├── build/                 # Static export directory
├── functions/             # Firebase Cloud Functions (v2) source code
├── src/
│   ├── components/        # Svelte UI components (Tester, Layout, Navigation)
│   ├── lib/
│   │   ├── db/            # Data layer: Models & FireORM Repositories
│   │   └── stores/        # Svelte Stores for global state (e.g., Progress)
│   └── routes/            # Application pages (Subject slugs, Admin, Reports)
├── static/                # Static assets (Favicons, Robots.txt)
└── firebase.json          # Deployment & Hosting configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and `pnpm` (highly recommended) installed.

### 2. Installation

```bash
pnpm install
```

### 3. Setup Firebase

Update `src/firebase.ts` with your Firebase project credentials. You'll need to enable **Firestore**, **Hosting**, and **Auth** in the Firebase Console.
For report e-mails, deploy the `submitReport` Cloud Function and set function params `EMAIL_USER` and `EMAIL_PASS`.

Configure reCAPTCHA for the report form:

- Frontend env (reCAPTCHA v3 site key): `VITE_RECAPTCHA_SITE_KEY`
- Cloud Function param (reCAPTCHA v3 secret): `RECAPTCHA_SECRET`
- Optional Cloud Function param: `RECAPTCHA_MIN_SCORE` (default `0.5`)

### 4. Local Development

```bash
pnpm dev
```

---

## 🏗️ Building and Deployment

The project is configured for **Static Site Generation (SSG)** to ensure blazing fast load times on Firebase Hosting.

### Build and Export:

```bash
pnpm build
```

### Deploy to Firebase:

```bash
# This will deploy Hosting, Firestore rules/indexes and Functions
firebase deploy
```

---

## 🔐 Content Management (Admin)

To manage the subjects and questions:

1. Navigate to `/admin/login` (Configure authorized domains in Firebase Auth).
2. Use the dashboard to create new subjects (e.g., `atg`, `piks`).
3. Within each subject, you can organize questions into **Themes** for granular study sections.
4. Firestore writes are restricted to users with Firebase Auth custom claim `admin: true`.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the tester or add new subjects, feel free to open a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⚖️ Disclaimer & Legal Notice

This project is an independent learning platform created by students for students to facilitate exam preparation.

- **Purpose**: The materials provided are intended solely for educational purposes and study support.
- **Content**: All content is community-contributed and is not an official document of any faculty or university.
- **Copyright**: If you own the copyright for any content and object to its publication, please use the **Report** form in the app. We respect copyrights and will promptly address your concerns.
