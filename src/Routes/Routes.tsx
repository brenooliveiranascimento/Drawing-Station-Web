import React from 'react';
import { useSelector } from 'react-redux';

function Routes() {
  const userName = useSelector(({ userData }: any) => userData.name);
  console.log(userName);
  return (
    <h1>Rotas</h1>
  );
}

export default Routes;
