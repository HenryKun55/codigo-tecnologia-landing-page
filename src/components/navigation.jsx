import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header App-logo">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <button className="page-scroll">
            <Link to="/">
              <img
                src="img/logo-label-white.png"
                className="logo"
                alt="Código Tecnologia"
                height={50}
              />
            </Link>
          </button>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className="page-scroll">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="page-scroll">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/produtos" className="page-scroll">
                Produtos
              </Link>
            </li>
            <li>
              <Link to="/beneficios" className="page-scroll">
                Benefícios
              </Link>
            </li>
            <li>
              <Link to="/depoimentos" className="page-scroll">
                Depoimentos
              </Link>
            </li>
            <li>
              <Link to="/contato" className="page-scroll">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
