# 🌐 DTO Partners Website

This is the official website for DTO Partners, a strategic advisory firm specializing in business transformation. Built using **Vite**, **React**, and **TailwindCSS**, the project is designed to be fast, lightweight, and easy to maintain.

---

## 🚀 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 TailwindCSS
- 📦 TypeScript

---

## 📁 Project Structure

```
dto-website/
├── public/             # Static files (favicon, meta)
├── src/
|-- |-- locals/         # Translation files for each language.
│   ├── assets/         # Images, icons, logos
│   ├── components/     # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/          # Page components (Home, About, Contact)
│   ├── theme/          # Tailwind color config or other UI constants
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind directives and global styles
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json        # Project metadata and dependencies
```

---

## 🛠️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-org/dto-website.git
cd dto-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

---

## 🔑 Environment Variables

To configure environment variables, create a `.env.development` file in the root directory. Example:

```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-api-key
```

Access these variables in your code using `import.meta.env`:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---