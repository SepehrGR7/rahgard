import { Link } from 'react-router-dom'

const LinkButton = ({ to, variant, size, weight, children }) => {
  return (
    <Link to={to} className={`btn btn-${variant} btn-${size} font-${weight}`}>
      {children}
    </Link>
  )
}
export default LinkButton
