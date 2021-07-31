import React from 'react'

function Navbar() {
    const categories = ['World', 'Europe', 'America', 'Premier League', 'Champions League', 'Transfer Market']
    return (
        <nav>
        <div className="max-w-6xl px-4 mx-auto py-5 border-b border-gray-300 flex justify-between place-items-center">
          <div className="flex w-16 justify-between">
            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
          </div>
          <div className="font-serif text-gray-800 text-xl ">
            Corner Football
          </div>
          <div className="">
            <div className="border border-gray-800 py-1.5 px-3 text-xs font-bold cursor-pointer hover:bg-gray-900 hover:text-white duration-200">
              SUBSCRIBE
            </div>
          </div>
        </div>

        <div className="max-w-6xl px-4 mx-auto py-5 border-b border-gray-300 flex place-items-center overflow-x-auto">
          <div className="pr-3">
            <div className="text-xs font-semibold mb-0.5">Monday</div>
            <div className="text-xs">July 30,2021</div>
          </div>
          {categories.map((cat, idx) => (
            <div key={cat} className="text-xs text-gray-800 font-sans px-4">
              {cat}
            </div>
          ))}
        </div>
      </nav>
    )
}

export default Navbar
