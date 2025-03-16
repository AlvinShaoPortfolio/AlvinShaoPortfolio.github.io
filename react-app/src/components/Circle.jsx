import React from 'react';

const Circle = ({size = '100px', color = '#333333'}) => {
    return <div style = {{...styles.circle, width: size, height: size, backgroundColor: color}}> 
    </div>;
}

const styles = {
    circle: {
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
};


export default Circle;