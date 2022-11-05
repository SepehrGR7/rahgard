import { Link } from 'react-router-dom'

const TraitItem = ({ image, title, description }) => {
  return (
    <div className='mx-auto card w-96 md:w-80 glass hover:shadow-xl'>
      <figure>
        <img src={image} alt='trait' className='object-cover w-full h-40 lg:h-52' />
      </figure>
      <div className='card-body'>
        <h2 className='mb-2 text-xl font-bold'>{title}</h2>
        <p className='mb-8 font-normal text-justify'>{description}</p>
        <div className='justify-end card-actions'>
          <Link to='/services' className='font-normal md:font-bold btn btn-warning'>
            بیشتر بدانید
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TraitItem
