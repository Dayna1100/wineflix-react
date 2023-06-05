import "./App.css";
import Navbar from './Navbar';
import Header from './Header';
import DrinkAgain from "./DrinkAgain";
import KeepDrinking from "./KeepDrinking";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (

  <div className="App">
    <Navbar />
    <Header />
    <main>
     <section className="category">
      <DrinkAgain />
      <KeepDrinking />
     </section>
    </main>
  </div>
  )
}

export default App
