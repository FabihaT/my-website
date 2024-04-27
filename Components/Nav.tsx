import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { Link } from "react-scroll";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#2a2929] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <div
          className="w-14 h-14 relative cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/assets/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          About
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Education
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Contact
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#feecd1]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
