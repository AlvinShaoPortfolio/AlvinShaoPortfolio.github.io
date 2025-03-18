import React from 'react';
import VideoBackground from "./VideoBackground";
import useArrows from '../useArrows';

const ScreenTwoPartTwo = ({count, setCount}) => {
    
    useArrows(setCount);

    return (
        <div>
            <VideoBackground/>
            <div style = {styles.textContainer}>
                <p style = {styles.paragraph}>
                    {"I realize that we don’t know each other that well outside of School but I want to get to know you better. I get that you are really busy with work and school and that this is alot to drop on someone at once, but I hope that you will give it some thought. So I guess what I'm saying is, I like you and I was wondering if you would be down to get some food or do something together as more than just friends? "}
                </p>
               
                <h1 style = {styles.bottomText}> Click anywhere to continue </h1>
            </div>
        </div>
    );
};

const styles = {
    textContainer: {
        opacity: '0.5',
        position: 'absolute',
        left: '50%', // Centers horizontally
        top: '50%',  // Centers vertically
        transform: 'translate(-50%, -50%)', // Perfect centering
        width: '400px',
        height: '500px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #A9A9A9',
        display: 'flex',
        flexDirection: 'column', // Stack paragraphs inside
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    bottomText: {
        position: 'absolute',
        textAlign: 'center',
        left: '50%',
        top: '90%',
        transform: '(-50%, 50%)',
        fontFamily: 'saoBold',
        fontSize: '24px'
    }, 
    paragraph: {
        fontFamily: 'saoBold',
        marginTop: '-8vh',
        fontSize: '24px',
        textAlign: 'left', // Ensures readable formatting
        marginBottom: '15vh', // Spacing between paragraphs
        lineHeight: '1.6',
    }
}

export default ScreenTwoPartTwo;