import { Field } from "./Field";
import { inputsConfigurationGenerator, charactersLetters } from "../constants";

export const ConfigurationGenerator = ({ modal, buttonText, modifyPassword }) => {

  const generatePassword = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    const { length, uppercase, numbers, symbols } = values;
    const { uppercaseLetters, lowercaseLetters, numbersLetters, symbolsLetters } = charactersLetters;

    let password = "";
    let characters = lowercaseLetters;

    if (uppercase) {
      characters += uppercaseLetters;
      password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    }
    if (numbers) {
      characters += numbersLetters;
      password += numbersLetters.charAt(Math.floor(Math.random() * numbersLetters.length));
    }
    if (symbols) {
      characters += symbolsLetters;
      password += symbolsLetters.charAt(Math.floor(Math.random() * symbolsLetters.length));
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex); 
    }

    modal.current.close();
    modifyPassword(password);
  }

  return (
    <form className="modal-form" onSubmit={generatePassword}>
      {inputsConfigurationGenerator.map(input => (
        <Field key={input.name} {...input}/>
      ))}
      <button className="button-modal-form">{buttonText}</button>
    </form>
  );
}