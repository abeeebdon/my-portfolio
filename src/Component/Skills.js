import img1 from '../images/html_image.png'
import img2 from '../images/css_image.png'
import img3 from '../images/bootstrap_image.jpg'
import img4 from '../images/tailwind_image.png'
import img5 from '../images/javascript_image.png'
import img6 from '../images/react_image.png'
const Skills = () => {
  return (
    <section className="home">
      <div className="my-skills">
        <h1 className="heading" style={{ color: 'red' }}>
          My Skills
        </h1>
      </div>
      <div className="grid">
        <div className="grid-image">
          <img src={img1} alt="html_image" />
          <p>HTML</p>
        </div>
        <div className="grid-image">
          <img src={img2} alt="css_image" />
          <p>CSS</p>
        </div>
        <div className="grid-image">
          <img src={img3} alt="bootstrap_image" />
          <p>Bootstrap</p>
        </div>
        <div className="grid-image">
          <img src={img4} alt="tailwind_image" />
          <p>Tailwind CSS</p>
        </div>
        <div className="grid-image">
          <img src={img5} alt="javascript_image" />
          <p>Javascript</p>
        </div>
        <div className="grid-image">
          <img src={img6} alt="react_image" />
          <p>Reactjs</p>
        </div>
      </div>
    </section>
  )
}
export default Skills
