import { Link } from 'react-router-dom'
import { FiHome, FiTool, FiCheck, FiInfo, FiPhone } from 'react-icons/fi'

const NavbarLinks = ({ showHome, showIcons, isCol, margin, onMenuClose }) => {
  return (
    <>
      <ul className={`${isCol && 'flex flex-col'} `}>
        {showHome && (
          <li className={`btn btn-ghost ${margin} justify-start`}>
            <Link
              onClick={onMenuClose}
              className='flex items-center justify-start w-full font-normal'
              to='/'
            >
              {showIcons && <FiHome size='1.5rem' className='inline ml-5' />}
              خانه
            </Link>
          </li>
        )}
        <li className={`btn btn-ghost ${margin}`}>
          <Link
            onClick={onMenuClose}
            className='flex items-center justify-start w-full font-normal'
            to='/services'
          >
            {showIcons && <FiTool size='1.5rem' className='inline ml-5' />}
            خدمات
          </Link>
        </li>
        <li className={`btn btn-ghost ${margin} justify-start`}>
          <Link
            onClick={onMenuClose}
            className='flex items-center justify-start w-full font-normal'
            to='/projects'
          >
            {showIcons && <FiCheck size='1.5rem' className='inline ml-5' />}
            پروژه ها
          </Link>
        </li>
        <li className={`btn btn-ghost ${margin} justify-start`}>
          <Link
            onClick={onMenuClose}
            className='flex items-center justify-start w-full font-normal'
            to='/about'
          >
            {showIcons && <FiInfo size='1.5rem' className='inline ml-5' />}
            درباره ما
          </Link>
        </li>
        <li className={`btn btn-ghost ${margin} justify-start`}>
          <Link
            onClick={onMenuClose}
            className='flex items-center justify-start w-full font-normal'
            to='/contact'
          >
            {showIcons && (
              <FiPhone size='1.5rem' className='inline ml-5 -scale-x-100' />
            )}
            تماس با ما
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavbarLinks
