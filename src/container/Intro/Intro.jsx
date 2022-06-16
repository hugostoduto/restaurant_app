import React, { useRef, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();

  const handlePlay = () => {
    setPlayVideo((playVideo) => !playVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        controls={false}
        type="mp4/video"
        autoPlay
        muted
        loop
      />
      <div className="app__video-overlay flex__center">
        <div
          onClick={handlePlay}
          className="app__video-overlay_circle flex__center"
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
