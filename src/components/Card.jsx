import React, { useState, useEffect } from 'react'
import { Carousel } from './Carousel'

export const Card = ({ carName, carBrand, carPrice,sold, images }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	

    return (
        
        
            <div className={`w-[350px] ${sold ? "grayscale" : "" } mx-3 mt-5 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:shadow-2xl `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div>
                    <Carousel hovered={hovered} images={images} />
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{carName}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{carBrand}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{carPrice}€</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black border-2 border-yellow-300 rounded-lg hover:bg-yellow-300">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
      

    )
}
