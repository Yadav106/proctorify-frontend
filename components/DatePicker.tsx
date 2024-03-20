
// // import React, { useState } from 'react';
// // import "react-datepicker/dist/react-datepicker.css";
// // import DatePicker from "react-datindex.jsepicker";
 
  
// // export default function GfgDatePicker() {
// //   const [startDate, setStartDate] = useState(new Date());
  
// //   return (
// //     <div>
// //       {/* <h4>GeeksforGeeks - DatePicker</h4>  */}
// //       <DatePicker selected={startDate} onChange=
// //               {(date) => setStartDate(date)} />
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import DateTimePicker from 'react-datetime-picker'; // Assuming you have types installed for react-datetime-picker

// // Define an interface for clearer type representation
// // interface DatePickerValue {
// //   startDate?: Date;
// //   endDate?: Date;
// // }

// const DatePicker: React.FC = () => {
//   // Use the defined interface for state type
//   // const [value, onChange] = useState<DatePickerValue | null>(null);
//   // const handleDateChange = (newValue: Date | null) => {
//   //   // Update state based on single date or range depending on newValue type
//   //   onChange(newValue ? { startDate: newValue } : null);
//   // };

//   return (
//     <div className="p-20 ">
//       {/* <DateTimePicker onChange={handleDateChange} value={value?.startDate} /> */}
//       <DateTimePicker/>
//     </div>
//   );
// };

// export default DatePicker;



import App from './LocalisationProvider';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function FirstComponent() {
  return (
    //  <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
   <DatePicker/>
    
  );
}