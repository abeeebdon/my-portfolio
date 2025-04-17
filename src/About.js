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
        <p style={{ fontSize: "18px" }}>
          I am Abeeb Maroof, a motivated and dedicated Frontend Developer with a
          passion for crafting intuitive and visually appealing user interfaces
          for both web applications and mobile devices. <br />
          With over three years of experience, I specialize in building
          efficient web applications and mobile applications using React.js,
          React Native and Next.js. <br /> I have previously worked at{" "}
          <span className="text-red-500">Entacrest Nexus </span>, where I worked
          in a team of developers and designers to develop an ERP application,
          event landing pages and organisation dashboard.
          <br />I have also had the priviledge of being an HNG finalist. During
          my time at <span className="text-red-500">HNG</span> , I collaborated
          with a multidisciplinary team on real-world projects, including{" "}
          <span className="text-red-500">Tifi</span>. This experience
          strengthened my skills in frontend development and teamwork in an
          agile environment. <br />I have volunteered and collaborated with
          diverse institutions and developers. I enjoy taking on new challenges
          and collaborating with clients to bring ideas to life through high
          quality user interface.
        </p>
      </div>
    </section>
  );
};
export default About;
