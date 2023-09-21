'use client'
import { motion } from 'framer-motion';

const routeVariant = {
    hidden: {
        scale: 0.98,
        opacity: 0,
    },
    final: {
        scale: 1,
        opacity: 1,
    },
}

const Layout = ({ children }) => {
    return (
        <motion.div
            variants={routeVariant}
            initial={'hidden'}
            animate={'final'}
            transition={{ duration: 0.5, delay: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Layout