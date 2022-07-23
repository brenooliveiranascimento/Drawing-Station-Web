import { DRAWING_STATION_USER } from '../__GlobalTypes/globalTypes';
import { accessLocalStore } from './localStoreControl';

export const setUserInLocalStore = (userData: any) => {
  localStorage.setItem(DRAWING_STATION_USER, JSON.stringify(userData));
};

export const userDataInLocalStore = () => JSON.parse(accessLocalStore(DRAWING_STATION_USER));
