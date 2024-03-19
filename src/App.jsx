
import './App.css'
import CounterContext from './context/CounterContext'
import CaseOne from './pages/CaseOne/CaseOne'
import CaseTwo from './pages/CaseTwo/CaseTwo'

function App() {
  

  return (
    <CounterContext>
      
      <CaseOne></CaseOne>
      <br></br>
      <CaseTwo></CaseTwo>
       
        
     
    </CounterContext>
  )
}

export default App
