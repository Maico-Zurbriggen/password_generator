import { useState } from "react";
import { copyPassword } from "../utils";

export const Principal = ({ password, modifyPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleOnChange = (e) => {
    const newValue = e.target.value;
    modifyPassword(newValue);
  };

  return (
    <div className="field">
      <label htmlFor="password">Enter Password:</label>
      <div className="field row">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="2444666668888888"
          name="password"
          onChange={handleOnChange}
          value={password}
          id="password"
        />

        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          <i
            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
          ></i>
        </button>
        <button
          type="button"
          className="toggle-password"
          onClick={() => copyPassword(password)}
        >
          <i className="fa-solid fa-copy"></i>
        </button>
      </div>
    </div>
  );
};
