/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import ExerciceHeader from '../ExerciceHeader/ExerciceHeader';
import './styles.css';

function VideoPlayer() {
  const nowVideo = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  const videoId = nowVideo.video;

  return (
    <section className="Video_general_containet">
      <ExerciceHeader />
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
    </section>
  );
}

export default VideoPlayer;
