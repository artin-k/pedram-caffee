// App.jsx
import React, { useEffect, useRef } from 'react';
import './body-styles.css'; // Import your CSS file

function App() {
    const offScreenMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (offScreenMenuRef.current) {
                const scrollPosition = window.scrollY;
                offScreenMenuRef.current.style.opacity = scrollPosition > 100 ? 0.5 : 1;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="background-svg"></div> {/* Background SVG */}
            <div className="off-screen-menu" ref={offScreenMenuRef}>
                {/* Off-screen menu content */}
            </div>
            {/* Your main website content here */}
        </div>
    );
}

export default App;
