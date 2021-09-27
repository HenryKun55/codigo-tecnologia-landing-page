export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        {/* <ParticlesBg
          type="circle"
          bg={{ zIndex: 0, position: "absolute", top: 0 }}
        /> */}
        <img src="img/banner2.jpg" className="logo" alt="Código Tecnologia" />
        {/* <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>
                  {props.data ? props.data.title : "Carregando"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : "Carregando"}</p>
                <a
                  href="#history"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Conhecer
                </a>{" "}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
};
