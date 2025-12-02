# 📘 **Lendsqr**

The **Lendsqr Admin Dashboard** is an admin platform that allows lenders
to effectively reach and manage their customers. The dashboard includes
a user management system where admins can view all users, inspect the
details of a specific user.

---

## 🚀 **Features**

- 🔐 **Authentication**\
  Simple form-based authentication using Regex validation.

- 📊 **React Table Integration**\
  A powerful and searchable table UI that displays user data fetched
  from the API endpoint\
  `https://lendsqr-users.free.beeceptor.com/users`

- 💾 **Persistent User Details**\
  Selected user information persists on the **User Details** page
  using **Local Storage**.

- ⚛️ **Modern UI Structure**\
  Built with React 19, TypeScript, and SCSS for clean and scalable
  styling.

- 🧰 **Global State Management**\
  Managed using **Redux Toolkit**, ensuring predictable and
  maintainable state flow.

---

## 🛠️ **Tech Stack**

### **Frontend**

- **React 19.2.0**
- **TypeScript**
- **SCSS**
- **Redux Toolkit** (State Management)
- **React Table**

### **API**

- **Mock API**: `https://lendsqr-users.free.beeceptor.com/users`\
  Used for demo data to simulate real customer records.

---

## 📁 **Folder Structure**

    src/
     ├── assets/
     ├── components/
     │    ├── Header.tsx
     │    ├── Sidebar.tsx
     │    ├── Table.tsx
     │
     ├── features/
     │    |── SidebarSlice.ts
     │    ├── store.ts
     │
     ├── pages/
     │    ├── Login.tsx
     │    ├── Users.tsx
     │    └── GeneralDetails.tsx
     ├── styles/
     │    ├── abstracts/
     │    ├── base/
     │    ├── components/
     │    ├── pages/
     |    ├── fonts.scss
     │    └── main.scss
     │
     ├── App.tsx
     |── main.tsx
     ├── public/

---

## ⚙️ **Installation & Setup**

### 1️⃣ Clone Repository

```bash
git clone https://github.com/adetomiwa-esq/lendsqr-fe-test.git
cd lendsqr-fe-test
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

```

------------------------------------------------------------------------

## 🔧 **Environment Variables**

(API is public mock data.)



------------------------------------------------------------------------

## 👤 **Author**

**Akinola Kehinde (Adetomiwa-esq)**\
GitHub: https://github.com/Adetomiwa-esq
```
