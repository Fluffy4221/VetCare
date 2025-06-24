import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="PetVet Care logo" />
        <div>
          <h1>PetVet Care</h1>
          <p>taking care of your pet</p>
        </div>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/clinics">Clinics</Link>
        {isLoggedIn ? (
          <Link to="/account">Account</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
