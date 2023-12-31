import img from "../assets/Me.jpg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div
      id="Header"
      className="mb-10 mt-10 lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div
        data-aos="fade-right"
        className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black"
      >
        <h1 className="text-[66px]">
          Hi i'm,
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-black inline-block text-transparent bg-clip-text">
            <Typewriter
              options={{
                strings: [" ANTHONY"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <h2>Full-Stack Developer</h2>
        <h3>
          JavaScript | React | Express.js | Node.js | MongoDB | TailwindCSS
        </h3>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
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
        <Link
          to={
            "https://drive.google.com/file/d/1PhW5ezijbll84RfHag3IScxj-N7CmdtM/view?usp=drive_link"
          }
          target="_blank"
        >
          <Button className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 inline-block">Resume</Button>
        </Link>
      </div>

      <img
        data-aos="fade-down"
        src={img}
        width={350}
        className="rounded backdrop-blur-lg shadow-lg shadow-black"
        alt="Me"
      />
    </div>
  );
};

export default Header;
