import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Products = (props) => {
  function isBiggest(title) {
    return title === "Carregador Inteligente Paralelômetro";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Produtos</h2>
        </div>
        <div className="row">
          <div className="products-items">
            {props.data.map(({ type, products }, key) => (
              <div key={`type-${key}`}>
                <div className="title-products">
                  <h3>{type}</h3>
                </div>
                <div className="products">
                  {products.map(
                    (
                      {
                        id,
                        title,
                        descriptions,
                        selections,
                        detail,
                        warranty,
                        use,
                        thumb,
                      },
                      index
                    ) => (
                      <Link
                        key={index}
                        to={{
                          pathname: `/produtos/${id}`,
                          state: { id },
                        }}
                      >
                        <div className="col-sm-6 col-md-4 col-lg-4 product">
                          <div className="products-item cursor">
                            <div className="hover-bg-biggest">
                              <div className="hover-text">
                                <div className="text"></div>
                              </div>
                              <img
                                src={thumb}
                                className="biggest"
                                alt={title}
                              />{" "}
                              <h4>{title}</h4>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// {descriptions && (
//   <ul>
//     {descriptions &&
//       descriptions.map((description, index) => (
//         <li key={index}>{description}</li>
//       ))}
//   </ul>
// )}
// {selections && (
//   <ul>
//     {selections &&
//       selections.map((selection, index) => (
//         <li key={index}>{selection}</li>
//       ))}
//   </ul>
// )}
// <p>{detail}</p>
// <h4>{warranty}</h4>
// <h4>{use}</h4>
