export const Field = ({ name, type, label }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} className="field-input"/>
    </div>
  );
}