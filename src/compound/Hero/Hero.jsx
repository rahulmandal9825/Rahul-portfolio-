import "./hero.css";
import {motion} from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
            
        },
    },
    scrollButton: {
        
        y: 10,
        
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper1">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 className="Name" variants={textVariants}>Rahul Mandal</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web developer</motion.h1>
                    <motion.span variants={textVariants}>Hi, I'm Rahul mandal . A fresher Full-stack developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, Node.js, Express.js, socket.io, Daisy UI, Api and MongoDB.</motion.span>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}><a href="#Projects">See the Latest Works</a> </motion.button>
                        <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
                    </motion.div>
                    <motion.h2 variants={textVariants}>Tech stack</motion.h2>
                    <div className="TechStackicon">
                        <motion.img variants={textVariants} animate="scrollButton" src="/html.png" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/css.png" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/javascript.png" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/react.png" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/express.png" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/nodejslogo.svg" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/Mongoose.png" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/mongodb.png" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/vite.svg" alt="" />
                        <motion.img variants={textVariants} animate="scrollButton" src="/framer-motion.svg" alt="" />

                    </div>
                  
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                
            </motion.div>
            <div className="imgibox">
                  <motion.div initial={{scale:.1}} animate={{scale:1}} transition={{duration:.5}} className="hero-img">
                <img src="/Rahul1.png" alt="" />
            </motion.div>
            <motion.h2 variants={textVariants}>Rahul Mandal</motion.h2>
            </div>
          
        </div>
    );
};

export default Hero;
