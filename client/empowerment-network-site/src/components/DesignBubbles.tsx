import React from 'react';
import '../styles/DesignBubbles.scss';

interface DesignBubblesProps {
    className?: string;
    direction?: string;
}

const DesignBubbles: React.FC<DesignBubblesProps> = ({ className, direction }) => {
    return (
        <div className={`design-container ${className}`}>
            {direction === 'right' && (
                <div className='right-direction bubble-container'>
                    <div className='bubble-one bubble'>
                        &nbsp;
                    </div>
                    <div className='bubble-two bubble'>
                        &nbsp;
                    </div>
                </div>
            )}
            {direction === 'left' && (
                <div className='left-direction bubble-container'>
                    <div className='bubble-one bubble'>
                        &nbsp;
                    </div>
                    <div className='bubble-two bubble'>
                        &nbsp;
                    </div>
                </div>
            )}
        </div>
    );
}

export default DesignBubbles;