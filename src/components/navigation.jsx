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
            <img
              src="img/logo.png"
              className="logo"
              alt="Código Tecnologia"
              height={36}
            />
          </button>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#history" className="page-scroll">
                História
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Produtos
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Depoimentos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
