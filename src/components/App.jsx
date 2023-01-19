import Recipes from './Recipes';
import './../styles/index.scss';
import sword from './../images/swc-sword.png';
import swordSvg from './../images/sword.svg';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi React</h1>
        </section>
        <img src={sword} alt="sword" width="250" />
        <img className="svgc" src={swordSvg} alt="sword-svg" />
        <Recipes />
      </main>
    </>
  );
};

export default App;
