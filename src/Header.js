import './Header.css';
import './App.css';
import './Buttons';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Buttons from './Buttons';

function Header() {
    const heroContent = {
        title: 'Rex Goliath',
        subtitle: 'His Royal Majesty is back.',
        imageUrl: '/rex-goliath-logo.png',
        description: `America's most unhinged rooster is out of retirement, and this time? He's mad
        as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
      }
    return (
        <header className="hero">
            <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />

            <div className="hero-content">
                <h2><img src={heroContent.imageUrl} alt = {heroContent.title }/></h2>
                <h3>{heroContent.subtitle}</h3>
                <p>{heroContent.description}</p>
                <Buttons />

            </div>
        </header>
    )
}

export default Header;

//{/* // function Header () {  */}
// const Header = ({ heroContent }) => {
//   const { title, subtitle, imageUrl, description } = heroContent;

//   return (
//     <div className="hero-section">
//       <div className="hero-image">
//         <img src={imageUrl} alt={title} />
//       </div>
//       <div className="hero-content">
//         <h1>{title}</h1>
//         <h2>{subtitle}</h2>
//         <p>{description}</p>
//         <Buttons />
//       </div>
//     </div>
//     </Header>
//   );
// };

//export default Header;
