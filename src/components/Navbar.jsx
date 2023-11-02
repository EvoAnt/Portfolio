import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-around py-4 bg-white/80
    backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-10"
    >
      <div className="flex items-center">
        <Link to={"/"} className="cursor-pointer">
          <h3 className="text-2xl font-medium text-blue-500">
            <img className="h-10 object-cover" src="" alt="Anthony Lara" />
          </h3>
        </Link>
      </div>

      <div className="items-center  hidden space-x-8 lg:flex">
        <NavLink
          to={"/"}
          className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
        >
          Home
        </NavLink>

        <Link
          to={"/about"}
          className="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                    font-semibold text-blue-600"
        >
          About
        </Link>

        <Link
          to={"/contact"}
          className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
        >
          Contact
        </Link>

        <Link
          to={"/resume"}
          className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
