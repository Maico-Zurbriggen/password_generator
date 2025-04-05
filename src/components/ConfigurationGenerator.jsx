import { Field } from './Field';
import { inputsConfigurationGenerator } from '../constants/inputsConfigurationGenerator';

export const ConfigurationGenerator = ({ buttonText }) => {
  return (
    <form>
      {inputsConfigurationGenerator.map(input => (
        <Field key={input.name} type={input.type} placeholder={input.placeHolder} label={input.label} name={input.name} />
      ))}
      <button>{buttonText}</button>
    </form>
  );
}