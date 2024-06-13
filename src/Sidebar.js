import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ handleClick, setSideBar }) => {
  return (
    <aside>
      <article>
        <div className="icon-wrapper" onClick={() => setSideBar(false)}>
          <FaTimes className="cancel-icon" />
        </div>
        <div className="sidebar" onClick={handleClick}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skill">My Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </article>
    </aside>
  )
}
export default Sidebar
