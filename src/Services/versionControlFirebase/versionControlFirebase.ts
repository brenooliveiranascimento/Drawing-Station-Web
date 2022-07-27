import firebase from '../firebase_connection';

export const getProductionVersion = async () => {
  const fetchVesionData: any = await firebase.firestore()
    .collection('updates').doc('data').get();
  const lengthOfVversions = await fetchVesionData.data().versions;
  return lengthOfVversions;
};

export const getProductionData = async () => {
  const productionData = await firebase.firestore()
    .collection('exercices').doc('data').get();
  return productionData.data();
};

export const getProductioModulesData = async () => {
  const productionData: any = await firebase.firestore()
    .collection('modules').doc('data').get();
  alert('atualizou');
  console.log(productionData.data().items);
  return productionData.data().items;
};
