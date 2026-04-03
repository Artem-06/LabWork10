# LR10 - Angular Web Project

A web application developed using Angular, TypeScript, and Bootstrap.

## 🚀 Overview

This project is a web application built with Angular. It includes a structured component-based architecture featuring a header, main content area, carousel, gallery, and footer.

## 🛠 Tech Stack

- **Framework**: [Angular](https://angular.io/) (v21.2.x)
- **Language**: [TypeScript](https://www.typescript.lang/) (v5.9.x)
- **Styling**: [Bootstrap](https://getbootstrap.com/) (v5.3.x) & Bootstrap Icons
- **Package Manager**: [npm](https://www.npmjs.com/) (v10.9.2)
- **Build Tool**: [Angular CLI](https://angular.io/cli)
- **Testing**: [Vitest](https://vitest.dev/) (v4.0.x) and [JSDOM](https://github.com/jsdom/jsdom)

## 📋 Requirements

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS)
- [npm](https://www.npmjs.com/) (v10.9.2 or later)

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd LR10
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🖥 Development & Running

- **Run development server**:
  ```bash
  npm start
  ```
  The application will be available at `http://localhost:4200/`.

- **Build for production**:
  ```bash
  npm run build
  ```
  The build artifacts will be stored in the `dist/` directory.

- **Watch mode (Development build)**:
  ```bash
  npm run watch
  ```

## 📜 Scripts

Available scripts in `package.json`:

- `npm run ng`: Execute Angular CLI commands.
- `npm start`: Runs `ng serve` (local development server).
- `npm run build`: Runs `ng build` (production build).
- `npm run watch`: Runs `ng build --watch` for continuous development builds.
- `npm test`: Runs `ng test` (unit tests).

## 🧪 Testing

This project uses **Vitest** for unit testing.

To run tests:
```bash
npm test
```

## 📂 Project Structure

```text
LR10/
├── public/                 # Static assets
├── src/
│   ├── app/                # Application source code
│   │   ├── components/     # Angular components
│   │   │   ├── carousel/   # Carousel component
│   │   │   ├── footer/     # Footer component
│   │   │   ├── gallery/    # Gallery component
│   │   │   ├── header/     # Header component
│   │   │   └── main/       # Main content component
│   │   ├── app.config.ts   # App configuration
│   │   ├── app.routes.ts   # Routing definitions
│   │   ├── app.ts          # Main App component logic
│   │   └── app.html        # Main App component template
│   ├── main.ts             # Application entry point
│   ├── index.html          # Main HTML entry point
│   └── styles.css          # Global styles
├── angular.json            # Angular workspace configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── tsconfig.spec.json      # TypeScript configuration for testing
```

## 🌐 Environment Variables

Currently, there are no specific environment variables required for this project. 
<!-- TODO: Add environment variables if any are introduced (e.g., API URLs). -->

## 📄 License

TODO: Add license information (e.g., MIT, Apache 2.0).
