import { charactersLetters } from "../constants";

export const generatePassword = ({e, modal, modifyPassword}) => {
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

  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  modal.current.close();
  modifyPassword(password);
}