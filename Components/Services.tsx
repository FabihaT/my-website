import Image from "next/image";

const Services = () => {
  return (
    <div
      id="education"
      className="bg-[#292929] pt-[2rem] md:pt-[3rem] pb-[3rem]"
    >
      <h1 className="heading">
        What I <span className="text-[#D4C295]">Can Do</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto gap-[3rem] mt-[2rem] text-white">
        <div className="flex flex-col h-[100%]">
          <div className="bg-[#323232] flex flex-col hover:scale-105 hover:shadow-darker transform transition-all duration-300 font-semibold text-center p-[1rem] justify-between h-full">
            <Image
              src="/assets/webdev.png"
              alt="WebDev"
              width={200}
              height={200}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] uppercase">
              Web Development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal flex-grow text-justify overflow-y-auto">
              Building websites with responsive designs and intuitive interfaces
              through full-stack development. I use modern languages and
              frameworks to create robust back-end services and database
              systems, ensuring a seamless and user-friendly front-end
              experience. <br />
              <br />
              <i className="font-semibold">
                Experience with Java, JavaScript, TypeScript, React, SpringBoot,
                Java Swing (GUI), HTML, BootStrap CSS and TailwindCSS, and
                WordPress
              </i>
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100%]">
          <div className="bg-[#323232] flex flex-col hover:scale-105 hover:shadow-darker transform transition-all duration-300 font-semibold text-center p-[1rem] justify-between h-full">
            <Image
              src="/assets/db.png"
              alt="Database"
              width={200}
              height={200}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] uppercase">
              Database Management
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal flex-grow text-justify overflow-y-auto">
              Ensuring data security and optimized performance of CRUD (Create,
              Read, Update, Delete) operations through database design and
              management. I use this to manage data reliably in our websites and
              user interfaces developed. <br />
              <br />
              <i className="font-semibold">Experience with MySQL</i>
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100%]">
          <div className="bg-[#323232] flex flex-col hover:scale-105 hover:shadow-darker transform transition-all duration-300 font-semibold text-center p-[1rem] justify-between h-full">
            <Image
              src="/assets/testing.png"
              alt="Testing"
              width={200}
              height={200}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] uppercase">
              Testing
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal flex-grow text-justify overflow-y-auto">
              I learned continuous integration and test-driven development using
              unit (black-box and white-box), integration (mutation and GUI),
              and system level testing. These are the foundation to building
              software reliability and quality code that mitigates faults.{" "}
              <br />
              <br />
              <i className="font-semibold">
                Experience with automated testing frameworks such as JUnit,
                Selenium, and Mockito, and the testing tool Eclipse
              </i>
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100%]">
          <div className="bg-[#323232] flex flex-col hover:scale-105 hover:shadow-darker transform transition-all duration-300 font-semibold text-center p-[1rem] justify-between h-full">
            <Image
              src="/assets/machinelearning.png"
              alt="Machine Learning"
              width={200}
              height={200}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] uppercase">
              Machine Learning
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal flex-grow text-justify overflow-y-auto">
              I learned how to collect, interpret, and preprocess data to build
              simple machine learning models for classification and regression
              tasks using Linear, Descision tree, Support Vector, and Cluster
              methods. <br />
              <br />
              <i className="font-semibold">
                Experience with Python, Numpy, Matplotlib, Pandas, and
                Scikit-Learn
              </i>
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100%]">
          <div className="bg-[#323232] flex flex-col hover:scale-105 hover:shadow-darker transform transition-all duration-300 font-semibold text-center p-[1rem] justify-between h-full">
            <Image
              src="/assets/datastructure.png"
              alt="Data Structures"
              width={200}
              height={200}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] uppercase">
              Data Structures
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal flex-grow text-justify overflow-y-auto">
              I built independent libraries of foundational data structures such
              as arrays, stacks, heaps, queues, lists, hash tables, trees, and
              graphs that use efficient sorting and searching algorithms. <br />
              <br />
              <i className="font-semibold">Experience with Python and C/C++</i>
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100%]">
          <div className="bg-[#323232] flex flex-col hover:scale-105 hover:shadow-darker transform transition-all duration-300 font-semibold text-center p-[1rem] justify-between h-full">
            <Image
              src="/assets/architecture.png"
              alt="Software Architecture"
              width={200}
              height={200}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] uppercase">
              Software Architecture
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal flex-grow text-justify overflow-y-auto">
              I learned the principles of software architecture design, such as
              microservices and layered architecture, to create scalable,
              robust, and secure software systems that meet functional and
              non-functional requirements. <br />
              <br />
              <i className="font-semibold">
                Experience with building an MVC (Model-View-Controller) and
                Microservices software system
              </i>
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100%]">
          <div className="bg-[#323232] flex flex-col hover:scale-105 hover:shadow-darker transform transition-all duration-300 font-semibold text-center p-[1rem] justify-between h-full">
            <Image
              src="/assets/cloud.png"
              alt="Cloud Platforms"
              width={200}
              height={200}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] uppercase">
              Cloud Platforms
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal flex-grow text-justify overflow-y-auto">
              I leveraged cloud services to deploy scalable and secure
              applications and databases. This ensures high and fast
              availability and const-effective infrastructure solutions to
              challenges faced in local environment development. <br />
              <br />
              <i className="font-semibold">
                Experience with Terraform, Lambda and DynamoDB services from
                AWS, and Google Cloud Platform
              </i>
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100%]">
          <div className="bg-[#323232] flex flex-col hover:scale-105 hover:shadow-darker transform transition-all duration-300 font-semibold text-center p-[1rem] justify-between h-full">
            <Image
              src="/assets/softwaredev.png"
              alt="Source Control"
              width={200}
              height={200}
              className="w-[6rem] h-[6rem] mx-auto"
            />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] uppercase">
              Source Control
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal flex-grow text-justify overflow-y-auto">
              I maintain code quality and collaboration through efficient source
              control practices. Through modular code development, I can build
              new features and facilitate smooth and continuous integration with
              my team throughout development and deployment. <br />
              <br />
              <i className="font-semibold">
                Experience with Visual Studio Code and GitHub.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
