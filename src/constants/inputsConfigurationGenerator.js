export const inputsConfigurationGenerator = [
  {
    type: "range",
    name: "length",
    label: "Number of Characters: ",
    min: 8,
    max: 20,
    initialValue: 8,
    className: "range-input"
  },
  {
    type: "checkbox",
    name: "uppercase",
    label: "[A-Z]",
    initialValue: false,
    divClassName: "checkbox-field"
  },
  {
    type: "checkbox",
    name: "numbers",
    label: "[0-9]",
    initialValue: false,
    divClassName: "checkbox-field"
  },
  {
    type: "checkbox",
    name: "symbols",
    label: "@$!%*?&_-",
    initialValue: false,
    divClassName: "checkbox-field"
  }
]