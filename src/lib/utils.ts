export const getKeyValues = (obj: { [key: string]: string } = {}) => {
  return Object.keys(obj).join("");
};
