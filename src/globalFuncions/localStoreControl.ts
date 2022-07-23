const getData = (key: string): any => localStorage.getItem(key);

export const accessLocalStore = (key: string): any => JSON.parse(getData(key));
export const setDataInLocalStore = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
