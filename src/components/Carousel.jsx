import React, { useState, useEffect,  } from 'react'
import image1 from '../assets/img/slider1.jpg'
import image2 from '../assets/img/slider2.jpg'

export const Carousel = ({hovered, images}) => {

	const [currentIndex, setCurrentIndex] = useState(0);


	const imageUrls = images.map(image => image.img);

	console.log(imageUrls);

	const handlePrevClick = () => {
		const newIndex = (currentIndex - 1 + imageUrls.length ) % imageUrls.length ; 
		setCurrentIndex(newIndex);
	};

	const handleNextClick = () => {
		const newIndex = (currentIndex + 1) % imageUrls.length;
		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		let interval;
		
		if (hovered) {
			interval = setInterval(() => {
				const newIndex = (currentIndex + 1) % imageUrls.length;
				setCurrentIndex(newIndex);
			}, 1100);	
		} else {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [currentIndex, hovered, imageUrls]);

	return (

		<div id="default-carousel" className="relative w-full" data-carousel="slide" >
			<div className="relative h-56 overflow-hidden md:h-97">

			{imageUrls.map( (image, index) => 
			(
				console.log(currentIndex),
				console.log("Break"),
				console.log(index),

				<div key={index} className={`duration-700 ease-in-out ${currentIndex === index ? 'block' : 'hidden'}`} data-carousel-item>
					<img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
				</div>
			))}

				
				
			</div>

			<div className={`absolute ${hovered ? "" : "hidden"} z-30 flex space-x-1 -translate-x-1/2 bottom-5 left-1/2`}>
			{imageUrls.map((url, index) => (
				<button
					key={index}
					type="button"
					className={`w-3 h-1 ${currentIndex === index ? 'bg-red-600' : 'bg-white'}  rounded-md`}
					aria-current="true"
					aria-label="Slide 1"
					data-carousel-slide-to="0"
				></button>
			))}
				
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
