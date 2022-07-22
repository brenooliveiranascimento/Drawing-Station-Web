import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDUv30AFNdzf4osmUmecIO5-iGFTlMz5oA',
  authDomain: 'drawingstationdesktop.firebaseapp.com',
  projectId: 'drawingstationdesktop',
  storageBucket: 'drawingstationdesktop.appspot.com',
  messagingSenderId: '760441447330',
  appId: '1:760441447330:web:45c8097a7e240d0dd848fb',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
