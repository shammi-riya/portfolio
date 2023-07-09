
import bannar2 from '../../../assets/bannar2.png'
import Typed from 'typed.js';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import resumeFile from '../../../assets/shammi (1).pdf'
import { IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

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
        'React Js'


      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])





  return (
    <div className="relative  w-full hero min-h-screen lg:px-28 md:px-8 px-5" >
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full py-6 items-center  lg:mx-36">
        <div data-aos="fade-right"
          className=' w-full mx-auto uppercase text-2xl space-y-3  px-28 sm:px-4  text-white'>
          <div className='text-7xl'>
            <h3>Hello</h3>

            <h4>I am Riya Moni</h4>
          </div>
          <h4>Welcome to my world</h4>
          <h1>My Skill:<span className='font-bold' style={{ whiteSpace: 'pre' }} ref={el}></span></h1>
          <div className='flex gap-4 ' >

          <Link to='https://www.linkedin.com/in/shammi-riya-b40525242/'>
          <button className="bg-[#858792] flex justify-center items-center duration-500 border-2 border-[#858792]   w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:border-white hover:bg-transparent hover:text-white text-white ">
              <IoLogoLinkedin></IoLogoLinkedin>
            </button>
          </Link>


            <Link to='https://github.com/shammi-riya'><button className="bg-[#858792] flex justify-center items-center transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-white border-[#858792] hover:border-white hover:bg-transparent hover:text-white text-2xl">
              <IoLogoGithub></IoLogoGithub>
            </button></Link>
           <Link> <button className="bg-[#858792] flex justify-center items-center transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-white border-[#858792] hover:border-white  hover:bg-transparent hover:text-white text-2xl">
              <IoLogoFacebook></IoLogoFacebook>
            </button></Link>

          </div>





          <button onClick={handleDownload}
            className="bg-gradient-to-r flex items-center justify-center gap-2 from-[#858792] to-[#4f5054] hover:bg-transparent hover:to-[#252734] text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300 text-md transform hover:scale-105 hover:shadow-lg">Dowenload
            Resumi

            <span><BsFillCloudArrowDownFill></BsFillCloudArrowDownFill></span>
          </button>

        </div>
        <div data-aos="fade-left"
          className='lg:px-10 md:px-6 pt-20'>
          <img className='h-[80vh] w-full' src={bannar2} alt="" />
        </div>
      </div>
    </div>

  );
};

export default Bannar;