import { motion } from "motion/react";

export default function TopChangeAnimation({children, className, delay}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay }}
        >
        {children}
        </motion.div>
    ) 
}