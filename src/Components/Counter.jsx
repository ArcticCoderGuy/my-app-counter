// 1. Import useState hook from React to manage state
import { useState } from 'react';

// 2. Define the Counter component
function Counter() {
  // Initialize a state variable 'count' with initial value 0
  // setCount is the function used to update the state
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Display the current count value */}
      <h2>Count: {count}</h2>

      {/* Button to decrease the count by 1 */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {/* Button to increase the count by 1 */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

// 3. Export the Counter component so it can be used in other files
export default Counter;
