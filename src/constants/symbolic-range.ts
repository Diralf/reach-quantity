export enum SymbolicRange {
  'Current Quarter' = 'Current Quarter',
  'Next 10 Days' = 'Next 10 Days',
}

export const getValuesSymbolicRange = (): SymbolicRange[] => Object.keys(SymbolicRange) as SymbolicRange[];
