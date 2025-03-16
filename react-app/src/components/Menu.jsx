import React from 'react';
import '../styles/fonts.css';
import Button from './Button';

const Menu = () => {
    const handleClick = () => {
        alert('Button Clicked!');
    };

    return (
        <div style={styles.container}>
            <h1 style ={styles.alert}>Alert</h1>
            <div style ={styles.middleContainer}>
                <h2 style ={styles.middleText}>Incoming Message</h2>
            </div>

            <Button size = '50px' xCoord = '25%' yCoord = '75%' color = '#2596be' isX = {false}></Button>
            <Button size = '50px' xCoord = '75%' yCoord = '75%' color = '#cd5166' isX = {true}></Button>
        </div>
    );
};

const styles = {
    container: {
        opacity: '1',
        position: 'absolute',
        left: '50%',//top and left moves the top left? to the 50/50% of the screen
        top: '50%',  
        transform: 'translate(-50%, -70%)', // Centers it by shifting back by 50% of width & height
        width: '400px',
        height: '200px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #ddd',
    },
    alert: {
        transform: 'translate(-0%, -30%)',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px',
        fontFamily: 'saoBold',
    },
    middleContainer: {
        opacity: '1',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%,-30%)',
        width: '100%',
        height: '30%',
        background: 'linear-gradient(to bottom, #A9A9A9 0%, #D3D3D3 50%, #A9A9A9 100%)',
        border: '2px solid #ddd',
    },
    middleText: {
        textAlign: 'center',
        fontFamily: 'saoBold',
        transform:  'translate(0%,-15%)',
    },
    
};

export default Menu;
