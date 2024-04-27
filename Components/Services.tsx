import Image from "next/image";

const Services = () => {
  return (
    <div
      id="education"
      className="bg-[#292929] pt-[2rem] md:pt-[3rem] pb-[3rem]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white">
        <div>
          <div className="bg-[#323232] hover:scale-105 hover:shadow-darker transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <Image
              src="/assets/webdev.png"
              alt="WebDev"
              width={100}
              height={100}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Web <br />
              Design
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              This is description
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#323232] hover:scale-105 hover:shadow-darker transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <Image
              src="/assets/softwaredev.png"
              alt="AppDev"
              width={100}
              height={100}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              App <br />
              Design
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              This is description
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#323232] hover:scale-105 hover:shadow-darker transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <Image
              src="/assets/dataanalytic.png"
              alt="Data Analytics"
              width={100}
              height={100}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Data Analytics
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              This is description
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#323232] hover:scale-105 hover:shadow-darker transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <Image
              src="/assets/devop.png"
              alt="DevOps"
              width={100}
              height={100}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Developer Tools
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              This is description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
