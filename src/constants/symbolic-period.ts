export enum SymbolicPeriod {
  CurrentQuarter = 'Current Quarter',
  Next5Days = 'Next 5 Days',
  Next10Days = 'Next 10 Days',
}

export const getSymbolicPeriodValues = (): SymbolicPeriod[] => Object.values(SymbolicPeriod) as SymbolicPeriod[];
