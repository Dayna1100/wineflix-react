import "./App.css";
import Navbar from './Navbar';
import Header from './Header';
import Category from "./Category";
//import KeepDrinking from "./KeepDrinking";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
const App = () => {
  
const wines = [{
  id: 1,
  imageUrl: '/red-wine.jpg',
  isNew: true,
  label: 'Wine',
  isFinished: true,
}, {
  id: 2,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 3,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isNew: true,
  isFinished: true,
}, {
  id: 4,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 5,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isNew: true,
  isFinished: true,
}, {
  id: 6,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 7,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 8,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 1,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 2,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 3,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 4,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 5,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 6,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 7,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 8,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}];


  const finishedWines = wines.filter(wine => wine.isFinished)
  const unfinishedWines = wines.filter(wine => !wine.isFinished)
  console.log(finishedWines, unfinishedWines)
  //window.wine = unfinishedWines[01]
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
      <Category title="Keep Drinking" wines={unfinishedWines}/>
     </main>
    </div>
  )
}

export default App
