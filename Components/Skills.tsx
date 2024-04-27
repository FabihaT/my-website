import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div
      id="experience"
      className="pt-[2rem] md:pt-[3rem] pb-[3rem] bg-[#292929]"
    >
      <h1 className="heading">
        Experience and <span className="text-[#D4C295]">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[2rem] md:pt-[3rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem
            title="BSc in Software Engineering"
            year="2021 - Present"
            descr="This is a 4 year program with the option of an additional internship year. As a student, we are exposed to the theoretical foundation and gain specialized knowledge to develop, install, validate, and maintain software systems. With this degree, I envision future career paths in UI/UX design or Artificial Intelligence and Machine Learning to continually expand my learning and skillset. The relevant courses taken and planned to take can be viewed below."
          />
        </div>
        <div>
          <SkillsItem
            title="Young Muslims Sisters Canada"
            year="2020 - Present"
            descr="I volunteer with this non-profit organization as the Media Chair of the National Board. The technical skills I have used were to develop and maintain their website, with future goals of implementing an e-commerce platform. Other impersonal skills, such as leadership and strong communication, are developed through directing media projects for my team. Our social media is constantly updated utilizing effective marketing strategies for various events and campaigns."
          />
        </div>
        <SkillsLanguage skill="HTML" level="w-[90%]" />
        <SkillsLanguage skill="Tailwind CSS" level="w-[70%]" />
        <SkillsLanguage skill="JavaScript" level="w-[75%]" />
        <SkillsLanguage skill="TypeScript" level="w-[55%]" />
        <SkillsLanguage skill="React JS" level="w-[80%]" />
        <SkillsLanguage skill="Java Swing" level="w-[85%]" />
        <SkillsLanguage skill="SpringBoot" level="w-[70%]" />
        <SkillsLanguage skill="MySQL" level="w-[90%]" />
        <SkillsLanguage skill="Python" level="w-[80%]" />
        <SkillsLanguage skill="C/C++" level="w-[90%]" />
        <SkillsLanguage skill="C#" level="w-[70%]" />
        <SkillsLanguage skill="Terraform" level="w-[65%]" />
        <SkillsLanguage skill="Docker" level="w-[60%]" />
        <SkillsLanguage skill="GitHub" level="w-[95%]" />
        <SkillsLanguage skill="VS Code" level="w-[95%]" />
        <SkillsLanguage skill="Eclipse" level="w-[70%]" />
      </div>
    </div>
  );
};

export default Skills;
