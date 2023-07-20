import img1 from '../../../../assets/r2-removebg-preview.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsFlag } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';


const About = () => {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <div id='About'
            className="text-white my-28 sm:px-10 sm:w-full mx-auto lg:px-32">

            <h1 className="mx-auto font-bold my-16 text-4xl border-y-4  border-indigo-600  w-44">About Me</h1>

            <div className='lg:flex lg:flex-nowrap sm:flex-wrap justify-center items-center lg:gap-12'>
                <div className='lg:w-1/2 lg:block hidden sm:w-full mx-auto'>
                    <img className='lg:h-96 sm:h-auto  border-2 rounded border-indigo-600 ' src={img1} alt="" />
                </div>
                <div className='space-y-2 lg:text-start text-center sm:mt-5'>
                    <h2 className='lg:text-5xl md:text-2xl font-bold'>I am Frontend Developer</h2>
                    <h1 className='text-xl font-bold'>I am Shammi Akter form Bangladesh. I am Learning Programming every single day.I'm a Diploma student of CST (Computer Science & Technology). I have some projects with MERN Stack. I am a hard working person. I always learn new technologies everyday.</h1>
                   <div className='lg:block hidden '>
                   <p className='flex gap-2 items-center text-xl'><BsFlag></BsFlag>  <span>Bangladesh</span></p>
                    <p className='flex gap-2 items-center text-xl'><span><AiFillPhone></AiFillPhone></span> <span>+8801840284709</span></p>
                    <p className='flex gap-2 items-center text-xl'><span><SiGmail></SiGmail></span> <span>shammiriya455@gmail.com</span></p>
                   </div>

                </div>
            </div>

        </div>
    );
};

export default About;