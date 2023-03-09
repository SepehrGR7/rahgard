import { urlFor } from '../client'
import useClient from '../hooks/useClient'
import PageIndicator from './PageIndicator'
import { images } from '../constants'
import Service from './Service'

const OurServices = () => {
  const servicesData = useClient('services')

  return (
    <div className='pt-20'>
      <PageIndicator page='خدمات' bg={images.img3} />
      <div className='my-12'>
        <div className='px-12 mb-10'>
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              desc={service.fullDescription}
              img={urlFor(service.imageUrl)}
              reverse={index % 2 !== 0 && true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurServices
