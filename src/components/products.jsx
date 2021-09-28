import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Products = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = props.data.map(({ products }) =>
    products.map(({ thumb }) => thumb.replace("-small", "-large"))
  );

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Produtos</h2>
        </div>
        <div className="row">
          <div className="products-items">
            {props.data.map(({ type, products }) => (
              <>
                <div className="title-products">
                  <h3>{type}</h3>
                </div>
                <div className="products">
                  {products.map(
                    (
                      {
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
                      <div
                        key={index}
                        onClick={() => openImageViewer(index)}
                        className="col-sm-6 col-md-4 col-lg-4 product"
                      >
                        <div className="products-item cursor">
                          <div className="hover-bg">
                            <div className="hover-text">
                              <div className="text">
                                <h4>{title}</h4>
                                {descriptions && (
                                  <ul>
                                    {descriptions &&
                                      descriptions.map((description, index) => (
                                        <li key={index}>{description}</li>
                                      ))}
                                  </ul>
                                )}
                                {selections && (
                                  <ul>
                                    {selections &&
                                      selections.map((selection, index) => (
                                        <li key={index}>{selection}</li>
                                      ))}
                                  </ul>
                                )}
                                <p>{detail}</p>
                                <h4>{warranty}</h4>
                                <h4>{use}</h4>
                              </div>
                            </div>
                            <img
                              src={thumb}
                              className="img-responsive"
                              alt={title}
                            />{" "}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
