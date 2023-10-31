const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello it's Me</h3>
        <h1>Abeeb Maroof</h1>
        <h3>
          And I am a <span>Frontend Developer</span>
        </h3>
        <p>
          I am highly experience in creating responsive web pages with great
          user interfaces and user experience
        </p>

        <button className="btn">
          <a href="https://github.com/abeeebdon">GITHub</a>
        </button>
        <button className="btn">Download CV</button>
      </div>
      <div className="image">
        <img src="pics.jpeg" alt="my_pics" />
      </div>
    </section>
  )
}
export default Home
