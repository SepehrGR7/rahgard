import useClient from '../hooks/useClient'
import { urlFor } from '../client'
import { images } from '../constants'
import TraitItem from './TraitItem'

const Traits = () => {
  const traitData = useClient('traits')

  return (
    <section className='my-12 lg:my-20'>
      <div className='flex flex-col items-center mb-5'>
        <h2 className='mb-6 text-3xl font-bold text-center md:mb-8 md:text-4xl'>
          چرا راه گرد بندر؟
        </h2>
        <img src={images.divider} alt='divider' className='w-64 md:w-80' />
      </div>
      <div className='grid grid-cols-1 gap-10 py-10 mx-auto md:gap-y-20 gap- md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:px-10'>
        {traitData.map(trait => (
          <TraitItem
            key={trait._id}
            image={urlFor(trait.imageUrl)}
            title={trait.title}
            description={trait.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Traits
