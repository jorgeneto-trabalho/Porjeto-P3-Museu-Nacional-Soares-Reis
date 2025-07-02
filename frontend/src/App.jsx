import { Routes, Route } from 'react-router-dom'
import './App.css'
import Page from '../pages/index'
import CodigoVerificacao from '../components/VerificacaoCodigo/VerificacaoCodigo'
import InserirNome from '../components/InserirNome/InserirNome'
import SelecionarPergunta from '../components/Perguntas/Pergunta'
import Resumo from '../components/Resumo/Resumo'
import Resultado from '../components/Resultado/Resultado'
import Erro from '../components/Erro/Erro'
import Load from '../components/Load/Load'
import Ranking from '../components/Ranking/Ranking'


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
          <Route path='*' element={<Erro />}/>
          <Route path='/load' element={<Load />}/>
          <Route path='/ranking' element={<Ranking />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
