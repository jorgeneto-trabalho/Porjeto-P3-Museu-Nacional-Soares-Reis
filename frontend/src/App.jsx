import { Routes, Route } from 'react-router-dom'
import './App.css'
import StartingPage from '../pages'
import NamingRoom from '../pages/inserir-nome'
import ResumoPage from '../pages/resumo'
import Pergunta from '../pages/pergunta'
import ResultadoPage from "../pages/resultado";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/inserir-nome' element={<NamingRoom />} />
        <Route path='/resumo' element={<ResumoPage />} />
        <Route path='/pergunta' element={<Pergunta />} />
        <Route path='/resultado' element={<ResultadoPage />} />
     
      </Routes>
    </>
  )
}

export default App
