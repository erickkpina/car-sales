import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export const Inventory = () => {
  const [carList, setCarList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/cars/");
      const data = response.data;

      setCarList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItems = () => {
    return carList.map((car) => (
      <Card
        key={car.id}
        carBrand={car.brand}
        carFuel={car.fuel}
        carMileage={car.mileage}
        carGearbox={car.gearbox}
        carModel={car.car_model}
        carYear={car.year}
        sold={car.sold}
        carPrice={car.price}
        images={car.carimage_set}
      />
    ));
  };

  return (
    <main className="flex relative">
      <div className="h-full md:relative absolute md:z-0 z-40 mt-1">
        <SideBar></SideBar>
      </div>
      <div className="flex-1 mt-10 ">
        {" "}
        <div className="flex flex-wrap justify-center">{renderItems()}</div>
      </div>
    </main>
  );
};

export default Inventory;
