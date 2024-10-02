import React from "react";
import { Form } from "react-bootstrap";

function SelectDropdown({ selectLabel, options, name, value, onChange, isRequired }) {
  return (
    <Form.Group>
      <Form.Label>{selectLabel}</Form.Label>
      <Form.Select 
        name={name} 
        value={value} 
        onChange={onChange} 
        required={isRequired} 
        aria-label="Default select example"
      >
        <option value="" disabled>
          Choisir
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectDropdown;
