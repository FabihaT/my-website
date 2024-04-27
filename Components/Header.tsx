import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Header = () => {
  return (
    <div
      id="home"
      className="h-[88vh] bg-[#2a2929] mt-[12vh] bg-cover bg-center"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I&apos;m <span className="text-[#D4C295]">Fabiha Tuheen</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff]">
            I am passionate about bringing optimized, maintainable, creative,
            and user-friendly software application and web designs to life.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="https://github.com/FabihaT">
              <button className="px-[2rem] hover:bg-[#D4C295] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#feecd1] flex items-center space-x-2 rounded-lg">
                <p>My GitHub</p>
                <Image
                  src="/assets/github-logo.png"
                  alt="Github"
                  width={24}
                  height={24}
                  className="w-[1.5rem] h-[1.5rem]"
                />
              </button>
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[500px] hidden bg-[#292929] h-[500px] relative lg:flex items-center rounded-full shadow-darker"
        >
          <Image
            src="/assets/profile.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
