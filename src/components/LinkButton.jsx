import { Link } from 'react-router-dom'

const LinkButton = ({ to, variant, size, weight, children, width }) => {
  return (
    <Link
      to={to}
      className={`btn btn-${variant} btn-${size} font-${weight} transition duration-300 hover:bg-white w-${width} md:w-auto md:font-bold font-normal`}
    >
      {children}
    </Link>
  )
}
export default LinkButton
