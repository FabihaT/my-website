import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Example project data
  const projectData = [
    {
      id: 1,
      imageSrc: "/assets/obituary.png",
      altText: "Obituary",
      title: "The Last Show",
      description:
        "A full-stack obituary system desgined with React and TailwindCSS for a sleek front-end interface and DynamoDB backend provided by AWS. Included features are a seamless integration of AI, cloud computing, and modern web development. Users can generate obituary descriptions with OpenAI GPT-3, apply text to speech using Amazon Polly, and persist data with DynamoDB. A serverless functionality is maintained with AWS Lambda functions.",
      sourceLink: "https://github.com/FabihaT/obituary-generator-project",
      demoLink:
        "https://yuja.ucalgary.ca/V/Video?v=980353&node=5199276&a=19618598&autoplay=1",
    },
    {
      id: 2,
      imageSrc: "/assets/flight.png",
      altText: "Flight",
      title: "Flight Reservation System",
      description:
        "A full-stack flight reservation system utilizing GUI for the front-end interface, and a MySQL database for the back-end. It requires users to register for an account to manage bookings. Upon booking, a digital receipt is emailed to the user. The system also caters to flight attendants and airline agents with specialized access for viewing passengers and client booking requests, respectively. Administrators maintain overall control of the system with the ability to update all aspects of flight operations.",
      sourceLink: "https://github.com/FabihaT/flight-reservation-system",
      demoLink:
        "https://yuja.ucalgary.ca/V/Video?v=980651&node=5200776&a=167282193&autoplay=1",
    },
    {
      id: 3,
      imageSrc: "/assets/ewr.png",
      altText: "EWR",
      title: "Animal Rescue System",
      description:
        "A Java software application for Example Wildlife Rescue (EWR), which specializes in animals like coyotes, foxes, porcupines, beavers, and raccoons. The application uses object-oriented design and a Graphical User Interface to generate a daily task list for volunteers to efficiently care for the animals in various areas and treatments, addressing EWR's need to automate their current manual and error-prone scheduling process. JUnit testing is applied to test the software functionality.",
      sourceLink: "https://github.com/FabihaT/vet-reservation-project",
      demoLink:
        "https://yuja.ucalgary.ca/V/Video?v=980237&node=5198650&a=12049844&autoplay=1",
    },
    {
      id: 4,
      imageSrc: "/assets/notes.png",
      altText: "Notes App",
      title: "SwiftNote",
      description:
        "This is a simple and easy to use note-taking app which utilizes languages such as HTML, CSS, JavaScript, and React. Users can use many features like creating new notes, editing, saving and persisting in local storage, deleting, and simple searching to filter notes.",
      sourceLink: "https://github.com/FabihaT/note-app",
      demoLink:
        "https://yuja.ucalgary.ca/V/Video?v=980258&node=5198788&a=39513988&autoplay=1",
    },
    {
      id: 5,
      imageSrc: "/assets/wordle.png",
      altText: "Wordle",
      title: "Wordle Game",
      description:
        "A word-guessing game where players have five chances to uncover a hidden five-letter word by guessing different combinations, receiving feedback after each attempt. Wordle is developed using a combination of HTML, CSS, and JavaScript. The game leverages event listeners to capture player input and dynamically update the game board. The inclusion of asynchronous behaviors simulates the interaction with APIs, creating a responsive and engaging gaming environment.",
      sourceLink: "https://github.com/FabihaT/wordle-game",
      demoLink:
        "https://yuja.ucalgary.ca/V/Video?v=980251&node=5198759&a=38656761&autoplay=1",
    },
    {
      id: 6,
      imageSrc: "/assets/artdb.png",
      altText: "Art DB",
      title: "Art Museum System",
      description:
        "A Python application designed to manage and interact with an art-themed MySQL database. The flow was designed with a simple and interactive command-line interface for two primary users: admins and guests. As a guest, you can browse information from a selection of tables stored in the art database. As an admin, you must login with MySQL credentials and select a table to modify. Key admin functions are inserting, updating, and deleting data.",
      sourceLink: "https://github.com/FabihaT/art-museum-project",
      demoLink:
        "https://yuja.ucalgary.ca/V/Video?v=980242&node=5198729&a=184738648&autoplay=1",
    },
  ];

  return (
    <div id="projects" className="bg-[#292929] pt-3 md:pt-10 pb-4">
      <h1 className="heading mb-10">
        My <span className="text-[#D4C295]">Projects</span>
      </h1>
      <div className="mx-auto px-4 max-w-7xl">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item mx-2 mb-10 flex" // Adjust margins and flex as needed
          additionalTransfrom={-50} // Adjust this value as needed for spacing
        >
          {projectData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-stretch bg-[#323232] rounded-lg shadow-lg overflow-hidden w-full max-w-md"
            >
              <div className="h-48 md:h-72 relative">
                <Image
                  src={project.imageSrc}
                  alt={project.altText}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className="flex-grow p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#D4C295] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 text-sm font-semibold bg-[#feecd1] rounded-lg hover:bg-[#D4C295] transition-colors duration-300"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 text-sm font-semibold bg-[#feecd1] rounded-lg hover:bg-[#D4C295] transition-colors duration-300"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
