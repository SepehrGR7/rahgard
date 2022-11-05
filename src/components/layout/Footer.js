import { Link } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/react'
import NavbarLinks from '../NavbarLinks'
import SocialLinks from '../SocialLinks'
// import { images } from '../../constants'

const Footer = ({ title }) => {
  const [isMd] = useMediaQuery('(min-width: 800px)')

  return (
    <>
      {/* <img
        src={images.wave}
        alt='wave'
        className='z-0 w-screen h-auto translate-y-14 md:translate-y-40'
      /> */}
      <footer className='p-5 md:px-10 md:py-6 bg-warning'>
        {isMd && (
          <div className='grid gap-5 mb-6 md:mb-10 gird-cols-1 md:grid-cols-3 md:gap-0'>
            <div className='flex items-center justify-center md:justify-start'>
              <h2 className='text-3xl font-bold '>
                <Link to='/'>{title}</Link>
              </h2>
            </div>
            <div className='flex flex-col items-center md:flex-row md:justify-center'>
              <NavbarLinks />
            </div>
            <div className='flex justify-center md:justify-end'>
              <SocialLinks />
            </div>
          </div>
        )}
        <div className='flex flex-col items-center px-10 text-xs text-center md:p-0'>
          {/* Add margin here */}
          <p className=''>
            تمامی حقوق مادی و معنوی این وب سایت متعلق به شرکت
            <Link
              to='/'
              className='font-bold hover:text-yellow-300 decoration-solid'
            >
              {` ${title} `}
            </Link>
            می‌باشد.
          </p>
          {/* <p>
            طراحی و توسعه توسط{' '}
            <a href='https://t.me/sepehrgr7' className='font-bold'>
              سپهر گرگینی{' '}
            </a>
          </p> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
