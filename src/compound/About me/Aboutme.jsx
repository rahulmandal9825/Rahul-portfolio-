import { useRef } from "react";
import "./Aboutme.css";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      initial="initial"
      // animate="animate"
    //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    ><div className="stars"></div>
      <motion.div className="titleContainer1" >
      <motion.div  variants={variants} className="hero-img">
                <img src="/Rahul1.png" alt="" />
            </motion.div>
       
        <motion.div className="title" variants={variants}>
        
            <h1 >About me</h1>
    <div className="aboutdis">
      <motion.h2 whileHover={{color:"white"}}>A Dedicated Full-stack Developer based </motion.h2>
       
       
      <motion.h2 whileHover={{color:"white"}}>As a fresher Full-stack developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, Node.js, Express.js, socket.io, Daisy UI and MongoDB. I create sleek and responsive web applications. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge developer tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications!</motion.h2>
    </div>
            
      
      </motion.div>
      </motion.div>
      </motion.div>
  );
};

export default About;