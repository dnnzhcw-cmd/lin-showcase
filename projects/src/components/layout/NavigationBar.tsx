'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Lightbulb, BookOpen, Mail, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: '首页', icon: <Home className="w-4 h-4" />, href: '#hero' },
  { id: 'pitch', label: '项目路演', icon: <Lightbulb className="w-4 h-4" />, href: '#pitch' },
  { id: 'learning', label: '学习复盘', icon: <BookOpen className="w-4 h-4" />, href: '#learning' },
  { id: 'contact', label: '联系我', icon: <Mail className="w-4 h-4" />, href: '#contact' },
];

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // 动态计算移动端导航栏高度并更新 CSS 变量
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('[data-mobile-navbar]');
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--mobile-navbar-height', `${height}px`);
      }
    };

    // 初始计算
    updateNavbarHeight();

    // 监听窗口大小变化和菜单打开/关闭
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, [isMobileMenuOpen]);

  // 监听滚动位置，更新激活的导航项
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // 显示/隐藏返回顶部按钮
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // 返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 使用 useCallback 缓存事件处理函数
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 桌面端固定左侧导航 */}
      <motion.nav 
        initial={{ width: 80 }}
        animate={{ width: isHovering ? 220 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2 p-3 bg-white/80 backdrop-blur-md rounded-r-xl shadow-lg border-l border-t border-b border-gray-200 overflow-hidden"
        style={{
          willChange: "width",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.href)}
            className={cn(
              'relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
              activeSection === item.id
                ? 'bg-gray-900 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
            aria-label={item.label}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToSection(item.href);
              }
            }}
            style={{
              willChange: 'transform',
            }}
          >
            <span aria-hidden="true">{item.icon}</span>
            <AnimatePresence mode="wait">
              {isHovering && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-sm font-medium overflow-hidden whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}

        <div className="w-full h-px bg-gray-200 my-1" />

        <motion.button
          onClick={scrollToTop}
          className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
            'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="返回顶部"
          aria-label="返回顶部"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToTop();
            }
          }}
          style={{
            willChange: 'transform',
          }}
        >
          <span aria-hidden="true">
            <ChevronUp className="w-4 h-4" />
          </span>
          <AnimatePresence mode="wait">
            {isHovering && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-sm font-medium overflow-hidden whitespace-nowrap"
              >
                返回顶部
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* 移动端顶部导航 */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200" data-mobile-navbar>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-bold text-lg text-gray-900">ClueBoard</span>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
                      activeSection === item.id
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    )}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 移动端返回顶部按钮 */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-gray-900 text-white rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
