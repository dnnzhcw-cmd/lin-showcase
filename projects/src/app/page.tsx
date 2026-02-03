import type { Metadata } from 'next';
import NavigationBar from '@/components/layout/NavigationBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import MVPDemoSection from '@/components/sections/MVPDemoSection';
import CompetitorComparisonSection from '@/components/sections/CompetitorComparisonSection';
import LearningJourneySection from '@/components/sections/LearningJourneySection';
import TechStackRoadmapSection from '@/components/sections/TechStackRoadmapSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export const metadata: Metadata = {
  title: 'ClueBoard - 让重要的事情，一眼就能看见',
  description: '为健忘星人打造的「线索墙式」任务管理工具。总忘长期任务？不是你记性差，是工具太笨重。',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <NavigationBar />

      {/* 主内容区 */}
      <main>
        <HeroSection />
        <PainPointsSection />
        <MVPDemoSection />
        <CompetitorComparisonSection />
        <LearningJourneySection />
        <TechStackRoadmapSection />
        <CallToActionSection />
      </main>

      {/* 底部 */}
      <Footer />
    </div>
  );
}
