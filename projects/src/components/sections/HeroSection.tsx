'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Code, Lightbulb, FileText, Layers } from 'lucide-react';
import HeroHeader from './HeroHeader';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('pitch');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 浮动元素配置
  const floatingElements = [
    {
      icon: <Code className="w-10 h-10 md:w-12 md:h-12" />,
      className: "rounded-lg p-2 md:p-3 shadow-lg",
      style: {
        backgroundColor: 'var(--hero-note-yellow)',
        color: 'var(--hero-accent-orange)',
      },
      left: 5,
      top: 20,
      opacity: 0.3,
      xRange: 15,
      yRange: 15,
      rotate: -5,
      duration: 8,
      delay: 0,
    },
    {
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />,
      className: "rounded-full p-2 md:p-3 shadow-lg",
      style: {
        backgroundColor: 'var(--hero-note-yellow)',
        color: 'var(--hero-accent-orange)',
      },
      left: 90,
      top: 15,
      opacity: 0.35,
      xRange: 10,
      yRange: 10,
      rotate: 5,
      duration: 7,
      delay: 1,
    },
    {
      icon: <FileText className="w-9 h-9 md:w-11 md:h-11" />,
      className: "rounded-lg p-2 md:p-3 shadow-lg",
      style: {
        backgroundColor: 'var(--hero-note-green)',
        color: 'var(--hero-accent-green)',
      },
      left: 5,
      top: 75,
      opacity: 0.25,
      xRange: 15,
      yRange: 10,
      rotate: -3,
      duration: 6,
      delay: 2,
    },
    {
      icon: <Layers className="w-8 h-8 md:w-10 md:h-10" />,
      className: "rounded-full p-2 md:p-3 shadow-lg",
      style: {
        backgroundColor: 'var(--hero-note-blue)',
        color: 'var(--hero-accent-blue)',
      },
      left: 90,
      top: 80,
      opacity: 0.3,
      xRange: 10,
      yRange: 10,
      rotate: 4,
      duration: 9,
      delay: 0.5,
    },
  ];

  return (
    <section id="hero" className="relative w-screen flex flex-col" style={{ minHeight: '100dvh' }}>
      {/* 移动端顶部安全区域（避开固定导航栏 + iOS 刘海屏） */}
      <div
        className="lg:hidden flex-shrink-0"
        style={{
          height: `calc(var(--mobile-navbar-height) + var(--mobile-safe-area-top))`
        }}
      />

      {/* 顶部标题区域 */}
      <HeroHeader />

      {/* 背景区域 */}
      <div className="flex-1 relative bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden hero-background">
        {/* 浮动元素 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 15 }}>
          {floatingElements.map((element, index) => (
            <motion.div
              key={index}
              className={`absolute ${element.className}`}
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                ...element.style,
              }}
              animate={{
                opacity: [0, element.opacity, element.opacity, 0],
                y: [0, element.yRange, -element.yRange, 0],
                x: [0, element.xRange, -element.xRange, 0],
                rotate: [0, element.rotate, -element.rotate, 0],
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              {element.icon}
            </motion.div>
          ))}
        </div>

        {/* 核心文案 */}
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border border-white/60 relative overflow-hidden cursor-default mx-auto"
              style={{ maxWidth: '90vw' }}
            >
              {/* 渐变装饰线条 */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-50" style={{
                background: 'linear-gradient(to right, transparent, var(--hero-accent-primary), transparent)'
              }} />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-50" style={{
                background: 'linear-gradient(to right, transparent, var(--hero-accent-primary), transparent)'
              }} />

              {/* 引号 */}
              <div className="flex justify-start mb-3 md:mb-4">
                <span className="text-4xl md:text-6xl lg:text-7xl font-serif leading-none" style={{ color: 'var(--text-quote)' }}>"</span>
              </div>

              {/* 主标题 */}
              <p className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-3 md:mb-6 font-['Outfit']" style={{ color: 'var(--text-primary)' }}>
                总忘长期任务？不是你记性差，是工具太笨重，不如来试试ClueBoard吧
              </p>

              {/* 副标题（案例说明） */}
              <div className="pt-3 md:pt-4 border-t border-gray-200">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed font-['DM_Sans']" style={{ color: 'var(--text-secondary)' }}>
                  这是我用 AI 完成的第一个完整项目路演
                </p>
                <p className="text-xs md:text-sm lg:text-base mt-2 font-['DM_Sans']" style={{ color: 'var(--text-muted)' }}>
                  从 "发现长期任务难跟踪的痛点" 到 "做出 ClueBoard MVP"
                </p>
                <p className="text-xs md:text-sm lg:text-base mt-2 font-['DM_Sans']" style={{ color: 'var(--text-muted)' }}>
                  我把「AI 编程学习→产品落地」的全流程，都装在了这个页面里
                </p>
                <p className="text-xs md:text-sm lg:text-base mt-2 font-['DM_Sans']" style={{ color: 'var(--text-muted)' }}>
                  记录了从点子到上线的完整过程
                </p>
              </div>

              {/* 引号（右侧） */}
              <div className="flex justify-end mt-3 md:mt-4">
                <span className="text-4xl md:text-6xl lg:text-7xl font-serif leading-none" style={{ color: 'var(--text-quote)' }}>"</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 cursor-pointer group"
          style={{ zIndex: 20 }}
          onClick={scrollToNext}
        >
          <span className="text-xs md:text-sm tracking-wide font-['Space_Grotesk'] pb-0.5 transition-colors group-hover:border-opacity-100" style={{
            color: 'var(--hero-accent-orange)'
          }}>
            向下滚动查看完整案例
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ borderColor: 'var(--hero-accent-orange)', backgroundColor: 'var(--hero-accent-orange)' }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ color: 'white' }}
            >
              <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
