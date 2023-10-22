import React, { useState, useEffect } from 'react'
import image1 from '../assets/img/slider1.jpg'
import image2 from '../assets/img/slider2.jpg'

export const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [hovered, setHovered] = useState(false);

	const handlePrevClick = () => {
		const newIndex = (currentIndex - 1 + 2) % 2; // 5 é o número total de imagens no carrossel
		setCurrentIndex(newIndex);
	};

	const handleNextClick = () => {
		const newIndex = (currentIndex + 1) % 2;
		setCurrentIndex(newIndex);
	};

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	useEffect(() => {
		let interval;

		if (hovered) {
			interval = setInterval(() => {
				const newIndex = (currentIndex + 1) % 2;
				setCurrentIndex(newIndex);
			}, 1100);
		} else {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [currentIndex, hovered]);

	return (

		<div id="default-carousel" className="relative w-full" data-carousel="slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div className="relative h-56 overflow-hidden md:h-97">
				<div className={`duration-700 ease-in-out ${currentIndex === 0 ? 'block' : 'hidden'}`} data-carousel-item>
					<img src={image1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
				</div>
				<div className={`duration-700 ease-in-out ${currentIndex === 1 ? 'block' : 'hidden'}`} data-carousel-item>
					<img src={image2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
				</div>
			</div>

			<div className={`absolute ${hovered ? "" : "hidden"} z-30 flex space-x-1 -translate-x-1/2 bottom-5 left-1/2`}>
				<button
					type="button"
					className={`w-3 h-1 ${currentIndex === 0 ? 'bg-red-600' : 'bg-white'}  rounded-md`}
					aria-current="true"
					aria-label="Slide 1"
					data-carousel-slide-to="0"
				></button>
				<button
					type="button"
					className={`w-3 h-1 ${currentIndex === 1 ? 'bg-red-600' : 'bg-white'}  rounded-md`}
					aria-current="false"
					aria-label="Slide 2"
					data-carousel-slide-to="1"
				></button>
			</div>

			<button
				type="button"
				className={`absolute ${hovered ? "" : "hidden"} top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group`}
				data-carousel-prev
				onClick={handlePrevClick}>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50">
					<svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className={`absolute ${hovered ? "" : "hidden"} top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group`}
				data-carousel-next
				onClick={handleNextClick}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50">
					<svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>

	)
}
