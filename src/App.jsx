import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Products } from "./components/products";
import { Product } from "./components/product";
import { Benevolent } from "./components/benevolent";
import { Depoiments } from "./components/depoiments";
import { Footer } from "./components/footer";

import data from "./data/data.json";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Header data={data.Header} />
          <About data={data.About} />
          <Products data={data.Products} />
          <Benevolent data={data.Benevolent} />
          <Depoiments data={data.Depoiments} />
        </Route>
        <Route exact path="/sobre">
          <About data={data.About} />
        </Route>
        <Route exact path="/produtos">
          <Products data={data.Products} />
        </Route>
        <Route exact path="/produtos/:id">
          <Product data={data.Products} />
        </Route>
        <Route exact path="/beneficios">
          <Benevolent data={data.Benevolent} />
        </Route>
        <Route exact path="/depoimentos">
          <Depoiments data={data.Depoiments} />
        </Route>
        <Route exact path="/contato">
          <Footer />
        </Route>
      </Switch>
      <div className="square">
        <span className="circle"></span>
        <span className="circle2"></span>
        <span className="square-text">Fale conosco pelo WhatsApp</span>
        <a href="https://wa.me/558141052527?text=Tem%20alguma%20dúvida?%20Entre%20em%20contato%20agora%20mesmo!">
          <img
            className="whatsapp"
            src="https://www.whatsapp.com/favicon.ico"
          />
        </a>
      </div>

      <Footer />
    </Router>
  );
}

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   return (
//     <div>
//       <Navigation />
//       <Header data={data.Header} />
//       <About data={data.About} />
//       <Products data={data.Products} />
//       {/* <Services data={data.Services} /> */}
//       <Benevolent data={data.Benevolent} />
//       <Depoiments data={data.Depoiments} />

//       <Footer />
//     </div>
//   );
// };

// export default App;
