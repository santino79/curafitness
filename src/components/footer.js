import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
          <footer>
            <div className="footer-content">
              <div className="copyright-bar">© 2025 Cura Fitness Ltd.</div>
              <div className="bottom-links-menu">
                <ul>
                  <li><Link to="/terms-and-conditions/">Terms and Conditions</Link></li>
                  <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
                </ul>  
              </div>
            </div>
          </footer>
  )
}
