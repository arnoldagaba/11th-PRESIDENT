import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-rotaract-blue dark:bg-dark-primary z-50 transform origin-left"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
