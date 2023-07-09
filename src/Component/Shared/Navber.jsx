
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useContext } from "react";
import  { ThemeContext } from "../../Provider/ThemeProvider";


const Navber = () => {
const {toggleTheme,isDarkMode} = useContext(ThemeContext);
console.log(isDarkMode);

  const navbarItem = <>
    <li className="p-4 border-b-2 text-xl border-opacity-0  hover:border-opacity-100  hover:text-white border-white duration-200 cursor-pointer">
      <a href="/">Home</a>
    </li>


    <li className="p-4  text-xl border-b-2  border-opacity-0 hover:border-opacity-100 hover:text-white border-white duration-200 cursor-pointer">
      <a href="#About">About</a>
    </li>


    <li className="p-4  text-xl border-b-2  border-opacity-0 hover:border-opacity-100 hover:text-white border-white duration-200 cursor-pointer">
      <a href="#skill">Skill</a>
    </li>

    <li className="p-4  text-xl border-b-2  border-opacity-0 hover:border-opacity-100 hover:text-white border-white duration-200 cursor-pointer">
      <a href="#projects">Projects</a>
    </li>

    <li className="p-4  text-xl border-b-2  border-opacity-0 hover:border-opacity-100 hover:text-white border-white duration-200 cursor-pointer">
      <a href="#contuct"> Contuct</a>
    </li>
  </>




  return (

    <div className=" 
        navbar shadow-2xl text-white   lg:absolute md:relative  top-0 z-10 px-32">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 text-xl text-white rounded-box w-52">
            {navbarItem}
          </ul>
        </div>
        <h1 className="text-2xl font-bold uppercase">Riya Moni</h1>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className=" menu-horizontal px-1 ">
          {navbarItem}
        </ul>
      </div>
      <div className="navbar-end lg:flex hidden sm:hidden">
        <div className="flex justify-between items-center gap-2">
        <button className="bg-gradient-to-r flex items-center justify-center gap-2 from-[#858792] to-[#4f5054] hover:bg-transparent hover:to-[#252734]  font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300 text-md transform hover:scale-105 hover:shadow-lg">
          get Hierd


        </button>

        <div onClick={toggleTheme}>
          
            {
              isDarkMode ?<span 
              className="text-2xl p-3 text-white"><MdDarkMode></MdDarkMode></span>: <span  className="text-2xl p-3 text-white">  <CiDark></CiDark></span> 
              
          
  
            }
        </div>
        </div>
      </div>
    </div>






  );
};

export default Navber;