import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center w-full mb-2'>
      <span className='flex-grow'>
        <input
          type="text"
          placeholder='search an item'
          className="bg-slate-50 h-8 rounded-xl p-1 text-start ml-8 w-full shadow-lg  items-center justify-center mt-2 hover:scale-105 border-4 ring-2 hover:ring-gray-500"
        />
      </span>
      <span className="p-1 mx-9 mt-2 bg-blend-color-burnwhite cursor-pointer text-white text-2xl hover:animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>
    </div>
  );
}

export default SearchBar