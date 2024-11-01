import React, { useEffect } from "react";

const ScrollToTop: React.FC = () => {
    useEffect(() => {
        const scrollToTop = () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100); // Adjust the delay as needed
        };
    
        // Scroll to top when the component mounts
        scrollToTop();
    
        // Scroll to top whenever the URL changes
        const unlisten = () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100); // Adjust the delay as needed
        };
    
        window.addEventListener("popstate", unlisten);
    
        return () => {
            window.removeEventListener("popstate", unlisten);
        };
    }, []);
    
    return null;
}

export default ScrollToTop;