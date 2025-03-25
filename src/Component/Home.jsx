import React, { useRef } from "react";
import blond from "./photos/blondlogo.jpeg";
import logo1 from "./photos/logo1.jpeg";
import logo2 from "./photos/logo2.jpeg";
import logo3 from "./photos/logo3.jpeg";
import t1 from "./photos/t1.jpeg";
import t2 from "./photos/t44.mp4";
import b1 from "./photos/b1.png";
import b2 from "./photos/b5.jpeg";
import logo5 from "./photos/logo5.jpg";
import tm from "./photos/tm.jpeg";
import tm1 from "./photos/tm1.jpeg";
import tm2 from "./photos/tm2.jpeg";
import tm3 from "./photos/tm3.jpeg";
import colgate from "./photos/final.mp4";
import mmt from "./photos/mmt.mp4";
import Brand from "./photos/Brand.mp4";
import bblogo from "./photos/bblogo.png";
import cupcake from "./photos/cupcake2.png";
import vinatge from "./photos/vintage.png";
import star from "./photos/star.png";
import star1 from "./photos/star1.png";
import star2 from "./photos/star2.png";
import riha from "./photos/rihalogo.jpeg";
import story from "./photos/new.jpeg";
import ww33 from "./photos/ww33.jpeg";
import ww55 from "./photos/ww55.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const works = [
  {
    title: "UI Designing For Navnirman Architects",
    description:
      "Designed the UI for Navnirrman Architects, provided aesthetic direction, and conducted website audits to enhance visual appeal, usability, and functionality.",
    link: "https://navnirman-one.vercel.app/",
  },
  {
    title: "Food Is the Only Social Scene of Indore",
    description:
      "Wrote a blog on Indore, sharing observations about the city's culture and lifestyle, concluding with the launch of Tana Bana.",
    link:
      "https://foodistheonlysocialactivitybykrisha.blogspot.com/2025/02/food-is-only-social-activity-of-indore.html",
  },
];

