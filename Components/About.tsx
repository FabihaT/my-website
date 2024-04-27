const About = () => {
  return (
    <div id="about" className="relative bg-[#222121] pb-12 pt-16 md:pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url(/assets/profile.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#D3FBD8] md-[1rem]">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Creativity and <span className="text-[#D4C295]">Innovation</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <p className="text-[18px] text-white w-[80%]">
              I am a 3rd year student at the University of Calgary majoring in
              Software Engineering. I was intrigued in app and web design and
              development since high school and I love to continuously improve
              my technical skills through team and personal projects. My soft
              skills include being a creative designer and thinker in developing
              ideas, being well-organized and detail-oriented, having proficient
              team management and communication abilities. I look forward to
              professional opportunities in Software Engineering where I can
              enhance my current skills, learn new ones, and work in a fun and
              dynamic engineering environment!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
