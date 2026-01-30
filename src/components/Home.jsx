import { Link } from "react-router-dom";
import {
  Dumbbell,
  Users,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Flame,
  Target
} from "lucide-react";

const Home = () => {
  const stats = [
    { label: "Happy Members", value: "500+", icon: <Users size={24} /> },
    { label: "Expert Trainers", value: "10+", icon: <ShieldCheck size={24} /> },
    { label: "Years Experience", value: "5+", icon: <Trophy size={24} /> },
  ];

  const features = [
    { title: "Personal Training", desc: "Expert guidance tailored to your goals.", icon: <Target size={32} /> },
    { title: "Modern Equipment", desc: "State-of-the-art facility for maximum results.", icon: <Dumbbell size={32} /> },
    { title: "Nutrition Plans", desc: "Fuel your body for peak performance.", icon: <Flame size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden text-center">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-[100vh] pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/assets/gym.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0a0a]" />
      </div>

      {/* Abstract Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40">
        <div className="inline-flex items-center gap-2 bg-orange-400/10 border border-orange-400/20 px-4 py-2 rounded-full mb-8 animate-fade-in mx-auto">
          <Flame size={16} className="text-orange-400" />
          <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">Unleash Your Potential</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8 italic uppercase text-center">
          Train <span className="text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.4)]">Harder</span><br />
          Push <span className="text-outline-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Farther</span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl max-w-2xl font-medium mb-12 leading-relaxed mx-auto">
          The ultimate fitness destination. Professional coaching,
          world-class facility, and a community that drives you to excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg mx-auto">
          <Link
            to="/membership"
            className="flex-1 bg-orange-400 text-black font-black text-xl px-10 py-5 rounded-2xl
                       hover:bg-orange-500 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300
                       shadow-[0_20px_40px_rgba(251,146,60,0.3)] flex items-center justify-center gap-3 uppercase tracking-tighter"
          >
            <span>Get Started</span>
            <ArrowRight size={24} />
          </Link>
          <Link
            to="/trainer"
            className="flex-1 bg-white/5 border border-white/10 text-white font-black text-xl px-10 py-5 rounded-2xl
                       hover:bg-white/10 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300
                       flex items-center justify-center gap-3 uppercase tracking-tighter backdrop-blur-md"
          >
            <span>Meet Coaches</span>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-black/40 border-y border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="bg-orange-400/10 p-5 rounded-[1.5rem] mb-6 group-hover:bg-orange-400 group-hover:text-black transition-all duration-500 text-orange-400">
                {stat.icon}
              </div>
              <p className="text-5xl font-black text-white mb-2 italic">{stat.value}</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black uppercase italic mb-6">Why Choose <span className="text-orange-400">Make Us Fit</span>?</h2>
          <div className="grow-underline" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] 
                         hover:border-orange-400/40 hover:bg-white/[0.08] transition-all duration-700 group text-left"
            >
              <div className="bg-orange-400/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 
                              text-orange-400 group-hover:bg-orange-400 group-hover:text-black transition-all duration-500 scale-110">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-black italic uppercase mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-bold text-lg">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .text-outline-white {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.8);
          color: transparent;
        }
        .grow-underline {
          width: 80px;
          height: 6px;
          background: #fb923c;
          margin: 0 auto;
          border-radius: 99px;
          transition: width 0.5s ease;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
