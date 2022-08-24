const Header = () => {
  return (
    <header>
      <div className="px-4 lg:px-6 py-5 bg-gray-800 shadow-xl">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center gap-x-1 xxs:gap-x-3">
            <div className="h-6 sm:h-9 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M14.563 12a12.014 12.014 0 00-3.427 5.136L9 15m1.5-12.75H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <span className='self-center text-md xxs:text-lg font-semibold whitespace-nowrap dark:text-white'>Todooddles</span>
          </div>
          {/* TODO: extract fancy button to it's own component */}
          <div className="flex items-center">
            <button className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
              Github Repo
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header