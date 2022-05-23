import './Navbar.scss';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = ({ titulo }) => {
  return (
    <header>
      <nav>
        <h1>{titulo}</h1>
        <ul className="navLinks">
          <li>
            <a href="#a">HOME</a>
          </li>
          <li>
            <a href="#a">CLOTHES</a>
          </li>
          <li>
            <a href="#a">ABOUT US</a>
          </li>
          <li>
            <a href="#a">CONTACT</a>
          </li>
        </ul>
      <CartWidget />
      </nav>
    </header>
  );
};
