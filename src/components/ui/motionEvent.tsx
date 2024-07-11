'use client'

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionEventProps {
    children: ReactNode;
    [key: string]: any;
}

const MotionEvent: React.FC<MotionEventProps> = ({ children, ...props }) => {
    return (
        <motion.div initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1, originX: 0 }} transition={{ duration: 0.5 }}
            {...props}>
            {children}
        </motion.div>
    );
};

export { MotionEvent };
