import React from 'react'
import { FaBoxOpen } from "react-icons/fa";
import Link from 'next/link';

const PlaceHolder = () => {
  return (
    <div className='flex flex-col p-4 justify-center w-full items-center'>
      <FaBoxOpen size={200} color='#9209D8'/>
      <h2>Quiz Await! Make One</h2>
      <span className='font-light text-gray-500'>
        Click here to begin your Journey ...
      </span> 
      <Link href="#" className='mt-5'>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold
        rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 text-[18px]"
            >
              Create my first Quiz
            </button>
          </Link>
    </div>
  )
}

export default PlaceHolder
