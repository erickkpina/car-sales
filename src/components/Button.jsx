import React from 'react'

export const Button = ({text, link, onClick}) => {
  return (
    <button href={link} onClick={onClick} className=" tracking-[.10em] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black border-2 border-yellow-300 rounded-lg hover:bg-yellow-300">
      {text}
    </button>
  )
}
