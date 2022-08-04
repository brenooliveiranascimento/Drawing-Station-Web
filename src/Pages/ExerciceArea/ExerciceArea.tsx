import React, {
  useCallback, useEffect, useLayoutEffect, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddComents from '../../Components/ExerciceComponents/Coments/AddComent';
import ComentsArea from '../../Components/ExerciceComponents/Coments/ComentsArea';
import ExerciceInf from '../../Components/ExerciceComponents/ExerciceInf/ExerciceInf';
import ExerciceSide from '../../Components/ExerciceComponents/ExerciceSide/ExerciceSide';
import Materiais from '../../Components/ExerciceComponents/Materiais/Materiais';
import VideoPlayer from '../../Components/ExerciceComponents/Video/VideoPlayer';
import { handleSideBar } from '../../Redux/actions/exercicesActions/genericActions';
import { ExerciceContainer, Main, VideoArea } from './ExerciceComponents';

function ExerciceArea() {
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const handleSideExerciceArea = () => {
    if (window.innerWidth <= 1300) return dispatch(handleSideBar(false));
    dispatch(handleSideBar(true));
  };
  useEffect((): any => {
    setInterval(() => setWidth(window.innerWidth), 100);
    handleSideExerciceArea();
  }, [width]);

  return (
    <Main>
      <ExerciceContainer>
        <VideoArea>
          <VideoPlayer />
          <ExerciceInf />
          {
            nowExercice.showMaterials && nowExercice.nowExerciceData.finished && <Materiais />
          }
          <AddComents />
          <ComentsArea />
        </VideoArea>
        {
          nowExercice.showSideBar && <ExerciceSide />
        }
      </ExerciceContainer>
    </Main>
  );
}

export default ExerciceArea;
