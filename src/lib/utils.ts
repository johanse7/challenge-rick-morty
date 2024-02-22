import { FilterType } from "./types/character";

export const getKeyValues = (obj: { [key: string]: string } = {}) => {
  return Object.values(obj).join("");
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

const FILTER_PARAMS: Array<FilterType> = [
  "gender",
  "name",
  "species",
  "status",
];

export const getCountFilterParams = (params: Object) => {
  return Object.keys(params).reduce((prev, current) => {
    if (FILTER_PARAMS.includes(current as FilterType)) {
      return prev + 1;
    }
    return prev;
  }, 0);
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
