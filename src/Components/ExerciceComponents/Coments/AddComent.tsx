import React from 'react';
import { ComentsContainer } from './Components';

function AddComents() {
  return (
    <ComentsContainer>
      <h1>Adicionar Comentario</h1>
      <input
        maxLength={500}
        placeholder="Fique a vontade para tirar as duvidas"
        type="text"
      />
    </ComentsContainer>
  );
}

export default AddComents;
