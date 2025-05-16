import { Routes, Route } from 'react-router-dom'
import './App.css'
import StartingPage from '../pages'
import NamingRoom from '../pages/inserir-nome'
import Pergunta from '../pages/pergunta'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/inserir-nome' element={<NamingRoom />} />
        <Route path='/pergunta' element={<Pergunta />} />
      </Routes>
    </>
  )
}

export default App