const Home = () => {
  const images = [
    { src: blond, text: "Primary Logo" },
    { src: logo1, text: "Secondary Logo" },
    { src: bblogo, text: "Mascot Logo" },
    { src: logo3, text: "Brand Mascot" },
    { src: logo2, text: "Design Elements" },
    { src: cupcake, text: "Design Elements" },
    { src: vinatge, text: "Design Elements" },
    { src: star1, text: "Design Elements" },
    { src: star2, text: "Design Elements" },
    { src: star, text: "Design Elements" },
  ];

  const images1 = [
    { src: ww55, text: "Primary Logo" },
    { src: ww33, text: "Favicon " },
    { src: b1, text: "Design Elements" },
    { src: b2, text: "Design Elements" },
  ];

  const images2 = [
    { src: t1, text: "Primary Logo " },
    { src: t2, text: "Animation(Collabation)", isVideo: true },
    { src: tm3, text: "Design Elememts" },
    { src: tm, text: "Design elements" },
    { src: tm1, text: "Design elements" },
    { src: tm2, text: "Design elements" },
  ];

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto overflow-hidden">
      {/* Branding Section */}
      <section className="bg-gradient-to-r from-[#F7F8FC] to-[#E3E6EE] text-black py-12 sm:py-16 px-4 sm:px-6 lg:px-10">
        {/* Branding Title */}
        <h1
          className="text-xl sm:text-2xl md:text-3xl  uppercase text-center text-black mb-8 sm:mb-12 "
          style={{ fontFamily: "Ovo" }}
        >
          Branding
        </h1>

        {/* Blond Bakery Section */}
        <div className="py-6 sm:py-8">
          <h1 className="text-2xl sm:text-4xl text-center text-[#ad1f22] font-pinyon capitalize mb-6 sm:mb-8">
            Blond Bakery
          </h1>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation
            modules={[Navigation]}
            className="pb-10"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="relative group px-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-48 sm:h-56 md:h-64 transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.text}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-2 text-center">
                      {image.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tana Bana Section */}
        <div className="py-8 sm:py-10">
          <h1 className="text-3xl sm:text-4xl text-center text-[#191919] font-pinyon capitalize mb-6 sm:mb-8">
            Tana Bana
          </h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation
            modules={[Navigation]}
            className="pb-10"
          >
            {images2.map((image, index) => (
              <SwiperSlide key={index} className="relative group px-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-56 sm:h-64 md:h-72 lg:h-80 transform transition-transform duration-300 hover:scale-105">
                  {image.isVideo ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    >
                      <source src={t2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={image.src}
                      alt={image.text}
                      className="w-full h-full object-contain"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-2 text-center">
                      {image.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Wielding Words Section */}
        <div className="py-8 sm:py-10">
  <h1 className="text-3xl sm:text-4xl text-center text-[#19556D] font-pinyon capitalize mb-6 sm:mb-8">
    Wielding Words
  </h1>
  <Swiper
    spaceBetween={15}
    slidesPerView={1}
    breakpoints={{
      480: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    navigation
    modules={[Navigation]}
    className="pb-10"
  >
    {images1.map((image, index) => (
      <SwiperSlide key={index} className="relative group px-2">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-56 sm:h-64 md:h-72 lg:h-80 transform transition-transform duration-300 hover:scale-[1.04]">
          <img
            src={image.src}
            alt={image.text}
            className="w-full h-full object-contain sm:object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-2 text-center">
              {image.text}
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
       </div>

      </section>

      {/* Blond Bakery Story and Packaging Section */}
      <section className="py-12 sm:py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-pinyon capitalize text-[#ad1f22] mb-8 sm:mb-12"
        >
          Blond Bakery
        </h1>
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h1
                className="text-2xl sm:text-3xl text-center text-black mb-4 sm:mb-6"
                style={{ fontFamily: "Ovo" }}
              >
                Storyline
              </h1>
              <div className="h-74 sm:h-82 md:h-90 lg:h-106 w-full max-w-sm mx-auto">
                <img
                  src={story}
                  alt="Story Image"
                  className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-gray-200 transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1
                className="text-2xl sm:text-3xl text-center text-black mb-4 sm:mb-6"
                style={{ fontFamily: "Ovo" }}
              >
                Packaging
              </h1>
              <div className="h-74 sm:h-82 md:h-90 lg:h-106 w-full max-w-sm mx-auto">
                <img
                  src={logo5}
                  alt="Packaging Image"
                  className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-gray-200 transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assignments Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pinyon capitalize text-center text-[#0e0e0e] mb-8 sm:mb-12">
          Assignments
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Campaign Launch For Riha, Makeup Brand",
              description:
                "Riha, an organic makeup brand, celebrates freedom in beauty. Our campaign rewards the most creative makeup looks but ultimately conveys that with or without makeup, you are beautiful because true beauty is confidence, not cosmetics.",
              video: Brand,
            },
            {
              title: "Radio Assignment",
              description:
                "For an in-class IMC assignment, I created a radio ad for MakeMyTrip, emphasizing its free cancellation policy. The ad used humor and relatable scenarios to highlight stress-free travel planning and flexibility.",
              video: mmt,
            },
            {
              title: "Colgate Mouthwash: Instant Ad",
              description:
                "In a 20-minute challenge, I created an ad using the catchy tagline Take a Shot, Colgate. Positioning mouthwash as a quick, effortless solution for fresh breath and germ protection anytime, anywhere.",
              video: colgate,
            },
            {
              title: "Logo Anatomy",
              description:
                "Riha's logo features a unisex face for inclusivity, natural elements symbolizing organic beauty, and a circular shape reflecting makeup packaging. Earthy green tones highlight purity, while its emblem style ensures authenticity.",
              image: riha,
            },
          ].map((post, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-white"
            >
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl bg-gray-800 relative">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                )}
                {post.video && (
                  <video className="w-full h-full object-cover rounded-xl" controls>
                    <source src={post.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <div className="flex flex-col justify-center space-y-4 px-4 py-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Work Section */}
      <section className="py-12 sm:py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-black mb-8 sm:mb-12 font-pinyon">
            Other Work
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {works.map((work, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                    {work.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">{work.description}</p>
                </div>
                <div>
                  <a
                    href={work.link}
                    className="inline-block px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;