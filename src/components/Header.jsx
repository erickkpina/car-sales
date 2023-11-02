import React, { useState } from 'react'
import { Button2 } from './Button2';

export const Header = () => {
    const [hidden, setHidden] = useState(true);
    return (
        <header>
            <nav className="bg-black fixed z-50 w-full top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Car Sales</span>
                    </a>
                    <div className="flex md:order-2">
                        <Button2 text={"We call you"} icon={"telephone"}/>
                        <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${hidden ? "hidden" : ""} text-center items-center justify-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-white hover:text-yellow-300 hover:ease-in-out hover:duration-300 md:bg-transparent md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white hover:text-yellow-300 hover:ease-in-out hover:duration-300 md:hover:bg-transparent md:p-0">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white hover:text-yellow-300 hover:ease-in-out hover:duration-300 md:hover:bg-transparent md:p-0">Services</a>
                            </li>
                            <li>
                                <a href="/contacts" className="block py-2 pl-3 pr-4 text-white hover:text-yellow-300 hover:ease-in-out hover:duration-300 md:hover:bg-transparent md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
