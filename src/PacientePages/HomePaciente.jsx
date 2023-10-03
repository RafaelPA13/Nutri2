import MenuPaciente from '../Components/MenuPaciente'
import Card from '../Components/Card'

function HomePaciente(){
    return(
        <body className="CentroX">
            <div className="barra-topo"></div>
            <MenuPaciente/>
            <main className='Main-Home-Page'>
                <div>
                    <h1>calendário</h1>
                </div>
                <Card/>
            </main>
        </body>
    )
}
export default HomePaciente