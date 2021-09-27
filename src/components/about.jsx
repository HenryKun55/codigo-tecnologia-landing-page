export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="about-text">
              <h2>Sobre nós</h2>
              <br />
              <div className="video about">
                <iframe
                  width="100%"
                  height="500"
                  title="codigo-tecnologia-institucional-video"
                  allow="autoplay"
                  src="https://www.youtube.com/embed/6TUAcDuMmJ8?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
                ></iframe>
              </div>
              <br />
              <h3>CONHEÇA-NOS!</h3>
              {props.data
                ? props.data.paragraphs.map((paragraph) => <p>{paragraph}</p>)
                : "loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
