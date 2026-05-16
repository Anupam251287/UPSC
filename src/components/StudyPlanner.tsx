import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Circle, 
  ChevronRight,
  Zap,
  Coffee,
  Sun,
  Moon,
  TrendingUp,
  BrainCircuit
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

export default function StudyPlanner() {
  const { t } = useTranslation();
  const [activeDate] = useState(new Date().getDate());

  const schedule = [
    { id: 1, time: '06:00 - 08:00', task: 'Sociological Theory (Classical)', icon: BrainCircuit, status: 'completed', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
    { id: 2, time: '09:00 - 11:00', task: 'Indian Society: Caste & Jati', icon: Sun, status: 'inprogress', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { id: 3, time: '12:00 - 13:00', task: 'Standard Book Revision (Haralambos)', icon: Coffee, status: 'upcoming', color: 'bg-amber-50 text-amber-600 border-amber-100' },
    { id: 4, time: '14:00 - 16:00', task: 'Practice MCQs + PYQ Analysis', icon: Zap, status: 'upcoming', color: 'bg-rose-50 text-rose-600 border-rose-100' },
    { id: 5, time: '17:00 - 18:00', task: 'Current Affairs Interlinking', icon: MapPin, status: 'upcoming', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
    { id: 6, time: '19:00 - 20:00', task: 'Mains Answer Writing (2 Ans)', icon: Moon, status: 'upcoming', color: 'bg-slate-50 text-slate-600 border-slate-100' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Schedule Column */}
      <div className="lg:col-span-2 space-y-6">
        <header className="brutalist-card p-10 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-brand-black flex flex-col items-center justify-center text-white border-2 border-brand-black">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">May</span>
                <span className="text-3xl font-black leading-none">{activeDate}</span>
             </div>
             <div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-brand-black">{t('planner.title')}</h2>
                <p className="text-brand-black/50 font-serif italic text-lg mt-1 leading-none">{t('planner.subtitle')}</p>
             </div>
          </div>
          <button className="brutalist-button flex items-center gap-2">
             <CalendarIcon size={14} className="text-brand-red" />
             {t('planner.strategy')}
          </button>
        </header>

        <div className="space-y-4">
          {schedule.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              key={item.id} 
              className={cn(
                "group relative p-6 bg-white border-2 transition-all flex items-center gap-8 cursor-pointer overflow-hidden",
                item.status === 'inprogress' 
                  ? "border-brand-red shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]" 
                  : "border-brand-black hover:bg-brand-bg shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none"
              )}
            >
              <div className={cn(
                "w-14 h-14 border-2 flex items-center justify-center transition-all", 
                item.status === 'inprogress' ? "bg-brand-black border-brand-black text-white" : "border-brand-black text-brand-black"
              )}>
                <item.icon size={24} />
              </div>
 
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                   <p className="text-[10px] font-black text-brand-black/40 uppercase tracking-[0.2em] flex items-center gap-2">
                     <Clock size={12} className="text-brand-black" />
                     {item.time}
                   </p>
                   {item.status === 'completed' && <CheckCircle2 size={20} className="text-emerald-600" />}
                   {item.status === 'inprogress' && <div className="w-3 h-3 bg-brand-red rounded-none animate-ping" />}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight text-brand-black group-hover:text-brand-red transition-colors">{item.task}</h4>
              </div>
 
              <ChevronRight size={24} className="text-brand-black/20 group-hover:text-brand-black transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Content */}
      <div className="space-y-8">
        <div className="bg-brand-black p-10 text-white relative overflow-hidden border-2 border-brand-black shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]">
          <div className="relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-widest mb-8 border-b border-white/20 pb-4">{t('planner.efficiency')}</h3>
            <div className="space-y-10">
              <div>
                <div className="flex items-center justify-between mb-3 text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/40">{t('planner.memory_strength')}</span>
                  <span className="text-brand-red">82%</span>
                </div>
                <div className="w-full bg-white/10 h-4 border border-white/20 overflow-hidden">
                  <div className="bg-brand-red h-full w-[82%]" />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-3 text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/40">{t('planner.revision_health')}</span>
                  <span className="text-white uppercase">{t('planner.memory_critical')}</span>
                </div>
                <div className="w-full bg-white/10 h-4 border border-white/20 overflow-hidden">
                  <div className="bg-white h-full w-[35%]" />
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 border border-white/10 relative">
               <p className="text-xs italic font-serif leading-relaxed text-white/70">
                "Your performance in 'Thinkers' has drifted. Spaced repetition engine suggests 15-min focus on Parsons Functionalism."
               </p>
               <BrainCircuit className="absolute -right-4 -bottom-4 text-white opacity-5" size={80} />
            </div>
          </div>
        </div>

        <div className="brutalist-card p-10 bg-white">
          <h4 className="text-[10px] font-black text-brand-black uppercase tracking-[0.2em] mb-10 border-b-2 border-brand-black pb-2">{t('planner.deadlines')}</h4>
          <div className="space-y-10">
            {[
              { date: '18 May', event: 'Paper 1 Section A Mock', intensity: 'High' },
              { date: '21 May', event: 'Notes Consolidation', intensity: 'Medium' },
            ].map(d => (
              <div key={d.event} className="flex items-start gap-6 group">
                 <div className="text-center min-w-[50px] border-r-2 border-brand-black pr-4">
                   <p className="text-xl font-black text-brand-black">{d.date.split(' ')[0]}</p>
                   <p className="text-[10px] font-black text-brand-black/40 uppercase leading-none">{d.date.split(' ')[1]}</p>
                 </div>
                 <div className="flex-1">
                   <p className="text-lg font-black uppercase tracking-tight text-brand-black group-hover:text-brand-red transition-colors leading-tight mb-1">{d.event}</p>
                   <p className="text-[9px] font-black bg-brand-black text-white px-2 py-0.5 inline-block uppercase tracking-widest">{d.intensity} INTENSITY</p>
                 </div>
              </div>
            ))}
          </div>
          
          <button className="w-full brutalist-button mt-12 py-4">{t('planner.sync_calendar')}</button>
        </div>
      </div>
    </div>
  );
}

