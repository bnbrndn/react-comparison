import { useState, useMemo } from "react";
import items from "./shoes";
import CompareSection from "./Components/CompareSection";

function App() {
  const [compareLeft, setCompareLeft] = useState(items[0]);
  const [compareRight, setCompareRight] = useState(items[1]);

  const buttons = useMemo(() => [...new Set(items.map((item) => item.category))], [items]);

  const filter = (button) => items.find((item) => item.category === button);

  const compareLeftSection = (item) => setCompareLeft(filter(item));
  const compareRightSection = (item) => setCompareRight(filter(item));

  return (
    <section className="comparison">
      <div className="comparison-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="comparison-header__title">Compare</h1>
              <p className="comparison-header__tagline">Compare specs of your favorite On models in the drop-down lists below.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="comparison-content">
        <div className="container">
          <div className="row">
            <CompareSection compareItem={compareLeft} buttonOptions={buttons} filter={compareLeftSection} />
            <CompareSection compareItem={compareRight} buttonOptions={buttons} filter={compareRightSection} />
          </div>
        </div>
      </div>
      {/* <Menu menuItem={menuItem} /> */}
    </section>
  );
}

export default App;
