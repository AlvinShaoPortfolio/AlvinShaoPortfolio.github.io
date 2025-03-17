import React from "react";
import starryNightVideo from '../assets/SAO Starry night.mp4'
import "./VideoBackground.css"; // Optional CSS file for styling

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video" poster="/path-to-highres-thumbnail.jpg">
        <source src={starryNightVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
