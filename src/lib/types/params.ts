export type FilterParamsType = {
  name: string;
  status: string;
  gender: string;
  species: string;
};

export type SearchParamsType<TSearchParams, TParams = null> = {
  searchParams: TSearchParams;
  params?: TParams;
};

export type DetailParams = {
  id: string;
};
