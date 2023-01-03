import React from 'react';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {AdapterLuxon} from "@mui/x-date-pickers/AdapterLuxon";

interface Props {
}

const BasicDatePicker: React.FC<Props> = ({}) => {
    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterLuxon}>
            <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
