import React, { useState, useEffect, useRef } from "react";

export const Range = ({ min, max, minValue, maxValue, text, unit }) => {
  const [hiddenTab, setHiddenTab] = useState(true);
  const componentRef = useRef(null);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setHiddenTab(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleTab = () => {
    setHiddenTab(!hiddenTab);
  };

  return (
    <div className="relative" ref={componentRef}>
      <button
        onClick={toggleTab}
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
      >
        <span class="flex-1 ml-3 text-left whitespace-nowrap">{text}</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <ul
        id="dropdown-example"
        className={`${hiddenTab ? "hidden" : ""} py-2  p-4 space-y-2`}
      >
        <li className="">
          <div className="flex flex-col ml-1">
            <div className="w-28">
              <label className="mr-2">Min:</label>
              <div className="flex items/center">
                <input
                  className="w-28 text-sm"
                  type="number"
                  placeholder={minValue}
                  min={min}
                  max={max}
                />
                <span className="ml-2">{unit}</span>
              </div>
            </div>
            <div className="w-28">
              <label className="mr-2">Max:</label>
              <div className="flex  items-center">
                <input
                  className="w-28 text-sm"
                  placeholder={maxValue}
                  type="number"
                  min={min}
                  max={max}
                />
                <span className="ml-2">{unit}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Range;
