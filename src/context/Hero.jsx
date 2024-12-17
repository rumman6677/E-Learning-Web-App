import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/hero.jpg';
import courseImage1 from '../assets/DCS_101.png';
import courseImage2 from '../assets/DCS_201l.png';
import courseImage3 from '../assets/cdcs.png';
import courseImage4 from '../assets/WAS_101_badge.png';
import Footer from '../components/footer/Footer';

const defensiveCourses = [
  {
    title: "Defensive Cyber Security 101",
    description: "Unlock the Fundamentals of Defensive Security with DCS101: Foundations of Cyber Defense.",
    instructor: "",
    image: courseImage1,
    path: "/dcs101",
  },
  {
    title: "Defensive Cyber Security 201",
    description: "Elevate Your Skills with DCS201: Advanced Cyber Defense Strategies and Techniques.",
    instructor: "",
    image: courseImage2,
    path: "/dcs201",
  },
  {
    title: "Complete Defensive Cyber Security (Professional Only)",
    description: "Master Defensive Security from the ground up with our comprehensive CDCS course.",
    instructor: "",
    image: courseImage3,
    path: "/cdcs",
  },
];

const offensiveCourses = [
  {
    title: "Web Application Security 101",
    description: "Master the essentials of Web Application Security with WAS101",
    instructor: "",
    image: courseImage4,
    path: "/was101",
  },
];

const HeroSection = () => {
  return (
    <div className='bg-[#141d2b] overflow-hidden'>
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-6 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PENOUGH ACADEMY</h1>
          <p className="text-lg md:text-xl max-w-6xl mb-6 text-balance">
          Welcome to Penough Academy, your leading institution for advanced Offensive and Defensive Cybersecurity training. We are committed to developing the next generation of cybersecurity professionals equipped to combat today’s digital threats. Our hands-on curriculum, designed by industry experts, ensures you gain practical skills in threat detection, incident response, and vulnerability assessment. With a focus on both theoretical knowledge and real-world application, you will learn to safeguard digital assets and mitigate cyber risks effectively. Join us at Penough Academy and take the first step toward a rewarding career in the ever-evolving field of cybersecurity.
          </p>
        </div>
      </div>

      {/* Defensive Courses Section */}
      <div className="pb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white bg-[#04d9ff] py-4">Courses We Offer</h2>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white py-4">Defensive Cyber Security Courses</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {defensiveCourses.map((course, index) => (
            <Link
              key={index}
              to={course.path}
              className="bg-[#0b121f] hover:shadow-cyan-500/50 transition-shadow duration-300 rounded-lg shadow-lg max-w-xs overflow-hidden border border-cyan-500"
            >
              <img
                className="w-full h-72 p-5"
                src={course.image}
                alt={course.title}
              />
              <div className="px-6">
                {/* {course.title === "Defensive Cyber Security 101" && (
                    <hr className="border-t-2 border-cyan-500 mb-4" />
                  )} */}
                <hr className='border-t-2 border-cyan-500 mb-4' />
                <h4 className="text-xl text-white font-semibold mb-2">{course.title}</h4>
                <p className="text-white mb-4">{course.description}</p>
                <p className="text-white font-bold">{course.instructor}</p>
              </div>
            </Link>
          ))}
        </div>
        </div>
      {/* Offensive Courses Section */}
      <div className="pb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white py-4">Offensive Cyber Security Courses</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {offensiveCourses.map((course, index) => (
            <Link 
              key={index} 
              to={course.path} 
              className="bg-[#0b121f] hover:shadow-[#620a0a] transition-shadow duration-300 rounded-lg shadow-lg max-w-sm p-5 overflow-hidden border border-[#be0404]"
            >
              <img
                className="w-full object-cover"
                src={course.image}
                alt={course.title}
              />
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <hr className="w-full border-t-2 border-[#be0404] mb-4" />
                  <h4 className="text-xl text-white font-semibold mb-2">{course.title}</h4>
                  <p className="text-white mb-4 text-center">{course.description}</p>
                  <p className="text-white font-bold">{course.instructor}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default HeroSection;
