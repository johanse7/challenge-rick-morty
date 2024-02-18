export const TYPE_DELAY = 300 as const;

export const FILTERS = {
  status: [
    { label: "All", value: "" },
    { label: "Alive", value: "Alive" },
    { label: "Dead", value: "Dead" },
    { label: "Unknown", value: "unknown" },
  ],
  species: [
    { label: "All", value: "" },
    { label: "Human", value: "Human" },
    { label: "Alien", value: "Alien" },
  ],
  gender: [
    { label: "All", value: "" },
    { label: "Female", value: "Female" },
    { label: "Male", value: "Male" },
    { label: "Genderless", value: "Genderless" },
    { label: "Unknown", value: "unknown" },
  ],
} as const;

export const LABEL_FILTER = "Filter" as const;
export const LABEL_FILTER_PLURAL = "Filters" as const;
