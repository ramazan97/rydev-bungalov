import React, { useState } from "react";
import { BsCalendar } from "react-icons/bs";
import Datapicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <Datapicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
