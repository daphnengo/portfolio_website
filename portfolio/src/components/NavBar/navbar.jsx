import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className ="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About Me</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Skills</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contact} alt="Contact" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    );
};

export default Navbar;
