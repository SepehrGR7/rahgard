import { useState, useEffect } from 'react'
import { urlFor, client } from '../client'
import TraitItem from './TraitItem'
import { images } from '../constants'

const Traits = () => {
  const [traits, setTraits] = useState([])

  useEffect(() => {
    const query = '*[_type == "traits"]'

    client.fetch(query).then(data => setTraits(data))
  }, [])

  return (
    <section className='my-12 lg:my-20'>
      <div className='flex flex-col items-center mb-5'>
        <h2 className='mb-6 text-3xl font-bold text-center md:mb-8 md:text-4xl'>
          چرا راه گرد بندر؟
        </h2>
        <img src={images.divider} alt='divider' className='w-64 md:w-80' />
      </div>
      <div className='grid grid-cols-1 gap-10 py-10 mx-auto md:gap-y-20 gap- md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:px-10'>
        {traits.map(trait => (
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
