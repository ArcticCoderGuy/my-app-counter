# 🧮 My App Counter

A simple React-based counter app created as a school assignment and portfolio project. This project demonstrates how to set up a modern React application using Vite.

---

## 🚀 Getting Started

These instructions will help you recreate the development environment on your local machine.

### 1. Project Setup

```bash
npm create vite@latest my-app-counter -- --template react


VITE v7.0.0  ready in 729 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose

Open your browser and go to http://localhost:5173/ to see the app running.

---

## 🚀 Getting Started

### 🔧 Installation

2. **Clone the repository to GitHub**
   ```bash
   git clone https://github.com/ArcticCoderGuy/my-app-counter.git
   cd my-app-counter

   
  3.  Hierarchical Pseudocode (FoxBox Framework style)
This pseudocode describes the current structure of the project built using the React module and my custom FoxBox Framework approach.

  3.1 main.jsx
🔹 Application entry point
🔸 Imports React and ReactDOM
🔸 Imports the main App component
🔸 Renders the App component into the HTML <div id="root"> element

BEGIN main.jsx

  IMPORT React & ReactDOM

  IMPORT App FROM './App.jsx'

  RENDER <App /> INTO HTML element with id="root"

END

3.2. App.jsx
🔹 Main application component
🔸 Displays a heading: "Counter App"
🔸 Imports and renders the child Counter component

BEGIN App.jsx

  IMPORT Counter FROM './Components/Counter.jsx'

  FUNCTION App

    RETURN:
      DIV {
        HEADER: "Counter App"
        COMPONENT: <Counter />
      }

  END FUNCTION

  EXPORT App AS DEFAULT

END

3.3 Counter.jsx
🔹 Child component for handling counter logic
🔸 Imports the useState hook from React
🔸 Initializes state variable count = 0
🔸 Adds two buttons:

Decrease (sets count - 1)

Increase (sets count + 1)
🔸 Displays the current counter value

BEGIN Counter.jsx

  IMPORT useState FROM 'react'

  FUNCTION Counter

    INITIALIZE count = 0 USING useState
    FUNCTION setCount UPDATES count

    RETURN:
      DIV {
        DISPLAY: "Count: <count>"
        BUTTON: "Decrease" ON CLICK => setCount(count - 1)
        BUTTON: "Increase" ON CLICK => setCount(count + 1)
      }

  END FUNCTION

  EXPORT Counter AS DEFAULT

END

 3.4 DOM

src/ 

├── main.jsx            // Initialize the app 

├── App.jsx             // app maincomponent 

└── Components/ 

    └── Counter.jsx     // This counter uses useState, but the DOM tree in VS Code shows the components in reverse order


# 🧮 React Counter App with useState Hook & Custom Background

This project is a simple yet educational React application that demonstrates:

- 🧠 The use of `useState` Hook for state management
- 🧩 Modular component structure with `App.jsx` and `Counter.jsx`
- 🌄 Custom background image integration using inline styles
- ✅ React 17+ conventions with `createRoot` from `react-dom/client`

---

## 📁 Project Structure

my-app-counter/
├── public/
│ └── Taustakuva.png # Background image
├── src/
│ ├── Components/
│ │ └── Counter.jsx # Functional component with state logic
│ ├── App.jsx # Main app component
│ ├── main.jsx # React entry point
│ └── index.css # Optional styles
├── package.json
└── README.md


---

## 🔧 How to Run

```bash
npm install     # Install dependencies
npm run dev     # Start the development server
