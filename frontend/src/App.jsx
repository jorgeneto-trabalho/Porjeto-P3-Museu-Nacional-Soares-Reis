import { Routes, Route } from 'react-router-dom'
import './App.css'
import StartingPage from '../pages'
import NamingRoom from '../pages/inserir-nome'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/inserir-nome' element={<NamingRoom />} />
      </Routes>
    </>
  )
}

export default App
