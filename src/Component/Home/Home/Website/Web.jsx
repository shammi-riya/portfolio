import { IoLogoGithub } from "react-icons/io";
import { FaChevronDown, FaChevronUp, FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      pojectName: 'Creative Hero',
      techknology: ['tailwind', 'daisy ui' ,'react js', 'strie js', 'mongodb', 'express js', 'firebase', 'axios js'],
      features: [
        'After logging in, the user can select any class and remove a class and add feedback.',
        'Authentication with Firebase, email verification, JWT Token.',
        'Admin can remove any user, update user role to admin or instructor.',
        'Instructor can update content in their course.'
      ],
     
      githubClient: 'https://github.com/shammi-riya/creative-hero-client',
      githubSurver: 'https://github.com/shammi-riya/craetive-hero-surver',
      liveImgLink: 'https://i.ibb.co/XJShz2q/Vite-React-2.png',
      liveLink: 'https://creative-hero-53a1a.web.app/'

    },
    {
      id: 1,
      pojectName: 'Bestro Boss Resturent',
      techknology: ['tailwind', 'react js', 'strie js', 'mongodb', 'express js', 'firebase', 'react-simple-captcha'],
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
      id: 2,
      pojectName: 'Easy Buy',
      techknology: ['tailwind', 'react js', 'strie js', 'mongodb', 'express js', 'firebase', 'react-hook-from', 'TanStack Query '],
      features: [
        'Users can add Product to the cart, remove from the cart see added product, increase and decrease product in the cart, send messages',
        'Authenticated with firebase'
      ],
      githubClient: 'https://github.com/shammi-riya/easy_bye_clientsite',
      githubSurver: 'https://github.com/shammi-riya/easy_bye_surver',
      liveImgLink: 'https://i.ibb.co/NxQnLyr/Vite-React.png',
      liveLink: 'https://easy-buy-cdeab.web.app/'
    },
    {
      id: 3,
      pojectName: 'Summer Camp',
      techknology: ['tailwind', 'react js', 'strie js', 'mongodb', 'express js', 'firebase', 'react-helmet-async '],
      features: [
        'Users can add Product to the cart, remove from the cart see added product, increase and decrease product in the cart, send messages',
        'Authenticated with firebase'
      ],
      githubClient: 'https://github.com/shammi-riya/summer-camp_client',
      githubSurver: 'https://github.com/shammi-riya/summer_camp_surver',
      liveImgLink: 'https://i.ibb.co/sb70rV8/Vite-React-1.png',
      liveLink: 'https://summer-camp-419a5.web.app/'
    },
    {
      id: 4,
      pojectName: 'Educational Toys',
      techknology: ['tailwind', 'react js',  'mongodb', 'firebase','daisy ui' ,'react hook from', 'react wassam component'],
      features: [
        'Users can add Product to the cart, remove from the cart see added product, increase and decrease product in the cart, send messages',
        'Authenticated with firebase'
      ],
      githubClient: 'https://github.com/shammi-riya/educational_toys_clint',
      githubSurver: 'https://github.com/shammi-riya/educational_toys_surver',
      liveImgLink: 'https://i.ibb.co/xHFr82C/Educational-Toys.png',
      liveLink: 'https://educational-larning.web.app/'
    }
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
      className=" lg:mx-32 md:mx-8 mx-5 sm:mx-4">
        <div data-aos="fade-left"
        className="text-center py-14 font-bold ">
          <h1 className="text-4xl text-white">My latest Pojects</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8">
          {
            pojects.map(project => <>
              <div key={project.id}
                className={`${projecstId === project.id ? 'h-auto ' : 'h-fit '} rounded  shadow-xl w-[100%] bg-white px-4 py-5 overflow-hidden `}>
                <div 
                >
                  <div className="card-image-container overflow-y-scroll h-80">
                    <img className="w-full" src={project.liveImgLink} alt="Mountain" />
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



                        <Link to={project?.githubSurver}>
                          <button className="bg-white flex justify-center items-center transform hover:-translate-y-3  p-2 w-10 h-10 rounded-full duration-500 text-[#062265]  hover:border-white text-4xl  hover:bg-[#062265] hover:text-white ">
                            <FaGithubSquare></FaGithubSquare>
                          </button></Link>


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