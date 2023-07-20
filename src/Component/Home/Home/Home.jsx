
import Bannar from './Bannar';
import Contuct from '../Contuct';
import Web from './Website/Web';
import Skill from './Skill/Skill';
import Footer from '../Footer';
import { useContext } from 'react';
import { ThemeContext } from '../../../Provider/ThemeProvider';
import Navber from '../../Shared/Navber';
import About from './About/About';

// import "./CustomCursor.css";npm

const Home = () => {

    const {isDarkMode} = useContext(ThemeContext)
    return (
        <div className= {!isDarkMode? " bg-[#333b72] custom-cursor " :" bg-[#252734]" }>
          
            <Navber></Navber>
            <Bannar></Bannar>
            <About></About>
            <Skill></Skill>
            <Web></Web>

            <Contuct></Contuct>
            <Footer></Footer>
            
            
            
        </div>
    );
};

export default Home;