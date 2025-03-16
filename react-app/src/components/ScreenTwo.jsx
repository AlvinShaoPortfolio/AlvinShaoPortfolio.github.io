import React from 'react';
import VideoBackground from "./VideoBackground";

const ScreenTwo = () => {
    return (
        <div>
            <VideoBackground/>
            <div style = {styles.textContainer}>
                
            </div>
        </div>
    );
};

const styles = {
    textContainer: {
        opacity: '.7',
        position: 'absolute',
        left: '50%',//top and left moves the top left? to the 50/50% of the screen
        top: '50%',  
        transform: 'translate(-50%, -70%)', // Centers it by shifting back by 50% of width & height
        width: '400px',
        height: '500px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #A9A9A9',
    }
}

export default ScreenTwo;