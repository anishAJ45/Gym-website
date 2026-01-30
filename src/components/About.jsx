import { useEffect, useState } from "react";
import { Info, Trophy, Users, ShieldCheck, Target, Award } from "lucide-react";

const Counter = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] border border-white/10 p-6 md:p-8 text-center w-full md:w-64 hover:border-orange-400/30 transition-all group">
      <div className="bg-orange-400/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-400 group-hover:bg-orange-400 group-hover:text-black transition-all">
        {icon}
      </div>
      <h3 className="text-4xl font-black text-white italic">
        {count}+
      </h3>
      <p className="mt-2 font-bold text-gray-400 uppercase tracking-widest text-xs">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
          style={{ backgroundImage: "url('/assets/gym.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-400/10 border border-orange-400/20 px-4 py-2 rounded-full mb-6">
            <Info size={16} className="text-orange-400" />
            <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">The Fitness Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
            About <span className="text-orange-400">Make Us Fit</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="bg-white/5 border-l-4 border-orange-400 p-6 md:p-10 rounded-2xl md:rounded-3xl rounded-tl-none">
              <h2 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-4">
                Our Mission
                <div className="h-px flex-1 bg-white/10" />
              </h2>
              <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  We are a performance-driven fitness center committed to
                  transforming lives through strength, discipline, and consistency.
                </p>
                <p>
                  Our trainers focus on personalized programs, ensuring sustainable
                  progress for every member by combining science-based training with unwavering motivation.
                </p>
                <p>
                  From beginners to pro athletes, we provide the environment and expertise needed to unlock your absolute full potential.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-400/10 p-6 rounded-2xl flex-1 border border-orange-400/20">
                <ShieldCheck className="text-orange-400 mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-1 text-white">Safe Environment</h4>
                <p className="text-gray-400 text-xs font-bold">World-class safety standards.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl flex-1 border border-white/10">
                <Target className="text-orange-400 mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-1 text-white">Result Oriented</h4>
                <p className="text-gray-400 text-xs font-bold">Data driven progress tracking.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-400/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
              <img
                src="/assets/gym.jpg"
                alt="Gym Interior"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-orange-400 font-black text-2xl italic tracking-tighter">SINCE 2019</p>
                <p className="text-white font-bold opacity-60">ESTABLISHED IN CALICUT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-12">
            <Award className="text-orange-400" size={32} />
            <h2 className="text-4xl font-black uppercase italic">Our Milestones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Counter target={500} label="Elite Members" icon={<Users size={32} />} />
            <Counter target={10} label="Pro Coaches" icon={<Award size={32} />} />
            <Counter target={5} label="Years Excellence" icon={<Trophy size={32} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

