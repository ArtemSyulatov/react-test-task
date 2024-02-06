export const getLocalStorageItem = (key, errorValue) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return errorValue;
  }
};

export const setLocalStorageValue = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};
