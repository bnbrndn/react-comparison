import React from "react";
import Button from "./Button";

function CompareSection({ filter, compareItem, buttonOptions }) {
  const createAttributes = (attrValue, maxElements = 5) => {
    
    const elements = Array.from(Array(maxElements)).fill(1, 0, attrValue);
    
    return elements.map((el, index) => {
      if (el) {
        return <span key={index} className="green"></span>;
      } else {
        return <span key={index} className="grey"></span>;
      }
    });
  };

  return (
    <>
      {compareItem && (
        <div className="col-lg-6 text-center comparison-content__wrapper">
          <Button button={buttonOptions} filter={filter} />
          <div className="comparison-content__header">
            <div className="comparison-content__image d-flex justify-content-center">
              <img src={compareItem.image} alt={compareItem.title} />
            </div>
            <h2>{compareItem.title}</h2>
            <p>{compareItem.description}</p>
          </div>
          <div className="comparison-content__body">
            <div className="comparison-content__attributes d-flex flex-wrap">
              <h3 className="comparison-content__attributes--title">GRIP</h3>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Snow &amp; Ice</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.snow)}</div>
              </div>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Soft &amp; Muddy</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.soft)}</div>
              </div>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Hard &amp; Rocky</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.hard)}</div>
              </div>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Paths &amp; Trails</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.paths)}</div>
              </div>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Road</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.road)}</div>
              </div>
            </div>
            <div className="comparison-content__attributes d-flex flex-wrap">
              <h3 className="comparison-content__attributes--title">SHOE ATTRIBUTES</h3>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Fit</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.fit)}</div>
              </div>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Cushioning</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.cushion)}</div>
              </div>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Responsiveness</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.responsiveness)}</div>
              </div>
              <div className="comparison-content__attribute">
                <p className="comparison-content__attribute--title">Breathability</p>
                <div className="comparison-content__attribute--value d-flex flex-wrap">{createAttributes(compareItem.breathability)}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CompareSection;
