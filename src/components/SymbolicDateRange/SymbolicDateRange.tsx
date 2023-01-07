import { InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { DateRange } from '../../constants/date-range';

const SymbolicDateRange: React.FC = () => {
  const [dateRange, setDateRange] = React.useState<DateRange | null>(null);

  const handleChange = (event: SelectChangeEvent): void => {
    setDateRange(event.target.value as DateRange);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="date-range-select">Date Range</InputLabel>
      <Select
        labelId="date-range-select"
        value={dateRange ?? ''}
        label="Date Range"
        onChange={handleChange}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value={DateRange.CURRENT_QUARTER}>{DateRange.CURRENT_QUARTER}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SymbolicDateRange;
