import { useState } from "react";
import Logo from '../assets/Logo.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../Services/firebaseConfig'

function LoginPaciente() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

   function Logar(e){
    e.preventDefault()
    signInWithEmailAndPassword(email, password)
   }

   if(loading){
    return <p>carregando...</p>
   }

   if(user){
    return console.log(user)
   }
  return (
    <body className="CentroXY">
        <h1 className="titulo">Paciente</h1>
        <main className="bloco-login-cadastro">
            <img src={Logo} alt="Logo" />
            <h1>Login</h1>
            <p className="label">Email:</p>
            <input className="caixa-texto" type="email" id="email" onChange={e => setEmail(e.target.value)} />
            <p className="label">Senha:</p>
            <input className="caixa-texto" type="password" id="senha" onChange={e => setPassword(e.target.value)}/>
            <a href="/cadastropaciente">Cadastre-se</a>
            <button onClick={Logar}>Entrar</button>
        </main>
    </body>
  );
}
export default LoginPaciente;
