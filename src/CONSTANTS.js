export const classNames_Cell = {
  clear: "color-fibClearing",
  inc: "color-incrementing",
  default: "color-default",
};

// First 25 terms - the 25th term would take over a day to create by clicking once a second
// Will suffice in practical terms
export const fibTerms = [
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393,
];

const CONSTANTS = {
  classNames_Cell,
  fibTerms,
};

export default CONSTANTS;
