import logo from "./gameverselogo.jpg";
import Cartwidget from "../cartwidget/cartwidget";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <ul className="lista">
        <li>Accion/Aventura</li>
        <li>Rts</li>
        <li>Shooter</li>
      </ul>
      <Cartwidget />
    </nav>
  )
}

export default NavBar;
