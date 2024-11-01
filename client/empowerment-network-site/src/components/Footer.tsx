import '../styles/Footer.scss';
import logo from '../assets/logo.png';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const [shouldScrollToContact, setShouldScrollToContact] = useState(false);

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
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="footer">
            <div className="grid-container">
                <div className="grid-item top-left">
                    <div className="logo-container">
                        {/*<img className='logo' src={logo} />*/}
                    </div>
                </div>
                <div className="grid-item two-rows">
                </div>
                <div className="grid-item divider"></div>
                <div className="grid-item third-fourth smaller-font footer-home"><a href="/">Home</a></div>
                <div className="grid-item fifth smaller-font facebook footer-facebook"><a href="" target="_blank">Facebook</a></div>
                <div className="grid-item footer-instagram instagram smaller-font"><a href="" target="_blank">Instagram</a></div>
                <div className="grid-item third-six footer-contact smaller-font">
                        <a onClick={handleContactClick}>Contact Us</a>
                </div>
                <div className="grid-item other footer-other smaller-font">
                    <Link to="faqs">FAQs</Link>   
                </div>
                <div className="grid-item support-workers footer-workers smaller-font">
                </div>
                <div className="grid-item seventh"></div>
                <div className="grid-item divider-row"></div>
                <div className="grid-item aligned-cell">0493 707 992</div>
                <div className="grid-item row-below">
                zetapeoplesolutions@gmail.com</div>
                <div className="grid-item scroll-up-cell">
                    <button className="no-underline footer-button" onClick={scrollToTop} data-tooltip="Scroll to top">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </button>
                </div>
                <div className="grid-item multi-span smaller-font">@2024 Empowerment Network. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;

