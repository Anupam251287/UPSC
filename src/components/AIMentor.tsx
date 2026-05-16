import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { askMentor } from "../services/geminiService";
import { Send, Bot, User, Sparkles, Loader2, BrainCircuit } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIMentor() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your Sociology Intelligence Mentor. How can I help you link theories to contemporary Indian society today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const response = await askMentor(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-14rem)] flex flex-col bg-white border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
      <div className="px-6 py-4 border-b-4 border-brand-black flex items-center justify-between bg-brand-black text-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-white flex items-center justify-center">
            <Bot size={20} className="text-brand-red fill-brand-red" />
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-widest">SOCIOLOGY_INTEL_MENTOR</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-none animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Execution Active</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth bg-brand-bg/20">
        {messages.map((m, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i} 
            className={cn(
              "flex gap-4 max-w-[90%]",
              m.role === 'user' ? "ml-auto flex-row-reverse" : ""
            )}
          >
            <div className={cn(
              "w-10 h-10 border-2 flex items-center justify-center shrink-0",
              m.role === 'user' ? "bg-brand-red border-brand-red text-white" : "bg-white border-brand-black text-brand-black"
            )}>
              {m.role === 'user' ? <User size={16} /> : <BrainCircuit size={16} />}
            </div>
            <div className={cn(
              "p-6 text-sm leading-relaxed border-2",
              m.role === 'user' 
                ? "bg-brand-red text-white border-brand-red shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]" 
                : "bg-white text-brand-black border-brand-black shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] prose prose-slate max-w-none"
            )}>
              {m.role === 'assistant' ? (
                <div className="markdown-content">
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                </div>
              ) : (
                <p className="font-black uppercase tracking-tight">{m.content}</p>
              )}
            </div>
          </motion.div>
        ))}
        {loading && (
          <div className="flex gap-4 max-w-[85%]">
            <div className="w-10 h-10 border-2 bg-white border-brand-black text-brand-black flex items-center justify-center">
              <Loader2 size={16} className="animate-spin" />
            </div>
            <div className="bg-white border-2 border-brand-black p-4 font-mono text-[10px] items-center gap-2 flex">
               <span className="font-black uppercase tracking-widest text-brand-red animate-pulse">{t('mentor.loading')}...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t-4 border-brand-black bg-brand-bg/50">
        <div className="flex items-center gap-2 p-2 bg-white border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] focus-within:shadow-none transition-all">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t('mentor.placeholder')} 
            className="flex-1 bg-transparent border-none focus:outline-none px-4 text-sm font-black uppercase tracking-tight"
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-brand-black text-white p-3 hover:bg-brand-red transition-all disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
           {[
             "Explain Durkheim's Social Facts",
             "Link Caste to Modern Urbanization",
             "How to write intro for Stratification questions?"
           ].map(suggestion => (
             <button 
               key={suggestion}
               onClick={() => setInput(suggestion)}
               className="text-[9px] font-black text-brand-black/60 bg-white border border-brand-black/20 px-3 py-1.5 uppercase tracking-widest hover:border-brand-red hover:text-brand-red transition-all"
             >
               {suggestion}
             </button>
           ))}
        </div>
      </div>
    </div>
  );
}
