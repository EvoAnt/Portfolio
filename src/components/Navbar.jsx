import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between py-4 bg-white/80
    backdrop-blur-md shadow-md w-full
     top-0 left-0 right-0 z-10"
    >
      <div className="flex items-center">
        <Link to={"/"} className="cursor-pointer">
          <h3 className="text-2xl font-medium text-black-500">
            <span className="h-10 ml-8 object-cover hover:text-purple-500">
              ANTHONYLARA
            </span>
          </h3>
        </Link>
      </div>

      <div className="items-center hidden space-x-8 mr-8 lg:flex">
        {/* <Link
          to={"/"}
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover:border-purple-500 cursor-pointer"
        >
          Home
        </Link> */}

        <Link
          to={"/about"}
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover:border-purple-500 cursor-pointer"
        >
          About
        </Link>

        <Link
          to={"/projects"}
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover:border-purple-500 cursor-pointer"
        >
          Projects
        </Link>

        <Link
          to={"/contact"}
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover:border-purple-500 cursor-pointer"
        >
          Contact
        </Link>

        <Link
          to={"/resume"}
          className="hover:text-purple-500 transition hover:border-b-2 border-black hover:border-purple-500 cursor-pointer"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
