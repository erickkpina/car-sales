import React from 'react';

export const Button2 = ({ text, onClick, icon }) => {
    return (
        <button type="button" onClick={onClick} className="text-black bg-yellow-300 hover:bg-yellow-400 hover:ease-in-out hover:duration-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
            <i className={`bi bi-${icon} mr-3`}></i>
            {text}
        </button>
    );
};