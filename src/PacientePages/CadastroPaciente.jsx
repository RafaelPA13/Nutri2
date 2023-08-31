import Logo from "../assets/Logo.png";

function CadastroPaciente() {
  return (
    <body className="CentroXY">
      <main className="bloco-login-cadastro">
        <img src={Logo} alt="Logo " />
        <h1>Cadastre-se</h1>
        <p className="label">Nome:</p>
        <input className="caixa-texto" type="text" id="nome" />
        <p className="label">Email:</p>
        <input className="caixa-texto" type="email" id="email" />
        <p className="label">Senha:</p>
        <input className="caixa-texto" type="password" id="senha" />
        <p className="label">Confirme senha:</p>
        <input className="caixa-texto" type="password" id="senha" />
        <button>Criar</button>
      </main>
    </body>
  );
}
export default CadastroPaciente;
