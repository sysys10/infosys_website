'use client'

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionUpProps {
    children: ReactNode;
    [key: string]:any;
}

const MotionUp: React.FC<MotionUpProps> = ({ children, ...props }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            {...props}>
            {children}
        </motion.div>
    );
};

export default MotionUp;
