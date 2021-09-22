export const Benevolent = (props) => {
  return (
    <div id="benevolent" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Benefícios</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="item col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
