import { Link } from 'react-router-dom'

const ServiceItem = ({ reverse, title, description, image }) => {
  return (
    <>
      <div className='grid grid-cols-1 gap-10 my-20 lg:gap-20 lg:mx-auto lg:w-9/12 lg:grid-cols-2'>
        <img
          src={image}
          alt='service'
          className={`${
            reverse ? 'lg:order-1' : 'lg:order-2'
          } rounded-none lg:rounded-xl order-1 mx-auto lg:mx-0 w-full`}
        />
        <div className='flex flex-col items-start justify-center order-2 px-10 mx-auto md:p-0 lg:order-1'>
          <h3 className='mb-3 text-xl font-bold'>{title}</h3>
          <p className='mb-10 font-normal text-justify md:text-start'>
            {description}
          </p>
          <Link to='/sevices' className='font-normal btn btn-warning lg:font-bold '>
            جزئیات بیشتر
          </Link>
        </div>
      </div>
    </>
  )
}

export default ServiceItem
