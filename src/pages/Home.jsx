import React, { useEffect, useState } from 'react'
import axios from "axios";
import img from "../assets/img/slider1.jpg";
import { Button } from '../components/Button';

import { Card } from "../components/Card.jsx";
import { Link } from 'react-router-dom';

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

        const firstTenCars = carList.slice(0, 10);

        return (
            firstTenCars.map(car => (
                <Card key={car.id} carBrand={car.brand} carModel={car.car_model} sold={car.sold} carPrice={car.price} images={car.carimage_set} />
            ))
        )
    };

    return (
        <>
            <img className="h-auto max-w-full" src={img} alt="image description" />
            <main>
                <p className='font-bold text-3xl mt-3' >Destaques</p>
                <hr className='border-gray-300 my-3' />
                <div className="flex flex-wrap justify-center">
                    {renderItems()}
                </div>
                <div className='mt-10 flex justify-center'>    
                <Button text={`See All (${carList.length})`} link={'#'} />
                </div>
            </main>
        </>
    )
}
