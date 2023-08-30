import "../App.css";
import Logo from '../assets/Logo.png'

function LoginPaciente() {
  return (
    <body className="CentroXY">
        <h1 className="titulo">Paciente</h1>
        <main className="bloco-login">
            <img src={Logo} alt="Logo" />
            <h1>Login</h1>
            <p className="label">Email:</p>
            <input type="email" id="email" />
            <p className="label">Senha:</p>
            <input type="password" id="senha"/>
            <h2 className="cadastro">Cadastre-se</h2>
            <button className="entrar">Entrar</button>
        </main>
    </body>
  );
}
export default LoginPaciente;
