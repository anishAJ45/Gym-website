import { ShieldCheck, Zap, Crown, Target, Flame, Dumbbell } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Bronze",
      price: "4000",
      color: "from-[#CD7F32]/20 to-[#CD7F32]/5",
      borderColor: "border-[#CD7F32]/30",
      hoverBorder: "hover:border-[#CD7F32]",
      textColor: "text-[#CD7F32]",
      icon: <Target className="text-[#CD7F32]" size={32} />,
      features: [
        "Full access to gym equipment",
        "Starter workout guide",
        "Cardio & weight sections",
        "Locker room access"
      ],
      desc: "Perfect for beginners. Full access to the gym, including cardio and weight equipment, plus group fitness classes."
    },
    {
      name: "Silver",
      price: "8000",
      color: "from-gray-400/20 to-gray-400/5",
      borderColor: "border-gray-400/30",
      hoverBorder: "hover:border-gray-400",
      textColor: "text-gray-300",
      icon: <Zap className="text-gray-400" size={32} />,
      features: [
        "All Bronze benefits",
        "Personal training session (1/mo)",
        "Advanced group classes",
        "Tailored workout plans"
      ],
      desc: "Ideal for those looking to level up. Includes all Bronze benefits plus personal training and advanced classes."
    },
    {
      name: "Gold",
      price: "12000",
      color: "from-orange-400/20 to-orange-400/5",
      borderColor: "border-orange-400/50",
      hoverBorder: "hover:border-orange-400",
      textColor: "text-orange-400",
      popular: true,
      icon: <Crown className="text-orange-400" size={32} />,
      features: [
        "Unlimited personal training",
        "Nutrition & diet plans",
        "VIP locker & Priority support",
        "Access to all facilities"
      ],
      desc: "The ultimate fitness experience. Unlimited access to all facilities, one-on-one training, and nutrition guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
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
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-orange-400/10 border border-orange-400/20 px-4 py-2 rounded-full mb-6">
            <ShieldCheck size={16} className="text-orange-400" />
            <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">Select Your Path</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
            Membership <span className="text-orange-400">Plans</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Choose the perfect commitment Level for your transformation journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br ${plan.color} backdrop-blur-md 
                         border-2 ${plan.borderColor} ${plan.hoverBorder} 
                         rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col transition-all duration-500 hover:-translate-y-4 shadow-2xl overflow-hidden group`}
            >
              {plan.popular && (
                <div className="absolute top-8 right-[-35px] bg-orange-400 text-black font-black py-2 px-12 rotate-45 text-sm uppercase tracking-tighter">
                  Popular
                </div>
              )}

              <div className="mb-8">
                <div className="bg-black/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {plan.icon}
                </div>
                <h2 className={`text-3xl font-black uppercase italic ${plan.textColor} mb-2`}>
                  {plan.name}
                </h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-white">₹{plan.price}</span>
                  <span className="text-gray-500 font-bold">/month</span>
                </div>
              </div>

              <p className="text-gray-400 font-medium mb-10 leading-relaxed text-sm">
                {plan.desc}
              </p>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <Dumbbell size={16} className="text-orange-400" />
                    <span className="text-sm font-bold text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-xl uppercase tracking-widest transition-all duration-300
                                ${plan.popular
                  ? 'bg-orange-400 text-black hover:bg-orange-500 shadow-[0_15px_30px_rgba(251,146,60,0.3)]'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                Join {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;

