interface Props {
  skill: string;
  level: string;
}

const SkillsLanguage = ({ skill, level }: Props) => {
  return (
    <div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-[#323232] rounded-sm text-white text-[20px] font-bold">
          {skill}
        </h1>
        <span
          className={`${level} bottom-0 h-[6px] absolute bg-[#D3FBD8]`}
        ></span>
      </div>
    </div>
  );
};

export default SkillsLanguage;
