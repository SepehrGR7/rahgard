import { urlFor } from '../client'
import useClient from '../hooks/useClient'
import ServiceItem from './ServiceItem'
import { images } from '../constants'

const Services = () => {
  const servicesData = useClient('services')

  return (
    <section className='my-24'>
      <div className='flex flex-col items-center mb-10'>
        <h2 className='mb-6 text-3xl font-bold text-center md:mb-8 md:text-4xl'>
          خدمات راه گرد بندر
        </h2>
        <img src={images.divider} alt='divider' className='w-64 md:w-80' />
      </div>
      {servicesData.map((service, index) => (
        <ServiceItem
          key={service._id}
          title={service.title}
          description={service.description}
          image={urlFor(service.imageUrl)}
          reverse={index === 1 && true}
        />
      ))}
      {}
    </section>
  )
}

export default Services
