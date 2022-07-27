import React from 'react';
import { useSelector } from 'react-redux';
import { ContentHeader, ModuleCard, ModulesContain } from './modulesComponents';

function Modules() {
  const modulesData = useSelector(({ exerciceData }: any) => exerciceData.modules);
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
          </ModuleCard>
        ))
      }
      </ModulesContain>
    </section>
  );
}

export default Modules;
