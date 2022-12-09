const Service = ({ title, desc, img, reverse }) => {
  return (
    <div className='grid grid-cols-1 mx-auto my-20 sm:px-6 md:px-20 lg:p-0 xl:grid-cols-2 lg:w-9/12 lg:gap-12 xl:w-full xl:px-10'>
      <div
        className={`flex flex-col justify-center order-2 lg:px-12 mx-auto ${
          reverse ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <h3 className='mb-4 text-2xl font-bold md:text-3xl lg:mb-8'>{title}</h3>
        <p className='leading-relaxed text-justify '>{desc}</p>
      </div>
      <img
        src={img}
        alt='our services'
        className='order-1 mx-auto mb-10 rounded-xl lg:mb-0'
      />
    </div>
  )
}
export default Service
