import { Routes, Route } from 'react-router-dom'
import './App.css'
import Page from '../pages/index'
import CodigoVerificacao from '../components/VerificacaoCodigo/VerificacaoCodigo'
import InserirNome from '../components/InserirNome/InserirNome'
import SelecionarPergunta from '../components/Perguntas/Pergunta'
import Resumo from '../components/Resumo/Resumo'
import Resultado from '../components/Resultado/Resultado'


function App() {

  return (
    <>
      <Routes>
        <Route element={<Page />} >
          <Route path='/' element={<CodigoVerificacao />} />
          <Route path='/inserir-nome' element={<InserirNome />} />
          <Route path='/resumo' element={<Resumo />} />
          <Route path='/resultado' element={<Resultado />} />
          <Route path='/pergunta' element={<SelecionarPergunta />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
