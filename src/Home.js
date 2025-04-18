const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p>Hi 👋</p>
        <p>
          My name is <span className="text-5xl font-bold">Abeeb Maroof</span>
        </p>
        <p>
          Looking for a frontend developer who can transform your vision into
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
        <button
          onClick={() => (window.location.href = "mailto:abeebdon@gmail.com")}
          className="text-2xl font-bold bg-red-600 shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 text-white px-10 py-3 rounded-lg"
        >
          Contact Me
        </button>
      </div>
      <div className="image">
        <img src="./pics-removebg-preview.png" alt="my_pics" className="img" />
      </div>
    </section>
  );
};
export default Home;
