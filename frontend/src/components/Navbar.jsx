import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Oppora</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/health">Health</Link>
      </div>
    </nav>
  );
}

export default Navbar;