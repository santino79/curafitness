import React from 'react';
import { Link } from 'gatsby'
import { FaBars, FaCaretDown } from 'react-icons/fa';

class Header extends React.Component {

    state = { showMenu: false }

    toggleMenu = () => {
      this.setState({
        showMenu: !this.state.showMenu
      })
    }
    render () {
        
        const menuVis = this.state.showMenu ? 'active' : '';

        return(
        <nav className="navbar">
            <button className="navbar-toggle" id="js-navbar-toggle" onClick={this.toggleMenu}>
                <FaBars />
            </button>
            <Link to="/">
                <img className="logo" src="/images/cf-logo-300x80.png" height="50" alt="Cura Fitness" />
            </Link>
            <ul className={`main-nav ${menuVis}`} id="js-menu">
                <li><Link to="/about/">ABOUT</Link></li>
                <li><Link to="/success-stories/">SUCCESS STORIES</Link></li>
                <li><Link to="/what-we-do/">WHAT WE DO</Link></li>
                <li><Link to="/contact/">CONTACT</Link></li>
                
            </ul>
        </nav>  
        )
  }
  
};

export default Header;