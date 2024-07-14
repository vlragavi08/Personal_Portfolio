import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        
        <p className="text-xl mt-20">
        Hi there! I'm VL RAGAVI, a passionate Full Stack Developer with a strong 
        enthusiasm for learning and exploring new technologies. I enjoy building dynamic, 
        responsive web applications and have experience with JavaScript, React, Node.js, and more. 
        My journey in tech is driven by a desire to continuously expand my skill set and stay updated 
        with the latest industry trends. I love the challenge of diving into new frameworks and 
        libraries, always striving to create seamless user experiences and robust functionalities.!
        </p>

        <br />

        <p className="text-xl">
        Collaboration is at the heart of my work ethic. I believe in the power of teamwork and am eager 
        to collaborate on exciting projects. If you have an idea or project in mind, let's connect and \
        create something amazing together!
        </p>
        

    
      </div>
    </div>
  );
};

export default About;
