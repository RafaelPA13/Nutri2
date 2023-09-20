import MenuProfissional from '../Components/MenuProfissional'
import { CgProfile } from 'react-icons/cg'

function HomeProfissional(){
    return(
        <body className="CentroXY">
            <div className='barra-topo'></div>
            <MenuProfissional/>

            <main className='Centralizado'>
                <h1>Centro Profissional</h1>
                <CgProfile/>
            </main>            
        </body>
    )
}
export default HomeProfissional