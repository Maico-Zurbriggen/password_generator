import './App.css'
import { Field } from './components'

function App() {

  return (
    <>
    <header>
      <h1 className='title'>Password Generator</h1>
    </header>
    <main>
      <Field type="text" label="Enter Password:" name="password"/>
    </main>
    </>
  )
}

export default App
