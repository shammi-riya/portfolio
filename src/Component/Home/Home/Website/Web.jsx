import { IoLogoGithub } from "react-icons/io";
import { FaChevronDown, FaChevronUp, FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './We.css'

import Aos from 'aos';
import 'aos/dist/aos.css';



const Web = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);


  const pojects = [

    {
      id: 0,
      pojectName: 'Shop Wish',
      techknology: ['Bootstrap','Css','react js', 'matarial ui','mongodb', 'express js', 'firebase', 'axios js','transtrack-quiry'],
      features: [
        'Using MERN Stack Technology',
        'Authentication with Firebase, email verification, JWT Token.transtrack-quiry for effeciant data fatching',
        'Users can add Product to the cart, remove from the cart see added product, increase and decrease product in the cart, send messages'
      ],

      githubClient: 'https://github.com/shammi-riya/shopwish_client',
      githubSurver: 'https://github.com/shammi-riya/shopwish-surver',
      liveImgLink: 'https://i.ibb.co/KyWjxy7/shopwish.png',
      liveLink: 'https://e-comarce-2d571.web.app/'

    },
    {
      id: 1,
      pojectName: 'Creative Hero',
      techknology: ['tailwind', 'daisy ui', 'react js', 'strie js', 'mongodb', 'express js', 'firebase', 'axios js','swiper js'],
      features: [
        'Streamlined Class Management: Instructors can easily add classes, and upon admin approval, students  can enroll and select their preferred classes, ensuring a smooth learning experience'
        ,
        'Tailored Dashboards: Enjoy a personalized experience with separate dashboards for users, students, instructors, and administrators. Instructors can effortlessly add classes, while the authority to approve .',
        'User Role Management: Admins can efficiently manage user roles, promoting users to admin or instructor status as needed. This ensures a well-organized and secure platform.'
        ,
        
      ],

      githubClient: 'https://github.com/shammi-riya/creative-hero-client',
      githubSurver: 'https://github.com/shammi-riya/craetive-hero-surver',
      liveImgLink: 'https://i.ibb.co/XJShz2q/Vite-React-2.png',
      liveLink: 'https://creative-hero-53a1a.web.app/'

    },
    {
      id: 4,
      pojectName: 'Bestro Boss Resturent',
      techknology: ['tailwind', 'react js', 'strie js', 'mongodb', 'express js', 'firebase', 'react-simple-captcha','react wassam component'],
      features: [
        'Admin can add food, update food, delete food, see booked services and update status, add admin',
        'Authentication with firebase, email verification, JWT Token',
        'users can order food after login and pement with stripe'
      ],

      githubClient: 'https://github.com/shammi-riya/besteu-boss-resturent',
      githubSurver: 'https://github.com/shammi-riya/besteu-boss-resturent',
      liveImgLink: 'https://i.ibb.co/1q4q34f/Bestro-Boss-1.png',
      liveLink: 'https://bestro-boss.web.app'

    },

   
    {
      id: 3,
      pojectName: 'Educational Toys',
      techknology: ['tailwind', 'react js', 'mongodb', 'firebase', 'daisy ui', 'react hook from', 'react wassam component'],
      features: [
        'Users can add Product to the cart, remove from the cart see added product, increase and decrease product in the cart, send messages',
        'Authenticated with firebase'
       
      ],
      githubClient: 'https://github.com/shammi-riya/educational_toys_clint',
      githubSurver: 'https://github.com/shammi-riya/educational_toys_surver',
      liveImgLink: 'https://i.ibb.co/xHFr82C/Educational-Toys.png',
      liveLink: 'https://educational-larning.web.app/'
    },
    {
      id: 5,
      pojectName: 'g3 Architecture',
      techknology: ['html', 'css', 'fully Responsive', 'media query', 'css Animation'],
      features: [
        'Figma to html'
      ],
      githubClient: 'https://github.com/shammi-riya',
      liveImgLink: 'https://i.ibb.co/dkXfPKY/g3-architecture.png',
      liveLink: 'https://shammi-riya.github.io/architec-one/'
    },
    {
      id: 6,
      pojectName: 'Ligel Slution',
      techknology: ['html', 'bootstrap', 'custom animation', 'media query'],
      features: [
        'PHD to html'
      ],
      githubClient: 'https://github.com/shammi-riya',

      liveImgLink: 'https://i.ibb.co/HhvVmQj/ligel-solutation-1.png',
      liveLink: 'https://splendid-moonbeam-f4e958.netlify.app/',

    },
   

  ]



  const [projecstId, setProjectId] = useState(null);


  const handleShowDetails = (projectId) => {

    setProjectId(projectId === projecstId ? null : projectId);
  }








  return (
    <
      >

      <div id="projects"
        data-aos="zoom-in"
        className="mt-5 lg:mx-32 md:mx-8 mx-5 sm:mx-4">
        <div data-aos="fade-left"
          className="text-center py-14 font-bold ">
          <h1 className="mx-auto text-white font-bold my-16 text-4xl border-y-4  border-indigo-600  w-64">My Latest Pojects</h1>
        </div>
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 w-full gap-8">
          {
            pojects.map(project => <>
              <div key={project.id}
                className={`${projecstId === project.id ? 'h-auto ' : 'h-fit '} rounded  shadow-xl w-[100%] bg-white px-4 py-5 overflow-hidden `}>
                <div
                >
                  <div className="card-image-container overflow-hidden h-80">
                    <img
                      className="w-full  card-image-scroll"
                      src={project.liveImgLink}
                      alt="Mountain"
                    />
                  </div>
                  <div className="h-full">
                    <div className=" py-4">
                      <div className="font-bold text-2xl mb-2 text-[#062265] ">{project.pojectName}</div>

                    </div>
                    <div className="flex gap-4 flex-row flex-wrap">
                      {
                        project.techknology.map(teck => <>
                          <div>
                            <button className="border-[1px]  hover:border-white rounded-md py-1 px-4 border-[#062265] hover:rounded-md hover:text-white font-semibold hover:translate-3 duration-500  hover:bg-[#062265] text-[#062265]">{teck}</button>
                          </div>
                        </>)
                      }
                    </div>






                    <div className="flex justify-between mt-6 ">
                      <div className="flex justify-between items-center gap-3">
                        <Link to={project?.githubClient}>
                          <button className="bg-white flex justify-center items-center transform hover:-translate-y-3 p-2 w-12 h-12 rounded-full duration-500 text-[#062265]  hover:border-white hover:bg-[#062265] hover:text-white text-4xl">
                            <IoLogoGithub></IoLogoGithub>
                          </button>
                        </Link>

                        {
                          project?.githubSurver && <Link to={project?.githubSurver}>
                            <button className="bg-white flex justify-center items-center transform hover:-translate-y-3  p-2 w-10 h-10 rounded-full duration-500 text-[#062265]  hover:border-white text-4xl  hover:bg-[#062265] hover:text-white ">
                              <FaGithubSquare></FaGithubSquare>
                            </button></Link>
                        }




                        <Link to={project?.liveLink}>
                          <button className="bg-white flex justify-center items-center transform hover:-translate-y-3 p-2  w-10 h-10 rounded-full duration-500 text-[#062265]  hover:border-white text-4xl  hover:bg-[#062265] hover:text-white ">
                            <FaExternalLinkAlt />
                          </button>

                        </Link>
                      </div>


                      <div>
                        <button
                          onClick={() => handleShowDetails(project.id)} // Pass the project ID to the handler
                          className="bg-white flex justify-center items-center transform hover:-translate-y-3  p-2 w-10 h-10 rounded-full duration-500 text-[#062265]  hover:border-white text-4xl  hover:bg-[#062265] hover:text-white "
                        >
                          {projecstId === project.id ? (
                            <FaChevronUp></FaChevronUp>
                          ) : (
                            <FaChevronDown></FaChevronDown>
                          )}
                        </button>

                      </div>
                    </div>

                    <div className="my-4">
                      {projecstId === project.id && ( // Display project details only if the project ID matches the selected ID
                        <div className="my-4">
                          <div className="px-3 font-semibold text-[#062265] space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </>)
          }
        </div>
      </div>
    </>
  );
};

export default Web;