const PageIndicator = ({ page, bg }) => {
  return (
    <div
      className='relative py-24 md:py-32 lg:py-40'
      style={{
        background: `url(${bg}) center center/cover no-repeat fixed`
      }}
    >
      <div
        className='absolute bottom-0 left-0 w-full h-full bg-black opacity-70 '
        style={{ backdropFilter: 'blur(10px)' }}
      ></div>
      <div className='absolute bottom-0 left-0 grid w-full h-full text-white place-content-center backdrop-blur-sm'>
        <h3 className='text-3xl font-bold md:text-4xl'>{page}</h3>
      </div>
    </div>
  )
}
export default PageIndicator
