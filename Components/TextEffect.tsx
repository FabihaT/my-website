import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Full-Stack Developer",
        1500,
        "Media Marketing Strategist",
        1500,
        "Graphic Design Enthusiast",
        1500,
        "Reader and Creative Writer",
        1500,
      ]}
      speed={50}
      className="text-[2.5rem] md:text-[2.5rem] text-[#D3FBD8] font-bold"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
