const Home = () => {
  return (
    <section
      id="home"
      className="max-w-screen-xl relative z-10 md:h-screen mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-4 pt-28 "
    >
      <div className="basis-1/2 text-xl space-y-4">
        <p className="">Hi 👋</p>
        <p className="">
          My name is{" "}
          <span className="text-portfolio-mc text-2xl font-bold">
            Abeeb Maroof
          </span>
        </p>
        <p className="text-[#ffff3c] font-medium">
          A Front-End Focused Full-Stack Engineer
        </p>
        <p>
          Are you looking for a developer who can transform your vision into
          reality? I specialize in creating stunning, dynamic and highly
          responsive websites that not only look beautiful but also drive
          results.
        </p>
        <p>
          With expertise in modern web technologies, I create fast-loading,
          SEO-optimized sites that provide exceptional user experiences. From
          pixel-perfect designs to smooth interactions, I'll help take your
          online presence to the next level. Let's work together to build a
          website that converts visitors into customers and sets your business
          apart.
        </p>
        <p>
          If you need a perfect hand on your software solutions, Kindly contact
          me by clicking the button below.
        </p>
        <div class="flex justify-center md:justify-start items-center space-x-4">
          <a
            href="#projects"
            class="bg-yellow-500 text-white font-bold py-3 h-fit px-6 rounded-lg transition-transform hover:scale-105 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300"
          >
            View My Work
          </a>

          <button
            onClick={() => (window.location.href = "mailto:abeebdon@gmail.com")}
            className="text-2xl bg-gradient-to-br from-[#d6d676] font-bold to-[#ffe71375]  shadow-lg hover:bg-[#FFD800] hover:shadow-xl transition-all duration-300 text-white px-10 py-3 rounded-lg m-4 ml-0"
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="h-[70%] max-[760px]:hidden">
        <img
          src="./pics-removebg-preview.png"
          alt="my_pics"
          className="h-full"
        />
      </div>
    </section>
  );
};
export default Home;
