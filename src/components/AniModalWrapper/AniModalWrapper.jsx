import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Style from "./AniModalWrapper.module.css";

const modalVariants = {
    initial: {
        opacity: 0,
        scale: 0.8,
        y: -50,
    },
    final: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 15,
            stiffness: 100,
            mass: 0.8,
            duration: 1,
            delay: 0.3,
        },
    },
    exit: {
        opacity: 0,
        scale: 1.2,
        y: -50,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
};

const backdropVariants = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const AniModalWrapper = ({ open, onClose, children }) => {

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [open])

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className={Style.backdrop}
                        initial="initial"
                        animate="final"
                        exit="exit"
                        variants={backdropVariants}
                    >
                        <motion.div
                            className={Style.container}
                            initial="initial"
                            animate="final"
                            exit="exit"
                            variants={modalVariants}
                        >
                            {children}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AniModalWrapper;
