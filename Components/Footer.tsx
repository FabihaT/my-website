import Image from "next/image";

const Footer = () => {
  return (
    <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#292929]">
      <div className="grid border-b-[1px] pb-[6rem] border-[#feecd1] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
        {/* Column 1 */}
        <div className="flex items-center justify-center sm:col-span-2 md:col-span-2 lg:col-span-1">
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Fabiha <span className="text-[#D4C295]">Tuheen</span>
            </h1>
            <p className="text-[17px] w-[100%] text-white opacity-70">
              Software Engineer Student
            </p>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex items-center justify-center sm:col-span-1 md:col-span-1 lg:col-span-1">
          <a href="mailto:fabiha.neera@gmail.com">
            <div className="md:w-[4.5rem] md:h-[4.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
              <Image
                src="/assets/gmail.png"
                alt="Mail"
                width={100}
                height={100}
                className="md:w-[3rem] md:h-[3rem] sm:mr-[20px] w-[4rem] h-[4rem]"
              />
            </div>
          </a>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Email
            </h1>
            <p className="text-[17px] w-[100%] text-white opacity-70">
              fabiha.neera@gmail.com
            </p>
          </div>
        </div>
        {/* Column 3 */}
        <div className="flex items-center justify-center sm:col-span-1 md:col-span-1 lg:col-span-1">
          <a href="https://www.linkedin.com/in/fabiha-tuheen-326344141/">
            <div className="md:w-[4.5rem] md:h-[4.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
              <Image
                src="/assets/LinkedIn.png"
                alt="LinkedIn"
                width={100}
                height={100}
                className="md:w-[3rem] md:h-[3rem] sm:mr-[20px] w-[4rem] h-[4rem]"
              />
            </div>
          </a>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              LinkedIn
            </h1>
            <p className="text-[17px] w-[100%] text-white opacity-70">
              Let&apos;s Connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
