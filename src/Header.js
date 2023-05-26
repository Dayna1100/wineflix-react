import './Header.css';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <header className="hero">
            <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />

            <div className="hero-content">
                <h2>
                    <img alt="Rex Goliath" src="/rex-goliath-logo.png" />
                </h2>
                <h3>His Royal Majesty is back.</h3>
                <p>
                    America's most unhinged rooster is out of retirement, and this time? He's mad as hell.  Experience the unapologetic flavor burst of Rex Goliath.
                </p>
                <ul className="controls">
                    <li>
                        <button className="primary-action">
                            <FontAwesomeIcon icon={faPlay} />
                            <span>Drink</span>
                        </button>
                    </li>
                    <li>
                        <button className="secondary-action">
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <span>More Info</span>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;