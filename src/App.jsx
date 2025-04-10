import { useState } from "react";
import "./App.css";
import { IndicatorSecurity, ModalGenerator } from "./components";
import { levels } from "./constants";

const { lowSecurity, mediumSecurity, highSecurity } = levels;

function App() {
  const [securityPassword, setSecurityPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const modifyPassword = (newPassword) => {
    setPassword(newPassword);
    verificatePassword(newPassword);
  };

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    verificatePassword(newValue);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    const avisoCopiado = document.querySelector(".aviso-copiado");
    avisoCopiado.classList.add("show");

    setTimeout(() => {
      avisoCopiado.classList.remove("show");
    }, 3000);
  }

  const verificatePassword = (password) => {
    if (highSecurity.test(password)) {
      setSecurityPassword("high");
    } else if (mediumSecurity.test(password)) {
      setSecurityPassword("medium");
    } else if (lowSecurity.test(password)) {
      setSecurityPassword("low");
    } else if (password.length === 0) {
      setSecurityPassword("");
    }
  };

  return (
    <>
      <header>
        <h1 className="title">Password Generator</h1>
        <ModalGenerator modifyPassword={modifyPassword} />
      </header>
      <main>
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
                className={`fa-solid ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </button>
            <button type="button" className="toggle-password" onClick={copyPassword}>
              <i
                className="fa-solid fa-copy"
              ></i>
            </button>
          </div>
        </div>
        <IndicatorSecurity security={securityPassword} />
        <p className="aviso-copiado">Password Copied</p>
      </main>
    </>
  );
}

export default App;
