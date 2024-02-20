import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import contact from '../../assets/contact.png';
import menu from '../../assets/menu.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className ="desktopMenu">
                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    About Me
                </Link>
                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}                
                    className="desktopMenuListItem"
                >
                    Portfolio
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Skills
                </Link>
            </div>
            <button
                className="desktopMenuBtn"
                onClick={() => {
                    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
                }}
            >
                <img src={contact} alt="Contact" className="desktopMenuImg" />
                Contact Me
            </button>
            <img
                src={menu}
                alt="Menu"
                className="mobileMenu"
                onClick={() => setShowMenu(!showMenu)}
            />
            <div className ="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    About Me
                </Link>
                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}                
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Portfolio
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Skills
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
