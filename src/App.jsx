import { useState } from "react";
import "./App.css";
import { IndicatorSecurity, ModalGenerator, Principal } from "./components";
import { verificatePassword } from "./utils";

function App() {
  const [securityPassword, setSecurityPassword] = useState("");
  const [password, setPassword] = useState("");

  const modifyPassword = (newPassword) => {
    setPassword(newPassword);
    const newSecurity = verificatePassword(newPassword);
    setSecurityPassword(newSecurity);
  };

  return (
    <>
      <header>
        <h1 className="title">Password Generator</h1>
        <ModalGenerator modifyPassword={modifyPassword} />
      </header>
      <main>
        <Principal password={password} modifyPassword={modifyPassword}/>
        <IndicatorSecurity security={securityPassword} />
        <p className="aviso-copiado">Password Copied</p>
      </main>
    </>
  );
}

export default App;
