import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    LayoutDashboard,
    FileText,
    CreditCard,
    LogOut,
    Eye,
    ShieldCheck
} from "lucide-react";

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("isAdminLoggedIn");
        toast.success("Logged out successfully");
        navigate("/login");
    };

    return (
        <nav className="bg-[#111827] border-b border-orange-500/30 px-6 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/admin" className="flex items-center gap-2 group">
                    <ShieldCheck className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                    <h1 className="text-2xl font-black tracking-tighter text-white">
                        MAKE <span className="text-orange-500">US FIT</span>
                    </h1>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/admin"
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-500 font-bold transition-all duration-300"
                    >
                        <LayoutDashboard size={20} />
                        Dashboard
                    </Link>
                    <Link
                        to="/admin/admission"
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-500 font-bold transition-all duration-300"
                    >
                        <FileText size={20} />
                        Admission
                    </Link>
                    <Link
                        to="/admin/fee-status"
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-500 font-bold transition-all duration-300"
                    >
                        <CreditCard size={20} />
                        Fee Status
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-transparent text-orange-500 border border-orange-500/50 px-4 py-2 rounded-lg
                                 hover:bg-orange-500 hover:text-black font-bold transition-all duration-300"
                    >
                        <Eye size={18} />
                        <span>User View</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-orange-500 text-black px-4 py-2 rounded-lg
                                 hover:bg-orange-600 font-bold transition-all duration-300 shadow-lg shadow-orange-500/20"
                    >
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
