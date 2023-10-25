import React, { useState, useEffect } from 'react'
import { Carousel } from './Carousel'
import { Button } from './Button';

export const Card = ({ carBrand, carModel, carPrice, sold, images }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={`w-[350px] mx-3 mt-5 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:shadow-2xl `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
                <Carousel hovered={hovered} sold={sold} images={images} />
            </div>
            <div className={`${sold ? " grayscale" : ""} p-5`}>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white disabled">{carBrand}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{carModel}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{carPrice}€</p>
                
            </div>
        </div>
    )
}
