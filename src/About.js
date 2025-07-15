const About = () => {
  return (
    <div className="bg-[#0D122B]">
      <section
        id="about"
        className="max-w-screen-xl py-6 md:py-10 md:h-screen px-4 mx-auto flex justify-around items-center gap-8 md:flex-row flex-col"
      >
        <div className=" w-full md:w-1/2 h-[70%] ">
          <img
            src="/abeeb.png"
            alt="pics"
            className="w-full max-w-[400px] h-full max-h-[400px] rounded-full shadow-xl shadow-yellow-200"
          />
        </div>
        <div className="basis-1/2">
          <p className="text-4xl font-bold">
            About <span className="text-portfolio-mc">Me</span>
          </p>
          <p className="text-xl leading-relaxed my-6 ">
            I am Abeeb Maroof, a motivated and dedicated Software Developer with
            a passion for crafting intuitive and visually appealing user
            interfaces for both web applications and mobile devices. <br />
            With over three years of experience, I specialize in building
            efficient web applications and mobile applications using React.js,
            React Native and Next.js. <br /> I have previously worked at various
            organizations where I build scalable and optimized web applications
            with great user interface and user experience. <br />I have
            volunteered and collaborated with diverse institutions and
            developers. I enjoy taking on new challenges and collaborating with
            clients to bring ideas to life through high quality user interface.
          </p>
          <div className="my-3 flex items-center gap-4 p-4 pl-0 text-lg">
            <a
              href="https://github.com/abeeebdon"
              target="_blank"
              rel="noreferrer"
              className="font-bold bg-gradient-to-br from-[#d6d676]  to-[#ffe71375] shadow-yellow-500  shadow-lg hover:bg-[#FFD800] text-white px-8 py-4 text-center  rounded-2xl "
            >
              GITHUB
            </a>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/13JHMJn6lYmiokmuwLlU12pZQT1rPRrdtH9HT_n7w6c8/edit?usp=drivesdk"
              rel="noreferrer"
              className="font-bold bg-gradient-to-tr from-[#d6d676]  to-[#ffe71375] shadow-yellow-500  shadow-lg hover:bg-[#FFD800] text-white px-8 py-4 text-center rounded-2xl "
            >
              MY CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
