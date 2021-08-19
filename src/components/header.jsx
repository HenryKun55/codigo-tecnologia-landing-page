import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="circle"
          bg={{ zIndex: 0, position: "absolute", top: 0 }}
        />
        <div className="overlay">
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
                  Veja mais
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
