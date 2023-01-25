import { InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { SymbolicPeriod, getValuesSymbolicRange } from '../../constants/symbolic-period';

interface Props {
  label: string;
  value: SymbolicPeriod | '';

  onChange(event: SelectChangeEvent): void;
}

const SymbolicPeriodSelector = React.forwardRef(({
  label,
  value,
  onChange,
}: Props, ref) => (
  <FormControl fullWidth>
    <InputLabel id="period-select">{label}</InputLabel>
    <Select
      labelId="period-select"
      value={value}
      label={label}
      onChange={onChange}
      ref={ref}
    >
      <MenuItem value="">None</MenuItem>
      {getValuesSymbolicRange()
        .map((symbolicRange: SymbolicPeriod) => (
          <MenuItem value={symbolicRange} key={symbolicRange}>{symbolicRange}</MenuItem>
        ))}
    </Select>
  </FormControl>
));

export default SymbolicPeriodSelector;
