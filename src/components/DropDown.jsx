import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ listParam, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const list = listParam;
  const componentRef = useRef(null);

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (index) => {
    const updatedCheckedItems = checkedItems.includes(index)
      ? checkedItems.filter((item) => item !== index)
      : [...checkedItems, index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleResetFilter = () => {
    setCheckedItems([]); // Uncheck all checkboxes
  };

  return (
    <div className="relative" ref={componentRef}>
      <button
        id="dropdownSearchButton"
        onClick={toggleDropdown}
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
        type="button"
      >
        <span class="flex-1 ml-3 text-left whitespace-nowrap">{text}</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <ul>
        <li>
          {isOpen && (
            <div
              id="dropdownSearch"
              className="z-10 bg-white rounded-lg shadow mt-2   dark:bg-gray-700"
            >
              <div className="p-3">
                <label htmlFor="input-group-search" className="sr-only">
                  {text}
                </label>
                <input
                  type="text"
                  id="input-group-search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={`Search ${text}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                {filteredList.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemClick(index)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id={`checkbox-item-${index}`}
                        type="checkbox"
                        checked={checkedItems.includes(index)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={`checkbox-item-${index}`}
                        className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        {item}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                onClick={handleResetFilter}
                className="flex items-center cursor-pointer p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline"
              >
                <i class="bi bi-arrow-clockwise mr-2"></i>
                Reset Filter
              </a>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
