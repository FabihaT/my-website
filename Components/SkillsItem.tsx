interface Props {
  title: string;
  year: string;
  descr: string;
}

const SkillsItem = ({ title, year, descr }: Props) => {
  return (
    <div className="mb-[2rem] md:mb-[3rem]">
      <span className="px-[2rem] text-[#D3FBD8] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#D3FBD8]">
        {year}
      </span>
      <h1 className="mt-[2rem] font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">
        {title}
      </h1>
      <p className="text-[#d3d2d2] font-normal w-[80%] text-[17px]">{descr}</p>
    </div>
  );
};

export default SkillsItem;
