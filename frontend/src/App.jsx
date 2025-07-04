import { Routes, Route } from 'react-router-dom'
import './App.css'
import Page from '../pages/index'
import CodigoVerificacao from '../components/VerificacaoCodigo/VerificacaoCodigo'
import InserirNome from '../components/InserirNome/InserirNome'
import SelecionarPergunta from '../components/Pergunta/Pergunta'
import Resumo from '../components/Resumo/Resumo'
import Resultado from '../components/Resultado/Resultado'
import ErroPage from '../components/ErroPage/ErroPage'
import LoadPage from '../components/LoadPage/LoadPage'
import PerguntaSemImagem from '../components/Pergunta/PerguntaInformacao'
import PerguntaImagemH from '../components/Pergunta/PerguntaImagemH'
import PerguntaImagemV from '../components/Pergunta/PerguntImagemV'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Page />} >
          <Route path='/' element={<CodigoVerificacao />} />
          <Route path='/inserir-nome' element={<InserirNome />} />
          <Route path='/resumo' element={<Resumo />} />
          <Route path='/resultado' element={<Resultado />} />
          <Route path='/pergunta' element={<SelecionarPergunta />} >
            <Route path='/pergunta/semImagem' element={<PerguntaSemImagem/>} />
            <Route path='/pergunta/perguntaImagemH' element={<PerguntaImagemH/>} />
            <Route path='/pergunta/perguntaImagemV' element={<PerguntaImagemV/>} />
          </Route>
          <Route path='*' element={<ErroPage />} />
          <Route path='/load' element={<LoadPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
