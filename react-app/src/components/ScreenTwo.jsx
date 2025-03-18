import React from 'react';
import VideoBackground from "./VideoBackground";
import useArrows from '../useArrows';

const ScreenTwo = ({count, setCount}) => {
    
    useArrows(setCount);

    return (
        <div>
            <VideoBackground/>
            <div style = {styles.textContainer}>
                <p style = {styles.paragraph}>
                    {"(This is my first time using Javascript and React, so im sorry if it's a little scuffed. Also just a warning I’m not a good writer, but I’m trying my hardest to not use my best friend GPT for this)" }
                </p>
                <p style = {styles.paragraph}>
                    {"Hey Jessica, I know that this is a really weird way to get a letter like this but I've been meaning to send this for a while and I didn’t have the confidence to say it all face to face (i'm not non-chalant enough). So here is everything that I’ve been meaning to say."}
                </p>
                <p style = {styles.paragraph}>
                    {"In my eyes, everything you do makes you incredibly pretty. The way you do your hair, the way you smile, the way you dress, how smart you are, how easily you try new things, and how hard you work towards your future. "}
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
        transform: 'translate(-50%, -60%)', // Perfect centering
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
        marginTop: '0vh',
        fontSize: '20px',
        textAlign: 'left', // Ensures readable formatting
        marginBottom: '4vh', // Spacing between paragraphs
        lineHeight: '1.6',
    }
}

export default ScreenTwo;