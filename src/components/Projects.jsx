import useClient from '../hooks/useClient'
import { urlFor } from '../client'
import PageIndicator from './PageIndicator'
import ProjectItem from './ProjectItem'
import { images } from '../constants'

const Projects = () => {
  const projectsData = useClient('projects')

  return (
    <div className='pt-20'>
      <PageIndicator page='پروژه ها' bg={images.img3} />
      <div className='my-12'>
        <div className='container grid grid-cols-1 gap-10 mx-auto xl:gap-0 md:grid-cols-2 xl:grid-cols-3'>
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              img={urlFor(project.imageUrl)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
