import "./navbar.css"
function Navbar({ logo, menu }) {
  return (
    <div className="navbar">
      <img src={logo} alt="logo-image"/>
      <img src={menu} alt="Menu-icon" />
    </div>
  );
}

export default Navbar;