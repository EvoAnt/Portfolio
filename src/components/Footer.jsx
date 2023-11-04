import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col h-48 pt-10 justify-center text-center">
      <div className="mb-2">
        <p className="">Designed and Built by Anthony Lara</p>
      </div>
      <div className="flex justify-center space-x-2">
        <a
          href="https://github.com/EvoAnt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-purple-500 transition-all duration-150 ease-in-out"
        >
          <FaGithub className="text-[38px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/anthonylara24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-purple-500 transition-all duration-150 ease-in-out"
        >
          <FaLinkedinIn className="text-[38px]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
