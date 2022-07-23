import { getProductionData, getProductionVersion } from '../Services/versionControlFirebase/versionControlFirebase';
import { DRAWING_STATION_LOCAL_DATA, DRAWING_STATION_LOCAL_VERSION } from '../__GlobalTypes/globalTypes';
import { accessLocalStore, setDataInLocalStore } from './localStoreControl';

export const thereIsANewVersion = async () => {
  const currentVersion: Array<number> = accessLocalStore(DRAWING_STATION_LOCAL_VERSION);

  const productionVersion = await getProductionVersion();
  return productionVersion?.length !== currentVersion?.length;
};

export const updateVersion = async () => {
  setDataInLocalStore(DRAWING_STATION_LOCAL_VERSION, await getProductionVersion());
  setDataInLocalStore(DRAWING_STATION_LOCAL_DATA, await getProductionData());
};
