import React, { useEffect, useState } from 'react';
import DCS from "../assets/DCS_201l.png";
import Navbar from '../context/Navbar.jsx';
import Penough from "../assets/Peonugh.png";
import Icon from "../assets/favicon-1.png"
import certificateImage from "../assets/certificate201.jpg";
import Studentbenefits from "../assets/Student_benifits.png";
import Footer from '../components/footer/Footer.jsx';
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import DCS201 from '../components/accordion/DCS201';

const Course = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Modal Open then Background Blur
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Modal Open then Background Blur With Download Syllabus
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const openSyllabusModal = () => {
    setIsSyllabusOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSyllabusModal = () => {
    setIsSyllabusOpen(false);
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
    { title: 'Advanced Threat Hunting (SIEM)', icon: 'icon-path-5.svg' },
    { title: 'Case Management & Analysis', icon: 'icon-path-3.svg' },
    { title: 'SOAR', icon: 'icon-path-3.svg' },
    { title: 'Advanced Digital Forensics', icon: 'icon-path-3.svg' },
    { title: 'Email Gateway Security', icon: 'icon-path-1.svg' },
    { title: 'Dark Web Monitoring', icon: 'icon-path-2.svg' },
    { title: 'Malware Analysis', icon: 'icon-path-4.svg' },
    { title: 'Bonus', icon: 'icon-path-6.svg' },

  ];

  return (
    <div className="bg-[#141d2b] text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center p-4 md:my-5">
        {/* Certified CyberDefender Section */}
        <div id="ccd-section" className="flex flex-col md:flex-row items-center w-4/5 max-w-7xl my-5 mx-auto">
          <div className="text-center max-w-4xl md:text-left md:mr-6 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Defensive Cyber Security 201</h1>
            <p className="text-lg md:text-xl mb-6">Advance Defensive Cyber Security Training</p>
            <p className="text-justify md:text-start tracking-tight text-sm md:text-base mb-8">
              DCS-201 program offers advanced hands-on training in Defensive Cyber Security, tailored for experienced professionals.
              This course is designed to elevate the skills of Cyber Intelligence Analysts, Threat Hunters, Digital Forensic Analysts,
              and Malware Analyst. Our curriculum delves deeper into sophisticated defensive strategies, advanced threat detection techniques,
              and comprehensive incident response protocols, providing students with the expertise needed to excel in high-stakes cyber security environments.
            </p>
          </div>
          <div className="flex-shrink-0 space-x-40">
            <img src={DCS} alt="DCS Logo" className="w-56 md:w-56" />
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
          <p className="text-xl mb-12 flex flex-col items-center justify-center"></p>
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
          <h2 className="text-3xl md:text-4xl mb-2 flex flex-col items-center justify-center">Student Benefits</h2>
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
              <h2 className="text-blue-500 text-lg uppercase font-bold mb-2">
                Gain the skills you need to thrive as a professional defender
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Defensive Cyber Security 201 Training Syllabus
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 justify-center">
              {syllabusItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg flex items-center justify-center text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500"
                >
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                </div>
              ))}
            </div>
            <div>
              <button
                className="btn bg-[#04d9ff] hover:bg-cyan-700 duration-300 text-white font-bold py-3 px-6 rounded"
                onClick={openSyllabusModal}
              >
                Download Detailed Syllabus
              </button>

              {isSyllabusOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  {/* Background overlay with blur */}
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                    onClick={closeSyllabusModal}  // Close modal when clicking outside
                  ></div>

                  {/* Modal Content */}
                  <div className="bg-[#141d2b] p-8 rounded-md shadow-lg z-50">
                    <div className="modal-action flex justify-end">
                      <form method="dialog">
                        <button onClick={closeSyllabusModal} className="btn bg-[#04d9ff] border-none px-4 py-1 font-semibold text-white rounded text-2xl"><MdOutlineClose /></button>
                      </form>
                    </div>
                    <h3 className="font-bold text-lg">Hi there!</h3>
                    <p className="py-4">Please send us an email to <span className='text-cyan-400 font-semibold'>academy@penough.com</span> with a title with "Request for DCS-201 Syllabus" from your email address.</p>
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
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">IT Security Engineers</h3>
              <p className="text-white">Equip yourself with the latest defensive strategies and tools to enhance your organization's overall cybersecurity posture.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">Cybersecurity Professionals</h3>
              <p className="text-white">Enhance your existing knowledge and skills with advanced techniques and strategies to tackle complex cyber threats.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">Network Security Engineers</h3>
              <p className="text-white">Gain advanced knowledge in securing network infrastructures, email gateways, and monitoring for emerging threats.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">Security Operations Center (SOC) Analysts</h3>
              <p className="text-white">Develop advanced skills in SOC operations, threat detection, and incident management to improve the efficiency and effectiveness of your SOC team.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">DFIR Analysts</h3>
              <p className="text-white">Expand your expertise in digital forensics, malware analysis, and incident response to effectively investigate and mitigate cyber incidents.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold mb-2 text-white">DCS101 Alumni</h3>
              <p className="text-white">Continue your cybersecurity education with advanced defensive strategies.</p>
            </div>
          </div>
        </div>


        {/* INFO Section */}
        <div id="info-section" className="w-4/5 max-w-7xl py-12 mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Career Opportunities Section */}
            <div id="career-opportunities-section" className="text-left shadow-lg p-6 rounded-lg border border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/50">
              <h2 className="text-3xl font-bold mb-4 text-center">Career Opportunities</h2>
              <p className="text-xl mb-8 text-center">
                Upon completion of this course, you’ll be prepared for a variety of roles in the cybersecurity field, such as:
              </p>
              <ul className="list-disc list-inside text-xl custom-list">
                <li className="mb-2">Senior Cyber Intelligence Analyst</li>
                <li className="mb-2">Senior Threat Hunter</li>
                <li className="mb-2">Senior Digital Forensic Analyst</li>
                <li className="mb-2">Malware Analyst</li>
                <li className="mb-2">Dark Web Monitoring Specialist</li>
              </ul>
            </div>

            {/* Prerequisites Section */}
            <div id="prerequisites-section" className="text-left shadow-lg p-6 rounded-lg border-2 border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/50">
              <h2 className="text-3xl font-bold mb-4 text-center">Prerequisites</h2>
              <ul className="list-disc list-inside text-xl custom-list">
                <li className="mb-2">
                  Strong knowledge of computer networks and operating systems.
                </li>
                <li className="mb-2">
                  Familiarity with Cyber Threat Intelligence and Digital Forensic & Incident Response.
                </li>
                <li className="mb-2">
                  At least 2-3 years cybersecurity experience is required and a passion for learning and solving complex problems is a plus!
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* Admission */}
        <div className="w-full flex justify-center">
          <a href="https://m.me/penoughcyber" target='_blank' className="bg-cyan-500 text-white font-bold py-3 px-6 rounded hover:bg-cyan-700 transition-all duration-300">
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
        <DCS201 />


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
