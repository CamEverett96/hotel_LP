import React, { useState } from 'react';
//datepicker

import DatePicker from 'react-datepicker';
///datepicker css
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';

//icons
import { BsCalendar } from 'react-icons/bs';
const CheckOut = () => {
 
  const [endDate, setEndDate] = useState(false);

  return (
    <div className='relative flex items-center justify-end h-full'>
      {/* icon */}
      <div className='absolute z-10 pr-8'>
       <div>
          <BsCalendar classNamw=' text-accent text base'/>
        </div> 
      </div>
      <DatePicker className='w-full h-full' 
      selected={endDate}
       placeholderText="Check Out"
       onChange={(date) => setEndDate(date)}
       />
    </div>)
    ;
};

export default CheckOut;
