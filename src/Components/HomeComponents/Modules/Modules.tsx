import React, {
  useState, useLayoutEffect, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import { ContentHeader, ModuleCard, ModulesContain } from './modulesComponents';
import animationLoading from '../../../Assets/Lottie/lf30_editor_0ktlr6ix.json';

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

  console.log(modulesData);
  return (
    <section>
      <ContentHeader>
        <h1>Módulos</h1>
      </ContentHeader>
      <ModulesContain>
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
                <>
                  <h1 className="Name_Of_Module">{module.name}</h1>
                  {
              module.image && (
                <img
                  alt={module.name}
                  src={module.image}
                />
              )
            }
                  <span>
                    {module.details}
                  </span>
                  {
              !module.conclude && (
                <span className="Construct_mode">
                  Em construção
                </span>
              )
            }
                </>
              )
            }

          </ModuleCard>
        ))
      }
      </ModulesContain>
    </section>
  );
}

export default Modules;
