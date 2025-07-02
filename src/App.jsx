// 1. Import the Counter component from the Components folder
import Counter from './Components/Counter.jsx';

// 1.1 Background image import
import bgImage from './assets/Taustakuva.png';

// 2. Define the App component
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem',
        color: 'white'
      }}
    >
      {/* Main heading of the app */}
      <h1>Main Application Component</h1>

      {/* Render the Counter child component */}
      <Counter />
    </div>
  );
}

// 3. Export the App component so it can be used in main.jsx
export default App;
