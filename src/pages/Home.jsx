import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="container-logo">
        <img className="logo" src="terraplanagem.png" alt="kk" />
      </div>
      <h1>Lista de Vagas</h1>
      <div className="job-container">
        <div className="job">
          <h1>Operador de escavadeira</h1>
          <p>descrição: empresa tal contrata funcionário tal para tal coisa</p>
          <p className="contato">contato: 999999</p>
          <p>
            <img className="vetor" src="./big-money-bag.svg" alt="money" />
            Salário a combinar
          </p>
          <button>Candidatar</button>
        </div>
        <div className="job">
          <h1>Operador de escavadeira</h1>
          <p>descrição: empresa tal contrata funcionário tal para tal coisa</p>
          <p className="contato">contato: 999999</p>
          <p>
            <img className="vetor" src="./big-money-bag.svg" alt="money" />
            Salário a combinar
          </p>
          <button>Candidatar</button>
        </div>
      </div>

      <div className="job-container">
        <div className="job">
          <h1>Operador de escavadeira</h1>
          <p>descrição: empresa tal contrata funcionário tal para tal coisa</p>
          <p className="contato">contato: 999999</p>
          <p>
            <img className="vetor" src="./big-money-bag.svg" alt="money" />
            Salário a combinar
          </p>
          <button>Candidatar</button>
        </div>
        <div className="job">
          <h1>Operador de escavadeira</h1>
          <p>descrição: empresa tal contrata funcionário tal para tal coisa</p>
          <p className="contato">contato: 999999</p>
          <p>
            <img className="vetor" src="./big-money-bag.svg" alt="money" />
            Salário a combinar
          </p>
          <button>Candidatar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
