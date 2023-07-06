
import { useContext, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import contuct from '../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../../Provider/ThemeProvider';


const Contuct = () => {
    const {isDarkMode} = useContext(ThemeContext);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);



    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_v885hme',
       'template_fjbo3d7', 
       form.current, 'YFL0_5lycFlgu4zY2')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
      <div id='#contuct'>
         <div data-aos="zoom-in"
         className="text-center py-14 font-bold ">
            <h1 className="text-4xl text-white">Contuct Us</h1>
        </div>
          <div  
          id='contuct'
        className="hero h-[75vh] bg-fixed" 
        style={{ backgroundImage: `url("${contuct}")` }}>
            
            <div className="hero-overlay  bg-opacity-60"></div>
            <div className=" grid  lg:grid-cols-2 grid-cols-1  gap-8  w-full px-28">
                <div 
                className="">



                    <form data-aos="fade-dowen"
                     ref={form} onSubmit={sendEmail}>

                        <div className='my-3'>
                            <label className='text-white text-xl my-3' htmlFor="">Name</label>
                            <input className='py-2 w-full rounded' 
                            type="text" 
                            name="user_name"  />
                        </div>


                        <div className='my-3'>
                            <label className='text-white text-xl my-3' htmlFor="">Email</label>
                            <input className='py-2 w-full rounded'
                                type="email" name="user_email" />
                        </div>
                        
                        <div className='my-3'>
                            <label className='text-white text-xl my-3' htmlFor="">Write Message</label>
                            <textarea
                                name="message"
                                className="textarea textarea-bordered w-full"
                                placeholder="Bio"></textarea>
                        </div>

                        


                        <input 
                        className={`py-2 w-full ${!isDarkMode? "bg-[#252734] " : "bg-[#333b72]"}   text-white text-xl`}
                        type="submit" value="Send Message" />
                    </form>








                </div>

                <div data-aos="fade-dowen"
                className="w-full  h-0 relative aspect-w-16 aspect-h-6 hidden md:block">
                    <iframe className='w-full mt-8'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58312.16609588155!2d89.20876874081918!3d24.01306089804296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84d98fa5bf3d%3A0xb038902617eb9884!2sPabna!5e0!3m2!1sen!2sbd!4v1685236724072!5m2!1sen!2sbd"
                        // width="450"
                        height="310"
                        style={{ border: 0 }}
                        allowFullScreen=""

                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>



            </div>

        </div>
      </div>
    );
};

export default Contuct;