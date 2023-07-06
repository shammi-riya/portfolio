import img1 from '../../../../assets/1672775342145.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return (
        < div id='#About'
        className="text-white my-28 px-32">

            <h1 className="text-center font-bold my-16 text-4xl ">About Me</h1>
        

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div data-aos="fade-right"
                >
                    <img className='h-[450px] w-[450px]' src={img1} alt="" />
                </div>

                <div
                data-aos="fade-left"
                >

                    <p className="text-lg text-justify">Hello guys!! I am Shammi Akter Riya  from Bangladesh. I'm a Diploma student of CST (Computer Science & Technology). I'm a passionate web developer with a keen eye for detail, and a drive to create elegant, efficient, and user-friendly web app. With over 1+ years of experience in web development, a passionate front-end web developer with over a year of experience in HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, ES6, Firebase, MondoDB, Node.js, Express.js and JWT . I also enjoy doing research to stay up-to-date with the latest trends and technologies in web development. I specialize in creating modern, responsive, and user-friendly websites that provide a seamless experience to users.

                        <div className='flex gap-9 my-4'>
                            <div>
                                <p className='text-4xl font-bold'>01</p>
                                years of experence
                            </div>
                            <div>
                                <p className='text-4xl font-bold'>15+ </p>
                                Projects
                            </div>
                        </div>

                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;