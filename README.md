# 🎓Kami Sama School — React Web Application

A modern, responsive school website built with React, Vite, Tailwind CSS, and React Router. The application includes a home page, academics, admissions, gallery, contact information, and login functionality powered by a Spring Boot backend.

🌐 Live Website: https://kushgope.github.io/School/

## 📌Table of Contents
- Features
- Technology Stack
- Project Structure
- Demo Login Credentials
- Getting Started
- Environment Configuration
- Backend Integration
- GitHub Pages Deployment
- Troubleshooting
- Security Notes

## ✨Features
- **🏠 Home Page:** School introduction, hero section, and feature highlights.
- **📚 Academics:** Academic programs, subjects, classes, and teaching information.
- **📝 Admissions:** Structured admission form with reusable form components.
- **🖼️ Gallery:** Image gallery with filtering and lightbox functionality.
- **🔐 Login and Logout:** Authentication interface connected to a Spring Boot backend.
- **👤 Authentication Context:** Shared authentication state using React Context.
- **🧭 Navigation:** Client-side routing using React Router.
- **📱 Responsive Design:** Layouts designed for desktop and mobile devices.
- **🎨 Styling:** Tailwind CSS and custom CSS themes.
- **☁️ Deployment:** React frontend hosted on GitHub Pages and backend hosted on Render.

## 🛠️Technology Stack

| Technology        | Purpose                                 |
| :---------------- | :-------------------------------------- |
| React             | User interface                          |
| Vite              | Development server and production build |
| JavaScript (ES6+) | Application logic                       |
| Tailwind CSS      | Utility-first styling                   |
| React Router DOM  | Client-side navigation                  |
| React Context API | Shared authentication state             |
| Spring Boot       | Backend REST API                        |
| Spring Security   | Authentication and authorization        |
| GitHub Pages      | Frontend hosting                        |
| Render            | Backend hosting                         |

## 📂Project Structure

```text
School/
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── theme.css
│   │
│   ├── academics/
│   │   ├── Academics.jsx
│   │   ├── ClassCard.jsx
│   │   ├── ClassesSection.jsx
│   │   ├── Hero.jsx
│   │   ├── Intro.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SubjectsSection.jsx
│   │   └── TeachingSection.jsx
│   │
│   ├── admission/
│   │   ├── AdmissionForm.jsx
│   │   ├── FormField.jsx
│   │   └── FormSection.jsx
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   └── Icons.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── AuthProvider.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── data/
│   │   ├── academicData.js
│   │   ├── admissionFormData.js
│   │   ├── galleryData.jsx
│   │   └── SiteData.js
│   │
│   ├── Feature/
│   │   ├── FeatureCard.jsx
│   │   └── Features.jsx
│   │
│   ├── gallery/
│   │   ├── Gallery.jsx
│   │   ├── GalleryCard.jsx
│   │   ├── GalleryDescription.jsx
│   │   ├── GalleryFilters.jsx
│   │   ├── GalleryFooter.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── GalleryHero.jsx
│   │   └── GalleryLightbox.jsx
│   │
│   ├── landing/
│   │   ├── Hero.jsx
│   │   ├── HeroContent.jsx
│   │   ├── HeroIllustration.jsx
│   │   └── Home.jsx
│   │
│   ├── login/
│   │   ├── Login.jsx
│   │   └── Logout.jsx
│   │
│   └── utils/
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── Navbar.jsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🔑Demo Login Credentials

The Spring Boot backend currently defines in-memory demo accounts.

| Username / Email | Password |
| :--------------- | :------- |
| kami@school.com  | password |

Example login request:

```json
{
  "email": "kami@school.com",
  "password": "password"
}
```

Expected successful response:

```json
{
  "success": true,
  "message": "Login successful",
  "email": "kami@school.com"
}
```

These credentials are for demonstration and testing only. The users are configured in the backend's in-memory user store, so they are not persistent database accounts.

## 🚀Getting Started

### Prerequisites

Install the following software:
- Node.js — preferably an active LTS version.
- npm — included with Node.js.
- Git — for version control.
- A code editor such as Visual Studio Code.

Docker is not required to run or build this React frontend locally.

### Step 1: Clone the Repository
```bash
git clone https://github.com/kushgope/School.git
cd School
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure the Backend URL
Create a `.env` file in the project root:
```env
VITE_API_URL=https://login-3pvf.onrender.com
```
*Do not add `/School/` to this API URL. That path belongs to the frontend's GitHub Pages deployment, not the backend's base URL.*

### Step 4: Start the Development Server
```bash
npm run dev
```
Open the local URL displayed by Vite, usually: `http://localhost:5173/`

### Step 5: Test the Application
- Open the home page.
- Navigate through the Academics, Admission, Contact, and Gallery sections.
- Open the login page and sign in using one of the demo accounts.

### Step 6: Create a Production Build
```bash
npm run build
```
Vite generates the production files in the `dist/` directory. To preview locally: `npm run preview`.

## ⚙️Environment Configuration

### `.env.example`
```env
VITE_API_URL=https://login-3pvf.onrender.com
```

### `.gitignore`
```gitignore
node_modules/
dist/
.env
.env.local
.env.*.local
```

## 🔌Backend Integration

The React application communicates with a separate Spring Boot REST API hosted on Render.

- **Backend base URL:** `https://login-3pvf.onrender.com`
- **Relevant API endpoints:**
  - `GET /school/home` — Test backend connectivity
  - `POST /school/login` — Authenticate a demo user

### CORS Configuration
The Spring Security CORS configuration should include:
```java
config.setAllowedOrigins(List.of(
    "https://kushgope.github.io",
    "http://localhost:5173"
));

config.setAllowedMethods(List.of(
    "GET", "POST", "PUT", "PATCH",
    "DELETE", "OPTIONS"
));

config.setAllowedHeaders(List.of(
    "Authorization",
    "Content-Type"
));
```

## 🌐GitHub Pages Deployment

### Step 1: Configure Vite
In `vite.config.js`:
```js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/School/",
});
```

### Step 2: Configure React Router
In `main.jsx`:
```jsx
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/School">
    <App />
  </BrowserRouter>
);
```

### Step 3: Build and Publish
```bash
npm install
npm run build
```

## 🐛Troubleshooting

- **CORS error:** Verify backend headers and that CORS is enabled in Spring Security.
- **Backend connection failed:** Check browser Developer Tools under Network and Console.
- **404 Not Found:** Check endpoint path correctness.
- **GitHub Pages assets not loading:** Verify `base: "/School/"` is set in Vite configuration and redeploy.

## 👨‍💻Author
**Kush Gope**  
[linkedin.com/in/kushgope](https://www.linkedin.com/in/kushgope)
