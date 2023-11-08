import React, { useState, useEffect } from "react";

const RangeSlider = () => {
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const [priceGap] = useState(1000);

  useEffect(() => {
    const rangeInput = document.querySelectorAll(".range-input input");
    const priceInput = document.querySelectorAll(".price-input input");
    const range = document.querySelector(".slider .progress");

    rangeInput[0].value = minPrice;
    rangeInput[1].value = maxPrice;
    priceInput[0].value = minPrice;
    priceInput[1].value = maxPrice;

    const updateRange = () => {
      range.style.left = `${(minPrice / rangeInput[0].max) * 100}%`;
      range.style.right = `${100 - (maxPrice / rangeInput[1].max) * 100}%`;
    };

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let newMinPrice = parseInt(priceInput[0].value);
        let newMaxPrice = parseInt(priceInput[1].value);

        if (
          newMaxPrice - newMinPrice >= priceGap &&
          newMaxPrice <= rangeInput[1].max
        ) {
          if (e.target.className === "input-min") {
            setMinPrice(newMinPrice);
            rangeInput[0].value = newMinPrice;
          } else {
            setMaxPrice(newMaxPrice);
            rangeInput[1].value = newMaxPrice;
          }
        }
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let newMinVal = parseInt(rangeInput[0].value);
        let newMaxVal = parseInt(rangeInput[1].value);

        if (newMaxVal - newMinVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = newMaxVal - priceGap;
            setMinPrice(newMaxVal - priceGap);
          } else {
            rangeInput[1].value = newMinVal + priceGap;
            setMaxPrice(newMinVal + priceGap);
          }
        } else {
          setMinPrice(newMinVal);
          setMaxPrice(newMaxVal);
        }

        updateRange();
      });
    });

    updateRange();

    return () => {
      priceInput.forEach((input) => {
        input.removeEventListener("input", () => {});
      });

      rangeInput.forEach((input) => {
        input.removeEventListener("input", () => {});
      });
    };
  }, [minPrice, maxPrice, priceGap]);

  return (
    <div className="wrapper bg-white rounded-lg p-8 shadow-md w-full">
      <header>
        <h2 className="text-2xl font-semibold mb-2">Price Range</h2>
        <p>Use slider or enter min and max price</p>
      </header>
      <div className="price-input flex items-center mt-6">
        <div className="field flex-1">
          <span className="text-lg mr-2">Min</span>
          <input
            type="number"
            className="input-min w-3/4 py-2 px-3 border rounded"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
        </div>
        <div className="separator text-2xl mx-2">-</div>
        <div className="field flex-1">
          <span className="text-lg mr-2">Max</span>
          <input
            type="number"
            className="input-max w-3/4 py-2 px-3 border rounded"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="slider mt-4 relative">
        <div className="progress bg-blue-500 h-2 rounded-full"></div>
      </div>
      <div className="range-input mt-4">
        <input
          type="range"
          className="range-min absolute w-full h-2"
          min="0"
          max="10000"
          value={minPrice}
          step="100"
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
        />
        <input
          type="range"
          className="range-max absolute w-full h-2"
          min="0"
          max="10000"
          value={maxPrice}
          step="100"
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
