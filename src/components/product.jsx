import React from "react";
import { useLocation } from "react-router";

export const Product = (props) => {
  const { state } = useLocation();

  const productsArray = props.data.map(({ products }) =>
    products.find(({ id }) => id === state.id)
  );

  const { id, title, descriptions, detail, warranty, use, thumb } =
    productsArray
      .filter((product) => product)
      .find(({ id }) => id === state.id);

  console.log(thumb);

  return (
    <div id="product" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Produto</h2>
        </div>
        <div className="row info">
          <div className="product-image">
            <img src={`../${thumb}`} alt={title} />
          </div>
          <div className="info">
            <h3>{title}</h3>
            <br />
            <div className="description">
              {descriptions.map((description) => (
                <p key={description}>{description}</p>
              ))}
              <p>{detail}</p>
              <br />
              <br />
              <h4>{warranty}</h4>
              <h4>{use}</h4>
            </div>
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
// <p>{detail}</p>
// <h4>{warranty}</h4>
// <h4>{use}</h4>
