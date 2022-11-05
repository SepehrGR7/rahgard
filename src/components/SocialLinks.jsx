import { IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp } from 'react-icons/io5'

const SocialLinks = ({ spacing }) => {
  return (
    <>
      <a href='https://twitter.com' className={`btn btn-ghost ${spacing}`}>
        <IoLogoTwitter size='2rem' />
      </a>
      <a href='https://instagram.com' className={`btn btn-ghost ${spacing}`}>
        <IoLogoInstagram size='2rem' />
      </a>
      <a href='https://wa.me/+989389209796' className={`btn btn-ghost ${spacing}`}>
        <IoLogoWhatsapp size='2rem' />
      </a>
    </>
  )
}
export default SocialLinks
