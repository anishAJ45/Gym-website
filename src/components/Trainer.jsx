import { User, Award, Star, MessageSquare } from "lucide-react";

const TrainerSection = () => {
  const trainers = [
    {
      name: "john",
      image: "/assets/trainer1.jpg",
      description: "John is a certified personal trainer with over six years of experience in fitness coaching and strength training. He specializes in weight loss, muscle building, and functional training programs designed for long-term results.",
      specialty: "Strength & Weight Loss",
      experience: "6+ Years",
      rating: "4.9"
    },
    {
      name: "Alex",
      image: "/assets/trainer2.jpg",
      description: "Alex is a professional fitness coach focused on strength training and body transformation. He designs customized workout routines that improve performance, endurance, and overall health.",
      specialty: "Body Transformation",
      experience: "8+ Years",
      rating: "5.0"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
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
            <Award size={20} className="text-orange-400" />
            <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">Elite Coaching Team</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
            Meet Our <span className="text-orange-400">Expert Trainers</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium italic leading-relaxed">
            World-class professionals dedicated to pushing your limits and achieving your fitness milestones.
          </p>
        </div>

        {/* Trainer Grid */}
        <div className="space-y-20">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 px-4 md:px-0">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-orange-400/20 rounded-[2rem] md:rounded-[3rem] blur-2xl group-hover:bg-orange-400/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="relative w-full aspect-square rounded-[2rem] md:rounded-[2.5rem] object-cover 
                               border-2 border-white/10 group-hover:border-orange-400/50
                               transition-all duration-500 shadow-2xl"
                  />
                  {/* Badge */}
                  <div className="absolute -right-2 md:-right-6 bottom-4 md:bottom-6 bg-orange-400 text-black p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-2">
                      <Star size={18} fill="currentColor" />
                      <span className="font-black text-xl md:text-2xl">{trainer.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Container */}
              <div className="w-full lg:w-1/2">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] hover:border-orange-400/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black mb-2 flex items-center gap-4">
                        {trainer.name}
                        <div className="h-1.5 w-12 bg-orange-400 rounded-full" />
                      </h2>
                      <p className="text-orange-400 font-bold text-lg md:text-xl uppercase tracking-wider">
                        {trainer.specialty}
                      </p>
                    </div>
                    <div className="bg-black/40 border border-white/10 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3">
                      <Award className="text-orange-400" size={20} />
                      <span className="font-bold text-gray-300 text-sm md:text-base">{trainer.experience} Exp.</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-base md:text-xl leading-relaxed font-medium">
                    {trainer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerSection;

