import Navbar from '../Navbar'

const Header = ({ title, onMenuOpen }) => {
  return (
    <header>
      <Navbar title={title} onMenuOpen={onMenuOpen} />
    </header>
  )
}
export default Header
