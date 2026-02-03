'use client';

import { Mail, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 品牌信息 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ClueBoard</h3>
            <p className="text-gray-400 leading-relaxed">
              让重要的事情，一眼就能看见<br />
              个人创意与生活任务的可视化容器
            </p>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="font-semibold mb-4">联系我</h4>
            <div className="space-y-3">
              <a
                href="mailto:793220026@qq.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>793220026@qq.com</span>
              </a>
            </div>
          </div>

          {/* 社交媒体 */}
          <div>
            <h4 className="font-semibold mb-4">关注我</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>微信</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span>小红书</span>
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 ClueBoard. 用 AI 编程，让想法落地。</p>
        </div>
      </div>
    </footer>
  );
}
