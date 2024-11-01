import React, { useState } from 'react';
import '../styles/CircleLayout.scss';

interface CircleLayoutProps {
    circles: { heading: string, text: string; }[]
}

const CircleLayout: React.FC<CircleLayoutProps> = ({ circles }) => {
    const [showImage, setShowImage] = useState(true); // Set to true initially to show the image
    const [selectedCircle, setSelectedCircle] = useState<number>(0); // Start with circle 1 as active

    const imageUrls = [
        'https://img.freepik.com/free-photo/young-black-man-wheelchair-enjoying-warm-summer-day-city-park-while-riding-along-park-road-smiling-african-american-guy-with-disability-spending-time-outside-disability-lifestyle-concept_74855-22175.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaOh2IvUgAQKAw3JL3cfof6sG2EQJe4gfnQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bZbAbeJ7rMFLrTuv6ZC_jHkqNBqBltLFCw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzqvTyOuLlni3nFcHyzIf8FHeiAvgGafKeg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45O9lXw13QPJbNvz57YNWOx66fkOpUFEEqg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKllgkdZLx_EUcO8DkUzGA68UNMhA-VYeQg&usqp=CAU'
    ];

    const handleMouseOver = (index: number) => {
        setSelectedCircle(index);
        setShowImage(true);
    };

    return (
        <div className='circle-layout-container'>
            <div className="circle-container">
                {circles.map((circle, index) => (
                    <div key={index} onMouseOver={() => handleMouseOver(index)} className={`circle-div ${selectedCircle === index ? 'active' : ''}`}>
                        <div>
                            <h2>
                                {circle.heading}
                            </h2>
                            <p>
                                {circle.text}
                            </p>
                        </div>
                    </div>
                ))}
                {showImage && (
                    <div className='circle-div circle-layout-image-container'>
                        <img src={imageUrls[selectedCircle]} alt="Your Image" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CircleLayout;