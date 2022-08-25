import { Link } from 'react-router-dom'
import { BrandIcon } from '../assets/icons'

const Header = () => {
  
  return (
    <header>
      <div className="px-4 lg:px-6 py-5 bg-gray-800 shadow-xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={'/'} className="flex items-center gap-x-1 xxs:gap-x-3">
            <div className="w-6 h-6 sm:h-9 flex items-center">
              <BrandIcon color="white" />
            </div>
            <span className='self-center text-md xxs:text-lg font-semibold whitespace-nowrap dark:text-white'>Todooddles</span>
          </Link>
          {/* TODO: extract fancy button to it's own component */}
          <a href="https://github.com/lisawagner/rtk-tailwind-todo" target="_blank" rel="noreferrer" className="flex items-center">
            <button className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
              Github Repo
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header