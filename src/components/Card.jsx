import React, { useState, useEffect } from 'react'
import { Carousel } from './Carousel'
import { Button } from './Button';
import manualIcon from '../assets/img/manual-transmission.png'

export const Card = ({ carBrand, carModel, carPrice, carFuel, carMileage, carGearbox, carYear, sold, images }) => {
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
                <div className='flex flex-row justify-between'>
                    <a href="#">
                        <h5 className="mb-px text-2xl font-bold tracking-tight text-gray-900 dark:text-white disabled">{carBrand}</h5>
                    </a>

                    <p className="">{carPrice}€</p>

                    
                
                </div>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{carModel + ' - ' + carYear }</p>
         
                <hr />
                <div className='flex flex-row mt-3 font-normal text-gray-700 dark:text-gray-400  justify-between'>

                <p className=''><i className="bi bi-speedometer2 mx-px"></i>{carMileage}Km</p>
                <p className=''><i className="bi bi-droplet mx-px"></i>{carFuel}</p>
                <div className='flex flex-row items-center space-x-[2px]'><img src={manualIcon} className='h-[15px]'/><p>{carGearbox}</p></div>

                </div>

                
            </div>
        </div>
    )
}
