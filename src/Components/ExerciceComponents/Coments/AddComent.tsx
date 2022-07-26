import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStoreComment } from '../../../Redux/actions/exercicesActions/exerciceActions';
import { ComentsContainer } from './Components';

function AddComents() {
  const [comment, setComment] = useState<string>('');
  const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);
  const dispatch = useDispatch();

  const sendComment = () => {
    if (!comment.length) return setShowAlertMessage(true);
    setComment('');
    dispatch(updateStoreComment(comment));
    setShowAlertMessage(false);
  };

  const handleInput = (value: string) => {
    setShowAlertMessage(false);
    setComment(value);
  };

  return (
    <ComentsContainer>
      <h1>Adicionar Comentario</h1>
      <input
        style={{ border: showAlertMessage ? '3px solid red' : 'none' }}
        value={comment}
        onChange={({ target }) => handleInput(target.value)}
        maxLength={500}
        placeholder="Fique a vontade para tirar as duvidas."
        type="text"
      />
      <section>
        <button
          className="add_btn"
          onClick={sendComment}
          type="button"
        >
          <span>
            Enviar comentario
          </span>
        </button>
        {
          showAlertMessage && <span>Digite alguma coisa...</span>
        }
      </section>
    </ComentsContainer>
  );
}

export default AddComents;
