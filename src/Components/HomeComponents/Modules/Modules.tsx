import React, {
  useState, useLayoutEffect, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { BsPencilFill } from 'react-icons/bs';
import {
  Contain,
  ContentHeader, ModuleCard, ModulesContain, SelectArea,
} from './modulesComponents';
import animationLoading from '../../../Assets/Lottie/lf30_editor_0ktlr6ix.json';
import PaitingProgressBar from '../../ExerciceComponents/ProgressBar/PaitingProgressBar';

function Modules() {
  const modulesData = useSelector(({ exerciceData }: any) => exerciceData.modules);
  const [loadingData, setLoadingData] = useState(true);

  useLayoutEffect(
    useCallback(() => {
      setTimeout(() => setLoadingData(false), 1000);
    }, []),
  );

  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <ModulesContain>
      <Contain>
        {
        modulesData.map((module: any) => (
          <ModuleCard key={module.name}>
            {
              loadingData ? (
                <Lottie
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 80,
                  }}
                  options={defaultOptionsLoading}
                />
              ) : (
                <Link to={module.id}>
                  <img
                    className="Img_Modules"
                    src={module.image}
                    alt={module.id}
                  />
                  <h1 className="Name_Of_Module">{module.name}</h1>
                  <span>
                    {module.details}
                  </span>
                  {
              !module.conclude ? (
                <span className="Construct_mode">
                  Em construção
                </span>
              ) : (
                <span className="progress_container">
                  <PaitingProgressBar />
                </span>
              )
            }
                </Link>
              )
            }

          </ModuleCard>
        ))
      }
      </Contain>
      <ContentHeader>
        <h1>Tatakae!</h1>
      </ContentHeader>
    </ModulesContain>

  );
}

export default Modules;
