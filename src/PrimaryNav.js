import './Navbar.css';
import './App.css';

const PrimaryNav = () => {
  const links = [{
    url: "https://developer.mozilla.org",
    label: "Home",
}, {
  url: "https://developer.mozilla.org",
  label: "Whites",
}, {
  url: "https://developer.mozilla.org",
  label: "Reds",
}, {
  url: "https://developer.mozilla.org",
  label: "Blends",
}] 

   return (
   <section className="primary-navigation">
      <h1>WineFlix</h1>
      <ul className="navigation-links">
        {
          links.map(link => {
            return <li className={link.active ? "active" : ""}>
              <a href={link.url}>{link.label}</a>
            </li>
          })
        }
      </ul>
    </section>
   )
}

export default PrimaryNav;

