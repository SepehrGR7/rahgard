const TraitItem = ({ image, title, emoji, description }) => {
  return (
    <div className='mx-auto my-5 transition duration-300 shadow-xl border-gray200 md:my-0 card w-80 md:w-72 backdrop-blur-lg '>
      <figure>
        <img src={image} alt='trait' className='object-cover w-full h-44' />
      </figure>
      <div className='card-body'>
        <div className='grid items-center w-12 h-12 mb-3 bg-orange-100 rounded-xl backdrop-blur place-content-center'>
          <span className='-mb-1 text-2xl'>{emoji}</span>
        </div>
        <div className='flex items-center'>
          <h2 className='mb-2 text-xl font-bold'>{title}</h2>
        </div>
        <p className='font-normal leading-7 text-justify'>{description}</p>
      </div>
    </div>
  )
}

export default TraitItem
