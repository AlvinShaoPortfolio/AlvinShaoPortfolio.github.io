import React from 'react'
 
const NoScreen = ({count, setCount})=> {
    return(
        <div>
            <div style={{ textAlign: 'center' }}>
                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODRhN2YxNDZkeHo2aDljNzA0NHVrNHc4ZGJ4cjV6NnF4aTZ2MW9hMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ty9H2ZgeKs4wJL7noF/giphy.gif" alt="Crying cat" width="600" />
            </div>
            <div>
            <a style = {styles.formLink} href="https://docs.google.com/forms/d/e/1FAIpQLSesMe38J3QIm_WxEEvQYQuQmnuUT6fgG7SW8yOB4SB63krIbw/viewform?usp=header" target="_blank" rel="noopener noreferrer"> Sorry if this was weird </a>
            </div>
        </div>
    );
}

const styles = {
    textContainer: {
        position: 'absolute',
        left: '50%',
        top: '95%',
        transform: 'translate(-50%,-200%)',
        fontFamily: 'saoBold',
        fontSize: '48px',
    },
    formLink: {
        position: 'absolute',
        left: '50%',
        top: '95%',
        transform: 'translate(-50%,-200%)',
        fontFamily: 'saoBold',
        fontSize: '48px',
    }
}

export default NoScreen;