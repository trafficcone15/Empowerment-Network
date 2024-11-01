import React, { useEffect, useState, useRef } from "react";
import '../styles/Navbar.scss';
//import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [shouldScrollToContact, setShouldScrollToContact] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (shouldScrollToContact) {
            scrollToContact();
            setShouldScrollToContact(false);
        }
    }, [shouldScrollToContact]);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-us-home-container');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    
    const navigate = useNavigate();

    const handleContactClick = () => {
        if (window.location.pathname !== "/") {
            const shouldScrollToTop = false;
            navigate('/', {state: { shouldScrollToTop }});
            setShouldScrollToContact(true);
        } else {
            scrollToContact();
            setIsActive(false);
        }
    };

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="App">
            <nav className={`navbar ${isActive ? "actve" : ""}`} ref={navbarRef}>
                <div className="logo-container">
                    {/*<img className='logo' src={logo} />*/}
                </div>

                <ul>
                    <li></li>
                    <li>
                        <a onClick={() => setIsActive(false)} href="/">Home</a>
                    </li>
                    <li>
                        <a onClick={handleContactClick}>Contact Us</a>
                    </li>
                    <li>
                        <Link to="faqs" onClick={() => setIsActive(false)}>FAQs</Link>
                    </li>
                    <li>
                    </li>
                    <li className="socials">
                        <a onClick={() => setIsActive(false)} href="" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                    </li>
                    <li className="socials">
                        <a onClick={() => setIsActive(false)} href="" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                    </li>
                    <li className="socials">
                        <a className="no-underline" data-tooltip="0493 707 992 zetapeoplesolutions@gmail.com"><FontAwesomeIcon className="icon" icon={faPhoneFlip} /></a>
                    </li>
                </ul>
                <div
                    id="hamburger"
                    onClick={toggleMenu}
                    className={`Hamb ${isActive ? "actve" : ""}`}
                >
                    <div className={`line1 line ${isActive ? "actve" : ""}`}></div>
                    <div className={`line2 line ${isActive ? "actve" : ""}`}></div>
                    <div className={`line3 line ${isActive ? "actve" : ""}`}></div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;