// Import specific React features using named imports
import { StrictMode } from 'react';           // Enables additional checks and warnings
import { createRoot } from 'react-dom/client'; // Replaces old ReactDOM.render in React 18+

// Import the main App component from a separate module
import App from './App.jsx';

// (Optional) Import global CSS styles, if you have any
import './index.css';

// Create the root of the React application and render the App component inside the HTML element with id="root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// This code bootstraps the entire React application and attaches it to the DOM.

// It's the entry point of the app, ensuring React components are displayed on the page.
