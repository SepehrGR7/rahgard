import useClient from '../hooks/useClient'
import { urlFor } from '../client'
import ProjectItem from './ProjectItem'
import { images } from '../constants/'

const Projects = () => {
  const projectData = useClient('projects')

  return (
    <section className='my-20'>
      <div className='flex flex-col items-center mb-12'>
        <h2 className='mb-6 text-3xl font-bold text-center md:mb-8 md:text-4xl'>
          آخرین پروژه ها
        </h2>
        <img src={images.divider} alt='divider' className='w-64 md:w-80' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:gap-0 xl:px-40'>
        {projectData.map(project => (
          <ProjectItem
            key={project._id}
            projectName={project.name}
            projectDesc={project.description}
            img={urlFor(project.imageUrl)}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
