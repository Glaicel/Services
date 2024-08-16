"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // Importing hamburger icon from react-icons
import {
  FaSearch,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Home() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  // Handle menu toggle
  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); // Matches the duration of the slide-out animation
    } else {
      setIsOpen(true);
    }
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Set scrolling state if scrolled down
      } else {
        setScrolling(false); // Reset scrolling state if at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="relative w-full h-[38rem] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/banner.png"
              alt="banner"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            <nav
              className={`fixed top-0 w-full z-20 flex justify-between items-center p-8 transition-all duration-300 ${
                scrolling ? "bg-black" : "bg-transparent"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src="/jhsereno-light.png"
                  width={150}
                  height={150}
                  alt="Logo"
                  className="h-auto"
                />
              </div>

              {/* Conditional rendering based on scroll state */}
              {scrolling ? (
                <div className="hidden md:flex flex items-center space-x-4">
                  <div className="bg-white rounded-lg">
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-4 py-2 rounded-lg border border-gray-300"
                    />
                    <button className="p-2">
                      <FaSearch />
                    </button>
                  </div>
                  <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                    Book an Appointment
                  </button>
                </div>
              ) : (
                <div className="md:flex hidden md:flex flex-1 justify-center">
                  <ul className="flex space-x-6 font-bold whitespace-nowrap">
                    <li>
                      <a
                        href="#meet-the-team"
                        className="text-white text-[12px] font-sans hover:bg-[#151916] rounded-lg transition p-2"
                      >
                        MEET THE TEAM
                      </a>
                    </li>
                    <li>
                      <a
                        href="#search-for-homes"
                        className="text-white text-[12px] font-sans hover:bg-[#151916] rounded-lg transition p-2"
                      >
                        SEARCH FOR HOMES
                      </a>
                    </li>
                    <li>
                      <a
                        href="#our-communities"
                        className="text-white text-[12px] font-sans hover:bg-[#151916] rounded-lg transition p-2"
                      >
                        OUR COMMUNITIES
                      </a>
                    </li>
                    <li>
                      <a
                        href="#home-evaluation"
                        className="text-white text-[12px] font-sans hover:bg-[#151916] rounded-lg transition p-2"
                      >
                        HOME EVALUATION
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`text-white ${
                          pathname === "/"
                            ? "bg-black px-3 py-2 rounded"
                            : "hover:bg-gray-600 px-3 py-2 rounded"
                        }`}
                      >
                        SERVICES
                      </a>
                    </li>
                    <li>
                      <a
                        href="#home-across-america"
                        className="text-white text-[12px] font-sans hover:bg-[#151916] rounded-lg transition p-2"
                      >
                        HOME ACROSS AMERICA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#testimonials"
                        className="text-white text-[12px] font-sans hover:bg-[#151916] rounded-lg transition p-2"
                      >
                        TESTIMONIALS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact-us"
                        className="text-white text-[12px] font-sans hover:bg-[#151916] rounded-lg transition p-2"
                      >
                        CONTACT US
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              <button
                onClick={toggleMenu}
                className="text-white md:hidden focus:outline-none"
              >
                <HiMenu className="h-8 w-8" />
              </button>
            </nav>
            <div
              className={`fixed top-0 right-0 w-64 h-full bg-white bg-opacity-90 z-20 transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "translate-x-0"
                  : isClosing
                  ? "translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <div className="flex justify-end p-4">
                {/* Close Button */}
                <button onClick={toggleMenu} className="text-black">
                  <HiX className="h-8 w-8" />
                </button>
              </div>
              <ul className="flex flex-col items-center space-y-4 p-4 font-bold">
                <li>
                  <a
                    href="#search-for-homes"
                    className="text-black text-[13px] font-karla hover:text-blue-500"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-us"
                    className="text-black text-[13px] font-karla hover:text-blue-500"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
              <div className="w-full px-4 md:px-10 flex flex-col items-center text-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold mt-2 font-serif">
                  Find Your Dream House
                </h2>

                <div className="relative w-full max-w-sm md:max-w-lg mt-5 px-4">
                  <div className="flex items-center bg-white p-2 md:p-3 rounded-2xl shadow-lg border border-gray-300">
                    <input
                      type="text"
                      placeholder="Search by Address or Area"
                      className="flex-grow max-w-[50%] md:max-w-none px-3 py-2 rounded-l-2xl border-none focus:outline-none"
                    />
                    <select className="flex-shrink-0 w-20 sm:w-auto px-2 py-1 sm:py-2 bg-gray-100 border-none rounded-none md:rounded-r-2xl">
                      <option>Type</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Condo</option>
                    </select>
                    <button className="flex-shrink-0 bg-[#151916] text-white p-3 px-5 rounded-r-2xl hover:bg-white hover:text-black hover:border border-black">
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#525252] p-4 flex items-center justify-center md:justify-end opacity-70">
                <button className="bg-[#151916] text-white rounded-2xl px-4 py-2 flex items-center hover:bg-white hover:text-black hover:border border-black z-10">
                  BOOK AN APPOINTMENT <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[5%]">
        <div className="text-center my-5 pt-[7%]">
          <h1 className="text-5xl font-serif">Comprehensive Marketing Plan</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0 pt-10">
          <div className="bg-[#F1F3F4] shadow-lg rounded-lg p-10 max-w-xs text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/message.png"
              width={150}
              height={150}
              alt="message"
              className="h-auto mb-3" // Add margin-bottom for spacing
            />
            <h2 className="text-xl font-bold">Responsive</h2>
            <p>I am always available via phone, text, or email.</p>
          </div>
          <div className="bg-[#F1F3F4] shadow-lg rounded-lg p-10 max-w-xs text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/flag.png"
              width={150}
              height={150}
              alt="flag"
              className="h-auto mb-3" // Add margin-bottom for spacing
            />
            <h2 className="text-xl font-bold">Syndication</h2>
            <p>
              I market your property locally, nationally, and internationally.
            </p>
          </div>
          <div className="bg-[#F1F3F4] shadow-lg rounded-lg p-5 max-w-xs text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/flag.png"
              width={150}
              height={150}
              alt="engagement"
              className="h-auto mb-3" // Add margin-bottom for spacing
            />
            <h2 className="text-xl font-bold">Engagement</h2>
            <p>
              I utilize social media to showcase your property, interact with
              potential clients.
            </p>
          </div>
        </div>
      </div>

      {/* next page */}
      <div className="pt-5 bg-gradient-to-t from-gray-100 to-white">
        <div className="flex justify-center items-center">
          <Image
            src="/page-3.png"
            width={1350}
            height={850}
            alt="message"
            className="w-full max-w-full h-auto rounded-2xl" // Responsive image
          />
        </div>
      </div>
      {/* next page */}
      <div className="mb-0 bg-[#F1F3F4] py-[5%]">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 pt-10 mt-5 mb-5 md:mt-0 md:mb-0">
          <div className="bg-white shadow-2xl rounded-lg p-5 max-w-xs text-center flex flex-col items-center h-80 transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/gps.png"
              width={150}
              height={150}
              alt="message"
              className="w-32 h-32 object-contain mb-3" // Ensure image fits well within the card
            />
            <h2 className="text-xl font-bold">Virtual Tour</h2>
            <p>
              Let's make your home stand out with a high-quality virtual tour.
            </p>
          </div>
          <div className="bg-white shadow-2xl rounded-lg p-5 max-w-xs text-center flex flex-col items-center h-80 transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/pics.png"
              width={150}
              height={150}
              alt="message"
              className="w-32 h-32 object-contain mb-3" // Ensure image fits well within the card
            />
            <h2 className="text-xl font-bold">Photography</h2>
            <p>
              Beautiful, high-end photography is a central part of our marketing
              plan for your property.
            </p>
          </div>
          <div className="bg-white shadow-2xl rounded-lg p-5 max-w-xs text-center flex flex-col items-center h-80 transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/pics.png"
              width={150}
              height={150}
              alt="message"
              className="w-32 h-32 object-contain mb-3" // Ensure image fits well within the card
            />
            <h2 className="text-xl font-bold">Staging</h2>
            <p>
              Professionally staging your home enhances its appeal, helping
              potential buyers envision themselves in the space.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F3F4] mt-0">
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 350"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto" // Make SVG responsive
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(0, 0, 0, 1)" offset="0%" />
              <stop stopColor="rgba(0, 0, 0, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,343L60,310.3C120,278,240,212,360,179.7C480,147,600,147,720,155.2C840,163,960,180,1080,155.2C1200,131,1320,65,1440,81.7C1560,98,1680,196,1800,204.2C1920,212,2040,131,2160,130.7C2280,131,2400,212,2520,236.8C2640,261,2760,229,2880,253.2C3000,278,3120,359,3240,326.7C3360,294,3480,147,3600,98C3720,49,3840,98,3960,155.2C4080,212,4200,278,4320,294C4440,310,4560,278,4680,228.7C4800,180,4920,114,5040,98C5160,82,5280,114,5400,163.3C5520,212,5640,278,5760,261.3C5880,245,6000,147,6120,122.5C6240,98,6360,147,6480,179.7C6600,212,6720,229,6840,261.3C6960,294,7080,343,7200,343C7320,343,7440,294,7560,294C7680,294,7800,343,7920,318.5C8040,294,8160,196,8280,179.7C8400,163,8520,229,8580,261.3L8640,294L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
          />
        </svg>

        <div className="bg-black">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="bg-black text-white p-5 w-full md:w-[650px]">
              <h1 className="text-center text-5xl font-serif py-[20%]">
                Decord Guidance
                <hr className="w-1/2 bg-white my-4 mx-auto" />
              </h1>
            </div>
            <div className="w-full md:w-[650px]">
              <Image
                src="/image-025.png"
                width={650}
                height={650}
                alt="message"
                className="h-auto mb-3" // Add margin-bottom for spacing
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center mt-[5%]">
            <div className="w-full md:w-[650px]">
              <Image
                src="/image-023.png"
                width={650}
                height={650}
                alt="message"
                className="h-auto mb-3" // Add margin-bottom for spacing
              />
            </div>
            <div className="bg-black text-white p-5 w-full md:w-[650px]">
              <h1 className="text-center text-5xl font-serif py-[10%]">
                My Staging Presence
                <hr className="w-2/3 bg-white my-4 mx-auto" />
              </h1>
              <ul className="list-disc pl-6 space-y-4">
                <li>High-quality virtual tours showcasing your property.</li>
                <li>
                  Professional photography to capture your home in the best
                  light.
                </li>
                <li>Expert staging to enhance the appeal of your property.</li>
                <li>Strategic marketing to attract potential buyers.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center mt-[5%]">
            <div className="bg-black text-white p-5 w-full md:w-[650px]">
              <h1 className="text-center text-5xl font-serif py-[10%]">
                Intentional Layout
                <hr className="w-1/2 bg-white my-5 mx-auto" />
              </h1>
            </div>
            <div className="w-full md:w-[650px]">
              <Image
                src="/image-022.png"
                width={650}
                height={650}
                alt="message"
                className="h-auto mb-3" // Add margin-bottom for spacing
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center mt-[5%]">
            <div className="w-full md:w-[650px] order-last lg:order-first">
              <Image
                src="/image-024.png"
                width={650}
                height={650}
                alt="message"
                className="h-auto mb-3" // Add margin-bottom for spacing
              />
            </div>
            <div className="bg-black text-white p-5 w-full md:w-[650px] order-first lg:order-last">
              <h1 className="text-center text-5xl font-serif py-[10%]">
                My Staging Presence
                <hr className="w-1/2 bg-white my-4 mx-auto" />
              </h1>
              <ul className="list-disc pl-6 space-y-4">
                <li>High-quality virtual tours showcasing your property.</li>
                <li>
                  Professional photography to capture your home in the best
                  light.
                </li>
                <li>Expert staging to enhance the appeal of your property.</li>
                <li>Strategic marketing to attract potential buyers.</li>
              </ul>
            </div>
          </div>
        </div>

        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 350"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto" // Make SVG responsive
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(0, 0, 0, 1)" offset="0%" />
              <stop stopColor="rgba(0, 0, 0, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,343L60,310.3C120,278,240,212,360,179.7C480,147,600,147,720,155.2C840,163,960,180,1080,155.2C1200,131,1320,65,1440,81.7C1560,98,1680,196,1800,204.2C1920,212,2040,131,2160,130.7C2280,131,2400,212,2520,236.8C2640,261,2760,229,2880,253.2C3000,278,3120,359,3240,326.7C3360,294,3480,147,3600,98C3720,49,3840,98,3960,155.2C4080,212,4200,278,4320,294C4440,310,4560,278,4680,228.7C4800,180,4920,114,5040,98C5160,82,5280,114,5400,163.3C5520,212,5640,278,5760,261.3C5880,245,6000,147,6120,122.5C6240,98,6360,147,6480,179.7C6600,212,6720,229,6840,261.3C6960,294,7080,343,7200,343C7320,343,7440,294,7560,294C7680,294,7800,343,7920,318.5C8040,294,8160,196,8280,179.7C8400,163,8520,229,8580,261.3L8640,294L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
          />
        </svg>
      </div>
      {/* next page */}
      <div className="relative h-[180vh] sm:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image-027.png"
            alt="banner"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="absolute inset-0 flex justify-center text-white py-[5%] sm:text-center">
          <h2 className="text-6xl font-serif">
            The Selling Process
            <hr className="w-full bg-white my-4 mx-auto" />
          </h2>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center mt-[12rem] space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
            <div className="text-center p-4">
              <div className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-gray-500 rounded-full mx-auto">
                1
              </div>
              <p className="text-lg text-white">
                Initial Consultation & Planning
              </p>
            </div>
            <div className="text-center  p-4 rounded-2xl">
              <h1 className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-gray-500 rounded-full mx-auto">
                2
              </h1>
              <p className="text-lg text-white">
                Devise & Execute Marketing Plan
              </p>
            </div>
            <div className="text-center p-4 rounded-2xl">
              <h1 className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-gray-500 rounded-full mx-auto">
                3
              </h1>
              <p className="text-lg text-white">
                Review Offers & Reach Agreement with Buyer
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
            <div className="text-center  p-4 rounded-2xl">
              <h1 className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-gray-500 rounded-full mx-auto">
                4
              </h1>
              <p className="text-lg text-white">Complete Transaction Process</p>
            </div>
            <div className="text-center  p-4 rounded-2xl">
              <h1 className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-gray-500 rounded-full mx-auto">
                5
              </h1>
              <p className="text-lg text-white">After - Sale Service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[38rem] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image-004.png"
            alt="banner"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex w-full max-w-6xl px-4">
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
              <div className="text-center lg:text-left text-white py-[5%]">
                <h2 className="text-4xl lg:text-6xl font-serif">
                  The Buying Process
                  <hr className="w-full bg-white my-4 mx-auto lg:mx-0" />
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-start space-y-6">
              <div className="flex flex-col space-y-6">
                <div className="text-center rounded-2xl flex flex-row items-center space-x-4">
                  <h1 className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-black rounded-full">
                    1
                  </h1>
                  <p className="text-lg text-white">
                    Initial Consultation & Planning
                  </p>
                </div>
                <div className="text-center rounded-2xl flex flex-row items-center space-x-4">
                  <h1 className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-black rounded-full">
                    2
                  </h1>
                  <p className="text-lg text-white">
                    Devise & Execute Marketing Plan
                  </p>
                </div>
                <div className="text-center rounded-2xl flex flex-row items-center space-x-4">
                  <h1 className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-black rounded-full">
                    3
                  </h1>
                  <p className="text-lg text-white">
                    Review Offers & Reach Agreement with Buyer
                  </p>
                </div>
                <div className="text-center rounded-2xl flex flex-row items-center space-x-4">
                  <h1 className="w-24 h-24 flex items-center justify-center text-6xl font-serif text-white bg-black rounded-full">
                    4
                  </h1>
                  <p className="text-lg text-white">
                    Complete Transaction Process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*FIFTH*/}
      <div className="ms-[8%] me-[8%]">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row my-[8%] justify-center items-center rounded-2xl">
          <div className="flex-1 flex flex-col justify-center items-center text-justify mb-4 lg:mb-0 order-last lg:order-first">
            <h1 className="text-3xl font-serif mb-4">
              Over 33 Years of Real Estate Success
            </h1>
            <p className="text-md lg:mx-0">
              We provide every one of our clients with a level of service they
              won’t find anywhere else. We give them what they need, often
              before they know they need it. In real estate, almost everything
              can be negotiated. When you choose Hansen Partners, its experience
              is 100% nonnegotiable. And it’s an experience like no other.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center ">
            <Image
              src="/edited/edit-page-11r2.png"
              width={600}
              height={600}
              alt="message"
              className="h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row my-[8%] justify-center items-center">
          <div className="flex-1 flex justify-center items-center mb-4 lg:mb-0">
            <Image
              src="/edited/edited-p-12.png"
              width={600}
              height={600}
              alt="message"
              className="h-auto rounded-2xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-justify">
            <h1 className="text-3xl font-serif mb-4 text-center">
              We Want To Create An Unforgettable Experience For You...
            </h1>
            <p className="text-md lg:mx-0">
              We combine data gained from your home’s Comparative Market
              Analysis with local market research to create a marketing plan
              designed to help you meet your selling goals. Your home’s
              carefully designed plan will include a range of online, print, and
              other marketing tools targeted to the best-qualified pool of
              buyers. ​​​​​​​ Successfully marketing a home in today’s real
              estate environment requires a firm with experience and
              flexibility. Hansen Partners provides both.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col lg:flex-row my-[8%] justify-center">
          <div className="flex-1 flex flex-col justify-center items-center text-justify mb-4 lg:mb-0 order-last lg:order-first me-5">
            <h1 className="text-3xl font-serif mb-4">
              The Hansen Partners Communications Tablet
            </h1>
            <p className="text-md lg:mx-0 mb-4">
              We provide every one of our clients with a level of service they
              won’t find anywhere else. We give them what they need, often
              before they know they need it. In real estate, almost everything
              can be negotiated. When you choose Hansen Partners, its experience
              is 100% nonnegotiable. And it’s an experience like no other.
              <h2 className="text-2xl font-serif mb-2 text-left lg:mx-0 mt-2">
                Benefits:
              </h2>
            </p>

            <ul className="list-disc mx-[15%] lg:mx-0 mb-4">
              <li>
                Review all documents and sign in the comfort of your home or
                anywhere.
              </li>
              <li>
                Stay up to date on all marketing activities, review materials,
                photos, etc. in real time.
              </li>
              <li>
                Meet with us face to face on our Gotomeeting.com platform to go
                over and discuss the events of the week.
              </li>
              <li>
                You have your own email assigned just for you and your common
                space to quickly write a note or send a video message to us for
                fast communication using our BombBomb video messaging system.
              </li>
            </ul>
            <p className="text-md mx-[15%] lg:mx-0">
              We believe that transparency and guiding you and your family
              through the process is key to having the best experience. During
              these uncertain times, it is a good feeling to know you have
              someone with a proven track record you can count on. We will be
              here to handle your needs during the Real Estate process. We think
              of it before a need even arises. Because, that is just what we do.
              Who you work with does matter!
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center lg:order-last">
            <Image
              src="/edited/edit-image-056.png"
              width={650}
              height={650}
              alt="message"
              className="h-auto mb-3 rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* text area */}
      <div className="bg-[#F1F3F4] p-5">
        <div className="my-5 px-4">
          <div className="ms-[8%] me-[8%]">
            <div className="text-2xl font-serif mb-2 text-center items-center">
              <h1>We Market Your Home to The World</h1>
            </div>
            <div className="text-center mb-6">
              <p className="text-sm font-bold">Our Online Marketing Strategy</p>
              <br />
              <p className="text-sm">
                The Bay Area remains one of the world's most sought-after
                regions to live in, and when looking to sell, it is vital that
                your home be marketed online to audiences locally, nationally,
                and internationally.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4 ms-[8%] me-[8%] mb-5 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 mb-4 lg:mb-0 flex-1 mx-2 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Local Exposure
              </h2>
              <p className="text-sm text-justify">
                Through our partnership with Nextdoor, the private online social
                network now used in over 80% of U.S. neighborhoods and virtually
                all Bay Area neighborhoods, we make sure your home receives
                targeted local exposure. When you list your home with Hansen
                Partners, it will automatically appear on Nextdoor in your
                neighborhood.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 mb-4 lg:mb-0 flex-1 mx-2 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2 text-center">
                National Exposure
              </h2>
              <p className="text-sm text-justify">
                We secure strategic positioning and enhancement on Realtor.com,
                Trulia, and Zillow, driving more consumers to your home and
                increasing exposure. We will receive every inquiry about your
                property directly.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 mb-4 lg:mb-0 flex-1 mx-2 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2 text-center">
                International Exposure
              </h2>
              <p className="text-sm text-justify">
                To expose your luxury listing to millions of potential
                homebuyers worldwide, we promote on prominent international real
                estate portals, including: Wall Street Journal,
                LuxuryPortfolio.com, LuxuryRealEstate.com,
                LeadingRE.com,UniqueHomes.com, China.apr.com, Caimeiju, Juwai,
                Country Life UK.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* next page */}
      <div>
        <div className="flex justify-center p-4">
          <Image
            src="/Extended/image-057.png"
            width={300}
            height={300}
            alt="message"
            className="h-auto" // Add margin-bottom for spacing
          />
        </div>
      </div>
      {/* Next Page */}
      <div className="my-[8%] px-4">
        <div className="flex flex-col lg:flex-row justify-center items-start space-y-4 lg:space-x-4">
          <div className="flex-1 flex flex-col items-center text-center order-last lg:order-first mt-[10%] ms-[5%]">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4 items-center">
              <div className="flex-1 max-w-[250px]">
                <Image
                  src="/Extended/image-060.png"
                  width={250}
                  height={250}
                  alt="message"
                  className="h-auto rounded-2xl"
                />
              </div>
              <div className="flex-1 max-w-[250px]">
                <Image
                  src="/Extended/image-069.jpg"
                  width={250}
                  height={250}
                  alt="message"
                  className="h-auto rounded-2xl"
                />
              </div>
              <div className="flex-1 max-w-[250px]">
                <Image
                  src="/Extended/image-070.png"
                  width={250}
                  height={250}
                  alt="message"
                  className="h-auto rounded-2xl"
                />
              </div>
            </div>
            <hr className="bg-black w-full mt-2 mb-5" />
            <p className="flex justify-center  text-justify">
              Leading Real Estate Companies of The World® & Luxury Portfolio
              International JRockcliff is a founding member of Luxury Portfolio
              International®, the luxury division of Leading Real Estate
              Companies of the World®. With more than 500 member firms around
              the world, our luxury listings are exposed to a vast global
              audience and reach potential buyers and investors in over 50
              countries. Who's Who in Luxury Real Estate Who’s Who in Luxury
              Real Estate is a global collection of luxury real estate brokers.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center order-first lg:order-last">
            <Image
              src="/edited/edited-p-19.png"
              width={550}
              height={550}
              alt="message"
              className="h-auto mb-3 rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="my-[8%] px-4">
        <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-4 me-[5%]">
          {/* First Column: Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/edited/edited-page-20.png"
              width={550}
              height={550}
              alt="message"
              className="h-auto mb-3 rounded-2xl"
            />
          </div>

          {/* Second Column: Content */}
          <div className="flex-1 flex flex-col items-center text-justify">
            <p className="ms-3 me-[10%] mb-4 mt-[15%]">
              Through our international affiliations, we have a strong presence
              in over 50 countries. Our luxury listings are sent to prominent
              international real estate sites, reaching over 70 million
              potential buyers and investors worldwide through our relationships
              with:
            </p>
            <hr className="bg-black w-full mt-2 mb-5" />
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4 items-center">
              <div className="flex-1 max-w-[250px]">
                <Image
                  src="/Extended/image-060.png"
                  width={250}
                  height={250}
                  alt="message"
                  className="h-auto rounded-2xl"
                />
              </div>
              <div className="flex-1 max-w-[250px]">
                <Image
                  src="/Extended/image-069.jpg"
                  width={250}
                  height={250}
                  alt="message"
                  className="h-auto rounded-2xl"
                />
              </div>
              <div className="flex-1 max-w-[250px]">
                <Image
                  src="/Extended/image-070.png"
                  width={250}
                  height={250}
                  alt="message"
                  className="h-auto rounded-2xl"
                />
              </div>
            </div>
            <hr className="bg-black w-full mt-2 mb-5" />
            <p>
              We also have several well-positioned affiliate offices in China,
              providing our clients with access to buyers in Hong Kong,
              Shanghai, and Beijing.
            </p>
          </div>
        </div>
      </div>
      <div>
        <hr className="bg-black w-full mt-2" />
        <div className="p-4">
          <p className="text-justify w-full md:ms-[4%] ms-0 md:w-2/5 ">
            Through our international affiliations, we have a strong presence in
            over 50 countries. Our luxury listings are sent to prominent
            international real estate sites, reaching over 70 million potential
            buyers and investors worldwide through our relationships with:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 my-[8%] p-8">
        {/* Image that should be first on smaller devices */}
        <div className="p-4 col-span-1 row-span-2 order-1 sm:order-3">
          <Image
            src="/Extended/edited-p25.png"
            width={420}
            height={420}
            alt="message"
            className="h-auto rounded-2xl"
          />
        </div>

        <div className="p-4 shadow-lg flex flex-col justify-center text-center bg-white rounded-2xl order-2 sm:order-1">
          <div className="flex justify-center">
            <Image
              src="/icons/messages.png"
              width={220}
              height={220}
              alt="message"
              className="h-auto rounded-2xl"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl">Responsive</h2>
          </div>
          <div>
            <p>
              I am always available via phone, text, or email to answer your
              questions in a timely manner.
            </p>
          </div>
        </div>

        <div className="p-4 shadow-lg flex flex-col justify-center text-center bg-white rounded-2xl order-3 sm:order-2">
          <div className="flex justify-center">
            <Image
              src="/icons/flag.png"
              width={220}
              height={220}
              alt="message"
              className="h-auto rounded-2xl"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl">Syndication</h2>
          </div>
          <div>
            <p>
              I market your property locally, nationally, and internationally.
            </p>
          </div>
        </div>

        <div className="p-4 shadow-lg flex flex-col justify-center text-center bg-white rounded-2xl order-4 sm:order-4">
          <div className="flex justify-center">
            <Image
              src="/icons/gps.png"
              width={220}
              height={220}
              alt="message"
              className="h-auto rounded-2xl"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl">Virtual Tour</h2>
          </div>
          <div>
            <p>
              Let’s make your home stand out with a high quality virtual tour.
            </p>
          </div>
        </div>

        <div className="p-4 shadow-lg flex flex-col justify-center text-center bg-white rounded-2xl order-5 sm:order-5">
          <div className="flex justify-center">
            <Image
              src="/icons/drone.png"
              width={250}
              height={250}
              alt="message"
              className="h-auto rounded-2xl"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl">Drone Photography</h2>
          </div>
          <div>
            <p>
              Beautiful photography is a central part of our marketing plan for
              your property.
            </p>
          </div>
        </div>
      </div>

      {/* next page */}
      <div className="w-full flex justify-center mt-0">
        <div className="relative w-full h-[38rem] overflow-hidden">
          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src="/Extended/work-with-us.png"
              alt="banner"
              layout="fill"
              objectFit="cover"
              className="object-cover" // Ensures the image covers the full div
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center p-4">
              <h2 className="text-5xl font-serif flex flex-col items-center">
                Work with Us
                <hr className="bg-white w-24 mt-2" />
              </h2>
              <div className="flex justify-center">
                <p className="mt-2 font-serif w-1/2 text-lg">
                  With decades of experience in luxurious Tri Valley real
                  estate, our team is here to ensure that your dreams are a
                  reality. Let us guide you through your home buying journey,
                  contact us today!
                </p>
              </div>
              <div className="p-4">
                <button className="bg-white text-black  p-4 px-8 rounded-lg">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* next page */}
      <footer className="bg-white py-10 ms-[8%] me-[8%]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
          {/* Company Information */}

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-center">
              Julie Hansen Partnership
            </h2>
            <p className="text-gray-600 text-justify">
              An elite group of the East Bay's most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
          </div>

          {/* Address and Contact Information */}
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="font-semibold font-serif">ADDRESS</h3>
              <p>
                4733 Chabot Drive #100
                <br />
                Pleasanton, CA 94588
              </p>
              <p>Julie Hansen-Orvis | CA DRE# 00934447</p>
            </div>
            <div>
              <h3 className="font-semibold font-serif">CONTACT INFORMATION</h3>
              <p>(925) 553-6707</p>
              <p>luxuryhomesinwc@icloud.com</p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 p-2">
              <FaFacebook className="text-black-600 text-xl hover:text-blue-800" />
              <FaInstagram className="text-black-600 text-xl hover:text-pink-800" />
            </div>
          </div>

          {/* Newsletter Subscription Form */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Newsletter</h3>
            <p>
              Subscribe to our Newsletter for latest news and updates. Stay
              tuned!
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-gray-500"
              />
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <input type="checkbox" id="policy" />
                <label htmlFor="policy">
                  By providing your contact information, you acknowledge and
                  agree to our{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to receiving marketing communications.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 hover:bg-gray-800 transition duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-5 text-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              Website Designed & Developed by{" "}
              <a href="#" className="underline">
                Luxury Presence
              </a>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 justify-center items-center">
              <Image
                src="/Extended/realtor.png"
                width={30}
                height={30}
                alt="realtor"
                className="object-contain"
              />
              <Image
                src="/Extended/house.png"
                width={30}
                height={30}
                alt="house"
                className="object-contain"
              />
              <Image
                src="/Extended/sereno-logo.png"
                width={100}
                height={30} // Adjust height to maintain aspect ratio
                alt="sereno logo"
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-4">
            Copyright 2024 |{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
