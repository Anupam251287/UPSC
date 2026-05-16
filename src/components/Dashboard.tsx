import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { 
  Zap, 
  Target, 
  History, 
  BarChart3, 
  MoreHorizontal,
  ArrowUpRight,
  Clock,
  BrainCircuit
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { cn } from "@/src/lib/utils";

const performanceData = [
  { day: 'Mon', score: 65, avg: 60 },
  { day: 'Tue', score: 72, avg: 61 },
  { day: 'Wed', score: 68, avg: 62 },
  { day: 'Thu', score: 85, avg: 62 },
  { day: 'Fri', score: 78, avg: 63 },
  { day: 'Sat', score: 90, avg: 64 },
  { day: 'Sun', score: 82, avg: 65 },
];

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-black">{t('dashboard.engine_online')}</h2>
          <p className="text-brand-black/60 font-serif italic text-lg transform -rotate-1 origin-left">{t('dashboard.engine_subtitle')}</p>
        </div>
        <button className="brutalist-button flex items-center gap-2 group">
          <Zap size={18} className="text-brand-red fill-brand-red group-hover:animate-pulse" />
          {t('dashboard.initiate_shift')}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: t('dashboard.retention_score'), value: '88%', trend: '+4.2%', icon: BrainCircuit, color: 'text-brand-red' },
          { label: t('dashboard.syllabus_map'), value: '34.2%', trend: '+1.5%', icon: Target, color: 'text-brand-black' },
          { label: t('dashboard.avg_accuracy'), value: '76%', trend: '+2.1%', icon: BarChart3, color: 'text-brand-black' },
          { label: t('dashboard.revision_due'), value: '12', trend: '-2', icon: Clock, color: 'text-brand-red' },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label} 
            className="brutalist-card p-6"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 border-2 border-brand-black">
                <stat.icon className={stat.color} size={24} />
              </div>
              <span className="text-[10px] font-black underline decoration-brand-red decoration-2 underline-offset-4">
                {stat.trend}
              </span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-black/50">{stat.label}</p>
            <h3 className="text-3xl font-black text-brand-black mt-1 leading-none">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Retention Curve */}
        <div className="lg:col-span-2 brutalist-card p-8 bg-white">
          <div className="flex items-center justify-between mb-10">
             <div>
                <h3 className="text-xl font-black uppercase">{t('dashboard.trajectory')}</h3>
                <p className="text-[10px] text-brand-black/40 font-bold uppercase tracking-widest mt-1">{t('dashboard.analytics')}</p>
             </div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1 h-3 bg-brand-black opacity-20" />)}
             </div>
          </div>
          <div className="h-[300px] w-full bg-brand-bg/30 p-4 border border-brand-black/5">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="#1A1A1A10" />
                <XAxis 
                  dataKey="day" 
                  axisLine={{ stroke: '#1A1A1A', strokeWidth: 2 }} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#1A1A1A', fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={{ stroke: '#1A1A1A', strokeWidth: 2 }} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#1A1A1A', fontWeight: 700 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1A1A', color: '#FFF', border: 'none', borderRadius: '0px', fontWeight: '800' }}
                />
                <Area 
                  type="stepAfter" 
                  dataKey="score" 
                  stroke="#DC2626" 
                  strokeWidth={4}
                  fillOpacity={0.1} 
                  fill="#DC2626" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Focus */}
        <div className="space-y-6">
          <div className="bg-brand-black p-8 text-white relative overflow-hidden flex flex-col justify-between border-2 border-brand-black shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 bg-brand-red/20 w-fit px-3 py-1 border border-brand-red/30">
                <Target size={14} className="text-brand-red" />
                <span className="text-[10px] font-black uppercase tracking-widest">{t('dashboard.live_target')}</span>
              </div>
              <h4 className="text-3xl font-black uppercase leading-tight mb-4 tracking-tighter">Max Weber: Protestant Ethic</h4>
              <p className="text-indigo-100/60 font-serif italic text-sm leading-relaxed mb-10">Master the link between Calvinism and Capitalism Spirit. Critical Phase 1 Node.</p>
              
              <button className="w-full bg-white text-brand-black py-4 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-brand-red hover:text-white transition-all transform active:translate-y-1">
                {t('dashboard.resume')}
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          <div className="brutalist-card p-6 bg-white">
            <h4 className="text-xs font-black text-brand-black mb-6 flex items-center justify-between border-b-2 border-brand-black pb-2">
              {t('dashboard.revision_queue')}
              <span className="text-[10px] bg-brand-red text-white px-2 py-0.5 font-black uppercase tracking-wider">Active</span>
            </h4>
            <div className="space-y-6">
              {[
                { title: 'Durkheim Suicide Types', time: '14:00', type: 'Conceptual' },
                { title: 'Srinivas Sanskritization', time: '17:30', type: 'Theory' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 border-2 border-brand-black flex flex-col items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-all">
                    <span className="text-[10px] font-black leading-none">{item.time.split(':')[0]}</span>
                    <span className="text-[8px] font-black opacity-50 uppercase">{item.time.split(':')[1]}</span>
                  </div>
                  <div className="border-l-2 border-dotted border-brand-black pl-4">
                    <p className="text-sm font-black uppercase tracking-tight text-brand-black">{item.title}</p>
                    <p className="text-[9px] text-brand-red font-black uppercase tracking-widest mt-1">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
