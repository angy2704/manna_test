import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addYears } from "date-fns";

function RangePicker({ inputLabel, value, onChange, isRequired, name }) {
  const [startDate, setStartDate] = useState(value?.startDate || new Date());
  const [endDate, setEndDate] = useState(value?.endDate || addYears(new Date(), 1));

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onChange({ target: { name, value: { startDate: date, endDate } } });
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onChange({ target: { name, value: { startDate, endDate: date } } });
  };

  return (
    <div>
      <label className="form-label">{inputLabel || "Select Year Range:"}</label>
      <div className="row">
        <div className="col-md-6">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            showYearPicker
            dateFormat="yyyy"
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="w-100"
            required={isRequired}
          />
        </div>
        <div className="col-md-6">
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            showYearPicker
            dateFormat="yyyy"
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="w-100"
            required={isRequired}
          />
        </div>
      </div>
    </div>
  );
}

export default RangePicker;
