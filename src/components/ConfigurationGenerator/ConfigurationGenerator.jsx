import { Field } from "../../components";
import { inputsConfigurationGenerator } from "../../constants";
import { generatePassword } from "../../utils";
import "./ConfigurationGenerator.css";

export const ConfigurationGenerator = ({ modal, buttonText, buttonText2, modifyPassword }) => {

  return (
    <form className="modal-form" onSubmit={(e) => generatePassword({e, modal, modifyPassword})}>
      {inputsConfigurationGenerator.map(input => (
        <Field key={input.name} {...input}/>
      ))}
      <button className="button-modal-form">{buttonText}</button>
      <button className="button-modal-form" onClick={() => modal.current.close()}>{buttonText2}</button>
    </form>
  );
}