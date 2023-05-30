import './Navbar.css';
import './App.css';

function PrimaryNav() {
   return (
   <section className="primary-navigation">
      <h1>WineFlix</h1>
      <ul className="navigation-links">
        <li className="active">
          <a href="https://developer.mozilla.org">Home</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org">Whites</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org">Reds</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org">Blends</a>
        </li>
      </ul>
    </section>
   )
}

export default PrimaryNav;

