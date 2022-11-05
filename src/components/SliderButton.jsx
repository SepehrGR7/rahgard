import { Link } from 'react-router-dom'

const SliderButton = ({ children, variant, path }) => {
  return (
    <>
      <Link
        to={path}
        className={`mx-3 md:mx-5 btn btn-${variant} btn-sm md:btn-md lg:btn-lg text-xs font-normal lg:font-bold`}
      >
        {children}
      </Link>
    </>
  )
}
export default SliderButton
