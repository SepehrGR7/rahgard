import { Link } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/react'
import { FaRoad } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import NavbarLinks from './NavbarLinks'

const Navbar = ({ title, onMenuOpen }) => {
  const [isMd] = useMediaQuery('(min-width: 800px)')

  return (
    <nav className='fixed z-30 w-full shadow-lg bg-warning'>
      <div
        className={`container relative flex justify-center p-4 md:p-6 mx-auto navbar ${
          isMd && 'md:justify-start'
        }`}
      >
        <div>
          <Link to='/'>
            <h1 className='flex items-center text-2xl font-extrabold translate-x-2 md:text-3xl lg:text-4xl'>
              <FaRoad size='3rem' className='ml-3 company-name' />
              {title}
            </h1>
          </Link>
        </div>
        {isMd ? (
          <div className='mr-10'>
            <NavbarLinks />
          </div>
        ) : (
          <button
            className='absolute px-2 right-4 btn btn-ghost '
            onClick={onMenuOpen}
          >
            <IoMenu size='2rem' />
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
