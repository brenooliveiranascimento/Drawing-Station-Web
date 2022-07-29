/* eslint-disable global-require */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import ExerciceHeader from '../ExerciceHeader/ExerciceHeader';
import { BluidingArea } from './compontents';
import './styles.css';

function VideoPlayer() {
  const nowVideo = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  const videoId = nowVideo.video;
  console.log(typeof nowVideo.url);
  return (
    <section className="Video_general_containet">
      <ExerciceHeader />
      <section className="VideoContainer">
        {
        nowVideo.finished ? (
          <iframe
            className="Video"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Disabled youtube"
          />
        ) : (
          <BluidingArea>
            <img
              alt="Draw Image"
              src={nowVideo.url}
            />
            <h1>Em breve</h1>
          </BluidingArea>
        )
      }
      </section>
    </section>
  );
}

export default VideoPlayer;
