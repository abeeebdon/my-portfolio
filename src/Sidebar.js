const Sidebar = ({ handleClick }) => {
  return (
    <aside>
      <div className="sidebar" onClick={handleClick}>
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="skill">My Skills</a>
        <a href="projects">Projects</a>
      </div>
    </aside>
  )
}
export default Sidebar
