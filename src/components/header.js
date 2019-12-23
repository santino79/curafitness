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
                <li className="dropdown">
                  <Link to="/what-we-do/" className="dropbtn">WHAT WE DO</Link>
                  <span className="nav-sub"><FaCaretDown /></span>
                  <ul className="dropdown-content">
                    <li><Link to="/bootcamp/">BOOTCAMP</Link></li>
                    <li><Link to="/unlimited-classes/">UNLIMITED CLASSES</Link></li>
                    <li><a href="https://elizabethhylands.com">PERSONAL TRAINING</a></li>
                    <li><Link to="/fitness-training-venue-hire/">VENUE HIRE</Link></li>
                  </ul>
                </li>
                <li><Link to="/timetable/">TIMETABLE</Link></li>
                <li><Link to="/contact/">CONTACT</Link></li>
                <li><a href="https://members.curafitness.com" target="_blank">LOG IN</a></li>
            </ul>
        </nav>  
        )
  }
  
};

export default Header;