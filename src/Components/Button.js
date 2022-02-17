import React from "react";

function Button({ button, filter }) {
  return (
    <div className="comparison-buttons">
      <div className="comparison-dropdown">
        <button className="comparison-dropdown__btn">Select Shoe</button>
        <div className="comparison-dropdown__content">
          {button.map((cat, i) => {
            return (
              <a key={i} className="dropdown-item btn" type="button" onClick={() => filter(cat)}>
                {cat}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Button;
