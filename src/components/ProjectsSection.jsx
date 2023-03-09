import useClient from '../hooks/useClient'
import { urlFor } from '../client'
import ProjectItem from './ProjectItem'
import { images } from '../constants'

const ProjectsSection = () => {
  const projectData = useClient('projects')

  const latestProjects = projectData.slice(0, 2)

  return (
    <section className='my-20'>
      <div className='flex flex-col items-center mb-12'>
        <h2 className='mb-6 text-3xl font-bold text-center md:mb-8 md:text-4xl'>
          آخرین پروژه ها
        </h2>
        <img src={images.divider} alt='divider' className='w-64 md:w-80' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:gap-0 xl:px-40'>
        {latestProjects.map(project => (
          <ProjectItem
            key={project._id}
            projectName={project.name}
            projectDesc={project.description}
            slug={project.slug.current}
            img={urlFor(project.imageUrl)}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
