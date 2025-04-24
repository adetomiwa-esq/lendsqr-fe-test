# 📖 Overview

The Lendsqr Admin Dashboard is a mobile-responsive admin interface designed to mirror a typical workflow for administrative users. Built with React (v19.0), TypeScript, and SCSS, the application comprises four primary pages: Login, Dashboard, Users, and User Details.

## ⚙️ Technologies Used

- React 19 + TypeScript + vite

- SCSS for modular styling

- React Router for page routing

- React Icons for SVG icons

- TanStack Table – for advanced table logic

## 📦 Getting Started

### Prerequisites

- Node.js
- npm

## 🛠️ Installation

git clone https://github.com/adetomiwa-esq/lendsqr-fe-test.git
cd lendsqr-fe-test
npm install

## ▶️ Available Scripts

In the project directory, you can run:

npm run dev
Runs the app in development mode.
Open http://localhost:5173 to view it in the browser.

npm run build
Builds the app for production to the dist or build folder.

npm run lint
Runs ESLint.

## 📁 Folder Structure

src/
├── assets/ => ------- # Images, SVGs
├── components/ => ---------# Shared/reusable components (e.g. Navbar, Sidebar, table) and scss styles for each component
├── Layouts/ => ------- # Created common UI for consistent structures(e.g Sidebar, header)
├── SignIn/ => ------- # SignIn page component and scss style
├── UserData/ => ------- # User data page (This page shows all of a user's details) and scss style
├── Users/ => ------- #Displays a table showing all users and scss style
├── \_variables.scss => ------- # Global SCSS styles/variables
├── App.tsx => ------- #Exports route configuration from Router.tsx to main.tsx
├── index.scss => ------- # Universal styling
├── main.tsx => ------- # Vite entry point
└── Router.tsx => ------- # Main app structure with routing
