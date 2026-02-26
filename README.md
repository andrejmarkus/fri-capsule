# 🎓 FRI Capsule

[![SvelteKit](https://img.shields.io/badge/SvelteKit-f22f46?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev)
[![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**FRI Capsule** is a modern, interactive web application designed for students to master academic subjects through digitized learning capsules and interactive testing. Built with speed and fluidity in mind, it provides a seamless experience for preparing for exams in various subjects.

---

## ✨ Features

- **🎯 Subject Selection:** Navigation through various academic modules including Graph Theory, Economics, and Law.
- **🧪 Interactive Tester:** Real-time testing environment with instant feedback on answers.
- **🔄 Adaptive Shuffling:** Questions and answers are automatically shuffled upon each reset to ensure a fresh experience.
- **📊 Progress Tracking:** State-based tracking that saves your progress across sessions using LocalStorage.
- **📱 Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing using **Tailwind CSS**.
- **🔥 Serverless Backend:** Integrated with **Firebase Firestore** via a custom **FireORM/Repository Pattern** for type-safe data access.
- **📧 Automated Notifications:** **Cloud Functions** (v2) handle background tasks, such as sending emails for user reports.

---

## 📚 Included Subjects

Current modules supported in the capsule:

- **Princípy IKS** (`piks`) - Information and Communication Systems principles.
- **Ekonomické a právne aspekty podnikania** (`eapap`) - Business Law & Economics.
- **Základy ekonomickej teórie** (`zet`) - Foundations of Economic Theory.
- **Algoritmická teória grafov** (`atg`) - Algorithmic Graph Theory.

---

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev) (v2.x)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **ORM:** [FireORM](https://fireorm.js.org/) for type-safe database interactions
- **Database:** [Firebase Firestore](https://firebase.google.com/products/firestore)
- **Hosting:** [Firebase Hosting](https://firebase.google.com/products/hosting)
- **Functions:** [Firebase Cloud Functions](https://firebase.google.com/products/functions)
- **Language:** TypeScript

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and a package manager like `pnpm` (recommended) or `npm` installed.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/fri-capsule.git
cd fri-capsule
pnpm install
```

### 3. Setup Firebase

Create a `.env` file or update `src/firebase.ts` with your Firebase configuration keys:

```typescript
// src/firebase.ts
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
pnpm dev
```

---

## 🏗️ Architecture & Data Layer

The project uses a clean **Repository Pattern** powered by **FireORM** logic to interact with Firestore, providing a type-safe, ORM-based experience.

- **Models:** Defined in [src/lib/db/models.ts](src/lib/db/models.ts) using classes and interfaces.
- **Repository:** Centralized data access in [src/lib/db/repository.ts](src/lib/db/repository.ts) using `BaseRepository` abstractions.
- **Benefits:** No more manual Firestore parsing. Everything is automatically converted between documents and typed objects.

### CRUD Example:

```typescript
import { dbSubjects, dbReports } from "$lib/db/repository";
import { Report } from "$lib/db/models";

// Create a report
await dbReports.create(new Report({ name: "User", message: "Question fix" }));

// Fetch subject data (piks, zet, eapap, atg)
const subject = await dbSubjects.getBySlug("piks");
```

---

## 🏗️ Building and Deployment

The project is configured to be deployed as a static site to **Firebase Hosting**.

### Build the project:

```bash
pnpm build
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
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⚖️ Disclaimer & Legal Notice

This project is an independent learning platform created by students for students to facilitate exam preparation.

- **Purpose**: The materials provided are intended solely for educational purposes and study support.
- **Content**: All content in this application is the result of community effort and is not an official document of the faculty or university.
- **Copyright**: If you are the owner of the copyright for any part of the content and have objections to its publication, we kindly ask you to **contact us directly before taking any reporting action** via the in-app reporting form or email. We will gladly review your request and, if justified, promptly remove or modify the content.

---

## 📄 License

_This project is intended for personal educational use._
