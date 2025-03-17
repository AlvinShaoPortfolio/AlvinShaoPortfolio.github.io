import React, {useState} from 'react';
import useArrows from '../useArrows';
import YONButton from './YONButton';
import '../styles/fonts.css';
import '../Heart.css';

const ScreenThree = ({count, setCount, incrementCount}) => {
    {/*This just handles key presses < and > to go forward and back between pages */}
    useArrows(setCount);
    const [yesCount, setYesCount] = useState(0);
    const [noCount, setNoCount] = useState(0);
    const heartFillPercentage = Math.max(100 - noCount * 20, 0);

    const incrementYesCount = () => {
        setYesCount(prev => prev + 1);
    };

    const incrementNoCount = () => {
        setNoCount(prev => prev + 1);
    };

    return (
        <div style = {styles.container}>
            
            <p>yesCount: {yesCount}</p>
            <p>noCount: {noCount}</p>

            <div style={styles.heartContainer}>
                <HeartSVG fillPercentage={heartFillPercentage} />
            </div>

            <YONButton size = '50px' xCoord = '25%' yCoord = '75%' color = '#2596be' isNo = {true} onClick = {incrementYesCount}></YONButton>
            <YONButton size = '50px' xCoord = '75%' yCoord = '75%' color = '#FF0000' isNo = {false} onClick = {incrementNoCount}></YONButton>
        </div>
    );
};

const HeartSVG = ({ fillPercentage }) => (
    <svg width="300" height="300" viewBox="0 0 100 150" style={styles.heartSvg}>
        <defs>
            {/* Clip-path to control the fill */}
            <clipPath id="heart-clip">
                <rect x="0" y={100 - fillPercentage} width="100" height={fillPercentage} />
            </clipPath>
        </defs>
        {/* Filled Heart */}
        <path
            d="M50 85 L25 60 C10 45 15 25 30 20 C40 15 50 25 50 30 C50 25 60 15 70 20 C85 25 90 45 75 60 Z"
            fill="red"
            clipPath="url(#heart-clip)"
        />
        {/* Heart Outline */}
        <path
            d="M50 85 L25 60 C10 45 15 25 30 20 C40 15 50 25 50 30 C50 25 60 15 70 20 C85 25 90 45 75 60 Z"
            fill="none"
            stroke="red"
            strokeWidth="2"
        />
    </svg>
);

const styles ={
    container: {
        width: '400px',
        height: '400px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid red'
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
}

export default ScreenThree