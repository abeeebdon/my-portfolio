const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello it's Me</h3>
        <h1>Abeeb Maroof</h1>
        <h3>
          And I am a <span>Frontend Developer</span>
        </h3>
        <p>
          High level experience in creating responsive web pages with great user
          interfaces and user experience
        </p>

        <a href="#" className="btn">
          Download CV
        </a>
      </div>
      <div className="image">
        <img src="pics.jpeg" alt="image" />
      </div>
    </section>
  )
}
export default Home
