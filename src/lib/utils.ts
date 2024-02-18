export const getKeyValues = (obj: { [key: string]: string } = {}) => {
  return Object.keys(obj).join("");
};

export type SortType = "asc" | "desc";

export const customSort =
  <T extends Object>(prop: keyof T, sortType: SortType = "asc") =>
  (a: T, b: T) => {
    const aValue = a[prop] as string;
    const bValue = b[prop] as string;

    if (sortType === "asc") {
      return aValue.localeCompare(bValue);
    }

    return bValue.localeCompare(aValue);
  };
