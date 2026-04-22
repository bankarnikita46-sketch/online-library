=# 📚 Online Library System

A complete **Online Library System** built with **React + Vite** and **Redux Toolkit**, fulfilling all requirements of the React Module 5 Assignment.

> ✅ This project is created using **Vite** (not Create React App).

## ✨ Features

### 1. Home Page
- Landing page with welcome message and hero section
- Book categories: Fiction, Non-Fiction, Sci-Fi
- Popular books displayed as cards with "View Details" link
- Navigation bar with Home / Browse Books / Add Book links

### 2. Browse Books Page
- Displays books filtered by category
- Dynamic routing: `/books/:category`
- Each book has a "View Details" link
- Search bar to filter books by **title** or **author**

### 3. Book Details Page
- Dynamic route: `/book/:id`
- Shows title, author, description, and rating
- "Back to Browse" button

### 4. Add Book Page
- Form with title, author, category, description, rating
- State managed via **Redux Toolkit**
- New book added at the **beginning** of the list
- Redirects to Browse Books page after submission
- Form validation (all fields required)

### 5. 404 Page
- Catches all undefined routes
- Displays the invalid URL path
- **Does NOT include the Navbar/Header**
- "Go to Home" link

### 6. Styling
- Built with **Tailwind CSS**
- Fully responsive, modern, professional UI
- Gradient hero section, animated cards, clean typography

## 📁 Folder Structure

```
online-library/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── BookCard.jsx
    │   └── Footer.jsx
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── BrowseBooks.jsx
    │   ├── BookDetails.jsx
    │   ├── AddBook.jsx
    │   └── NotFound.jsx
    ├── redux/
    │   ├── store.js
    │   └── booksSlice.js
    └── data/
        └── books.js
```

## 🚀 Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## 🛠 Tech Stack
- **React 18** with **Vite**
- **Redux Toolkit** + React Redux
- **React Router v6**
- **Tailwind CSS**
- **lucide-react** icons

## 📝 Notes
- All code includes meaningful comments for readability.
- `node_modules` is excluded from the zip (run `npm install` first).

update 1
