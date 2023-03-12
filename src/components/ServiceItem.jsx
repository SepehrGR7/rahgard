import { Link } from 'react-router-dom'

const ServiceItem = ({ reverse, title, description, image }) => {
  return (
    <div className='flex flex-col max-w-xs mx-auto my-20 shadow-lg md:shadow-2xl sm:max-w-md rounded-3xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl lg:flex-row max-w'>
      <img
        src={image}
        alt='service'
        className={`${
          reverse ? 'lg:order-1 lg:rounded-l-none' : 'lg:order-2 lg:rounded-r-none'
        } rounded-none rounded-t-3xl lg:rounded-3xl mx-auto h-auto object-cover lg:w-1/2`}
      />
      <div className='flex flex-col items-start justify-center order-2 p-8 pb-6 mx-auto text-sm sm:p-8 md:px-10 md:py-14 lg:order-1'>
        <h3 className='mb-3 text-base font-bold md:text-xl'>{title}</h3>
        <p className='mb-10 font-normal leading-7 text-justify'>{description}</p>
        <Link
          to='/services'
          className='w-full font-normal btn btn-warning lg:font-bold md:w-auto'
        >
          جزئیات بیشتر
        </Link>
      </div>
    </div>
  )
}

export default ServiceItem
