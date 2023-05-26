import React, { useState } from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import Quote from "./Quote";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import getRandomQuote from "./quoteAPI";

/** Site application.
 *
 * App -> TodoApp
 **/

function App() {
  const [quote, setQuote] = useState("");
  const [quoteIsShowing, setQuoteIsShowing] = useState(false);

  async function handleQuoteButtonClick() {
    const quote = await getRandomQuote();
    setQuote(quote);
    setQuoteIsShowing(true);
  }
  return (
    <main className="App">
      <header className="container-fluid pt-4 pb-1">
        <div className="row">
          <div className="col">
            <div className="container">
              <h1>Prøductïv</h1>
              <p className="lead">The best name in todo list management.</p>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-end align-items-end">
            <div className="QuoteContainer">
              {quoteIsShowing && <Quote quote={quote} />}
              <button
                className="btn btn-sm btn-secondary"
                onClick={handleQuoteButtonClick}
              >
                Click here for an inspirational quote!
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="container mt-4">
        <TodoApp
          initialTodos={[
            {
              id: 1,
              title: "Code!",
              description: "Write some code",
              priority: 2,
            },
            {
              id: 2,
              title: "Make dinner",
              description: "Cook something healthy",
              priority: 1,
            },
            {
              id: 3,
              title: "Go to bed",
              description: "In bed by 11:15",
              priority: 3,
            },
          ]}
        />

        <Footer />
      </section>
    </main>
  );
}

export default App;
