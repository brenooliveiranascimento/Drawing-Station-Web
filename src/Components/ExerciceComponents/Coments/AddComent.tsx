import React, { useState } from 'react';
import { ComentsContainer } from './Components';

function AddComents() {
  const [coment, setComent] = useState<string>('');

  return (
    <ComentsContainer>
      <h1>Adicionar Comentario</h1>
      <input
        value={coment}
        onChange={({ target }) => setComent(target.value)}
        maxLength={500}
        placeholder="Fique a vontade para tirar as duvidas."
        type="text"
      />
    </ComentsContainer>
  );
}

export default AddComents;
