import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Products } from "./components/products";
import { Benevolent } from "./components/benevolent";
import { Depoiments } from "./components/depoiments";
import { Services } from "./components/services";
import { Footer } from "./components/footer";
import SmoothScroll from "smooth-scroll";

import data from "./data/data.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <Header data={data.Header} />
      <About data={data.About} />
      <Products data={data.Products} />
      {/* <Services data={data.Services} /> */}
      <Benevolent data={data.Benevolent} />
      <Depoiments data={data.Depoiments} />

      <Footer />
    </div>
  );
};

export default App;
