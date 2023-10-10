import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { db } from "../Services/firebaseConfig";
import { useEffect, useState } from "react";
import { doc, collection, onSnapshot, query, deleteDoc, addDoc, } from "firebase/firestore";

function CriadorDeReceita() {
  const [text, setText] = useState("");
  const [checkbox, setCheckbox] = useState("");

  const [Receitas, setReceitas] = useState([]);

    const CriarComida = async (e) => {
      e.preventDefault();

      if (Receitas.length == 0) {
        await addDoc(collection(db, "Receitas"), {
          Comida: text,
          Refeicao: checkbox,
        });
      }

      for (let i = 0; i < Receitas.length; i++) {
        if (text == Receitas[i].Comida) {
          console.log("ja tem");
          break;
        } else {
          await addDoc(collection(db, "Receitas"), {
            Comida: text,
            Refeicao: checkbox,
          });
        }
      }
      setText(""), setCheckbox("");
    };

    useEffect(() => {
      const q = query(collection(db, "Receitas"));
      const ler = onSnapshot(q, (querySnapshot) => {
        let listaDeReceitas = [];
        querySnapshot.forEach((doc) => {
          listaDeReceitas.push({ ...doc.data(), id: doc.id });
        });
        setReceitas(listaDeReceitas);
      });
      return () => ler;
    }, []);

    const DeletarComida = async (Comida) => {
      for (let i = 0; i < Receitas.length; i++) {
        if (Comida == Receitas[i].Comida) {
          let thisComida = Receitas[i];
          console.log(thisComida);
          await deleteDoc(doc(db, "Receitas", thisComida.id));
          break;
        }
      }
    };

  return (
    <form>
      <div className="Header-Input">
        <button onClick={()=>{DeletarComida(text)}}>
          <BsTrash3 />
        </button>
        <input
          type="text"
          value={text}
          placeholder="Adicione uma Receita"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={CriarComida}>
          <AiOutlinePlus />
        </button>
      </div>
      <ul className="checkbox">
        <li>
          <label>
            <input
              type="checkbox"
              value={"Café da Manhã"}
              onChange={(c) => setCheckbox(c.target.value)}
            />
            <p>Café da manhã</p>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value={"Almoço"}
              onChange={(c) => setCheckbox(c.target.value)}
            />
            <p>Almoço</p>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value={"Lanches"}
              onChange={(c) => setCheckbox(c.target.value)}
            />
            <p>Lanches</p>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value={"Janta"}
              onChange={(c) => setCheckbox(c.target.value)}
            />
            <p>Janta</p>
          </label>
        </li>
      </ul>
    </form>
  );
}
export default CriadorDeReceita;
