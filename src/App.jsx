import { useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// App function
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Pippo</h1>
      </div>
    </>
  );
}

// Export App component
export default App;
