import React, { useState } from 'react';
import '../context/Instructor.css';
import Navbar from '../context/Navbar';
import LinkedInIcon from '../assets/linkedin.png';
import TwitterIcon from '../assets/twitter.png';
import Nazrul from '../assets/Instructor/nuzrul-vai.png';
import Janny from '../assets/Instructor/jeney-vai.png';
import Khairul from '../assets/Instructor/khairul-vai.png';
import Ashfaq from '../assets/Instructor/ashfak-vai.png';
import Rafi from '../assets/Instructor/rafid-vai.png';
import Footer from '../components/footer/Footer';

const Instructor = () => {
  const instructors = [
    {
      image: Nazrul,
      name: "Md. Nazrul Islam (Ridoy)",
      title: "Lead Instructor",
      description: "Md. Nazrul Islam, A cybersecurity professional with over 10 years of experience, excels in identifying and neutralizing cyber threats. Renowned for his expertise, he implements advanced security measures and ensures industry compliance. Emphasizing an interactive and practical approach, he integrates theory with hands-on labs, case studies, and live simulations. Committed to a supportive learning environment, he prepares students to confidently face real-world cybersecurity challenges and succeed in their careers.",
      skills: ["Threat Hunting", "Incident Response", "Digital Forensics", "Malware Analysis", "Threat Intelligence", "Perimeter Defense", "Security Information and Event Management (SIEM)", "Phishing Analysis", "Network Security"],
      certifications: ["Certified Information Systems Security Professional", "Certified Ethical Hacker", "Offensive Security Certified Professional"],
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/rbshadow/",
        twitter: "https://x.com/rbshad0w",
        instagram: "https://instagram.com/nazrul",
        facebook: "https://facebook.com/nazrul",
      }
    },
    {
      image: Janny,
      name: "Khan Janny",
      title: "Senior Instructor",
      description: "Introducing Khan Janny, our Senior Instructor at Penough Academy, with 9 years of robust experience in offensive security. A dynamic and knowledgeable mentor, Khan is an active bug bounty hunter and regularly participates in Capture The Flag (CTF) competitions, showcasing his expertise and passion for cybersecurity. Throughout his career, he has worked on numerous projects as a security consultant, honing his skills across all offensive and defensive security fields. Khan’s extensive experience and dedication make him an invaluable asset to our academy.",
      skills: ["Web Application Security",
        "API Security",
        "Mobile Application Security",
        "Vulnerability Assessment and Penetration Testing (VAPT)",
        "Exploit Development",
        "Secure Code Review",
        "Red Team Operations",
        "Network Penetration",
        "Social Engineering" ],
      certifications: ["Certified Ethical Hacker", "Offensive Security Certified Professional"],
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/khanjanny/",
        twitter: "https://x.com/reboot_ex",
        instagram: "https://instagram.com/janny",
        facebook: "https://facebook.com/janny",
      }
    },
    {
      image: Khairul,
      name: "Khairul Alom",
      title: "Instructor",
      description: "Khairul Alom, with over 5 years of experience as a network engineer and system administrator, has seamlessly transitioned into cybersecurity. His background provides comprehensive knowledge of networks, systems, and administration tools, enabling him to identify and address vulnerabilities effectively. As a cybersecurity engineer, he is passionate about staying ahead of evolving threats and implementing robust security measures. Khairul's expertise ensures the safeguarding of critical information systems.",
      skills: ["Network Administration", "Network Security", "Firewall Management", "VPN Configuration", "Wireless Network Security", "Network Monitoring and Troubleshooting", "IP Address Management", "Network Design and Implementation"],
      certifications: ["Cisco Certified Network Associate", "Certified Information Systems Security Professional"],
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/khairul-alom/",
        twitter: "https://x.com/kalom6154",
        instagram: "https://instagram.com/khairul",
        facebook: "https://facebook.com/khairul",
      }
    },
    {
      image: Ashfaq,
      name: "Ashfaq Hossain",
      title: "Instructor",
      description: "Ashfaq Hossain, a B.Sc. in Computer Science and Engineering graduate with 3 years of experience, excels in cybersecurity, particularly in banking security and SOC infrastructure enhancement. He has developed secure websites with Python and Django and mentored students in Python and Java. Passionate about network security research and SOC optimization, Ashfaq continually explores innovative cybersecurity solutions. His expertise and dedication position him as an inspiring cybersecurity instructor, helping students excel in this dynamic field.",
      skills: ["Threat Detection", "Incident Response", "Security Information and Event Management (SIEM)", "Endpoint Security", "Network Defense"],
      certifications: ["Certified Information Systems Security Professional", "Certified Ethical Hacker"],
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/ashfaqhossain11/",
        twitter: "https://x.com/AshfaqHossain10",
        instagram: "https://instagram.com/ashfaq",
        facebook: "https://facebook.com/ashfaq",
      }
    },
    {
      image: Rafi,
      name: "Md Rafi Ahamed",
      title: " Guest Instructor",
      description: "Md Rafi Ahamed, an esteemed instructor at Penough Academy, brings over 5 years of expertise in offensive security. As a seasoned mentor and active bug bounty hunter, he excels in programs on HackerOne, Yogosha, and TecnoSRC. Rafi's outstanding performance earned him invitations to two Live Hacking Events and a spot among the Top 30 on the Yogosha Leaderboard All-time. In 2022, he ranked among the Top 5 on TecnoSRC and achieved the Top #1 position in various programs on HackerOne and Yogosha.",
      skills: ["Web Application Security"
        , "Mobile Application Security"
        , "Api Security"
        , "Vulnerability Assessment"
        , "Penetration Testing"
        , "Exploit Development"
        , "Red Team Operations"
        , "OSINT"],
      certifications: ["Certified Information Systems Security Professional", "Certified Ethical Hacker"],
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/rafi-ahamed/",
        twitter: "https://x.com/L3onid1s",
        instagram: "https://instagram.com/ashfaq",
        facebook: "https://facebook.com/ashfaq",
      }
    },
  ];

  return (
    <div className="">
      <Navbar />
      <div className='bg-gray-900'>
        <div className="py-3 max-w-screen-lg mx-auto">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl px-5 md:px-0 lg:px-0 font-semibold text-white md:mt-5 lg:mt-6">
              Meet Our Expert Instructors
            </h3>
          </div>
        </div>
      </div>
      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 object-cover">
            {instructors.map((instructor, index) => (
              <InstructorCard
                key={index}
                image={instructor.image}
                name={instructor.name}
                title={instructor.title}
                description={instructor.description}
                skills={instructor.skills}
                certifications={instructor.certifications}
                socialLinks={instructor.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

const InstructorCard = ({ image, name, title, description, skills, socialLinks }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`instructor-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        <div className="card-front bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-4 h-[300px] block mx-auto object-cover" src={image} alt={`${name} Avatar`} />
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
              {name}
            </h3>
            <span className="text-gray-500 dark:text-gray-400 font-semibold">{title}</span>
            <p className="mt-3 mb-4 font-light text-gray-300 dark:text-gray-300 text-justify tracking-tight">{description}</p>
            <div className="flex justify-between items-center">
              <SocialLinks socialLinks={socialLinks} />
              <button onClick={handleFlip} className="flip-button bg-cyan-500 text-white py-2 px-4 rounded">Show More</button>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-white">{name}'s Skills</h3>
            <p className="mt-3 mb-2 font-light text-gray-200">Skills:</p>
            <ul className="list-disc list-inside text-gray-200">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <button onClick={handleFlip} className="flip-button mt-4 bg-cyan-500 text-white py-2 px-4 rounded">Show Less</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = ({ socialLinks }) => (
  <ul className="flex space-x-4 sm:mt-0">
    {socialLinks.linkedin && (
      <li>
        <a
          href={socialLinks.linkedin}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" className="h-7 w-7" />
        </a>
      </li>
    )}
    {socialLinks.twitter && (
      <li>
        <a
          href={socialLinks.twitter}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TwitterIcon} alt="Twitter" className="h-7 w-7" />
        </a>
      </li>
    )}
    {/* {socialLinks.instagram && (
      <li>
        <a 
          href={socialLinks.instagram} 
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramIcon} alt="Instagram" className="h-7 w-7" />
        </a>
      </li>
    )}
    {socialLinks.facebook && (
      <li>
        <a 
          href={socialLinks.facebook} 
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookIcon} alt="Facebook" className="h-7 w-7" />
        </a>
      </li>
    )}
    {socialLinks.youtube && (
      <li>
        <a 
          href={socialLinks.youtube} 
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={YoutubeIcon} alt="Youtube" className="h-7 w-7" />
        </a>
      </li>
    )} */}
  </ul>


);

export default Instructor;
