import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Dropdown from "./dropdown";
import RadioButton from "./RadioButton";
import { Range } from "./Range";
import RangeSlider from "./RangeSlider";
import { Button2 } from "./Button2";
import { Button } from "./Button";

export const SideBar = () => {
  const [hiddenBar, setHiddenBar] = useState(false);
  const [hiddenTab, setHiddenTab] = useState(true);
  const [brandList, setBrandList] = useState([]);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setHiddenBar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/brands/");
      const data = response.data;

      setBrandList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(brandList);

  const brands = [
    "Bonnie Green",
    "Jese Leos",
    "Michael Gough",
    "Robert Wall",
    "Joseph Mcfall",
    "Leslie Livingston",
    "Roberta Casas",
  ];

  const models = [
    "a",
    "b",
    "c",
    "Robert Wall",
    "Joseph Mcfall",
    "Leslie Livingston",
    "Roberta Casas",
  ];

  const fuel = ["c", "d", "e"];

  const type = ["f", "g", "h"];

  const toggleSidebar = () => {
    setHiddenBar(!hiddenBar);
  };

  const toggleTab = () => {
    setHiddenTab(!hiddenTab);
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="relative" ref={componentRef}>
      <button
        onClick={toggleSidebar}
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className={`inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full ${
          hiddenBar ? "-translate-x-full" : "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className=" h-full overflow-y-auto overflow-x-hidden bg-gray-50">
          <div className="flex justify-center items-center p-3 font-bold">
            <h1 className="text-center text-x">Filters</h1>
          </div>
          <hr />

          <div class="px-3 py-4  ">
            <ul class="space-y-5 font-medium">
              <li>
                <Dropdown listParam={brands} text={"Brand"}></Dropdown>
              </li>
              <li>
                <Dropdown listParam={models} text={"Models"}></Dropdown>
              </li>
              <li>
                <RadioButton
                  name={"Fuel"}
                  listParam={fuel}
                  text={"Fuel Type"}
                ></RadioButton>{" "}
              </li>
              <li>
                <RadioButton
                  name={"Category"}
                  listParam={type}
                  text={"Category"}
                >
                  {" "}
                </RadioButton>
              </li>
              <li>
                <RadioButton
                  name={"State"}
                  listParam={type}
                  text={"State Of Use"}
                ></RadioButton>
              </li>
              <li>
                <Range
                  min={1900}
                  minValue={1990}
                  max={currentYear}
                  maxValue={2020}
                  text={"Year"}
                ></Range>
              </li>
              <li>
                <Range
                  min={0}
                  minValue={0}
                  maxValue={9999999}
                  text={"Mileage"}
                  unit={"Km"}
                ></Range>
              </li>
              <li>
                <Range
                  min={1}
                  minValue={1}
                  max={99999999}
                  maxValue={99999999}
                  text={"Price"}
                  unit={"€"}
                ></Range>
              </li>
            </ul>
            <div className="flex justify-center items-center gap-2 mt-3">
              <div>
                <Button2 text={"Apply"} onClick={""} icon={"save"}></Button2>
              </div>
              <div>
                <Button text={"Reset"}></Button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
