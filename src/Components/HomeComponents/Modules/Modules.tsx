import React from 'react';
import { useSelector } from 'react-redux';
import { ModuleCard, ModulesContain } from './modulesComponents';

function Modules() {
  const modulesData = useSelector(({ exerciceData }: any) => exerciceData.modules.items);
  console.log(modulesData);
  return (
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
          </ModuleCard>
        ))
      }
    </ModulesContain>
  );
}

export default Modules;
