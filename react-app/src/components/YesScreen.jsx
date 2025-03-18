import React from 'react'
 
const YesScreen = ({count, setCount})=> {
    return(
        <div>
            <div style={{ textAlign: 'center' }}>
                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcThnYTZxMzBwMjU1ZXQ1ZmwxZ3BxdDJwaHF1bXY1M2FzZHJ4d3h6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jEtbdo0hTm9zwDgTYC/giphy.gif" alt="Kissing Cat" width="600" />
            </div>
            <div>
                <a style = {styles.formLink} href="https://docs.google.com/forms/d/e/1FAIpQLSesMe38J3QIm_WxEEvQYQuQmnuUT6fgG7SW8yOB4SB63krIbw/viewform?usp=header" target="_blank" rel="noopener noreferrer"> Its a date? </a>
            </div>
        </div>
    );
}
const styles = {
    textContainer: {
        position: 'absolute',
        left: '50%',
        top: '90%',
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

export default YesScreen;