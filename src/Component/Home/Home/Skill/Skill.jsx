import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../../Provider/ThemeProvider";






const Skill = () => {
    const {isDarkMode} = useContext(ThemeContext);

        useEffect(() => {
          Aos.init();
          Aos.refresh();
        }, []);
      
    return (
        <>
            <div  id="skill"
            data-aos="zoom-in"
            className="text-center py-10 font-bold ">
                <h1 className="text-4xl text-white">My Skill</h1>
            </div>
            < div data-aos="zoom-in"
            className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-3 py-3 px-32 ">


    
                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3">
                            <FaHtml5 className="transition-all duration-300 transform group-hover:rotate-45"></FaHtml5>
                        </span>
                    </div>
                    <p className="text-lg block">HTML 5</p>
                </div>


                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3"> <FaCss3></FaCss3></span>
                    </div>
                    <p className="text-lg block">CSS3</p>
                </div>

            


                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3"> <FaBootstrap></FaBootstrap></span>
                    </div>
                    < p className="text-lg block">Bootstrap</p>
                </div>
                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3"> <SiTailwindcss></SiTailwindcss></span>
                    </div>

                    <p className="text-lg block">Tailwind Css</p>
                </div>
                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3">  <DiJavascript1></DiJavascript1></span>
                    </div>

                    <p className="text-lg block">Javascript</p>
                </div>

                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3">  <FaReact></FaReact></span>
                    </div>

                    <p className="text-lg block">React Js</p>
                </div>
                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3">  <FaNodeJs></FaNodeJs></span>
                    </div>

                    <p className="text-lg block">Node Js</p>
                </div >
                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3">  <SiMongodb></SiMongodb></span>
                    </div>


                    <p className="text-lg block">Mongodb</p>
                </div >
                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3">   <SiExpress></SiExpress></span>
                    </div>

                    < p className="text-lg block">Express js</p>
                </div>
                <div className={`shadow-2xl hover:scale-110 duration-300 ${isDarkMode&& 'hover:bg-gray-700'}  duration-400 text-white p-5 text-center text-8xl`}>
                    <div>
                        <span className="flex justify-center items-center p-3">   <SiFirebase></SiFirebase></span>
                    </div>


                    <p className="text-lg block">Firebase</p>
                </div>


            </div>
        </>
    );
};

export default Skill;