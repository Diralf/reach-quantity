import { InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { SymbolicRange, getValuesSymbolicRange } from '../../constants/symbolic-range';

interface Props {
  label: string;
  value: SymbolicRange | '';

  onChange(event: SelectChangeEvent): void;
}

const SymbolicDateRange: React.FC<Props> = ({
  label,
  value,
  onChange,
}) => (
  <FormControl fullWidth>
    <InputLabel id="date-range-select">{label}</InputLabel>
    <Select
      labelId="date-range-select"
      value={value}
      label={label}
      onChange={onChange}
    >
      <MenuItem value="">None</MenuItem>
      {getValuesSymbolicRange()
        .map((symbolicRange: SymbolicRange) => (
          <MenuItem value={symbolicRange} key={symbolicRange}>{symbolicRange}</MenuItem>
        ))}
    </Select>
  </FormControl>
);

export default SymbolicDateRange;
