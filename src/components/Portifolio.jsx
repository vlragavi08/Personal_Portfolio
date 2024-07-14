import React from "react";
import airline from "../assets/portfolio/airline.png";
import ToDo from "../assets/portfolio/ToDo.png";
import TourApp from "../assets/portfolio/TourApp.png";
import Starbucks from "../assets/portfolio/Starbucks.png";
import memeGenerator from "../assets/portfolio/memeGenerator.png"
import bmiCalculator from "../assets/portfolio/bmiCalculator.png"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: airline,
      href: "https://github.com/vlragavi08/airline-reservation-system-using-readers-writers-problem" ,
    },
    {
        id: 2,
        src: ToDo,
        href: "https://github.com/vlragavi08/To_do_list_flask" ,
    },
    {
      id: 3,
      src: TourApp,
      href: "https://github.com/vlragavi08/tour-react-app" ,
  },
  {
    id: 4,
    src: Starbucks,
    href: "https://github.com/vlragavi08/Starbucks_starter_menu" ,
},
{
  id: 5,
  src: memeGenerator,
  href: "https://github.com/vlragavi08/meme_generator",
},
{
  id: 6,
  src: bmiCalculator,
  href: "https://github.com/vlragavi08/bmi_calculator",

},

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href}>
              <img
                src={src}
                alt=""
                
                className="rounded-md duration-200 hover:scale-105"
              />
              </a>
              <div className="flex items-center justify-center">
                
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
