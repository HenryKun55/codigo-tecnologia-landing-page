import { useEffect } from "react";
import { useLocation } from "react-router";

export const Footer = (props) => {
  const { pathname } = useLocation();

  const isContact = pathname === "/contato";

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <footer className={isContact ? "only-contact" : "footer"}>
      <div id="footer">
        <div className="social">
          <span className="title">Nos acompanhe nas redes sociais!</span>
          <div className="social-media">
            <a href="https://www.instagram.com/codigotecnologia">
              {/* <i className="fab fa-instagram"></i> */}
              <img
                className="instagram"
                src="/img/icons/instagram.webp"
                height={40}
              />
            </a>
            <a href="https://www.facebook.com/C%C3%B3digo-Tecnologia-113071403542897">
              {/* <i className="fab fa-facebook"></i> */}
              <img
                className="facebook"
                src="/img/icons/facebook.png"
                height={40}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCh_h02M5KyFPFFvuM2vnJHw">
              {/* <i className="fab fa-youtube"></i> */}
              <img
                className="youtube"
                src="/img/icons/youtube.png"
                height={50}
              />
            </a>
          </div>
        </div>

        <div className="info-contact">
          <div className="contact">
            <span className="title">Fale conosco!</span>
            <div className="info">
              <div>
                <i className="fas fa-phone"></i>
                <span className="phone">+55 (81) 9 9939-8866</span>
              </div>
              <div>
                <i className="fas fa-phone"></i>
                <span className="phone">+55 (81) 9 9177-9644</span>
              </div>
              <div>
                <i className="fas fa-phone"></i>
                <span className="phone">+55 (81) 4105-2527</span>
              </div>
              <div>
                <i className="far fa-envelope"></i>
                <span className="email">vendas.codigotecnologia@gmail.com</span>
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <span className="address">
                  Av. Professora Dulce Ramos, n?? 25, loteamento Tereza Mendon??a,
                  Bairro Gameleira, Belo Jardim-PE, Cep 55153-810
                </span>
              </div>
            </div>
          </div>
          <div className="text-center me">
            <p>
              &copy; 2021 Design by{" "}
              <a href="https://www.findfh.dev" rel="nofollow">
                Fl??vio Henrique
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
