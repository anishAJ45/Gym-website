import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AdminNavbar from "./AdminNavbar";
import {
    Search, User, Mail, Phone, Calendar,
    CreditCard, Shield, Trash2, Edit3,
    Save, XCircle, CheckCircle2, AlertCircle,
    Filter
} from "lucide-react";

const FeeStatusChecker = () => {
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingMember, setEditingMember] = useState(null);

    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = () => {
        const storedMembers = JSON.parse(localStorage.getItem("gymMembers") || "[]");
        setMembers(storedMembers);
    };

    const toggleFeeStatus = (memberId) => {
        const updatedMembers = members.map(member => {
            if (member.id === memberId) {
                const newStatus = member.feeStatus === "Completed" ? "Not Completed" : "Completed";
                toast.success(`Fee status updated to: ${newStatus}`);
                return { ...member, feeStatus: newStatus };
            }
            return member;
        });

        setMembers(updatedMembers);
        localStorage.setItem("gymMembers", JSON.stringify(updatedMembers));
    };

    const deleteMember = (memberId, memberName) => {
        if (window.confirm(`Are you sure you want to delete ${memberName}?`)) {
            const updatedMembers = members.filter(member => member.id !== memberId);
            setMembers(updatedMembers);
            localStorage.setItem("gymMembers", JSON.stringify(updatedMembers));
            toast.success(`${memberName} removed successfully`);
        }
    };

    const startEditing = (member) => {
        setEditingMember({ ...member });
    };

    const cancelEditing = () => {
        setEditingMember(null);
    };

    const saveEdit = () => {
        const updatedMembers = members.map(member =>
            member.id === editingMember.id ? editingMember : member
        );

        setMembers(updatedMembers);
        localStorage.setItem("gymMembers", JSON.stringify(updatedMembers));
        toast.success("Member details updated successfully");
        setEditingMember(null);
    };

    const handleEditChange = (field, value) => {
        setEditingMember(prev => ({ ...prev, [field]: value }));
    };

    const filteredMembers = members.filter(member =>
        member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.phone.includes(searchTerm)
    );

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <AdminNavbar />

            <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                            Member <span className="text-orange-400">Database</span>
                        </h1>
                        <p className="text-gray-400 font-medium">
                            Real-time tracking of gym memberships and financial status.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl shadow-xl">
                        <Filter size={20} className="text-orange-400" />
                        <span className="text-white font-bold">{filteredMembers.length} Members Listed</span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mb-12 relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-400 transition-colors" size={24} />
                    <input
                        type="text"
                        placeholder="Search by name, email, or phone number..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/5 backdrop-blur-md 
                               border border-white/10 rounded-[2rem] px-16 py-5 
                               text-white placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400/50 transition-all duration-300 shadow-2xl"
                    />
                </div>

                {/* Members List */}
                {filteredMembers.length === 0 ? (
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 
                                  rounded-[3rem] p-24 text-center shadow-2xl">
                        <div className="flex justify-center mb-8">
                            <div className="p-8 bg-orange-400/10 rounded-full">
                                <Search size={64} className="text-orange-400" />
                            </div>
                        </div>
                        <h3 className="text-3xl font-extrabold text-white mb-4">
                            {searchTerm ? "No results found" : "Empty Registry"}
                        </h3>
                        <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed">
                            {searchTerm ? `We couldn't find any members matching "${searchTerm}". Please check your spelling or search by another field.` : "Your member database is currently empty. Start by adding new members via the admission form."}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8">
                        {filteredMembers.map((member) => (
                            <div
                                key={member.id}
                                className="group bg-white/5 backdrop-blur-md border border-white/10 
                                         rounded-[2.5rem] p-8 shadow-2xl hover:border-orange-400/30 
                                         transition-all duration-300 overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-10 w-24 h-24 bg-orange-400/5 rounded-full blur-[40px] -z-10 group-hover:bg-orange-400/10 transition-colors" />

                                {editingMember?.id === member.id ? (
                                    // Edit Mode
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Edit3 className="text-orange-400" size={20} />
                                            <h3 className="text-xl font-bold uppercase tracking-wider text-orange-400">Edit Member Information</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={editingMember.fullName}
                                                    onChange={(e) => handleEditChange("fullName", e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-orange-400 focus:outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    value={editingMember.email}
                                                    onChange={(e) => handleEditChange("email", e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-orange-400 focus:outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    value={editingMember.phone}
                                                    onChange={(e) => handleEditChange("phone", e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-orange-400 focus:outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Membership</label>
                                                <select
                                                    value={editingMember.membershipType}
                                                    onChange={(e) => handleEditChange("membershipType", e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-orange-400 focus:outline-none"
                                                >
                                                    <option value="Bronze">Bronze Edition</option>
                                                    <option value="Silver">Silver Edition</option>
                                                    <option value="Gold">Gold Elite</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mt-8 pt-6 border-t border-white/5">
                                            <button
                                                onClick={saveEdit}
                                                className="flex-1 max-w-[200px] bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                                            >
                                                <Save size={18} /> Save Changes
                                            </button>
                                            <button
                                                onClick={cancelEditing}
                                                className="flex-1 max-w-[200px] bg-white/5 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                            >
                                                <XCircle size={18} /> Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    // View Mode
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            <div className="flex items-center gap-5">
                                                <div className="p-4 bg-orange-400/10 rounded-2xl group-hover:scale-110 transition-transform">
                                                    <User size={28} className="text-orange-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-white group-hover:text-orange-400 transition-colors">
                                                        {member.fullName}
                                                    </h3>
                                                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">
                                                        Member # {member.id.substring(member.id.length - 4)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 text-gray-300">
                                                    <Mail size={16} className="text-orange-400/50" />
                                                    <span className="font-medium">{member.email}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-300">
                                                    <Phone size={16} className="text-orange-400/50" />
                                                    <span className="font-medium">{member.phone}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 text-gray-300">
                                                    <Shield size={16} className="text-orange-400/50" />
                                                    <span className="font-medium">Plan: <span className="text-white font-bold">{member.membershipType}</span></span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-300">
                                                    <Calendar size={16} className="text-orange-400/50" />
                                                    <span className="font-medium">Join: <span className="text-white font-bold">{new Date(member.admissionDate).toLocaleDateString()}</span></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto mt-6 lg:mt-0 pt-8 lg:pt-0 border-t border-white/5 lg:border-t-0">
                                            {/* Fee Status Badge */}
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Payment Status</span>
                                                <button
                                                    onClick={() => toggleFeeStatus(member.id)}
                                                    className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest
                                     transition-all duration-300 hover:scale-[1.05] flex items-center justify-center gap-3 shadow-lg
                                     ${member.feeStatus === "Completed"
                                                            ? "bg-green-500/10 text-green-500 border border-green-500/30 hover:bg-green-500 hover:text-white"
                                                            : "bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500 hover:text-white"
                                                        }`}
                                                >
                                                    {member.feeStatus === "Completed" ? (
                                                        <><CheckCircle2 size={18} /> Verified</>
                                                    ) : (
                                                        <><AlertCircle size={18} /> Overdue</>
                                                    )}
                                                </button>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => startEditing(member)}
                                                    className="flex-1 bg-white/5 border border-white/10 text-white p-3 rounded-xl 
                                                     hover:bg-blue-500 hover:border-blue-500 transition-all flex items-center justify-center"
                                                    title="Edit Member"
                                                >
                                                    <Edit3 size={20} />
                                                </button>
                                                <button
                                                    onClick={() => deleteMember(member.id, member.fullName)}
                                                    className="flex-1 bg-white/5 border border-white/10 text-white p-3 rounded-xl 
                                                     hover:bg-red-600 hover:border-red-600 transition-all flex items-center justify-center"
                                                    title="Delete Member"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeeStatusChecker;
