import { DRAWING_STATION_LOCAL_VERSION } from '../__GlobalTypes/globalTypes';

export const localStoreAccess = ():any => localStorage.getItem(DRAWING_STATION_LOCAL_VERSION);

export const getNowVersion = () => JSON.parse(localStoreAccess());
