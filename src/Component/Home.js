const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, it's Me</h3>
        <h1>Abeeb Maroof</h1>
        <h3>
          And I am a <span>Frontend Developer</span>
        </h3>
        <p>
          I am highly experienced in creating responsive web pages with great
          user interface and user experience
        </p>
        <div className="github-link">
          <a href="https://github.com/abeeebdon">GITHUB</a>
          <a href="https://github.com/abeeebdon">MY CV</a>
        </div>
      </div>
      <div className="image">
        <img src="pics.jpeg" alt="my_pics" className="img" />
      </div>
    </section>
  )
}
export default Home
