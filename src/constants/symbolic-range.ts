type SymbolicRange = 'Current Quarter' | 'Next 10 Days';
module SymbolicRange {
  export const CURRENT_QUARTER = 'Current Quarter';
  export const NEXT_10_DAYS = 'Next 10 Days';
  export const values = (): SymbolicRange[] => [
    CURRENT_QUARTER,
    NEXT_10_DAYS,
  ];
}

export { SymbolicRange };
