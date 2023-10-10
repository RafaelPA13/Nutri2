import ItemCard from './ItemCard'
import CafeDaManha from '../assets/CafeDaManha.png'
import Almoco from '../assets/Almoco.png'
import Lanches from '../assets/Lanches.png'
import Janta from '../assets/Janta.png'

function Card() {
  return (
    <ul className="ListaDeCards">
      <ItemCard title={"Café da Manhã"} img={CafeDaManha}/>
      <ItemCard title={"Almoço"} img={Almoco}/>
      <ItemCard title={"Lanches"} img={Lanches}/>
      <ItemCard title={"Janta"} img={Janta}/>
    </ul>
  );
}
export default Card;
