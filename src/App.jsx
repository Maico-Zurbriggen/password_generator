import { useState } from 'react'
import './App.css'
import { Field, IndicatorSecurity, ModalGenerator } from './components'
import { levels } from './constants'

const { lowSecurity, mediumSecurity, highSecurity } = levels;

function App() {
  const [securityPassword, setSecurityPassword] = useState("");

  const verificatePassword = (password) => {
    if (highSecurity.test(password)) {
      setSecurityPassword("high");
    } else if (mediumSecurity.test(password)) {
      setSecurityPassword("medium"); 
    } else if (lowSecurity.test(password)) {
      setSecurityPassword("low"); 
    } else if (password.length === 0) {
      setSecurityPassword("");
    } else {
      setSecurityPassword("invalid");
    }
  }

  return (
    <>
    <header>
      <h1 className='title'>Password Generator</h1>
      <ModalGenerator />
    </header>
    <main>
      <Field type="password" label="Enter Password:" placeholder="2444666668888888" name="password" extraOnChange={verificatePassword}/>
      <IndicatorSecurity security={securityPassword}/>
    </main>
    </>
  )
}

export default App
