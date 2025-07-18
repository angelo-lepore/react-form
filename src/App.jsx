import { useState } from "react";

// Importa gli stili di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Importa l'array
import AppleProducts from "./db/articoli";

// Funzione principale dell'app
function App() {
  // Variabile che contiene la lista dei prodotti
  const [AppleArray, setAppleArray] = useState(AppleProducts);
  // Variabile che contiene il testo scritto dall'utente
  const [newAppleArray, setnewAppleArray] = useState("");

  // Funzione che gestisce l'invio del form
  function handleSubmit(e) {
    e.preventDefault();
    setAppleArray([...AppleArray, newAppleArray]);
    setnewAppleArray("");
  }

  // Funzione per eliminare un prodotto dall'elenco
  function handleDeleteClick(index) {
    AppleArray.splice(index, 1);
    setAppleArray([...AppleArray]);
  }

  return (
    <>
      <div>
        <h1 className="text-center">Apple Products</h1>
      </div>
      <div className="container">
        {/* Lista dei prodotti */}
        <ul className="list-group">
          {AppleArray.map((product, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {product}
                {/* Bottoni a destra per modificare o eliminare */}
                <div className="d-flex gap-2 ms-auto">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleDeleteClick(index)} // Al momento elimina anche lui
                  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleDeleteClick(index)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        {/* Form per aggiungere un nuovo prodotto */}
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

// Esporta il componente App
export default App;
