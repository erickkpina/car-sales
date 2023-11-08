import React, { useState, useEffect, useRef } from "react";

export const RadioButton = ({ listParam, text, name }) => {
  const [hiddenTab, setHiddenTab] = useState(true);
  const componentRef = useRef(null);

  const list = listParam;

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
        className={`${hiddenTab ? "hidden" : ""} py-2 p-4 space-y-2`}
      >
        {list.map((item, index) => (
          <li>
            <div class="flex items-center mb-4">
              <input
                id={`default-radio-${text[0] + index}`}
                type="radio"
                value=""
                name={`${name}`}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for={`default-radio-${text[0] + index}`}
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioButton;
