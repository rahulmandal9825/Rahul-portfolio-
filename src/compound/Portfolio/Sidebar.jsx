import { motion } from "framer-motion";
import { useState } from "react";
import "./Sidebar.css";
import Links from "./SideLink";
import ToggleButton from "./Togglebutton";

function Sidebar() {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1100px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,

            },
        },
        closed: {
            clipPath: "circle(25px at 50px 50px)",
            transition: {
                type: "spring",
                delay: 0.5,
                stiffness: 400,
                damping: 40,
            },
        },
    };
    return (
        <motion.div animate={open ? "open" : "closed"} className="sidebar">
            <motion.div variants={variants} className="bg">
                <motion.div>
                <ToggleButton setOpen={setOpen} /> 
                </motion.div>
                <motion.div className="link">
                   <Links/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
export default Sidebar;
