import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagInicial from './Pages/PagInicial'
import LoginPaciente from './PacientePages/LoginPaciete'

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PagInicial/>}/>
          <Route path='/loginpaciente' element={<LoginPaciente/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App