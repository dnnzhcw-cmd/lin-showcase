'use client';

import { motion } from 'framer-motion';

export default function HeroHeader() {
  return (
    <div className="h-[12vh] pt-4 md:pt-0 md:h-[15vh] lg:h-[16vh] bg-slate-50 flex flex-col justify-center relative overflow-hidden flex-shrink-0" style={{ zIndex: 10 }}>
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="text-xs md:text-sm lg:text-base mb-1 md:mb-2 tracking-wide uppercase text-center font-['Space_Grotesk'] font-medium"
          style={{ color: 'var(--hero-accent-orange)' }}
        >
          探索AI：学习、实践、展示
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="text-xl md:text-3xl lg:text-4xl font-semibold text-center font-['Outfit'] leading-tight"
          style={{ color: '#1e293b' }}
        >
          阿林的AI编程之旅
        </motion.h1>
      </div>
    </div>
  );
}
