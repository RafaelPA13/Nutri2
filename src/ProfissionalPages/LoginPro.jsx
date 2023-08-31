import Logo from "../assets/Logo.png";

function LoginProfissional() {
  return (
    <body className="CentroXY">
      <h1 className="titulo">Profissional</h1>
      <main className="bloco-login-cadastro">
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>
        <p className="label">Email:</p>
        <input className="caixa-texto" type="email" id="email" />
        <p className="label">Senha:</p>
        <input className="caixa-texto" type="password" id="senha" />
        <a href="/cadastroprofissional">Cadastre-se</a>
        <button>Entrar</button>
      </main>
    </body>
  );
}
export default LoginProfissional;
