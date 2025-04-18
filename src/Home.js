const Home = () => {
  return (
    <section
      id="home"
      className="max-w-screen-xl mx-auto flex justify-between items-center gap-20 p-4 pt-28  md:flex-row flex-col"
    >
      <div className="basis-1/2 text-lg space-y-4">
        <p className=" ml-0">Hi 👋</p>
        <p className=" ml-0">
          My name is{" "}
          <span className="text-portfolio-mc text-2xl font-bold">
            Abeeb Maroof
          </span>
        </p>
        <p className=" ml-0">
          Looking for a frontend developer who can transform your vision into
          reality? I specialize in creating stunning, dynamic and highly
          responsive websites that not only look beautiful but also drive
          results.
        </p>
        <p className=" ml-0">
          With expertise in modern web technologies, I create fast-loading,
          SEO-optimized sites that provide exceptional user experiences. From
          pixel-perfect designs to smooth interactions, I'll help take your
          online presence to the next level. Let's work together to build a
          website that converts visitors into customers and sets your business
          apart.
        </p>
        <p className=" ml-0">
          If you need a perfect hand on your software solutions, Kindly contact
          me by clicking the button below.
        </p>
        <button
          onClick={() => (window.location.href = "mailto:abeebdon@gmail.com")}
          className="text-2xl font-bold bg-red-600 shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 text-white px-10 py-3 rounded-lg m-4 ml-0"
        >
          Contact Me
        </button>
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
