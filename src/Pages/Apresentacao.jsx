import "../App.css";
import mulher from "../assets/mulher.png";
import { CgProfile } from 'react-icons/cg'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { BsFillCalendarWeekFill } from 'react-icons/bs'

function Apresenstacao() {
  return (
    <body className="CentroX">
      <header className="banner">
        <div>
          <h1>Saiba tudo sobre a menopausa</h1>
          <p>
            Sem salas de esperas ou conversas constrangedoras. Com tratamentos
            para ajudar todas as mulheres.
          </p>
          <img src={mulher} alt="Banner" />
          <button>Assine Já</button>
        </div>
      </header>
      <main>
        <ul className="beneficios">
          <li>
            <div className="icone">
              <CgProfile/>
            </div>
            <p>Médicos disponíveis para acompanhamentos </p>
          </li>
          <li>
            <div className="icone">
              <AiOutlineUnorderedList/>
            </div>
            <p>Dietas feitas por médicos especializados</p>
          </li>
          <li>
            <div className="icone">
              <MdAttachMoney/>
            </div>
            <p>Ótimo custo beneficio</p>
          </li>
          <li>
            <div className="icone">
              <BsFillCalendarWeekFill/>
            </div>
            <p>Controle de suas atividades do cotidiano</p>
          </li>
        </ul>

        <h1 className="titulos-principais">Como Funciona</h1>
      </main>
    </body>
  );
}
export default Apresenstacao;
