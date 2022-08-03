import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ComentsContainer, CommentBody, UserDataComent } from './Components';

function ComentsArea() {
  const comments = useSelector(({ exerciceData }: any) => exerciceData.comments);
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  const userInf = useSelector(({ userData }: any) => userData);
  const commentsFilter = () => {
    const filterComents = comments.filter((comment: any) => comment.exercice === nowExercice.name);
    console.log(filterComents);
    return filterComents;
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
              { coment.uidOfCreator === userInf.uid && <span>Deletar</span> }
            </UserDataComent>
            <span>{coment.coment}</span>
          </CommentBody>
        ))
      }
    </ComentsContainer>
  );
}

export default ComentsArea;
