import '../styles/ServicesBox.scss';
import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBriefcase, faBus, faHandHoldingMedical, faHandshake, faHeart, faHome, faShoppingCart, faUserFriends, faUserMd, faUsers, faWrench, faUsersCog, faChalkboardTeacher, faFlagCheckered, faUserCheck } from '@fortawesome/free-solid-svg-icons';

interface ServicesBoxProps {
    icon?: string;
    text: ReactNode;  // Changed to ReactNode to allow JSX
    service: string;
    id?: string;
}

const iconMap: { [key: string]: any } = {
    'disability-care': faHandHoldingMedical,
    'briefcase': faBriefcase,
    'shopping-cart': faShoppingCart,
    'user-friends': faUserFriends,
    'bus': faBus,
    'home': faHome,
    'wrench': faWrench,
    'bed': faBed,
    'handshake': faHandshake,
    'heart': faHeart,
    'user-md': faUserMd,
    'users': faUsers,
    'users-cog': faUsersCog,
    'chalkboard-teacher': faChalkboardTeacher,
    'flag-checkered': faFlagCheckered,
    'user-check': faUserCheck
};

const ServicesBox: React.FC<ServicesBoxProps> = ({ icon, text, service, id }) => {
    const iconToShow = icon ? iconMap[icon] : null;

    return (
        <div className={`service-box-container`} id={id}>
            <div className="service-box-wrapper">
                {iconToShow && (
                    <div className="service-box-icon">
                        <FontAwesomeIcon className='service-icon' icon={iconToShow} />
                    </div>
                )}
                <h2>{service}</h2>
                <div className="service-box-text">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default ServicesBox;
