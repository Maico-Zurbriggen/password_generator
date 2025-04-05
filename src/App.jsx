import './App.css'
import { Field, IndicatorSecurity, ModalGenerator } from './components'

function App() {

  return (
    <>
    <header>
      <h1 className='title'>Password Generator</h1>
      <ModalGenerator />
    </header>
    <main>
      <Field type="password" label="Enter Password:" placeholder="2444666668888888" name="password"/>
      <IndicatorSecurity />
    </main>
    </>
  )
}

export default App
