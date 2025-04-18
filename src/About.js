const About = () => {
  return (
    <section
      id="about"
      className="max-w-screen-xl px-4 mx-auto flex justify-around items-center gap-8 max-[760px]:flex-col"
    >
      <div className="basis-1/5 w-full md:basis-auto md:w-[90vw] lg:w-[35vw] xl:w-[40vw] max-[760px]:mt-4">
        <img src="/abeeb.png" alt="pics" className="w-full h-auto" />
      </div>
      <div className="basis-1/2">
        <p className="text-4xl font-bold">
          About <span className="text-portfolio-mc">Me</span>
        </p>
        <p className="text-xl leading-relaxed my-8 mb-12">
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
        <div className="my-5 p-4 pl-0">
          <a
            href="https://github.com/abeeebdon"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-portfolio-mc text-white px-8 py-4 text-center m-4 rounded-2xl text-xl hover:opacity-70"
          >
            GITHUB
          </a>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/13JHMJn6lYmiokmuwLlU12pZQT1rPRrdtH9HT_n7w6c8/edit?usp=drivesdk"
            rel="noreferrer"
            className="inline-block bg-portfolio-mc text-white px-8 py-4 text-center m-4 rounded-2xl text-xl hover:opacity-70"
          >
            MY CV
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
