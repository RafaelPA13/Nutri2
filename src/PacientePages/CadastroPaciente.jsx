import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from 'react-router-dom';

import Logo from "../assets/Logo.png";

function CadastroPaciente() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate()

  function Cadastrar(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }
  if (user) {
    navigate('/loginpaciente')
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
      <h1 className="titulo">Paciente</h1>
      <main className="bloco-login-cadastro">
        <img src={Logo} alt="Logo " />
        <h1>Cadastre-se</h1>
        <p className="label">Nome:</p>
        <input className="caixa-texto" type="text" id="nome" />
        <p className="label">Email:</p>
        <input
          className="caixa-texto"
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="label">Senha:</p>
        <input
          className="caixa-texto"
          type="password"
          id="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="label">Confirme senha:</p>
        <input className="caixa-texto" type="password" id="senhaConfirmada" />
        <a href="/loginpaciente">Já sou cadastrada</a>
        <button onClick={Cadastrar}>Cadastrar</button>
      </main>
    </body>
  );
}
export default CadastroPaciente;
