import { InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { SymbolicRange } from '../../constants/symbolic-range';

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
      <MenuItem value={SymbolicRange['Current Quarter']}>{SymbolicRange['Current Quarter']}</MenuItem>
    </Select>
  </FormControl>
);

export default SymbolicDateRange;
