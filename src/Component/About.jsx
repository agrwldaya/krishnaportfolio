import React from "react";
import me from "./photos/me.jpeg"
import m1 from "./photos/m1.jpeg"
import m2 from "./photos/m2.jpeg"
import m3 from "./photos/m3.jpeg"
import m4 from "./photos/m4.jpeg"
import m5 from "./photos/m5.jpeg"
import m6 from "./photos/m6.jpeg"
import m7 from "./photos/m7.jpeg"
import m8 from "./photos/m8.jpeg"
import end from "./photos/end.jpeg"
import me1 from "./photos/me1.jpeg"
import me2 from "./photos/me2.jpeg"
import me3 from "./photos/me3.jpeg"
const About = () => {
    
        const images = [m1, m2, m3, m4, m5, m6, m7, m8];
     
    
      
  return (
    <div>
    <div className="max-w-4xl  mx-auto mt-12 px-4">
      {/* Image Section */}
      <div className="w-full bg-white py-10 px-5 md:px-20">
      {/* <h2 className="text-4xl font-[cursive] italic mb-4">About</h2> */}
      <div className="border-t-2 border-dotted border-black w-full mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          src = {me}
          alt="Plant 1"
          className="w-full object-cover"
        />
        <img
          src= {me2}
          
          alt="Plant 2"
          className="w-full object-cover"
        />
        <img
          src= {me3}
          alt="Plant 3"
          className="w-full object-cover"
        />
      </div>
      <div className="border-t-2 border-dotted border-black w-full mt-6"></div>
    </div>




    <div className="w-full h-auto p-6 flex items-center justify-center bg-[#f5f0e6] px-10 md:px-20">
  <div className="flex flex-col md:flex-row w-full max-w-7xl items-center gap-10">
    {/* Left Side - Italicized Text */}
    <div className="w-full md:w-1/2 text-2xl md:text-4xl font-[cursive] italic text-center md:text-left">
      "Whatever I do, I do with gusto, you know? Gusto!" - King Julien
    </div>

    {/* Right Side - Regular Text */}
    <div className="w-full md:w-1/2 text-lg text-gray-800">
    <p className="leading-tight text-justify mb-4">
  Feral is my favorite word as it means wild, free, and untamed. I find inspiration in the unexpected, picking stories from the smallest details and shaping them into something bigger. I don’t just consume ideas; I tweak, twist, and rewrite them until they fit my vision. Small changes, I believe, create the biggest ripples. <br /> But beyond the madness, there’s a method. I don’t just chase chaos, I shape, storyboard, and make content out of it. Branding, storytelling, curating, creating, giving ideas a voice, businesses a personality, and campaigns a zing. Marketing isn’t just strategy to me; it’s an art, an instinct, a way of weaving concepts into something unforgettable.
</p>
    </div>
  </div>
</div>





    
      <div className="max-w-6xl mx-auto mt-12 px-4 text-center">
      {/* Title Section */}
      <h1 className="text-4xl font-pinyon  text-gray-800 mb-8">
      My Aesthetic Lens
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
   
    </div>
  
    <div className="w-full py-10 mt-10 flex justify-center items-center bg-white transition duration-300 hover:bg-[#B7EBE7]">
  <div className="flex flex-col items-center text-center">
    {/* Name */}
    <h1 className="text-4xl font-pinyon text-gray-800 mb-4">Krisha Agrawal</h1>

    {/* Phone Number */}
    <p className="text-xl text-gray-800 mb-4">📞 6265521215</p>

    {/* LinkedIn ID */}
    <p className="text-lg text-gray-600 mb-4">
  LinkedIn:{" "}
  <a
    href="https://www.linkedin.com/in/krisha-agrawal" // Replace with your LinkedIn URL
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1E40AF] hover:underline"
  >
    krisha-agrawal
  </a>
</p>

    {/* Copyright Section */}
    
  </div>
</div>
    </div>
  );
};

export default About;



