'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />
      {children}
    </>
  );
} 