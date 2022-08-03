import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStoreComment } from '../../../Redux/actions/exercicesActions/exerciceActions';
import { ComentsContainer } from './Components';

function AddComents() {
  const [comment, setComment] = useState<string>('');
  const dispatch = useDispatch();

  const sendComment = () => {
    setComment('');
    dispatch(updateStoreComment(comment));
  };

  return (
    <ComentsContainer>
      <h1>Adicionar Comentario</h1>
      <input
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        maxLength={500}
        placeholder="Fique a vontade para tirar as duvidas."
        type="text"
      />
      <button
        className="add_btn"
        onClick={sendComment}
        type="button"
      >
        Enviar comentario
      </button>
    </ComentsContainer>
  );
}

export default AddComents;
