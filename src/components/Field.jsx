import { useState } from "react";

export const Field = ({ name, type, label, placeholder, extraOnChange }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    const text = e.target.value;
    setValue(text);
    extraOnChange && extraOnChange(text);
  }

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} className="field-input" placeholder={placeholder} value={value} onChange={handleOnChange}/>
    </div>
  );
}