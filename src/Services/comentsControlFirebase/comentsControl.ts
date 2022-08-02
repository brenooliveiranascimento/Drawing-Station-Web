import firebase from '../firebase_connection';

export const getAllComents = async () => {
  const commentsData = await firebase.firestore()
    .collection('coments').doc('data').get();
  return commentsData.data();
};

export const updateComents = async (nowComments: any) => {
  await firebase.firestore().collection('coments').doc('data').set(nowComments);
};
