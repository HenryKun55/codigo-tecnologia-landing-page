export const Depoiments = (props) => {
  return (
    <div id="depoiments">
      <div className="container">
        <div className="section-title text-center">
          <h2>Depoimentos dos nossos clientes</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="depoiment">
                    {/* <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div> */}
                    <div className="depoiment-content">
                      <p>"{d.text}"</p>
                      <div className="depoiment-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
