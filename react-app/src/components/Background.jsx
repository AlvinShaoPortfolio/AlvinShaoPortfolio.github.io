import React from 'react';
import backgroundImage from '../assets/SaoBackground.png'; // Import your background image

const Background = () => {
    return <div style={styles.background}></div>;
};

const styles = {
    background: {
        position: 'fixed', // Covers entire screen
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1, // Sends it to the back
    }
};

export default Background;
