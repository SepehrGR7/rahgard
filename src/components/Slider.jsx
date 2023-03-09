import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { urlFor } from '../client'
import { useMediaQuery } from '@chakra-ui/react'
import useClient from '../hooks/useClient'
import SliderOverlay from './SliderOverlay'
import 'swiper/css'

const Slider = () => {
  const slides = useClient('slides')

  const [isMd] = useMediaQuery('(min-width: 1100px)')

  return (
    <div
      className={`${!isMd ? 'pt-20' : null}`}
      style={{ backgroundColor: '#1a202c' }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={1800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        loop
        modules={[Autoplay]}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide._id}>
            {isMd ? (
              <div className='h-screen'>
                <img
                  src={urlFor(slide.imageUrl)}
                  alt='road construction'
                  className='object-fill'
                />
              </div>
            ) : (
              <img src={urlFor(slide.imageUrl)} alt='road construction' />
            )}
            <SliderOverlay title={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
