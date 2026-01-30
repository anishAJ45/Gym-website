import React from 'react';
import { Dumbbell } from 'lucide-react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
            <div className="relative flex flex-col items-center">
                {/* Animated Dumbbell */}
                <div className="relative animate-bounce">
                    <div className="bg-orange-400 p-6 rounded-3xl shadow-[0_0_50px_rgba(251,146,60,0.3)] animate-pulse">
                        <Dumbbell size={64} className="text-black animate-[spin_3s_linear_infinite]" />
                    </div>

                    {/* Glowing Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-orange-400/30 rounded-full animate-ping" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-orange-500/10 rounded-full animate-ping delay-300" />
                </div>

                {/* Loading Text */}
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] italic mb-2">
                        Make Us <span className="text-orange-400">Fit</span>
                    </h2>
                    <div className="flex gap-1 justify-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
