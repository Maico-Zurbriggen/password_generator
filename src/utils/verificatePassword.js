import { levels } from "../constants";

const { lowSecurity, mediumSecurity, highSecurity } = levels;

export const verificatePassword = (password) => {
  if (highSecurity.test(password)) {
    return "high";
  } else if (mediumSecurity.test(password)) {
    return "medium";
  } else if (lowSecurity.test(password)) {
    return "low";
  } else if (password.length === 0) {
    return "";
  }
}