import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const ContactLink = ({ icon, text, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-5 rounded-xl bg-tertiary hover:bg-primary transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[rgba(255,255,255,0.1)]">
        {icon}
      </div>
      <span className="text-white text-lg font-medium">{text}</span>
    </motion.a>
  );
};

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope size={24} color="#fff" />,
      text: "contact@31b4.com",
      href: "mailto:contact@31b4.com",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 300 300" fill="#fff">
          <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
        </svg>
      ),
      text: "Follow me on X",
      href: "https://x.com/31b4_",
    },
    {
      icon: <FaInstagram size={24} color="#fff" />,
      text: "Follow me on Instagram",
      href: "https://instagram.com/szilagyix",
    },
    {
      icon: <FaGithub size={24} color="#fff" />,
      text: "Check my GitHub",
      href: "https://github.com/31b4",
    },
  ];

  return (
    <div className={`justify-center xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Connect.</h3>
        
        <div className='mt-12 flex flex-col gap-6'>
          <p className="text-white text-lg mb-4">
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Reach out through any of these channels:
          </p>
          
          {contactLinks.map((link, index) => (
            <ContactLink 
              key={index}
              icon={link.icon}
              text={link.text}
              href={link.href}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
