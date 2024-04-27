import { XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "react-scroll";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[rgba(0,0,0,0.85)]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        {/* Using Link from react-scroll */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link-mobile"
          onClick={closeNav}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link-mobile"
          onClick={closeNav}
        >
          About
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link-mobile"
          onClick={closeNav}
        >
          Education
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link-mobile"
          onClick={closeNav}
        >
          Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link-mobile"
          onClick={closeNav}
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link-mobile"
          onClick={closeNav}
        >
          Contact
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#feecd1] cursor-pointer z-[1000001]"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
