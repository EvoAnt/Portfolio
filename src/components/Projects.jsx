import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import solecity from "../assets/solecity.png";
import starraiders from "../assets/star-raiders.png";
import watodoo from "../assets/watodoo.png";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div id="Projects">
      <h1 className="text-[46px] underline underline-offset-4 text-center mt-28"><span className="text-purple-500">PROJECTS</span></h1>
      <div className="flex flex-row flex-wrap items-center justify-center mt-24">
        <Card data-aos="zoom-in" className="mt-6 w-96 mb-6 mx-4 h-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={solecity} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Sole City
            </Typography>
            <Typography>
              An e-commerce site using MERN stack technologies and Bootstrap
              styling with full checkout/payment services using Stripe API &
              cloud photo upload with Cloudinary API.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex flex-row flex-wrap">
            <Link to={"https://solecity.netlify.app/"}>
              <Button className="hover:bg-purple-500">Live</Button>
            </Link>
            <Link
              to="https://github.com/EvoAnt/Sole-City-Client"
              className="text-purple hover:text-purple-500 rounded-full glow ml-3 p-2"
            >
              <AiFillGithub className="text-[32px]" />
            </Link>
          </CardFooter>
        </Card>

        <Card data-aos="zoom-in" className="mt-6 w-96 mb-6 mx-4">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={watodoo} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Watodoo
            </Typography>
            <Typography>
              A local community social media site with local restaurants search.
              Full-Stack app that uses JavaScript, Node.js, Express.js, MongoDB,
              Mongoose, Handlebars.js, and an Web-API.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex flex-row flex-wrap">
            <Link to={"https://watodoo.adaptable.app/auth/login"}>
              <Button className="hover:bg-purple-500">Live</Button>
            </Link>
            <Link
              to="https://github.com/EvoAnt/Watodoo-App"
              className="text-purple hover:text-purple-500 rounded-full glow ml-3 p-2"
            >
              <AiFillGithub className="text-[32px]" />
            </Link>
          </CardFooter>
        </Card>

        <Card data-aos="zoom-in" className="mt-6 w-96 mb-6 mx-4">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={starraiders} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Star Raiders Game
            </Typography>
            <Typography>
              A simple space-shooter highest-score game built with Vanilla
              JavaScript, CSS, HTML, and DOM manipulation utilizing a
              Object-Oriented Programming method.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex flex-row flex-wrap">
            <Link to={"https://evoant.github.io/Star-Raiders-Game/"}>
              <Button className="hover:bg-purple-500">Live</Button>
            </Link>
            <Link
              to="https://github.com/EvoAnt/Star-Raiders-Game"
              className="text-purple hover:text-purple-500 rounded-full glow ml-3 p-2"
            >
              <AiFillGithub className="text-[32px]" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
