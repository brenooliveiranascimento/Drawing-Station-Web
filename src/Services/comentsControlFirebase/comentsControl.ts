import firebase from '../firebase_connection';

export const getAllComents = async () => {
  const commentsData = await firebase.firestore()
    .collection('comments').doc('data').get();
  console.log(commentsData.data());
  return commentsData.data();
};

export const updateComentsDatabase = async (nowComments: any) => {
  const all: any = await getAllComents();
  const comments = [...all.comments, nowComments];
  try {
    await firebase.firestore().collection('comments').doc('data').set({ comments });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const removeCommentDataBase = async (nowComments: any) => {
  const all: any = await getAllComents();
  const removeComment = all.comments
    .filter((comment: any) => comment !== nowComments);
  const comments = [...all.comments];
  try {
    firebase.firestore().collection('comments').doc('data')
      .set({ comments });
  } catch (error: any) {
    console.log(error.message);
  }
};
