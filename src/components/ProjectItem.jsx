import { useMediaQuery } from '@chakra-ui/react'
import LinkButton from './LinkButton.jsx'

const ProjectItem = ({ projectName, projectDesc, slug, img }) => {
  const [isMd] = useMediaQuery('(min-width: 800px)')

  return (
    <div className='flex flex-col items-center mx-auto transition duration-300 w-96 hover:shadow-xl rounded-2xl'>
      <img
        src={img}
        alt='project example'
        className='object-cover w-full mb-6 rounded-b-none rounded-xl max-h-60'
      />
      <div className='px-4 pb-4'>
        <div className='mb-6'>
          <h3 className='mb-3 text-2xl font-bold'>{projectName}</h3>
          <p>{projectDesc}</p>
        </div>
        <LinkButton
          to={`/projects/${slug}`}
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
