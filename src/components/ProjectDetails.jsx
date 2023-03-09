import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/react'
import { client, urlFor } from '../client'
import { FiArrowRight, FiCalendar, FiSmile } from 'react-icons/fi'
import PageIndicator from './PageIndicator'
import { images } from '../constants'

const ProjectDetails = () => {
  const [project, setProject] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { slug } = useParams()

  useEffect(() => {
    const query = `*[_type == "projects"]`
    client.fetch(query).then(data => {
      const prj = data.find(d => d.slug.current === slug)
      setProject(prj)
      setLoading(false)
    })
  }, [slug])

  return (
    <section className='pt-20'>
      <PageIndicator page={`جزئیات پروژه`} bg={images.img3} />
      <div className='my-12'>
        {loading ? (
          <p>در حال بارگزاری...</p>
        ) : (
          <div className='px-6 sm:px-12 md:px-16 xl:px-32'>
            <div className='grid grid-cols-1 md:gap-10 lg:grid-cols-2'>
              <img
                src={urlFor(project.imageUrl)}
                alt='road construction'
                className=' rounded-2xl'
              />
              <div className='pt-10 sm:py-14'>
                <h2 className='text-2xl font-bold md:text-3xl'>{project.name}</h2>
                <div className='grid grid-cols-1 my-7 md:my-10 xl:grid-cols-2 md:text-xl'>
                  <p className='flex items-center mb-2 md:mb-4 xl:m-0'>
                    <FiSmile className='ml-2 text-2xl' />
                    مهندس ناظر: علی حسینی
                    <span>{project.engineer}</span>
                  </p>
                  <p className='flex items-center'>
                    <FiCalendar className='ml-2 text-2xl' />
                    تاریخ اتمام پروژه:&nbsp;
                    <span>{project.date}</span>
                  </p>
                </div>
                <p className='lg:text-lg'>{project.description}</p>
                <button
                  className='mt-10 text-lg font-normal md:font-bold btn btn-warning'
                  onClick={() => navigate(-1)}
                >
                  <FiArrowRight className='ml-2 text-xl' />
                  بازگشت
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectDetails
