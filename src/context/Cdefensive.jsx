import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import DCS from "../assets/cdcs.png";
import Navbar from '../context/Navbar.jsx';
import Penough from "../assets/Peonugh.png";
import LinkedInIcon from '../assets/linkedin.png';
import TwitterIcon from '../assets/twitter.png';
import InstagramIcon from '../assets/instagram.png';
import FacebookIcon from '../assets/facebook.png';
import YoutubeIcon from '../assets/youtube.png';
import certificateImage from "../assets/cdcs-cretificate.jpg";
import Studentbenefits from "../assets/Student_benifits.png";
import Icon from "../assets/favicon-1.png"
import { Link } from 'react-router-dom';
import CDCS from '../components/accordion/CDCS.jsx';

const Course = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Modal Open then Background Blur With Student Benefits
  const [isBenefitOpen, setIsBenefitOpen] = useState(false);

  const openBenefitModal = () => {
    setIsBenefitOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBenefitModal = () => {
    setIsBenefitOpen(false);
    document.body.style.overflow = 'auto';
  };


  // Modal Open then Background Blur With Download Syllabus
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
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
    { title: 'Cyber Security, Networking & OS Fundamentals', icon: 'icon-path-1.svg' },
    { title: 'Blue Teaming Operations and Nervous System of SOC', icon: 'icon-path-2.svg' },
    { title: 'Threat Hunting (SIEM)', icon: 'icon-path-6.svg' },
    { title: 'Case Management & Analysis', icon: 'icon-path-6.svg' },
    { title: 'Security Orchestration, Automation and Response', icon: 'icon-path-6.svg' },
    { title: 'Threat Intelligence and Platforms', icon: 'icon-path-3.svg' },
    { title: 'Digital Forensics', icon: 'icon-path-4.svg' },
    { title: 'Incident Response', icon: 'icon-path-5.svg' },
    { title: 'Malicious Email Analysis & Email Gateway Security', icon: 'icon-path-5.svg' },
    { title: 'Vulnerability Assessment & Management', icon: 'icon-path-7.svg' },
    { title: 'Dark Web Monitoring', icon: 'icon-path-8.svg' },
    { title: 'Malware Analysis', icon: 'icon-path-8.svg' }
  ];

  return (
    <div className="bg-[#141d2b] text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4">
        {/* Certified CyberDefender Section */}
        <div id="ccd-section" className="flex flex-col md:gap-5 md:flex-row items-center w-4/5 max-w-7xl my-5 mx-auto">
          <div className="text-center max-w-4xl md:text-left md:mr-6 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">Complete Defensive Cyber Security (Professional Only)</h1>
            <p className="text-lg md:text-xl mb-6">Professional Defensive Cyber Security Training</p>
            <p className="text-justify text-sm md:text-base mb-8">
              The Complete Defensive Cyber Security program is an advanced, hands-on training course tailored for corporate professionals seeking to elevate their organization's security posture. This course is designed to equip SOC Analysts, Threat Hunters, Digital Forensic Analysts, and Incident Responders with the expertise needed to safeguard critical assets against sophisticated cyber threats.

              Our comprehensive curriculum covers essential defensive strategies, advanced threat detection techniques, and effective incident response protocols. By integrating real-world scenarios and the latest industry tools, this course ensures that participants develop the practical skills and knowledge necessary to excel in a high-stakes corporate security environment.
            </p>
          </div>
          <div className="flex-shrink-0 space-x-40">
            <img src={DCS} alt="DCS Logo" className="w-56 md:w-60" />
          </div>
        </div>

        {/* What Makes This SOC Analyst Certification Different Section */}
        {/* <div id="soc-section" className="w-4/5 max-w-7xl text-center md:text-left py-12">
          <h2 className="text-lg text-blue-500 mb-2 flex flex-col items-center justify-center">PRACTICAL SKILLS, LASTING ACCESS</h2>
          <h1 className="text-4xl md:text-4xl font-bold mb-6 flex flex-col items-center justify-center">What Makes This SOC Analyst Certification Different</h1>
          <p className="text-xl mb-12 flex flex-col items-center justify-center">Investigate real-life security incidents.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">100% Practical Exam</h3>
              <p className="text-sm">The exam spans 48 hours, focusing on practical skills; simulating real-world investigations.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Up to 40 CPE Credits</h3>
              <p className="text-sm">Qualify for up to 40 CPE credits for your GIAC/SANS, EC-Council, and (ISC)² certifications.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Student Discount</h3>
              <p className="text-sm">Use your university email to claim your student discount. Start learning, and begin building a successful career!</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Two Exam Attempts Included</h3>
              <p className="text-sm">Approach the exam with confidence, as we offer two free attempts. If needed, you can purchase additional attempts.</p>
            </div>
          </div>
        </div> */}

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
          <h2 className="text-4xl mb-2 flex flex-col items-center justify-center">Student Benefits</h2>
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
              <img onClick={openBenefitModal} src={Studentbenefits} alt="student benefits logo" className="flex justify-center w-64 md:w-96 mb-6 md:mb-0 md:ml-6 mx-auto md:mx-0 mt-5" />

              {isBenefitOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  {/* Background overlay with blur */}
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                    onClick={closeBenefitModal}  // Close modal when clicking outside
                  ></div>

                  {/* Modal Content */}
                  <div className="bg-[#141d2b] p-8 rounded-md shadow-lg z-50">
                    <div className="modal-action flex justify-end">
                      <form method="dialog">
                        <button onClick={closeBenefitModal} className="btn bg-[#04d9ff] border-none px-4 py-1 font-semibold text-white rounded text-2xl"><MdOutlineClose /></button>
                      </form>
                    </div>
                    <img src={Studentbenefits} alt="student benefits logo" className="w-64 md:w-[400px] lg:w-[700px] mx-auto pb-5 pl-3" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>




        {/* Is the CCD Blue Team Certification Right for You Section */}
        {/* <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Is the CCD Blue Team Certification Right for You?</h2>
            <p className="text-center mb-12">
              Whether you're starting out or are well-established in security operations, our training serves as your stepping stone to mastering blue team skills.
            </p>
            <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Who Will Get the Most from CCD</h3>
                <p>Cyber security analysts, SOC analysts, incident responders, threat hunters, and DFIR professionals.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Enrollment Prerequisites</h3>
                <p>A solid background in Windows and Linux, system administration, networks, and security concepts.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Personalized Manual Grading</h3>
                <p>Instructors grade submissions, focusing on your analytical abilities, not just your answers.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Supercharge Your Research Skills</h3>
                <p>Cultivate a robust analytical problem-solving and persistent mindset, equipping you to effectively tackle any challenge in a real SOC.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CCD Syllabus Section */}
        <section id="syllabus-section" className="py-12 flex justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <h2 className="text-blue-500 text-lg uppercase font-bold mb-2">Gain the skills you need to thrive as a professional defender</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Complete Defensive Cyber Security  Training Syllabus</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 justify-center">
              {syllabusItems.map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center justify-center text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                </div>
              ))}
            </div>
            <div>
              <button
                className="btn bg-[#04d9ff] hover:bg-cyan-700 duration-300 text-white font-bold py-3 px-6 rounded"
                onClick={openModal}
              >
                Download Detailed Syllabus
              </button>

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
                    <h3 className="font-bold text-lg">Hi there!</h3>
                    <p className="py-4">Please send us an email to <span className='text-cyan-400 font-semibold'>academy@penough.com</span> with a title with "Request for CDCS Syllabus" from your professional email address.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>




        {/* Certifications */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Earn Your Certificate</h1>
            <p className="text-lg mb-6">
              Earn a prestigious Defensive Cyber Security Certificate upon successful completion of the course and pass the 12-hour practical exam. This certification will validate your skills and knowledge, making you a competitive candidate in the job market.
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
                <div className="bg-[#141d2b] p-8 rounded-md shadow-lg z-50 w-64 md:w-6/12 lg:w-2/6 mx-auto">
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
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">Banks and Financial Institutions</h3>
              <p className="text-white">Strengthen your defenses against financial cyber threats and fraud.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">Fintech Companies</h3>
              <p className="text-white">Safeguard sensitive financial data and protect your digital platforms.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">IT Companies</h3>
              <p className="text-white">Enhance your security teams' capabilities to defend against advanced cyber attacks.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">Law Enforcement Agencies</h3>
              <p className="text-white">Equip your personnel with the skills to investigate and respond to cybercrime.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">Healthcare Organizations</h3>
              <p className="text-white">Protect sensitive patient data and ensure compliance with cybersecurity regulations.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">Telecommunications Companies</h3>
              <p className="text-white">Defend critical infrastructure and secure communications networks from cyber threats.</p>
            </div>
          </div>
        </div>


        {/* INFO Section */}
        {/* <div id="info-section" className="w-4/5 max-w-7xl py-12 mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div id="career-opportunities-section" className="text-left shadow-lg p-6 rounded-lg border-2 border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/50">
              <h2 className="text-3xl font-bold mb-4 text-center">Career Opportunities</h2>
              <p className="text-xl mb-8 text-center">
                Upon completion of this course, you’ll be prepared for a variety of roles in the cybersecurity field, such as:
              </p>
              <ul className="list-disc list-inside text-xl custom-list">
                <li className="mb-2">Cyber Intelligence Analyst</li>
                <li className="mb-2">Threat Hunter</li>
                <li className="mb-2">Digital Forensic Analyst</li>
                <li className="mb-2">Incident Responder</li>
              </ul>
            </div>
            <div id="prerequisites-section" className="text-left shadow-lg p-6 rounded-lg border-2 border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/50">
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
        </div> */}


        {/* Admission */}
        <div className="w-full flex justify-center py-6">
          <a href="https://m.me/penoughcyber" target='_blank' className="bg-cyan-500 text-white font-bold py-3 px-6 rounded hover:bg-cyan-700 transition-all duration-300">
            Apply for Admission
          </a>
        </div>
        {/* Help */}
        <div id="contact-section" className="w-4/5 max-w-7xl py-12 mx-auto text-center mt-8">
          <p className="text-xl">
            For admission inquiries, please reach out to us through our Facebook page or send an email at
            <a href="mailto:academy@penough.com" className="text-cyan-500 p-1 hover:text-cyan-700 transition-all duration-300">
              academy@penough.com
            </a>
          </p>
        </div>

        {/* Accordion */}
        <CDCS />


        <div className='flex justify-center gap-5 w-6/12 mx-auto my-3 md:my-5'>
          <div>
            <Link to="https://www.facebook.com/groups/penoughcyber" target='_blank'>
              <button className='bg-cyan-500 text-white font-bold py-3 px-6 rounded hover:bg-cyan-700 transition-all duration-300'>Join Our Facebook Community</button>
            </Link>
          </div>
          <div>
            <Link to="https://academy.penough.com/discord" target='_blank'>
              <button className='bg-cyan-500 text-white font-bold py-3 px-6 rounded hover:bg-cyan-700 transition-all duration-300'>Join Our Discord Community</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0b121f] text-white py-6">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg">&copy; Penough Academy, 2024</p>
          </div>
          <div className="flex flex-wrap justify-center md:flex-nowrap space-x-4">
            <div className="flex items-center p-2">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
              <a href="https://www.linkedin.com/company/penoughcyber/" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">LinkedIn</a>
            </div>
            <div className="flex items-center p-2">
              <img src={TwitterIcon} alt="Twitter" className="w-8 h-8" />
              <a href="https://x.com/penoughcyber" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">Twitter</a>
            </div>
            <div className="flex items-center p-2">
              <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
              <a href="https://www.instagram.com/penoughcyber/" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">Instagram</a>
            </div>
            <div className="flex items-center p-2">
              <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
              <a href="https://www.facebook.com/penoughcyber" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">Facebook</a>
            </div>
            <div className="flex items-center p-2">
              <img src={YoutubeIcon} alt="Facebook" className="w-8 h-8" />
              <a href="https://www.youtube.com/@penoughcyber" target='_blank' rel='noopener noreferrer' className="hover:underline text-lg p-1">Youtube</a>
            </div>
          </div>
          {/* <div className="flex justify-center md:justify-start space-x-4">
      <a href="#" className="hover:underline text-sm">Terms of Use</a>
      <a href="#" className="hover:underline text-sm">Privacy Policy</a>
    </div> */}
        </div>
      </footer>

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
