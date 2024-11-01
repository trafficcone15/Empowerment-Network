import '../styles/AnimateText.scss';
import React from 'react';

interface AnimateTextProps {
    mainText: string;
    subText: string;
    className?: string;
}

const AnimateText: React.FC<AnimateTextProps> = ({ mainText, subText, className }) => {
    const subTextWords: string[] = subText.split('.');

    return (
        <div className={`animate-text-container ${className}`}>
            <div className="text-with-animation">{mainText}</div>
            <div className="subtext-with-animation">
                {subTextWords.map((sentence, index: number) => (
                    <p key={index}>{sentence}</p>
                ))}
            </div>
        </div>
    );
}

export default AnimateText;