import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

function VideoPlayer() {
  const nowVideo = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  const videoId = nowVideo.video;

  return (
    <section className="VideoContainer">
      <iframe
        className="Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Disabled youtube"
      />
    </section>
  );
}

export default VideoPlayer;
