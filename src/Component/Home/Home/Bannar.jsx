
import Typed from 'typed.js';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import resumeFile from '../../../assets/shammi (1).pdf'
import { IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/r2-removebg-preview.png'

const Bannar = () => {

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeFile;
    downloadLink.download = 'my_resume.pdf';
    downloadLink.click();
  };



  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const el = useRef(null)

  const typed = useRef(null);


  useEffect(() => {
    const options = {
      strings: [
        ' HTML5',
        ' CSS3',
        ' Bootstrap',
        ' Tailwind',
        ' javascript',
        'React Js',
        'express js',



      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    };

    
    typed.current = new Typed(el.current, options);

    return () => {
      
      typed.current.destroy();
    }
  }, [])





  return (
    <div className="relative  w-full hero min-h-screen lg:px-28 md:px-8 px-5" >
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full py-6 items-center  lg:mx-36">
        <div data-aos="fade-right"
          className=' w-full mx-auto uppercase text-2xl space-y-3  px-28 sm:px-4  text-white'>
          <div className='lg:text-7xl text-4xl'>
            <h3>Hello</h3>

            <h4>I am Riya Moni</h4>
          </div>
          <h4>Welcome to my world</h4>
          <h1>Skill:<span className='font-bold' style={{ whiteSpace: 'pre' }} ref={el}></span></h1>
          <div className='flex gap-4 ' >

            <Link to='https://www.linkedin.com/in/shammi-riya-b40525242/'>
              <button className="bg-[#5162d1] flex justify-center items-center duration-500 border-2 border-indigo-600   w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:border-white hover:bg-transparent hover:text-white text-white ">
                <IoLogoLinkedin></IoLogoLinkedin>
              </button>
            </Link>


            <Link to='https://github.com/shammi-riya'><button className="bg-[#5162d1] flex justify-center items-center transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-white border-indigo-600 hover:border-white hover:bg-transparent hover:text-white text-2xl">
              <IoLogoGithub></IoLogoGithub>
            </button></Link>
            <Link> <button className="bg-[#5162d1] flex justify-center items-center transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-white border-indigo-600 hover:border-white  hover:bg-transparent hover:text-white text-2xl">
              <IoLogoFacebook></IoLogoFacebook>
            </button></Link>

          </div>







          <a onClick={handleDownload}
            href="#_" className="relative text-md inline-flex items-center justify-center p-4 px-4 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#333b72] via-[#5162d1] to-indigo-600"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#333b72] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white flex items-center gap-2"><span className='flex gap-2'><span className='lg:block hidden'>DowenLoad</span> Resumi</span><span><BsFillCloudArrowDownFill></BsFillCloudArrowDownFill></span></span>
          </a>

        </div>
        <div data-aos="fade-left"
          className='lg:px-10 md:px-6 pt-20'>
          <img className='h-[550px] w-[480px] border-2 lg:ml-12 rounded border-indigo-500' src={img1} alt="" />
        </div>
      </div>
    </div>

  );
};

export default Bannar;