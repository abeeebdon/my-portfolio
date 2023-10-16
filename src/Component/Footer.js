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
        <a href="" target="_blank">
          <FaFacebook />
        </a>
        <a href="" target="_blank">
          <FaTwitter />
        </a>
        <a href="" target="_blank">
          <FaInstagram />
        </a>

        <a href="" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}
export default Footer
