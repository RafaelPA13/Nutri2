import MenuProfissional from '../Components/MenuProfissional'
import { CgProfile } from 'react-icons/cg'
import CriadorDeReceita from '../Components/CriadorDeReceita'
import Card from '../Components/Card'

function PerfilPaciente(){
    return(
        <body className="CentroX">
            <div className="barra-topo"></div>
            <MenuProfissional />
            <main className='Main-Com-Menu'>
                <CgProfile/>
                <h1>Nome Paciente</h1>
                <CriadorDeReceita/>
                <Card/>
            </main>
        </body>
    )
} 
export default PerfilPaciente