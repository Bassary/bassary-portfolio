import { motion } from "motion/react";

export default function RightChangeAnimation({children, className}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
        {children}
        </motion.div>
    ) 
}