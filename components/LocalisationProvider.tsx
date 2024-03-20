import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
    {/* //  <DatePicker value={value} onChange={(newValue) => setValue(newValue)} /> */}
    </LocalizationProvider>
  );
}