import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagInicial from './Pages/PagInicial'

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PagInicial/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App