const TraitItem = ({ image, title, emoji, description }) => {
  return (
    <div className='mx-auto transition duration-300 card w-96 md:w-80 glass'>
      <figure>
        <img src={image} alt='trait' className='object-cover w-full h-40 lg:h-52' />
      </figure>
      <div className='card-body'>
        <div className='grid items-center w-12 h-12 mb-2 bg-gray-200 opacity-60 rounded-xl backdrop-blur place-content-center'>
          <span className='-mb-1 text-2xl'>{emoji}</span>
        </div>
        <div className='flex items-center'>
          <h2 className='text-xl font-bold'>{title}</h2>
        </div>
        <p className='font-normal text-justify '>{description}</p>
      </div>
    </div>
  )
}

export default TraitItem
