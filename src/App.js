import "./App.css";
import Navbar from './Navbar';
import Header from './Header';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (

  <div className="App">
    <Navbar />
    <Header />
    <main>
      <section className="category">
        <h2>Drink Again</h2>
        <ul>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
        </ul>
      </section>
      <section className="category">
        <h2>Keep Drinking</h2>
        <ul>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
  )
}

export default App
