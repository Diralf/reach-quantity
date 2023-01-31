export enum SymbolicPeriod {
  'Current Quarter' = 'Current Quarter',
  'Next 5 Days' = 'Next 5 Days',
  'Next 10 Days' = 'Next 10 Days',
}

export const getValuesSymbolicRange = (): SymbolicPeriod[] => Object.keys(SymbolicPeriod) as SymbolicPeriod[];
