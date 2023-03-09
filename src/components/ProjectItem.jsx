import { useMediaQuery } from '@chakra-ui/react'
import LinkButton from './LinkButton.jsx'

const ProjectItem = ({ projectName, projectDesc, img }) => {
  const [isMd] = useMediaQuery('(min-width: 800px)')

  return (
    <div className='flex flex-col items-center mx-auto w-96'>
      <img src={img} alt='project example' className='mb-6 rounded-xl w-96' />
      <div>
        <div className='mb-8'>
          <h3 className='mb-2 text-2xl font-bold'>{projectName}</h3>
          <p>{projectDesc}</p>
        </div>
        <LinkButton
          to='/projects'
          variant='warning'
          weight={isMd ? 'bold' : 'normal'}
        >
          مشاهده پروژه
        </LinkButton>
      </div>
    </div>
  )
}

export default ProjectItem
