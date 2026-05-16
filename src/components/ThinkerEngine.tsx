import { useState } from "react";
import { useTranslation } from "react-i18next";
import { THINKERS } from "../types";
import { motion } from "motion/react";
import { Book, Quote, Layers, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function ThinkerEngine() {
  const { t } = useTranslation();
  const [selectedThinker, setSelectedThinker] = useState(THINKERS[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* List */}
      <div className="col-span-1 space-y-4">
        <h3 className="text-[10px] font-black text-brand-black uppercase tracking-[0.2em] ml-1 mb-6">{t('thinkers.catalog')}</h3>
        {THINKERS.map((thinker) => (
          <button
            key={thinker.name}
            onClick={() => setSelectedThinker(thinker)}
            className={cn(
              "w-full text-left p-5 border-2 transition-all flex items-center justify-between group relative overflow-hidden",
              selectedThinker.name === thinker.name 
                ? "bg-brand-black border-brand-black text-white shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]" 
                : "bg-white border-brand-black text-brand-black hover:bg-brand-bg"
            )}
          >
            <div className="relative z-10">
              <p className="text-sm font-black uppercase tracking-tight">{thinker.name}</p>
              <p className={cn(
                "text-[9px] font-black uppercase tracking-widest mt-1",
                selectedThinker.name === thinker.name ? "text-brand-red" : "text-brand-black/40"
              )}>
                {thinker.perspective}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Details */}
      <div className="lg:col-span-3">
        <motion.div 
          key={selectedThinker.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="brutalist-card p-10 bg-white"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-10 border-b-2 border-brand-black">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <h2 className="text-4xl md:text-5xl font-black text-brand-black uppercase tracking-tighter leading-none">{selectedThinker.name}</h2>
                <span className="px-3 py-1 bg-brand-red text-white text-[9px] font-black uppercase tracking-widest">
                  {selectedThinker.era}
                </span>
              </div>
              <p className="text-lg font-serif italic text-brand-black/60">{selectedThinker.perspective} {t('thinkers.school')}</p>
            </div>
            <div className="flex gap-2">
              <button className="brutalist-button bg-white text-brand-black border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] flex items-center gap-2">
                <Quote size={14} className="text-brand-red" />
                {t('thinkers.quotes')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10">
            <div className="space-y-10">
              <section>
                <h4 className="text-[11px] font-black text-brand-black uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                  <Layers size={16} className="text-brand-red" /> {t('thinkers.frameworks')}
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {selectedThinker.keyConcepts.map((concept) => (
                    <div key={concept} className="p-5 bg-brand-bg border-2 border-brand-black/10 hover:border-brand-black transition-all group">
                      <p className="text-sm font-black text-brand-black uppercase tracking-tight group-hover:text-brand-red">{concept}</p>
                      <p className="text-[9px] text-brand-black/40 font-bold mt-1 uppercase tracking-widest">Synthesized Concept</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-10">
              <section>
                <h4 className="text-[11px] font-black text-brand-black uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                  <Book size={16} className="text-brand-red" /> {t('thinkers.magnum_opus')}
                </h4>
                <div className="space-y-4">
                  {selectedThinker.works.map((work) => (
                    <div key={work} className="flex items-center gap-4 p-5 bg-white border-2 border-brand-black hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] transition-all">
                       <div className="w-3 h-3 bg-brand-red rotate-45" />
                       <span className="text-sm font-serif italic font-bold text-brand-black">{work}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="p-8 bg-brand-black text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h5 className="text-[10px] font-black text-brand-red uppercase tracking-widest mb-3">{t('thinkers.relational_logic')}</h5>
                  <p className="text-sm italic font-serif leading-relaxed opacity-70">
                    {selectedThinker.name}'s frameworks are historically divergent from current neo-functionalist trends. Linkage is critical for Paper 1 Section B.
                  </p>
                </div>
                <Book className="absolute -right-8 -bottom-8 text-white opacity-5" size={120} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
