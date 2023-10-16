import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-text">
        <p>
          copyright &copy; 2023 by <span> Abeebdon</span> All right reserved
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
          <FaInstagram />
        </a>

        <a href="https://github.com/abeeebdon" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}
export default Footer
