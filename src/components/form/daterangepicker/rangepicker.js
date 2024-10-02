import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RangePicker({ inputLabel, value, onChange, isRequired, name }) {
  const [startYear, setStartYear] = useState(value?.startYear || null);
  const [endYear, setEndYear] = useState(value?.endYear || null);

  const handleYearChange = (years) => {
    const [start, end] = years;
    setStartYear(start);
    setEndYear(end);

    // Notify parent component about the change
    onChange({
      target: {
        name,
        value: { startYear: start, endYear: end },
      },
    });
  };

  return (
    <div>
      <label className="form-label">{inputLabel || "Select Year Range:"}</label>
      <div className="row">
        <div className="col-md-12">
          <DatePicker
            selected={startYear}
            onChange={handleYearChange} // handle both start and end year
            startDate={startYear}
            endDate={endYear}
            selectsRange
            showYearPicker // show year picker instead of date picker
            dateFormat="yyyy" // format as year only
            placeholderText="Select a year range"
            required={isRequired}
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default RangePicker;
