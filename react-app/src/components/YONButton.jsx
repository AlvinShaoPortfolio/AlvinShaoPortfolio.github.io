import React, {useState} from 'react';

const phrases = [
    "No...",
    "Give me a chance?",
    "Are you sure? ",
    "Super sure? ",
    "Pretty please?",
    "You're breaking my heart ;( ",
];

const YONButton = ({width = '100px', height = '50px', xCoord = '50%', yCoord = '50%', color = '', isNo = true, noCount = 0, onClick}) => {
    const [isHovered, setIsHovered] = useState(false); 

    const numericWidth = parseInt(width, 10); 
    const numericHeight = parseInt(height, 10);

    const adjustedWidth = isNo ? numericWidth : numericWidth + noCount * 20;
    const adjustedHeight = isNo ? numericHeight : numericHeight + noCount * 20;

    const baseFontSize = 18;
    const fontSize = isNo ? baseFontSize : baseFontSize + noCount * 10;

    const buttonT = isNo ? phrases[Math.min(noCount, phrases.length - 1)] : "YES";

    return (
      <div style={{...styles.buttonContainer, width: `${adjustedWidth}px`, height: `${adjustedHeight}px`, left: xCoord, top: yCoord, backgroundColor: color, transform: `translate(-50%,-50%) scale(${isHovered ? 1.2 : 1}`, transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out', borderRadius: '5px'}} onClick = {onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave ={() => setIsHovered(false)}>
        <p style={{ ...styles.buttonText, fontSize: `${fontSize}px` }}>
            {buttonT}
        </p>
      </div>
    );
};

const styles = {
  buttonContainer:{
    position: 'absolute',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    cursor: "pointer",
    color: '#2596be',
  },
  buttonText:{
    fontFamily: 'saoBold',
    transition: '0.3s ease-in-out',
    margin: 0, 
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: '#000000',
    textAlign: 'center'
  }
};

export default YONButton;