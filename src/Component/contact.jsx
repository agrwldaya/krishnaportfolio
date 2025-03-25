import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import Images
import o2 from "./photos/organic2.jpeg";
import o3 from "./photos/organic3.jpeg";
import o4 from "./photos/organic1.jpeg";
import o5 from "./photos/organic5.jpeg";
import o6 from "./photos/organic6.jpeg";
import v1 from "./photos/v1.mp4";
import v2 from "./photos/v2.mp4";
import v3 from "./photos/v3.mp4";
import v4 from "./photos/v4.mp4";
import v5 from "./photos/v5.mp4";
import v6 from "./photos/v6.mp4";
import v7 from "./photos/v7.mp4";
import v8 from "./photos/v8.mp4";
import v9 from "./photos/v9.mp4";
import green from "./photos/green.jpg";
import green1 from "./photos/green1.jpeg";
import green2 from "./photos/green3.png";
import social from "./photos/social.png";
import post from "./photos/post.png";
import soap from "./photos/soap.jpeg";

// Image Arrays
const organic = [
  { src: o2 },
  { src: o3 },
  { src: o5 },
  { src: o6 },
];

const green3 = [
  { src: green },
  { src: green2 },
  { src: social },
  { src: green1 },
];

// Video Array
const videos = [
  { src: v1 },
  { src: v3 },
  { src: v4 },
  { src: v5 },
  { src: v6 },
  { src: v7 },
  { src: v8 },
  { src: v9 },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F7F8FC] to-[#E3E6EE]">
      {/* Hero Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-pinyon text-[#ad1f22] mb-4">
              Journey as an Intern
            </h1>
            <div className="w-24 h-1 bg-[#ad1f22] mx-auto mb-8"></div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <Section 
        title="Lights Camera Action" 
        data={videos} 
        isVideo={true}
        className="mb-16"
      />

      {/* Worked With Section */}
      <Section 
        title={<span className="text-black">Worked With</span>} 
        data={green3}
        className="mb-16"
      />

      {/* Organicare Section */}
      <Section 
        title={<span className="text-amber-600">Small Business: Organicare Soaps</span>} 
        data={organic}
        className="mb-16"
      />
    </div>
  );
};

// Enhanced Section Component
const Section = ({ title, data, isVideo = false, className = "" }) => (
  <div className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-pinyon capitalize mb-8 sm:mb-10">
        {title}
      </h2>
      
      <Swiper
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        className="pb-10"
        breakpoints={{
          320: { 
            slidesPerView: 1,
            spaceBetween: 10 
          },
          640: { 
            slidesPerView: 2,
            spaceBetween: 15 
          },
          1024: { 
            slidesPerView: 3,
            spaceBetween: 20 
          }
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              {isVideo ? (
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    playsInline
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.src}
                    alt={item.text || 'Project image'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold px-4 text-center transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.text || 'View Project'}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Contact;