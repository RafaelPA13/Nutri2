import Logo from '../assets/Logo.png'

function LoginPaciente() {
  return (
    <body className="CentroXY">
        <h1 className="titulo">Paciente</h1>
        <main className="bloco-login-cadastro">
            <img src={Logo} alt="Logo" />
            <h1>Login</h1>
            <p className="label">Email:</p>
            <input className="caixa-texto" type="email" id="email" />
            <p className="label">Senha:</p>
            <input className="caixa-texto" type="password" id="senha"/>
            <a href="/cadastropaciente">Cadastre-se</a>
            <button>Entrar</button>
        </main>
    </body>
  );
}
export default LoginPaciente;
