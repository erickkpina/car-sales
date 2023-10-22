import React, { useEffect, useState } from 'react'
import axios from "axios";


import { Card } from "../components/Card.jsx";

export const Home = () => {
    const [carList, setCarList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/cars/');
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
        return (
            carList.map(car => (
                <Card key={car.id} carName={car.name} carBrand={car.brand} carPrice={car.price} />
            ))
        )
    };

    return (
        <main>
            <div className="flex flex-wrap justify-center">
                {renderItems()}
            </div>
        </main>
    )
}
