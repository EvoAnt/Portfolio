import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex justify-between py-4 bg-white backdrop-blur-md shadow-md shadow-purple-500 w-full fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <a spy={true} smooth={true} onClick={scrollToTop} className="cursor-pointer">
          <h3 className="text-2xl font-medium text-black-500">
            <span className="h-10 ml-6 object-cover">{"< ANTHONYLARA />"}</span>
          </h3>
        </a>
      </div>

      <div className="sm:hidden">
        <Button className="block mr-3" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </Button>
        {click && (
          <ul className="absolute top-16 left-0 right-0 bg-white border-t border-purple-500 sm:hidden">
            <li>
              <Link
                spy={true}
                smooth={true}
                to={"About"}
                className="block py-2 px-4 hover:text-purple-500 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                to={"Projects"}
                className="block py-2 px-4 hover:text-purple-500 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                to={"Contact"}
                className="block py-2 px-4 hover:text-purple-500 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href={
                  "https://drive.google.com/file/d/1PhW5ezijbll84RfHag3IScxj-N7CmdtM/view?usp=drive_link"
                }
                className="block py-2 px-4 hover:text-purple-500 cursor-pointer"
              >
                Resume
              </a>
            </li>
          </ul>
        )}
      </div>

      <div className="text-xl items-center hidden space-x-8 mr-8 sm:flex">
        <Link
          spy={true}
          smooth={true}
          to={"About"}
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover:border-purple-500 cursor-pointer"
        >
          About
        </Link>

        <Link
          spy={true}
          smooth={true}
          to={"Projects"}
          offset={-80}
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover:border-purple-500 cursor-pointer"
        >
          Projects
        </Link>

        <Link
          spy={true}
          smooth={true}
          to={"Contact"}
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover:border-purple-500 cursor-pointer"
        >
          Contact
        </Link>

        <a
          href={
            "https://drive.google.com/file/d/1PhW5ezijbll84RfHag3IScxj-N7CmdtM/view?usp=drive_link"
          }
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover.border-purple-500 cursor-pointer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
