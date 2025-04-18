const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/abeeb.png" alt="pics" className="img" />
      </div>
      <div className="about-content">
        <p className="max-w-[1440px] px-4 text-4xl font-bold mx-auto ">
          About <span className="text-red-600">Me</span>
        </p>
        <p style={{ fontSize: "20px" }}>
          I am Abeeb Maroof, a motivated and dedicated Frontend Developer with a
          passion for crafting intuitive and visually appealing user interfaces
          for both web applications and mobile devices. <br />
          With over three years of experience, I specialize in building
          efficient web applications and mobile applications using React.js,
          React Native and Next.js. <br /> I have previously worked at various
          organizations where I build scalable and optimized web applications
          with great user interface and user experience. <br />I have
          volunteered and collaborated with diverse institutions and developers.
          I enjoy taking on new challenges and collaborating with clients to
          bring ideas to life through high quality user interface.
        </p>
        <div className="github-link">
          <a
            href="https://github.com/abeeebdon"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/13JHMJn6lYmiokmuwLlU12pZQT1rPRrdtH9HT_n7w6c8/edit?usp=drivesdk"
            rel="noreferrer"
          >
            MY CV
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
