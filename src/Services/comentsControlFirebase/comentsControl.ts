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
    await firebase.firestore().collection('comments').doc('data').set({ comments })
      .then(() => alert('dwaio'));
  } catch (error: any) {
    console.log(error.message);
  }
};
