import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import Footer from '../components/footer/Footer.jsx';
import WAS from "../assets/WAS_101_badge.png";
import Navbar from '../context/Navbar.jsx';
import Penough from "../assets/Peonugh.png";
import certificateImage from "../assets/Certificate_WAS_101.jpg";
import Studentbenefits from "../assets/Student_benifits.png";
import Icon from "../assets/favicon-1.png";
import { Link } from 'react-router-dom';
import WAS101 from '../components/accordion/WAS101';

const Course = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Modal Open then Background Blur
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';  // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';    // Restore scrolling
  };

  // Modal Open then Background Blur With Certificate
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const openCertificateModal = () => {
    setIsCertificateOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificateModal = () => {
    setIsCertificateOpen(false);
    document.body.style.overflow = 'auto';
  };



  const syllabusItems = [
    { title: 'Introduction to Web Application Security', icon: 'icon-path-1.svg' },
    { title: 'Web Technologies', icon: 'icon-path-2.svg' },
    { title: 'Bug Bounty Introduction', icon: 'icon-path-3.svg' },
    { title: 'Work Environment Setup and Frameworks', icon: 'icon-path-4.svg' },
    { title: 'Hojoborolo of WAS', icon: 'icon-path-5.svg' },
    { title: 'Reconnaissance and Information Gathering', icon: 'icon-path-6.svg' },
    { title: 'Vulnerability In Action', icon: 'icon-path-7.svg' },
    { title: 'Vulnerability Report', icon: 'icon-path-8.svg' }
  ];

  return (
    <div className="bg-[#141d2b] text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 md:my-5">
        {/* Certified CyberDefender Section */}
        <div id="ccd-section" className="flex flex-col md:flex-row items-center w-4/5 max-w-7xl my-5 mx-auto">
          <div className="text-center max-w-4xl md:text-left md:mr-6 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Web Application Security 101</h1>
            <p className="text-lg md:text-xl mb-6">Web Application Security Training</p>
            <p className="text-justify tracking-tight text-sm md:text-base mb-8">
            WAS101 offers hands-on training in Web Application Security. It is designed to prepare aspiring Web Security Researchers, 
            Penetration Testers, and Bug Bounty Hunters. Our course provides in-depth knowledge of web security strategies, vulnerability detection techniques and methodologies,
            equipping students with the practical skills necessary to excel in the field of web application security.
            </p>
          </div>
          <div className="flex-shrink-0 space-x-40">
            <img src={WAS} alt="DCS Logo" className="w-72 md:w-72" />
          </div>
        </div>

        {/* Advance your career in Security Operations Section */}
        <div id="career-section" className="w-4/5 max-w-7xl text-center md:text-left py-12">
          <h2 className="text-4xl mb-2 flex flex-col items-center justify-center">Why Choose Penough?</h2>
          <p className="text-xl mb-12 flex flex-col items-center justify-center">  </p>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mb-12">
            <img src={Penough} alt="penough logo" className="w-48 md:w-80 md:pr-12 mb-6 md:mb-0 md:mr-6" />
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Reputation</h3>
                  <p className="text-sm">Trusted by professionals and organizations worldwide for cybersecurity training.</p>
                </div>
              </div>
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Comprehensive Curriculum</h3>
                  <p className="text-sm">Our course covers the latest tools, technologies, and methodologies in cybersecurity.</p>
                </div>
              </div>
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Supportive Community</h3>
                  <p className="text-sm">Join a community of learners and experts dedicated to your success.</p>
                </div>
              </div>
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Continuous Learning</h3>
                  <p className="text-sm"> Access to additional resources and ongoing learning opportunities even after course completion.</p>
                </div>

              </div>
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Affordable Excellence</h3>
                  <p className="text-sm"> Get high-quality education at competitive prices.</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}

        <div id="career-section" className="w-4/5 max-w-7xl text-center md:text-left mx-auto">
          <h2 className="text-3xl md:text-4xl text-center">Student Benefits</h2>
          <p className="text-xl mb-12 flex flex-col items-center justify-center"> </p>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mb-12">
            <div className="flex flex-col space-y-4 md:mr-6">
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Expert Instruction</h3>
                  <p className="text-sm">Learn from industry-leading cybersecurity professionals.</p>
                </div>
              </div>
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Hands-On Experience</h3>
                  <p className="text-sm">Gain practical skills with real-world scenarios and labs.</p>
                </div>
              </div>
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Networking Opportunities</h3>
                  <p className="text-sm">Connect with peers and professionals in the cybersecurity field.</p>
                </div>
              </div>
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Flexible Learning</h3>
                  <p className="text-sm"> Access course materials and live sessions online, fitting your schedule.</p>
                </div>
              </div>
              <div className="flex items-center text-start gap-5">
                <img src={Icon} className='w-8 h-8' />
                <div>
                  <h3 className="text-xl font-bold">Certification</h3>
                  <p className="text-sm"> Earn a recognized certification to enhance your resume and career prospects.</p>
                </div>
              </div>
            </div>
            {/* Modal Open */}
            <div>
              <img onClick={openModal} src={Studentbenefits} alt="student benefits logo" className="flex justify-center w-64 md:w-96 mb-6 md:mb-0 md:ml-6 mx-auto md:mx-0 mt-5" />

              {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  {/* Background overlay with blur */}
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                    onClick={closeModal}  // Close modal when clicking outside
                  ></div>

                  {/* Modal Content */}
                  <div className="bg-[#141d2b] p-8 rounded-md shadow-lg z-50">
                    <div className="modal-action flex justify-end">
                      <form method="dialog">
                        <button onClick={closeModal} className="btn bg-[#04d9ff] border-none px-4 py-1 font-semibold text-white rounded text-2xl"><MdOutlineClose /></button>
                      </form>
                    </div>
                    <img src={Studentbenefits} alt="student benefits logo" className="w-64 md:w-[400px] lg:w-[700px] mx-auto pb-5 pl-3" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* WAS101 Syllabus Section */}
        <section id="syllabus-section" className="py-12 flex justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <h2 className="text-blue-500 text-lg uppercase font-bold mb-2">Gain the skills you need to thrive as a professional web security specialist</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Web Application Security 101 Training Syllabus</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 justify-center">
              {syllabusItems.map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center justify-center text-center hover:shadow-lg hover:shadow-[#620a0a] transition-shadow duration-300 border border-[#be0404]">
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                </div>
              ))}
            </div>
            <div>
              <button 
                className="btn bg-[#be0404] hover:bg-[#620a0a]  duration-300 text-white font-bold py-3 px-6 rounded"
                onClick={() => window.open('https://drive.google.com/file/d/104KXnbwOob7XHFuCUykbSu81FvECdfxG/view', '_blank')}
              >
                Download Detailed Syllabus
              </button>
            </div>
          </div>
        </section>




        {/* Certifications */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Earn Your Certificate</h1>
            <p className="text-lg mb-6">
              Earn a prestigious Web Application Security Certificate upon successful completion of the course and pass the 12-hour practical exam. This certification will validate your skills and knowledge, making you a competitive candidate in the job market.
            </p>
          </div>
          {/* Modal Open */}
          <div>
            <div className="flex flex-col items-center">
              <img onClick={openCertificateModal} src={certificateImage} alt="Certificate" className="w-full md:w-1/3 rounded-lg shadow-lg" />
            </div>

            {isCertificateOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Background overlay with blur */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                  onClick={closeCertificateModal}  // Close modal when clicking outside
                ></div>

                {/* Modal Content */}
                <div className="bg-[#141d2b] p-4 rounded-md shadow-lg z-50 md:w-6/12 lg:w-6/12 mx-auto">
                  <div className="modal-action flex justify-end">
                    <form method="dialog">
                      <button onClick={closeCertificateModal} className="btn bg-[#04d9ff] border-none px-4 py-1 font-semibold text-white rounded text-2xl"><MdOutlineClose /></button>
                    </form>
                  </div>
                  <div className='md:m-5 lg:m-5'>
                    <img src={certificateImage} alt="student benefits logo" className="" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Who Should Enroll Section */}
        <div id="enroll-section" className="w-4/5 max-w-7xl py-12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Who Should Enroll?</h2>
          <p className="text-xl mb-8">This course is perfect for:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-[#620a0a] transition-shadow duration-300 border border-[#be0404]">
              <h3 className="text-xl font-semibold mb-2 text-white">Bug Bounty Hunters</h3>
              <p className="text-white">Learn advance techniques and methodologies to identify web application issues.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-[#620a0a] transition-shadow duration-300 border border-[#be0404]">
              <h3 className="text-xl font-semibold mb-2 text-white">Aspiring Cyber Security Experts</h3>
              <p className="text-white">Build a strong foundation in offensive strategies.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-[#620a0a] transition-shadow duration-300 border border-[#be0404]">
              <h3 className="text-xl font-semibold mb-2 text-white">Web Developer</h3>
              <p className="text-white">Learn advanced techniques to secure web application.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-[#620a0a] transition-shadow duration-300 border border-[#be0404]">
              <h3 className="text-xl font-semibold mb-2 text-white">Students</h3>
              <p className="text-white">Gain valuable knowledge to kickstart your cybersecurity career.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-[#620a0a] transition-shadow duration-300 border border-[#be0404]">
              <h3 className="text-xl font-semibold mb-2 text-white">Business Owners</h3>
              <p className="text-white">Understand the importance of cybersecurity in protecting your business.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-[#620a0a] transition-shadow duration-300 border border-[#be0404]">
              <h3 className="text-xl font-semibold mb-2 text-white">Cybersecurity Practitioners</h3>
              <p className="text-white">Deepen your expertise in vulnerability detection.</p>
            </div>
          </div>
        </div>


        {/* INFO Section */}
        <div id="info-section" className="w-4/5 max-w-7xl py-12 mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Career Opportunities Section */}
            <div id="career-opportunities-section" className="text-left shadow-lg p-6 rounded-lg border border-[#be0404] transition-all duration-300 hover:shadow-[#620a0a]">
              <h2 className="text-3xl font-bold mb-4 text-center">Career Opportunities</h2>
              <p className="text-xl mb-8 text-center">
                Upon completion of this course, you’ll be prepared for a variety of roles in the cybersecurity field, such as:
              </p>
              <ul className="list-disc list-inside text-xl custom-list">
                <li className="mb-2">Web Application Security Specialist</li>
                <li className="mb-2">Web Penetration Tester</li>
                <li className="mb-2">Web Security Engineer</li>
                <li className="mb-2">Bug Bounty Hunter</li>
              </ul>
            </div>
            
            {/* Prerequisites Section */}
            <div id="prerequisites-section" className="text-left shadow-lg p-6 rounded-lg border border-[#be0404] transition-all duration-300 hover:shadow-[#620a0a]">
              <h2 className="text-3xl font-bold mb-4 text-center">Prerequisites</h2>
              <ul className="list-disc list-inside text-xl custom-list">
                <li className="mb-2">
                  Basic understanding of computer networks and operating systems.
                </li>
                <li className="mb-2">
                  Familiarity with general IT concepts.
                </li>
                <li className="mb-2">
                  No prior cybersecurity experience is required, but a passion for learning and solving complex problems is a plus!
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* Admission */}
        <div className="w-full flex justify-center">
          <a href="https://m.me/penoughcyber" target='_blank' className="bg-[#be0404] hover:bg-[#620a0a] text-white font-bold py-3 px-6 rounded transition-all duration-300">
            Apply for Admission
          </a>
        </div>


        {/* Help */}

        <div id="contact-section" className="w-4/5 max-w-7xl py-8 mx-auto text-center mt-8">
          <p className="text-xl">
            For admission inquiries, please reach out to us through our Facebook page or send an email at
            <a href="mailto:academy@penough.com" className="text-cyan-500 p-1 hover:text-cyan-700 transition-all duration-300">
              academy@penough.com
            </a>
          </p>
        </div>

        {/* Accordion */}
        <WAS101 />

        <div className='flex justify-center gap-5 w-6/12 mx-auto my-3 md:my-5'>
          <div>
            <Link to="https://www.facebook.com/groups/penoughcyber" target='_blank'>
              <button className='bg-[#be0404] hover:bg-[#620a0a] text-white font-bold py-3 px-6 rounded  transition-all duration-300'>Join Our Facebook Community</button>
            </Link>
          </div>
          <div>
            <Link to="https://academy.penough.com/discord" target='_blank'>
              <button className='bg-[#be0404] hover:bg-[#620a0a] text-white font-bold py-3 px-6 rounded  transition-all duration-300'>Join Our Discord Community</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
          .custom-list {
            padding-left: 1.5rem;
          }
        
          .custom-list li {
            text-indent: -1.5rem;
            padding-left: 1.5rem;
          }
        `}</style>


    </div>
  );
};

export default Course;
