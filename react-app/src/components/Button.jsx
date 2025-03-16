import React from 'react';
import Circle from './Circle';

const Button = ({size = '50px', xCoord = '50%', yCoord = '50%', color = '', isX = true, onClick}) => {
    const numericSize = parseInt(size, 10);

    return (
      <div style={{...styles.buttonContainer, left: xCoord, top: yCoord, transform: 'translate(-50%,-50%)'}} onClick = {onClick}>
        <Circle size = {size} color = {color}/> 
        <Circle size = {`${numericSize * 0.9}px`} color = '#FFFFFF'/>
        <Circle size = {`${numericSize * 0.85}px`} color = {color}/>
        

        {isX ? (
          <div style={{ ...styles.xContainer, width: size, height: size }}>
            <div style={styles.xLine}></div>
            <div style={{ ...styles.xLine, transform: 'rotate(-45deg)' }}></div>
          </div>
        ) : ( 
          <>  
            <Circle size = {`${numericSize * 0.45}px`} color = '#FFFFFF'/>
            <Circle size = {`${numericSize * 0.3}px`} color = {color}/>
          </>
        )}
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
  xContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xLine: {
      position: 'absolute',
      width: '45%',  // Makes sure the X extends the full width
      height: '10%',  // Thickness of the X
      backgroundColor: '#FFFFFF',  // Color of the X
      transform: 'rotate(45deg)',  // One diagonal line
  },
};

export default Button;