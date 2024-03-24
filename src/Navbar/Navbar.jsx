import "./Navbar.css"
import Sidebar from "../compound/Portfolio/Sidebar"
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span animate={{scale:1}} initial={{scale:.5}} transition={{duration:.5}}>Rahul dev</motion.span>
            <motion.div initial={{scale:.1}} animate={{scale:1}} transition={{duration:.5}} className='social'>
               <a aria-label="linkedin" target="_blank" rel="noreferrer"  href="https://github.com/rahulmandal9825"><img src="/git.webp" alt="" /></a> 
                <a aria-label="gmail" target="_blank" rel="noreferrer"  href="mailto:rahulmandalzzz123@gmail.com"><img src="/gmail.webp" alt="" /></a>
                <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rahul-mandal-a0a356263/"><img src="/LinkedIn.webp" alt="" /></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar