import { useState } from "react";
import "./Field.css";

export const Field = ({ name, type = "text", label, placeholder, className, divClassName = "field", min, max, initialValue = ""}) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    let newValue;
    if (e.target.type === "range") {
      newValue = Number(e.target.value);
    } else if (e.target.type === "checkbox") {
      newValue = e.target.checked;
    } else {
      newValue = e.target.value;
    }
    setValue(newValue);
  }

  return (
    <div className={divClassName}>
      <label htmlFor={name}>{label}{type === "range" && value}</label>
      <input type={type} name={name} id={name} className={className} placeholder={placeholder} value={value} onChange={handleOnChange} min={min} max={max}/>
    </div>
  );
}