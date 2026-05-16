import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SYLLABUS, Paper } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  ChevronRight, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Search,
  Filter,
  BrainCircuit
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function SyllabusMapper() {
  const { t } = useTranslation();
  const [selectedPaper, setSelectedPaper] = useState<Paper | 'All'>('All');
  const [search, setSearch] = useState("");
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredTopics = SYLLABUS.filter(t => 
    (selectedPaper === 'All' || t.paper === selectedPaper) &&
    (t.title.toLowerCase().includes(search.toLowerCase()) || 
     t.subtopics.some(s => s.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 brutalist-card p-6 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-4 flex-1">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-black" size={18} />
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('syllabus.search_placeholder')} 
              className="w-full bg-brand-bg/50 border-2 border-brand-black py-3 pl-12 pr-4 text-sm font-bold focus:outline-none focus:bg-white transition-all placeholder:text-brand-black/30"
            />
          </div>
          <div className="flex p-1 bg-brand-black rounded-none gap-1 w-full md:w-auto">
             {['All', Paper.PAPER_1, Paper.PAPER_2].map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPaper(p as any)}
                  className={cn(
                    "px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all w-full md:w-auto",
                    selectedPaper === p 
                      ? "bg-brand-red text-white" 
                      : "text-white/50 hover:text-white"
                  )}
                >
                  {p === 'All' ? t('syllabus.all_papers') : `${t('syllabus.paper')} ${p.split(':')[0].replace('Paper ', '')}`}
                </button>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredTopics.map((topic) => (
          <div key={topic.id} className="brutalist-card bg-white overflow-hidden group">
            <button 
              onClick={() => toggleExpand(topic.id)}
              className="w-full px-6 py-6 flex flex-col md:flex-row md:items-center justify-between text-left gap-4"
            >
              <div className="flex items-center gap-6">
                <div className={cn(
                  "w-12 h-12 border-2 border-brand-black flex flex-col items-center justify-center font-black",
                  topic.pyqFrequency === 'High' ? "bg-brand-red text-white" : "bg-brand-bg text-brand-black"
                )}>
                  <span className="text-[10px] opacity-60">ID</span>
                  <span className="text-sm leading-none">{topic.id.split('-')[1].toUpperCase()}</span>
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-brand-black group-hover:text-brand-red transition-colors">{topic.title}</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[9px] font-black text-brand-black/40 uppercase tracking-[0.2em]">{topic.category}</span>
                    <span className={cn(
                      "text-[9px] font-black px-2 py-0.5 border border-brand-black uppercase tracking-widest",
                      topic.pyqFrequency === 'High' ? "bg-brand-black text-white" : "bg-transparent text-brand-black"
                    )}>
                      {t(`syllabus.${topic.pyqFrequency.toLowerCase()}`)} {t('syllabus.impact')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 pt-4 md:pt-0 border-brand-black/10">
                <div className="flex flex-col items-end">
                  <div className="text-[9px] font-black uppercase mb-1 opacity-40">{t('syllabus.coverage')}</div>
                  <div className="w-32 bg-brand-bg border border-brand-black h-3 overflow-hidden relative">
                     <div className="bg-brand-black h-full w-[45%]" />
                  </div>
                </div>
                {expandedIds.includes(topic.id) ? <ChevronDown size={20} className="text-brand-black stroke-[3]" /> : <ChevronRight size={20} className="text-brand-black stroke-[3]" />}
              </div>
            </button>

            <AnimatePresence>
              {expandedIds.includes(topic.id) && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t-2 border-brand-black">
                    <div className="space-y-6">
                      <h5 className="text-[11px] font-black text-brand-black uppercase tracking-[0.2em] flex items-center gap-3">
                        <FileText size={16} className="text-brand-red" /> {t('syllabus.core_concepts')}
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        {topic.subtopics.map((sub, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-brand-bg/50 border border-brand-black/10 hover:bg-white hover:border-brand-black transition-all">
                            <span className="text-[10px] font-black text-brand-red">{String(i + 1).padStart(2, '0')}</span>
                            <span className="text-sm font-serif italic text-brand-black/80 leading-tight">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h5 className="text-[11px] font-black text-brand-black uppercase tracking-[0.2em] flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-brand-red" /> {t('syllabus.intellectual_agents')}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {topic.thinkers.map((thinker, i) => (
                          <div key={i} className="px-4 py-2 bg-white border-2 border-brand-black text-[10px] font-black uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all cursor-pointer">
                            {thinker}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-brand-black text-white relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-3">
                            <AlertCircle size={16} className="text-brand-red" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">{t('syllabus.ai_linker')}</span>
                          </div>
                          <p className="text-xs italic font-serif leading-relaxed opacity-80">
                            Link this topic with Chapter 4 (Paper 1) regarding the methods of Positivism for maximum marks in UPSC Mains.
                          </p>
                        </div>
                        <BrainCircuit className="absolute -right-6 -bottom-6 text-white opacity-5 opacity-10" size={100} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
