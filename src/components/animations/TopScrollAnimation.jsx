import { motion } from "motion/react";

export default function TopScrollAnimation({children, className, delay}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            viewport={{once: true}}
        >
        {children}
        </motion.div>
    ) 
}