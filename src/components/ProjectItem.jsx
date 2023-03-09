import LinkButton from './LinkButton'

const ProjectItem = ({ project, img }) => {
  return (
    <div className='flex flex-col items-center mx-auto transition duration-300 border border-gray-200 rounded-2xl w-80 md:w-96 hover:shadow-xl'>
      <img
        src={img}
        alt='project example'
        className='object-cover w-full mb-6 rounded-b-none rounded-2xl max-h-60'
      />
      <div className='px-4 pb-4'>
        <div className='mb-6'>
          <h3 className='mb-3 text-2xl font-bold'>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <LinkButton to={`/projects/${project.slug.current}`} variant='warning'>
          مشاهده پروژه
        </LinkButton>
      </div>
    </div>
  )
}

export default ProjectItem
