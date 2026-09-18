# HoomanGPT

An AI-focused web application built with **React** and **Vite**, with a separate Python backend for AI processing and server-side functionality.

## 🚀 Overview

**HoomanGPT** is a full-stack AI application that combines a modern React frontend with a dedicated backend service.

The frontend provides the user interface and communicates with the backend through API requests.

The project is being developed as part of my work and learning in **Artificial Intelligence, Web Development, Backend Development, and Software Engineering**.

## 🏗️ Architecture

HoomanGPT is organized into two separate repositories:

```text
                    HoomanGPT
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
   React Frontend             Python Backend
   ───────────────             ──────────────
   React + Vite                AI Processing
   User Interface              API / Server
   Client-side Logic           PDF Processing
          │                         │
          └────────────┬────────────┘
                       │
                    API Requests
```

### Frontend

This repository contains the **React + Vite frontend**.

### Backend

The backend is maintained separately:

👉 **[HoomanGPT Backend](https://github.com/hoomanyyy/hoomangpt_backend)**

## ✨ Features

* Modern React-based interface
* Fast development with Vite
* Component-based frontend architecture
* API communication with the backend
* Designed for AI-powered interactions
* Responsive web application structure
* Separate frontend and backend architecture

## 🛠️ Tech Stack

### Frontend

* **React**
* **Vite**
* **JavaScript**
* **HTML5**
* **CSS**
* **npm**

### Backend

The backend is developed separately using Python and provides the server-side and AI-related functionality.

👉 **[View Backend Repository](https://github.com/hoomanyyy/hoomangpt_backend)**

## 📁 Project Structure

```text
hoomangpt/
├── public/          # Public assets
├── src/             # React source code
├── index.html       # HTML entry point
├── package.json     # Dependencies and scripts
├── package-lock.json
├── vite.config.js   # Vite configuration
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hoomanyyy/hoomangpt.git
cd hoomangpt
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

## 🔌 Backend Setup

To run the complete HoomanGPT application, you also need the backend repository.

Clone the backend:

```bash
git clone https://github.com/hoomanyyy/hoomangpt_backend.git
cd hoomangpt_backend
```

Follow the setup instructions in the backend repository:

👉 **[HoomanGPT Backend README](https://github.com/hoomanyyy/hoomangpt_backend)**

## 🔄 Frontend ↔ Backend

The application follows a separated client-server architecture.

```text
User
 │
 ▼
React Frontend
 │
 │ HTTP / API Requests
 ▼
Python Backend
 │
 ├── AI Processing
 ├── Application Logic
 ├── PDF Processing
 └── Database
```

This architecture allows the frontend and backend to be developed and deployed independently.

## 🎯 Project Goals

HoomanGPT is being developed to explore:

* Artificial Intelligence
* React development
* API integration
* Backend development
* Full-stack application architecture
* Document processing
* Software engineering
* Deployment and infrastructure

## 📌 Project Status

**In development**

The application is actively being improved, with new features and refinements planned for both the frontend and backend.

## 🔗 Project Repositories

| Component | Repository                                                          | Technology   |
| --------- | ------------------------------------------------------------------- | ------------ |
| Frontend  | [hoomangpt](https://github.com/hoomanyyy/hoomangpt)                 | React + Vite |
| Backend   | [hoomangpt_backend](https://github.com/hoomanyyy/hoomangpt_backend) | Python       |

## 👨‍💻 Author

**Hooman Khodadadi**

Self-taught software developer interested in **Artificial Intelligence, Web Development, Backend Systems, and Software Engineering**.

**GitHub:** [@hoomanyyy](https://github.com/hoomanyyy)

---

⭐ If you find the project interesting, feel free to explore both repositories.
