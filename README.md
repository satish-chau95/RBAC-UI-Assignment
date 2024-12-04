
# Role-Based Access Control App UI

A RBAC UI website built with **React** and **React Router**, allowing users to read, write, and manage texts.


## Live Demo

https://rbacuisatish.netlify.app/

## Features

- **Readers**: View content and explore the site.
- **Authors**:  Create, edit, and manage their own posts.
- **Authentication**: RBAC functionality implemented using React Context API.
- **Responsive Design**: Fully responsive design using TailwindCSS.

---

## Technologies Used

- **Frontend**: React
- **Routing**: React Router
- **State Management**: React Context API
- **Styling**: TailwindCSS
- **Storage**: LocalStorage (Shifting to another DB Service soon)

---

## Directory Structure

```plaintext
src/
├── components/             # Reusable UI components
│   ├── Header.js           # Header component with navigation
│   └── Footer.js           # Footer component with links
├── pages/                  # Page components for different views
│   ├── About.js            # About the application page
│   ├── Dashboard.js        # User dashboard (accessible based on roles)
│   ├── Home.js             # Home/Landing page
│   ├── Login.js            # User login page
│   └── Signup.js           # User signup page
├── App.js                  # Main application entry point
└── index.css               # Global styles and TailwindCSS setup

```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v16 or higher
- **npm**: v8 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the vite development server:
   ```bash
   npm start
   ```


make like this for my project
