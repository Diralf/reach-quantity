import { InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { DateRange } from '../../constants/symbolic-range';

interface Props {
  label: string;
  value: DateRange | '';

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
      <MenuItem value={DateRange.CURRENT_QUARTER}>{DateRange.CURRENT_QUARTER}</MenuItem>
    </Select>
  </FormControl>
);

export default SymbolicDateRange;
