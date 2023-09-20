import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/Logo.png";

function CadastroProfissional() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  function CadastrarProfissional(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (user) {
    navigate('/loginprofissional')
  }

  if (loading) {
    return (
      <body className="CentroXY">
        <div className="carregando"></div>
      </body>
    );
  }
  return (
    <body className="CentroXY">
      <main className="bloco-cadastro-profissional">
        <img src={Logo} alt="Logo" />
        <h2 className="label">Nome Completo:</h2>
        <input className="caixa-texto" type="label" id="nome" />
        <h2 className="label">Idade:</h2>
        <input className="caixa-texto" type="number" id="idade" />
        <h2 className="label">Email:</h2>
        <input className="caixa-texto" type="email" id="peso" onChange={(e=>{setEmail(e.target.value)})}/>
        <h2 className="label">Senha:</h2>
        <input className="caixa-texto" type="password" id="objetivo" onChange={(e=>{setPassword(e.target.value)})}/>
        <h2 className="label">N° de telefone:</h2>
        <input className="caixa-texto" type="number" id="oqg" />
        <h2 className="label">Formação academica:</h2>
        <input className="caixa-texto" type="label" id="oqng" />
        <h2 className="label">CRN/CRM:</h2>
        <input className="caixa-texto" type="label" id="oqng" />
        <h2 className="label">LinkedIn/Outra rede social:</h2>
        <input className="caixa-texto" type="label" id="oqng" />
        <h2 className="label">Adicione seu diploma:</h2>
        <input className="caixa-file" type="file" id="foto" />
        <button onClick={CadastrarProfissional}>Criar</button>
      </main>
    </body>
  );
}
export default CadastroProfissional;
