import React, {useState} from 'react';
import useArrows from '../useArrows';
import YONButton from './YONButton';
import '../styles/fonts.css';
import '../Heart.css';

const ScreenThree = ({count, setCount, incrementCount}) => {

    const [yesCount, setYesCount] = useState(0);
    const [noCount, setNoCount] = useState(0);

    const heartFillPercentage = Math.max(100 - noCount * 20, 0);

    const incrementYesCount = () => {
        setYesCount(prev => prev + 1);
        incrementCount();
    };

    const incrementNoCount = () => {
        setNoCount(prev => {
            const newNoCount = prev + 1;

            if (newNoCount > 5) {
                incrementCount();
                incrementCount();
            }

            return newNoCount;
        });

    };

    return (
        <div style={styles.fullContainer}>
            <div style={styles.row}>
                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWV2OHE1azI3eG1nZmR3NXZkcGc2ejBuYjZ0NnljZ2tqOGJ1eGxwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/afqxxaOBLlzge9gcXx/giphy.gif" alt = 'cat1' width="350" />
                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTRueWZhN2dob3Iyemd1ZjBnamhncG5kNjN5d3huaWRuYXQ4OWtuayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EVM9LY4lyxDhxteP81/giphy.gif" alt = 'cat2'width="350" />
            </div>
            <div style={styles.row}>
                <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWlxMnVoeHA5ejEwampoYTJxYTVub3c3MzMyeXRxdngwNmdmbXZ5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VmQGHEZlI5X9fUGBTa/giphy.gif" alt = 'cat3' width="350" />
                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGZ1dzQ5cWswczE4bnpmZmVoZXJnbmkybDJ4eGlnNzAxdGo3ZWh1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IaqSvNAMdyuD7Tfco3/giphy.gif" alt = 'cat4' width="350" />
            </div>
            <div style = {styles.container}>
                <div style={styles.heartContainer}>
                    <HeartSVG fillPercentage={heartFillPercentage}/>
                </div>

                <YONButton width="100px" height="50px"  xCoord = '25%' yCoord = '75%' color = '#39AD48' isNo = {false} noCount = {noCount} onClick = {incrementYesCount}></YONButton>
                <YONButton key = {noCount} width="100px" height="50px"  xCoord = '75%' yCoord = '75%' color = '#FF0000' isNo = {true} noCount = {noCount}   onClick = {incrementNoCount}></YONButton>
            </div>
            <h1 style = {styles.text}>Would you give me the pleasure of going out with you?</h1>
        </div>


    );
};

const HeartSVG = ({ fillPercentage}) => (
    <svg width="400" height="500" viewBox="0 30 100 100" style={styles.heartSvg}>
        <defs>
            {/* Clip-path to control the fill */}
            <clipPath id="heart-clip">
                <rect x="0" y={100 - fillPercentage} width="100" height={fillPercentage} />
            </clipPath>
        </defs>
        {/* Filled Heart */}
        <path
            d="M50 85 L25 60 C10 45 15 25 30 20 C40 15 50 25 50 30 C50 25 60 15 70 20 C85 25 90 45 75 60 Z"
            fill="#F36196"
            clipPath="url(#heart-clip)"
        />
        {/* Heart Outline */}
        <path
            d="M50 85 L25 60 C10 45 15 25 30 20 C40 15 50 25 50 30 C50 25 60 15 70 20 C85 25 90 45 75 60 Z"
            fill="none"
            stroke="#F36196"
            strokeWidth="2"
        />
    </svg>
);

const styles ={
    fullContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        backgroundColor: "#FFB6C1",
        gap: '20px'     
    },
    container: {
        width: '400px',
        height: '600px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    heartContainer: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    heartSvg: {
        display: 'block',
        filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.2))',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%', 
        gap: '20px',
    },
    text: {
        position: 'absolute',
        height: '80px',
        width: '200px',
        fontFamily: 'saoBold',
        fontSize: '4vh',
        left: '50%', 
        top: '28vh',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
        color: '#000000'
    }
}

export default ScreenThree