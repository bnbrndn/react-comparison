import React from "react";

function Menu({ menuItem }) {
  function colorBars(value) {

    const arrayStat = [
      <span class="grey"></span>,
      <span class="grey"></span>,
      <span class="grey"></span>,
      <span class="grey"></span>,
      <span class="grey"></span>,
    ];

    const greenbar = <span class="green"></span>;
      arrayStat.fill(greenbar, 0, value);
    return arrayStat;

  }

  return (
    <div className="comparison-content">
      <div className="container">
        <div className="row">
          {menuItem.map((item) => {
            return (
              <div className="col-lg-12 text-center" key={item.id}>
                <div className="comparison-content__header">
                  <div className="comparison-content__image d-flex justify-content-center">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div class="comparison-content__body">
                  <div class="comparison-content__attributes d-flex flex-wrap">
                    <h3 class="comparison-content__attributes--title">GRIP</h3>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">
                        Snow &amp; Ice
                      </p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.snow)}
                      </div>
                    </div>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">
                        Soft &amp; Muddy
                      </p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.soft)}
                      </div>
                    </div>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">
                        Hard &amp; Rocky
                      </p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.hard)}
                      </div>
                    </div>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">
                        Paths &amp; Trails
                      </p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.paths)}
                      </div>
                    </div>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">Road</p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.road)}
                      </div>
                    </div>
                  </div>
                  <div class="comparison-content__attributes d-flex flex-wrap">
                    <h3 class="comparison-content__attributes--title">
                      SHOE ATTRIBUTES
                    </h3>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">Fit</p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.fit)}
                      </div>
                    </div>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">
                        Cushioning
                      </p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.cushion)}
                      </div>
                    </div>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">
                        Responsiveness
                      </p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.responsiveness)}
                      </div>
                    </div>
                    <div class="comparison-content__attribute">
                      <p class="comparison-content__attribute--title">
                        Breathability
                      </p>
                      <div class="comparison-content__attribute--value d-flex flex-wrap">
                        {colorBars(item.breathability)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
