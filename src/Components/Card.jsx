import ItemCard from './ItemCard'

function Card() {
  return (
    <ul className="ListaDeCards">
      <ItemCard title={"Café da Manhã"}/>
      <ItemCard title={"Almoçar"}/>
      <ItemCard title={"Lanches"}/>
      <ItemCard title={"Janta"}/>
    </ul>
  );
}
export default Card;
