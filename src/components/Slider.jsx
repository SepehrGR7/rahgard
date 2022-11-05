import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper'
import { urlFor } from '../client'
import useClient from '../hooks/useClient'
import SliderOverlay from './SliderOverlay'
import 'swiper/css/navigation'
import 'swiper/css'

const Slider = () => {
  const slides = useClient('slides')

  return (
    <div className='pt-24 '>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={700}
        navigation
        modules={[Navigation, EffectCoverflow]}
        effect='coverflow'
      >
        {slides.map(slide => (
          <SwiperSlide key={slide._id}>
            <img src={urlFor(slide.imageUrl)} alt='road construction' />
            <SliderOverlay title={slide.title} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <SliderOverlay title='مدرن و مجهز در تجهیزات راه سازی' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img1} alt='road construction' />
          <SliderOverlay title='مهندسین خلاق و با تجربه' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.img1} alt='road construction' />
          <SliderOverlay title='چهار قرن تجربه ثابت  شده' />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Slider
