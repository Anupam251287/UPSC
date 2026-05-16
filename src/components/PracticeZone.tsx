import { useState } from "react";
import { useTranslation } from "react-i18next";
import { generateMCQs } from "../services/geminiService";
import { 
  Trophy, 
  Search, 
  Play, 
  Timer, 
  HelpCircle,
  CheckCircle2,
  XCircle,
  RefreshCcw,
  Sparkles,
  ChevronRight,
  BrainCircuit
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function PracticeZone() {
  const { t } = useTranslation();
  const [topic, setTopic] = useState("Classical Thinkers");
  const [mcqs, setMcqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const startPractice = async () => {
    setLoading(true);
    const questions = await generateMCQs(topic);
    setMcqs(questions);
    setLoading(false);
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
  };

  const handleAnswer = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    const isCorrect = idx === mcqs[currentIdx].correct;
    if (isCorrect) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setCurrentIdx(i => i + 1);
  };

  if (mcqs.length > 0 && currentIdx >= mcqs.length) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-12 brutalist-card bg-white text-center"
      >
        <div className="w-24 h-24 bg-brand-red text-white border-2 border-brand-black flex items-center justify-center mx-auto mb-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
           <Trophy size={48} />
        </div>
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-brand-black">{t('practice.report')}</h2>
        <p className="text-xl font-serif italic text-brand-black/60 mb-10">{t('practice.subtitle', 'Shift data synchronized. Memory retention active.')}</p>
        
        <div className="flex justify-center gap-12 mb-12 border-t-2 border-b-2 border-brand-black py-8">
          <div className="text-center">
            <p className="text-5xl font-black text-brand-black">{score}/{mcqs.length}</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-black/40 mt-1">Raw Precision</p>
          </div>
          <div className="text-center">
             <p className="text-5xl font-black text-brand-red">{Math.round((score / mcqs.length) * 100)}%</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-brand-black/40 mt-1">Accuracy Factor</p>
          </div>
        </div>

        <button 
          onClick={() => setMcqs([])}
          className="brutalist-button px-10 py-4 text-sm"
        >
          Re-enter the Lab
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 brutalist-card p-10 bg-white">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-brand-bg text-brand-black border-2 border-brand-black flex items-center justify-center shadow-sm">
            <Trophy size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">{t('practice.title')}</h1>
            <p className="text-brand-black/50 font-serif italic text-sm mt-1">{t('practice.description', 'Simulate UPSC MCQ traps & conceptual assertions.')}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 border-2 border-brand-black bg-white text-center min-w-[80px]">
            <p className="text-[10px] font-black text-brand-black/40 uppercase tracking-widest">{t('practice.accuracy')}</p>
            <p className="text-xl font-black text-brand-red">84%</p>
          </div>
          <div className="p-3 border-2 border-brand-black bg-brand-black text-white text-center min-w-[80px]">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{t('practice.streak')}</p>
            <p className="text-xl font-black">12</p>
          </div>
        </div>
      </header>

      {!mcqs.length ? (
        <div className="brutalist-card p-12 bg-white text-center">
          <div className="max-w-md mx-auto space-y-8">
            <div className="w-24 h-24 bg-brand-bg text-brand-red border-2 border-brand-black flex items-center justify-center mx-auto mb-10 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
               <BrainCircuit size={48} />
            </div>
            <h3 className="text-3xl font-black uppercase text-brand-black">{t('practice.configure')}</h3>
            <p className="text-brand-black/60 font-serif italic text-lg leading-relaxed">{t('practice.config_desc', 'Select a concept or chapter. The AI will generate specific Statement-Based and Assertion-Reasoning questions.')}</p>
            
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-black" size={20} />
              <input 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={t('practice.topic_placeholder')} 
                className="w-full bg-brand-bg border-2 border-brand-black py-5 pl-14 pr-6 text-sm font-black uppercase tracking-tight focus:outline-none focus:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
              />
            </div>

            <button 
              onClick={startPractice}
              disabled={loading}
              className="w-full brutalist-button py-5 text-sm flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCcw size={20} className="animate-spin" />
                  {t('mentor.loading')}
                </>
              ) : (
                <>
                  <Play size={20} className="fill-white" />
                  {t('practice.initiate')}
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="brutalist-card p-10 bg-white">
            <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
              <span className="text-[10px] font-black text-white bg-brand-black px-4 py-1 uppercase tracking-widest">{t('practice.question')} {currentIdx + 1} of {mcqs.length}</span>
              <div className="flex items-center gap-2 text-brand-black/40 font-black text-[10px] uppercase tracking-widest border-b border-brand-black/10">
                <Timer size={14} />
                2:00 REMAINING
              </div>
            </div>

            <h3 className="text-2xl font-black text-brand-black leading-tight mb-10 uppercase tracking-tight">
               {mcqs[currentIdx].question}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {mcqs[currentIdx].options.map((opt: string, i: number) => (
                <button
                  key={i}
                  disabled={selectedOption !== null}
                  onClick={() => handleAnswer(i)}
                  className={cn(
                    "w-full text-left p-6 border-2 transition-all flex items-center justify-between group",
                    selectedOption === null 
                      ? "bg-white border-brand-black hover:bg-brand-bg translate-x-0 translate-y-0 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1" 
                      : i === mcqs[currentIdx].correct 
                        ? selectedOption === i
                          ? "bg-emerald-600 border-emerald-600 text-white translate-x-1 translate-y-1 shadow-none" 
                          : "bg-emerald-50 border-emerald-600 text-emerald-900 shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]" 
                        : selectedOption === i 
                          ? "bg-rose-600 border-rose-600 text-white translate-x-1 translate-y-1 shadow-none" 
                          : "bg-white border-brand-black/10 opacity-30 grayscale"
                  )}
                >
                  <div className="flex items-center gap-6">
                    <span className={cn(
                      "w-10 h-10 border-2 flex items-center justify-center font-black text-xs transition-colors",
                      selectedOption !== null && i === mcqs[currentIdx].correct 
                        ? selectedOption === i ? "bg-white border-white text-emerald-600" : "bg-emerald-600 border-emerald-600 text-white"
                        : selectedOption === i 
                          ? "bg-white border-white text-rose-600" 
                          : "border-brand-black"
                    )}>
                      {['A', 'B', 'C', 'D'][i]}
                    </span>
                    <span className="text-sm font-black uppercase tracking-tight">{opt}</span>
                  </div>
                  {selectedOption !== null && i === mcqs[currentIdx].correct && (
                    <CheckCircle2 size={24} className={selectedOption === i ? "text-white" : "text-emerald-600"} />
                  )}
                  {selectedOption === i && i !== mcqs[currentIdx].correct && <XCircle size={24} className="text-white" />}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {selectedOption !== null && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-10 overflow-hidden"
                >
                  <div className="p-8 border-t-2 border-brand-black bg-brand-bg/30">
                    <div className="flex items-center gap-3 mb-4">
                      <HelpCircle size={18} className="text-brand-red" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-black">{t('practice.analysis')}</span>
                    </div>
                    <p className="text-sm font-serif italic text-brand-black/70 leading-relaxed">{mcqs[currentIdx].explanation}</p>
                    
                    <button 
                      onClick={nextQuestion}
                      className="mt-10 w-full brutalist-button py-5 text-sm flex items-center justify-center gap-3"
                    >
                      {t('practice.next')}
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </div>
  );
}
