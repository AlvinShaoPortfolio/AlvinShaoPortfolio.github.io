import React, {useEffect} from 'react';
import VideoBackground from "./VideoBackground";
import useArrows from '../useArrows';

const ScreenTwo = ({count, setCount}) => {
    {/*This just handles key presses < and > to go forward and back between pages */}
    useArrows(setCount);

    return (
        <div>
            <VideoBackground/>
            <div style = {styles.textContainer}>
                <p style = {styles.paragraph}>jhkjfdhskjfhdskjh</p>
                <h1 style = {styles.bottomText}> Press {'>'} to continue </h1>
            </div>
        </div>
    );
};

const styles = {
    textContainer: {
        opacity: '1',
        position: 'absolute',
        left: '50%',//top and left moves the top left? to the 50/50% of the screen
        top: '50%',  
        transform: 'translate(-50%, -70%)', // Centers it by shifting back by 50% of width & height
        width: '400px',
        height: '500px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #A9A9A9',
    },
    bottomText: {
        position: 'absolute',
        textAlign: 'center',
        left: '60%',
        top: '90%',
        transform: '(-20%, 50%)',
        fontFamily: 'saoBold',
        fontSize: '24px'
    }, 
    paragraph: {
        position: 'absolute',
        fontFamily: 'saoBold',
        fontSize: '24px',
        left: '5%'
    }
}

export default ScreenTwo;