import React from 'react';
import '../styles/fonts.css';
import Button from './Button';

const Menu = ({incrementCount}) => {
    return (
        <div style = {styles.background}>
            <div style={styles.container}>
                <h1 style ={styles.alert}>Invite</h1>
                <div style ={styles.middleContainer}>
                    <h2 style ={styles.middleText}> Accept Incoming Message?</h2>
                    <h2 style ={styles.underText}> Make sure you can hear the song</h2>
                </div>

                <Button size = '75px' xCoord = '25%' yCoord = '80%' color = '#2596be' isX = {false} onClick = {incrementCount} />
                <Button size = '75px' xCoord = '75%' yCoord = '80%' color = '#cd5166' isX = {true} onClick = {incrementCount} />
            </div>
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWpqaHE3d3FsdXhlMmNzdGE4bHl6djZrc3ozOGkxZ3djaGs1N2YwYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/74n7KcVYnO5WJYBjST/giphy.gif" alt="Kissing Cat" width="500" style={{ position: 'absolute', left: '50%', top: '77%', transform: 'translate(-50%, -50%)' }} />
        </div>
    );
};

const styles = {
    background: {
        backgroundColor: "#FFB6C1",
        width: '100vw',
        height: '100vh',
    },
    container: {
        opacity: '1',
        position: 'absolute',
        left: '50%',//top and left moves the top left? to the 50/50% of the screen
        top: '40%',  
        transform: 'translate(-50%, -70%)', // Centers it by shifting back by 50% of width & height
        width: '600px',
        height: '350px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #ddd',
    },
    alert: {
        transform: 'translate(-0%, -5%)',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '36px',
        fontFamily: 'saoBold',
    },
    middleContainer: {
        opacity: '1',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%, -5%)',
        width: '100%',
        height: '35%',
        background: 'linear-gradient(to bottom, #A9A9A9 0%, #D3D3D3 10%, #D3D3D3 90%, #A9A9A9 100%)',
        border: '2px solid #ddd',
    },
    middleText: {
        textAlign: 'center',
        fontFamily: 'saoBold',
        fontSize: '36px',
    },
    underText: {
        textAlign: 'center',
        fontFamily: 'saoBold',
        transform: 'translate(0%, -100%)',
        fontSize: '20px',
    }
    
};

export default Menu;
