import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Buttons ({label, handleClick, disabled}) {
   return (
        <ul className="controls">
            <li>
                <button onClick={handleClick} disabled={disabled} className="primary-action">
                    <FontAwesomeIcon icon={faPlay} />
                    {label=' Drink'}
                </button>
            </li>
            <li>
                <button  onClick={handleClick} disabled={disabled} className="secondary-action">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    {label=' More Info'}
                </button>
            </li>
        </ul>
    );
};

export default Buttons;