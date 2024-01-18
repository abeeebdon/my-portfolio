import { FaTwitter, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  const time = new Date()
  const year = time.getFullYear()
  return (
    <footer className="footer" id="footer">
      <div className="footer-text">
        <p>
          copyright &copy; {year} by <span> Abeebdon</span>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.facebook.com/abeeb.maroof"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com/AbeebMaroof"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.twitter.com/AbeebMaroof"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="https://github.com/abeeebdon" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}
export default Footer
