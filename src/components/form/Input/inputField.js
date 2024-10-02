import React from "react";
import { Form } from "react-bootstrap";

function InputField({
  inputLabel,
  type,
  step,
  name,
  value,
  onChange,
  isRequired,
}) {
  return (
    <Form.Group>
      <Form.Label>{inputLabel}</Form.Label>
      <Form.Control
        type={type}
        step={step}
        name={name}
        value={value}
        onChange={onChange}
        required={isRequired}
        onKeyDown={(e) => {
            if (e.key === '.') {
              e.preventDefault();
            }
          }}
      ></Form.Control>
    </Form.Group>
  );
}

export default InputField;
