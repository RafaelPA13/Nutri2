import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagInicial from './Pages/PagInicial'
import LoginPaciente from './PacientePages/LoginPaciete'
import LoginProfissional from './ProfissionalPages/LoginPro'
import CadastroPaciente from './PacientePages/CadastroPaciente'
import CadastroProfissional from './ProfissionalPages/CadastroPro'
import Apresentacao from './Pages/Apresentacao'
import Confirmacao from './Pages/ConfirmacaoDaCompra'

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PagInicial/>}/>
          <Route path='/loginpaciente' element={<LoginPaciente/>}/>
          <Route path='/loginprofissional' element={<LoginProfissional/>}/>
          <Route path='/cadastropaciente' element={<CadastroPaciente/>}/>
          <Route path='/cadastroprofissional' element={<CadastroProfissional/>}/>
          <Route path='/apresentacao' element={<Apresentacao/>}/>
          <Route path='/confirmacao' element={<Confirmacao/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App