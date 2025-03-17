import React, {useState} from 'react';
import Circle from './Circle';

const YONButton = ({size = '50px', xCoord = '50%', yCoord = '50%', color = '', isNo = true, onClick}) => {
    const [isHovered, setIsHovered] = useState(false); 
    const numericSize = parseInt(size, 10);

    return (
      <div style={{...styles.buttonContainer, left: xCoord, top: yCoord, transform: `translate(-50%,-50%) scale(${isHovered ? 1.2 : 1}`, transition: 'transform 0.3s ease-in-out'}} onClick = {onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave ={() => setIsHovered(false)}>
        <Circle size = {size} color = {color}/> 
        <Circle size = {`${numericSize * 0.9}px`} color = '#FFFFFF'/>
        <Circle size = {`${numericSize * 0.85}px`} color = {color}/>
        
        <div style={{ ...styles.buttonContainer, width: size, height: size }}>
            <p style={styles.buttonText}>{isNo ? 'Yes' : 'No'}</p>
        </div>
      </div>
    );
};

const styles = {
  buttonContainer:{
    position: 'absolute',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    cursor: "pointer"
  },
  buttonText:{
    position: 'absolute',
    fontFamily: 'saoBold',
    left: '50%',
    top: '20%',
    transform: 'translate(-50%,-50%)'
    }
};

export default YONButton;