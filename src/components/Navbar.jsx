import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/testimonials", "Testimonials"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">D</span>
          <span>Deepak <b>Digital</b></span>
        </NavLink>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([path, label]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? "active" : ""}>
              {label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Free Consultation <ArrowUpRight size={17} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}