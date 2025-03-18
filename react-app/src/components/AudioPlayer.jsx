import React, { useRef, useState } from 'react';
import blueSong from '../assets/Songs/blue.mp3';

const AudioPlayer = ({ style }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div style={{ ...style }}>
            <button onClick={toggleAudio}>
                {isPlaying ? "Pause Music" : "Play Music"}
            </button>
            <audio ref={audioRef} src={blueSong} loop />
        </div>
    );
};

export default AudioPlayer;
