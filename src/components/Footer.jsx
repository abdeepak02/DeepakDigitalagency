import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo footer-logo">
            <span className="logo-mark">D</span>
            <span>Deepak <b>Digital</b></span>
          </Link>
          <p className="footer-copy">Helping businesses grow with smart digital marketing, creative branding and high-performing websites.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Services</h4>
          <span>Google Ads</span>
          <span>Meta Ads</span>
          <span>SEO</span>
          <span>Website Development</span>
        </div>
        <div>
          <h4>Contact</h4>
          <p><MapPin size={17}/> Boring Road, Patna, Bihar</p>
          <p><Phone size={17}/> <a href="tel:+919654942641">+91 96549 42641</a></p>
          <p><Mail size={17}/> hello@deepakdigitalagency.in</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Deepak Digital Agency. All rights reserved.</span>
        <Link to="/contact">Let's grow together <ArrowUpRight size={16}/></Link>
      </div>
    </footer>
  );
}