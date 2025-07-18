import { useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// arrays
import AppleProducts from "./db/articoli";

// App function
function App() {
  const [AppleArray, setAppleArray] = useState(AppleProducts);
  const [newAppleArray, setnewAppleArray] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAppleArray([...AppleArray, newAppleArray]);
    setnewAppleArray("");
  }
  return (
    <>
      <div>
        <h1 className="text-center">Apple Products</h1>
      </div>
      <div className="container">
        <ul className="list-group">
          {AppleArray.map((product, index) => {
            return (
              <li key={index} className="list-group-item">
                {product}
              </li>
            );
          })}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              className="form-control mt-2"
              placeholder="Insert new product"
              type="text"
              value={newAppleArray}
              onChange={(event) => setnewAppleArray(event.target.value)}
            />
            <button type="submit" className="btn">
              <i className="bi bi-save2">Save</i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

// Export App component
export default App;
