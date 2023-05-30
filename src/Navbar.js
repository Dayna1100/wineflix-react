
import './Navbar.css';
import './App.css';
import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';

function Navbar() {
   return (
    <nav className="navigation">
    <PrimaryNav />
    <SecondaryNav />
    </nav>
   )
}

export default Navbar;

