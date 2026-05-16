import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  BrainCircuit, 
  ClipboardCheck, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  Newspaper,
  Terminal,
  Settings,
  ChevronRight,
  Languages
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/src/lib/utils";
import Dashboard from "./Dashboard";
import SyllabusMapper from "./SyllabusMapper";
import ThinkerEngine from "./ThinkerEngine";
import AIMentor from "./AIMentor";
import PracticeZone from "./PracticeZone";
import StudyPlanner from "./StudyPlanner";

export default function Layout() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: t('nav_intelligence_desk'), icon: LayoutDashboard },
    { id: 'syllabus', label: t('nav_syllabus_graph'), icon: BrainCircuit },
    { id: 'thinkers', label: t('nav_thinker_engine'), icon: Users },
    { id: 'mentor', label: t('nav_ai_mentor'), icon: MessageSquare },
    { id: 'practice', label: t('nav_practice_zone'), icon: ClipboardCheck },
    { id: 'planner', label: t('nav_study_planner'), icon: Calendar },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'syllabus': return <SyllabusMapper />;
      case 'thinkers': return <ThinkerEngine />;
      case 'mentor': return <AIMentor />;
      case 'practice': return <PracticeZone />;
      case 'planner': return <StudyPlanner />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-black flex flex-col p-2 md:p-8 border-[2px] sm:border-[6px] md:border-[12px] border-brand-black overflow-x-hidden">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-brand-black pb-4 mb-4 md:mb-8">
        <div className="w-full md:w-auto">
          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-60">{t('sys_arch')} // v1.0.4</p>
          <h1 className="text-2xl md:text-7xl font-black uppercase leading-tight md:leading-none tracking-tighter">
            {t('app_title_main')} <span className="text-brand-red">{t('app_title_sub')}</span>
          </h1>
        </div>
        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-4 mt-3 md:mt-0 w-full md:w-auto justify-between">
          <div className="flex bg-brand-black p-0.5 md:p-1">
            <button 
              onClick={() => changeLanguage('en')}
              className={cn("px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all", i18n.language === 'en' ? "bg-brand-red text-white" : "text-white/50 hover:text-white")}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('hi')}
              className={cn("px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all", i18n.language === 'hi' ? "bg-brand-red text-white" : "text-white/50 hover:text-white")}
            >
              हिन्दी
            </button>
          </div>
          <p className="text-lg md:text-3xl font-serif italic">{t('app_engine')}</p>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
        {/* Mobile Nav: Horizontal Scroll */}
        <div className="lg:col-span-3 flex flex-col gap-4 md:gap-8">
          <div className="sticky top-0 z-50 bg-brand-bg/95 md:bg-transparent -mx-2 px-2 py-2 md:p-0 border-b md:border-none border-brand-black/10">
            <h3 className="text-[9px] md:text-[11px] font-bold uppercase bg-brand-black text-white px-2 py-1 inline-block mb-2 md:mb-4 tracking-widest">{t('nav_title')}</h3>
            <nav className="flex flex-row md:flex-col border-t border-brand-black overflow-x-auto no-scrollbar gap-2 md:gap-0 pb-1 md:pb-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "flex items-center justify-between py-2 md:py-3 border-b-2 md:border-b border-brand-black group transition-all whitespace-nowrap px-3 md:px-0 min-w-max",
                    activeTab === item.id ? "text-brand-red border-brand-red md:border-brand-black font-black" : "text-brand-black opacity-70 hover:opacity-100 border-transparent md:border-brand-black"
                  )}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <item.icon size={16} strokeWidth={activeTab === item.id ? 3 : 2} className="md:size-18" />
                    <span className="text-[12px] md:text-sm font-bold uppercase tracking-tight">{item.label}</span>
                  </div>
                  <div className="hidden md:block">
                    {activeTab === item.id ? (
                      <span className="text-brand-red">●</span>
                    ) : (
                      <span className="opacity-20 group-hover:opacity-100 transition-opacity">○</span>
                    )}
                  </div>
                </button>
              ))}
            </nav>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[11px] font-bold uppercase border-b-2 border-brand-black mb-4 pb-1 tracking-widest">{t('thinker_map')}</h3>
            <div className="space-y-6">
              {[
                { label: t('capitalism'), thinkers: 'Marx + Weber' },
                { label: t('religion'), thinkers: 'Durkheim + Weber' },
                { label: t('caste'), thinkers: 'Srinivas + Beteille' },
              ].map((m) => (
                <div key={m.label} className="group">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{m.label}</p>
                  <p className="text-lg font-serif italic border-l-4 border-brand-red pl-3 leading-tight">{m.thinkers}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Main Viewport */}
        <div className="lg:col-span-9 flex flex-col gap-4 md:gap-8">
          <div className="relative flex-1">
             <div className="absolute -top-4 right-0 p-2 text-[8px] font-mono opacity-50 uppercase hidden md:block">
                {t('pipeline')}: sociology_preparation_pipeline
             </div>
             {renderContent()}
          </div>
          
          {/* Footer Decorative */}
          <footer className="mt-auto pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] font-mono opacity-40 border-t border-brand-black gap-2 md:gap-4 text-center">
            <p className="hidden md:block">UPSC_SOC_ENGINE_001XF</p>
            <p className="uppercase leading-tight">Haralambos // Ritzer // IGNOU // MN_SRINIVAS</p>
            <p>{t('copyright')}</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

