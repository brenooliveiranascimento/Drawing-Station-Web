import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletComment } from '../../../Redux/actions/exercicesActions/exerciceActions';
import { ComentsContainer, CommentBody, UserDataComent } from './Components';

function ComentsArea() {
  const dispatch = useDispatch();
  const comments = useSelector(({ exerciceData }: any) => exerciceData.comments);
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  const userInf = useSelector(({ userData }: any) => userData);

  const commentsFilter = () => {
    const filterComents = comments.filter((comment: any) => comment.exercice === nowExercice.name);
    return filterComents;
  };

  const removeComment = (comment: any) => {
    dispatch(deletComment(comment));
  };

  useEffect(() => {
    commentsFilter();
  }, [nowExercice, comments]);

  return (
    <ComentsContainer>
      <h1>Comentário</h1>
      {
        commentsFilter().map((coment: any) => (
          <CommentBody>
            <UserDataComent>
              <h2>{coment.nameOfCreator}</h2>
              { coment.uidOfCreator === userInf.uid && (
                <button
                  onClick={() => removeComment(coment)}
                  type="button"
                >
                  Deletar
                </button>
              ) }
            </UserDataComent>
            <span>
              {coment.coment}
            </span>
          </CommentBody>
        ))
      }
    </ComentsContainer>
  );
}

export default ComentsArea;
