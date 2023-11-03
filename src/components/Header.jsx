import img from "../assets/Me.jpg";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div
      id="Header"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
        <h1 className="text-[56px]">
          Hi im <span className="text-purple-500 uppercase">Anthony.</span>
        </h1>
        <h2>Full-Stack Developer</h2>
        <h3>
          JavaScript | React | Express.js | Node.js | MongoDB | HTML & CSS
        </h3>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div data-aos="fade-up" className="flex space-x-2">
              <Link
                to="https://github.com/EvoAnt"
                className="text-purple hover:text-purple-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/anthonylara24"
                className="text-purple hover:text-purple-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <img
        src={img}
        width={250}
        className="rounded backdrop-blur-lg shadow-lg shadow-black"
        alt="Me"
      />
    
    </div>
  );
};

export default Header;
