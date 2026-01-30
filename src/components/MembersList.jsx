import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Users, CheckCircle, XCircle, Search } from "lucide-react";

export default function MembersList() {
    const [members, setMembers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const savedMembers = JSON.parse(localStorage.getItem("gymMembers") || "[]");
        setMembers(savedMembers);
    }, []);

    const filteredMembers = members.filter(m =>
        m.fullName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <Navbar />

            <div className="relative p-10 max-w-4xl mx-auto">
                {/* Background effects */}
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-400/10 border border-orange-400/20 px-4 py-2 rounded-full mb-6">
                        <Users size={16} className="text-orange-400" />
                        <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">Community Records</span>
                    </div>
                    <h1 className="text-5xl font-black uppercase italic mb-4">
                        Members <span className="text-orange-400">Database</span>
                    </h1>
                </div>

                {/* Search Bar */}
                <div className="relative mb-10 group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-400 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search members by name..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:border-orange-400/50 transition-all font-medium"
                    />
                </div>

                {filteredMembers.length === 0 ? (
                    <div className="bg-white/5 border border-dashed border-white/10 rounded-[2.5rem] p-20 text-center">
                        <Users size={64} className="text-gray-600 mx-auto mb-6 opacity-20" />
                        <p className="text-gray-500 text-xl font-bold">No athletes found.</p>
                    </div>
                ) : (
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                        {filteredMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className={`flex justify-between items-center p-8 hover:bg-white/[0.02] transition-colors ${index !== filteredMembers.length - 1 ? 'border-b border-white/5' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center text-orange-400 font-black text-xl">
                                        {member.fullName.charAt(0)}
                                    </div>
                                    <span className="text-2xl font-black italic tracking-tight">
                                        {member.fullName}
                                    </span>
                                </div>

                                <div className={`flex items-center gap-3 px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest border ${member.feeStatus === "Completed"
                                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                                        : "bg-red-500/10 text-red-400 border-red-500/20"
                                    }`}>
                                    {member.feeStatus === "Completed" ? (
                                        <><CheckCircle size={14} /> PAID</>
                                    ) : (
                                        <><XCircle size={14} /> PENDING</>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
