import { useRef } from "react";
import "./Portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Jk Estate Project- Real Estate website",
    img: "/project1.png",
    desc: "This cutting-edge platform utilizes the MERN stack—MongoDB, Express.js, React, and node.js enhanced with JWT authentication and Redux Toolkit. Discover, buy, sell, or rent properties seamlessly with an intuitive user interface, interactive maps, and personalized dashboards.",
    seedemo:"https://jk-estate-website-full-stack.onrender.com/",
    getcode:"https://github.com/rahulmandal9825/Jk-Estate-website-full-stack",
  },
  {
    id: 2,
    title: "Chat app with MERN Socket.io",
    img: "/project2.png",
    desc: "A cutting-edge chat application built using the power of MERN stack MongoDB, Express.js, React, Node.js, Socket.io for real-time communication, and Daisy UI for a sleek and modern UI. Leveraging the capabilities of Zustand for global state management and JWT for secure authentication, our app ensures seamless user experience and data protection. With Tailwind CSS for rapid UI development and Framer Motion for captivating animations.",
    seedemo:"https://chat-app-we76.onrender.com/",
    getcode:"https://github.com/rahulmandal9825/chat-app-with-MERN-Socket.io",
  },
  {
    id: 3,
    title: "News ok is news website",
    img: "/project3.png",
    desc: " iNotes, a web application that allows you to organize and manage your notes efficiently. This project is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a seamless and responsive user experience.",
    seedemo:"https://github.com/rahulmandal9825/Online-Notes",
    getcode:"https://github.com/rahulmandal9825/Online-Notes",
  },
  {
    id: 4,
    title: "iNotes",
    img: "/project4.png",
    desc: "iNotes, a web application that allows you to organize and manage your notes efficiently. This project is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a seamless and responsive user experience.",
    seedemo:"https://github.com/rahulmandal9825/News-Ok-website",
    getcode:"https://github.com/rahulmandal9825/News-Ok-website",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer1" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
                <button><a href={item.seedemo}>See Demo</a></button>
            <button><a href={item.getcode}>get code</a></button>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;