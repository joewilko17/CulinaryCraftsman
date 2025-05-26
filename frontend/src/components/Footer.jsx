import { Anvil } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Anvil className="logo-icon-small" />
              <span className="logo-text-small">CulinaryCraftsman</span>
            </div>

            <div className="footer-links">
              <a className="footer-link">
                About
              </a>
              <a  className="footer-link">
                Contact
              </a>
              <a  className="footer-link">
                Privacy
              </a>
              <a  className="footer-link">
                Terms
              </a>
            </div>

            <p className="copyright">© 2025 CulinaryCraftsman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;