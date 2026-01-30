import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { Users, CheckCircle, Clock, UserPlus, ClipboardList, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalMembers: 0,
        feesCompleted: 0,
        feesPending: 0,
    });

    useEffect(() => {
        const members = JSON.parse(localStorage.getItem("gymMembers") || "[]");
        const completed = members.filter(m => m.feeStatus === "Completed").length;

        setStats({
            totalMembers: members.length,
            feesCompleted: completed,
            feesPending: members.length - completed,
        });
    }, []);

    const statCards = [
        {
            label: "Total Members",
            value: stats.totalMembers,
            icon: <Users size={24} className="text-orange-400" />,
            color: "from-orange-500/20 to-orange-500/5"
        },
        {
            label: "Fees Completed",
            value: stats.feesCompleted,
            icon: <CheckCircle size={24} className="text-green-400" />,
            color: "from-green-500/20 to-green-500/5"
        },
        {
            label: "Fees Pending",
            value: stats.feesPending,
            icon: <Clock size={24} className="text-red-400" />,
            color: "from-red-500/20 to-red-500/5"
        },
    ];

    const quickActions = [
        {
            title: "Admission Form",
            desc: "Add new members to the gym and set their initial fee status",
            link: "/admin/admission",
            icon: <UserPlus size={32} className="text-orange-400" />,
        },
        {
            title: "Fee Status Checker",
            desc: "View all members and manage their fee payment status",
            link: "/admin/fee-status",
            icon: <ClipboardList size={32} className="text-orange-400" />,
        },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <AdminNavbar />

            <div className="p-10 max-w-7xl mx-auto relative">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

                {/* Welcome Section */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                            Admin <span className="text-orange-400">Dashboard</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl font-medium">
                            Professional management suite for gym operations and member tracking.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-400/10 border border-orange-400/30 px-4 py-2 rounded-full">
                        <TrendingUp size={18} className="text-orange-400" />
                        <span className="text-orange-400 font-bold text-sm">System Active</span>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {statCards.map((stat, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden bg-gradient-to-br ${stat.color} backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-300 group`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-black/40 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                            </div>
                            <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-1">
                                {stat.label}
                            </p>
                            <h2 className="text-4xl font-extrabold text-white tracking-tighter">
                                {stat.value}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Quick Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {quickActions.map((action, idx) => (
                        <Link key={idx} to={action.link} className="group">
                            <div className="h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-transparent hover:border-orange-400/30 group-hover:bg-white/10 transition-all duration-300 shadow-xl">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="p-4 bg-orange-400/10 rounded-2xl group-hover:bg-orange-400 group-hover:text-black transition-all duration-300">
                                        {action.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {action.title}
                                        </h3>
                                        <p className="text-gray-400 text-base leading-relaxed">
                                            {action.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center text-orange-400 font-bold gap-2 group-hover:translate-x-2 transition-transform duration-300">
                                    <span>Open Management</span>
                                    <TrendingUp size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
