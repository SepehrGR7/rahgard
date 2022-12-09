import SliderButton from './SliderButton'

const SliderOverlay = ({ title }) => {
  return (
    <>
      <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-50'></div>
      <div className='absolute top-0 left-0 grid w-full h-full text-center text-white place-content-center backdrop-blur-sm'>
        <h2 className='px-20 mb-6 text-xl font-extrabold md:mb-14 md:text-4xl lg:text-5xl'>
          {title}
        </h2>
        <div className='flex items-center justify-center'>
          <SliderButton variant='warning' path='/services'>
            مشاهده خدمات
          </SliderButton>
          <SliderButton variant='warning' path='/projects'>
            مشاهده پروژه ها
          </SliderButton>
        </div>
      </div>
    </>
  )
}

export default SliderOverlay
