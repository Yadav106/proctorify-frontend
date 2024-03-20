
// import React, { useState } from 'react';
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datindex.jsepicker";
 
  
// export default function GfgDatePicker() {
//   const [startDate, setStartDate] = useState(new Date());
  
//   return (
//     <div>
//       {/* <h4>GeeksforGeeks - DatePicker</h4>  */}
//       <DatePicker selected={startDate} onChange=
//               {(date) => setStartDate(date)} />
//     </div>
//   );
// }


import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker'; // Assuming you have types installed for react-datetime-picker

// Define an interface for clearer type representation
interface DatePickerValue {
  startDate?: Date;
  endDate?: Date;
}

const DatePicker: React.FC = () => {
  // Use the defined interface for state type
  const [value, onChange] = useState<DatePickerValue | null>(null);
  const handleDateChange = (newValue: Date | null) => {
    // Update state based on single date or range depending on newValue type
    onChange(newValue ? { startDate: newValue } : null);
  };

  return (
    <div className="p-5">
      <DateTimePicker onChange={handleDateChange} value={value?.startDate} />
    </div>
  );
};

export default DatePicker;
