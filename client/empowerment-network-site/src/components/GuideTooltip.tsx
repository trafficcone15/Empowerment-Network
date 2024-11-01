import React, { useState, useEffect, useRef } from 'react';
import '../styles/GuideTooltip.scss';
import { addBreaksToText } from '../utilities/addBreaksToTextUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

interface GuideTooltipProps {
    heading: string;
    text: string[];
    triggerElement: string;
    elementRef: string;
}

const GuideTooltip: React.FC<GuideTooltipProps> = ({ heading, text, triggerElement, elementRef }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const reference = elementRef;
    const tooltipRef = useRef<HTMLDivElement>(null);

    const handleTrigger = () => {
        const containerElement = document.getElementById(`${reference}`) as HTMLElement;
        containerElement.style.top = '50%';
        containerElement.style.transition = 'top 400ms ease';

        setCurrentStep(0);

        const pElement = document.querySelectorAll(`.guide-tooltip-container#${reference} .slider-turn p`);

        pElement.forEach((li, index) => {
            li.classList.remove('active');
            if (index === 0) {
                li.classList.add('active');
            }
        });

        const sliderTurn = document.querySelector(`.guide-tooltip-container#${reference} .slider-turn`) as HTMLElement;
        sliderTurn.style.marginLeft = '0px';
    };

    const handleClose = () => {
        const containerElement = document.getElementById(`${reference}`) as HTMLElement;
        containerElement.style.top = '-1200px';
        containerElement.style.transition = 'top 1300ms ease';

    };

    const handleNext = () => {
        if (currentStep < text.length - 1) {
            const sliderTurn = document.querySelector(`.guide-tooltip-container#${reference} .slider-turn`) as HTMLElement;
            const pElement = document.querySelectorAll(`.guide-tooltip-container#${reference} .slider-turn p`);

            var margL = parseInt(window.getComputedStyle(sliderTurn).marginLeft);
            var w = parseInt(window.getComputedStyle(sliderTurn.firstElementChild as HTMLElement).width);
            var max = (pElement.length - 1) * w;

            if (-margL < max && margL % w === 0) {
                margL -= w;

                sliderTurn.style.marginLeft = `${margL}px`;

                pElement[currentStep].classList.remove('active');
                pElement[currentStep + 1].classList.add('active');

                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            const sliderTurn = document.querySelector(`.guide-tooltip-container#${reference} .slider-turn`) as HTMLElement;
            const pElement = document.querySelectorAll(`.guide-tooltip-container#${reference} .slider-turn p`);

            var margL = parseInt(window.getComputedStyle(sliderTurn).marginLeft);
            var w = parseInt(window.getComputedStyle(sliderTurn.firstElementChild as HTMLElement).width);

            if (margL % w === 0) {
                margL += w;

                sliderTurn.style.marginLeft = `${margL}px`;

                pElement[currentStep].classList.remove('active');
                pElement[currentStep - 1].classList.add('active');

                setCurrentStep(currentStep - 1);
            }
        }
    };
    
    useEffect(() => {
        const trigger = document.getElementById(`${triggerElement}`) as HTMLElement;

        const handleClickOutside = (event: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        const handleTriggerClick = (event: MouseEvent) => {
            event.stopPropagation(); 
            handleTrigger();
        };

        if (trigger) {
            trigger.addEventListener('click', handleTriggerClick);
            document.addEventListener('click', handleClickOutside);

            return () => {
                trigger.removeEventListener('click', handleTriggerClick);
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, []);

    return (
        <div className={`guide-tooltip-container`} id={reference} ref={tooltipRef}>
            <h3 className='heading'>{heading}</h3>
            <span className="close" onClick={handleClose}></span>
            <div className='slider-container'>
                <div className="slider-turn">
                    {text.map((item, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: addBreaksToText(item) }}></p>
                    ))}
                </div>
            </div>
            <div className="bottom">
                <button className="btn" onClick={() => handlePrevious()} disabled={currentStep === text.length}>
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                </button>
                <button className="btn" onClick={() => handleNext()} disabled={currentStep === text.length}>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default GuideTooltip;
