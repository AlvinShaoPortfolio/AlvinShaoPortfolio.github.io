import React from 'react';
import '../styles/fonts.css';
import Button from './Button';

const Menu = ({incrementCount}) => {
    return (
        <div style = {styles.background}>
            <div style={styles.container}>
                <h1 style ={styles.alert}>Alert From Alvin</h1>
                <div style ={styles.middleContainer}>
                    <h2 style ={styles.middleText}> Accept Incoming Message?</h2>
                </div>

                <Button size = '75px' xCoord = '25%' yCoord = '75%' color = '#2596be' isX = {false} onClick = {incrementCount} />
                <Button size = '75px' xCoord = '75%' yCoord = '75%' color = '#cd5166' isX = {true} onClick = {incrementCount} />
            </div>
        </div>
    );
};

const styles = {
    background: {
        backgroundColor: "#000000",
        width: '100vw',
        height: '100vh',
    },
    container: {
        opacity: '1',
        position: 'absolute',
        left: '50%',//top and left moves the top left? to the 50/50% of the screen
        top: '50%',  
        transform: 'translate(-50%, -70%)', // Centers it by shifting back by 50% of width & height
        width: '600px',
        height: '300px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #ddd',
    },
    alert: {
        transform: 'translate(-0%, -30%)',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '36px',
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
        fontSize: '36px',
        transform:  'translate(0%,-15%)',
    },
    
};

export default Menu;
