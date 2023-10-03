import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function ItemCard({title,img}) {

  const [open, setOpen] = useState(false)

  return (
    <li className="Card">
      <div className="Header-Card" style={{backgroundImage:`url(${img})`}}>
        <button onClick={()=>{setOpen(!open)}}>
          {title} <IoIosArrowForward />
        </button>
      </div>
      <div className={open ? "Card-Body aberto" : "Card-Body"}>
        <h3>Receitas</h3>
        <ul className="ListaDeReceitas">{/* Map das receitas */}</ul>
      </div>
    </li>
  );
};

export default ItemCard;
