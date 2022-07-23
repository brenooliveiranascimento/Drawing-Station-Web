import { DRAWING_STATION_USER } from '../__GlobalTypes/globalTypes';

const accessLocalStore = (): any => localStorage.getItem(DRAWING_STATION_USER);

export const setUserInLocalStore = (userData: any) => {
  localStorage.setItem(DRAWING_STATION_USER, JSON.stringify(userData));
};

export const userDataInLocalStore = () => JSON.parse(accessLocalStore());
