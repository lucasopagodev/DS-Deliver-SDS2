import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

function Navbar() {
  return (
    <nav className="main-navbar">
        <Logo/>
        <Link to="home" className="logo-text">DS Delivery</Link>
    </nav>
  )
}

export default Navbar;