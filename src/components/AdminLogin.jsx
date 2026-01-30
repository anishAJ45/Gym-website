import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Lock, User, ShieldCheck } from "lucide-react";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Teacher's Rule: If already logged in, go to /admin automatically
    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdminLoggedIn") === "true";
        if (isAdmin) {
            navigate("/admin");
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        // Simple check for beginner level (usually this is done by a backend)
        if (username === "admin" && password === "admin123") {
            // 1. Save the login status in localStorage
            localStorage.setItem("isAdminLoggedIn", "true");

            // 2. Show a success message
            toast.success("Welcome back, Admin! 💪");

            // 3. Go to the admin dashboard
            navigate("/admin");
        } else {
            toast.error("Invalid Admin Credentials!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 w-full max-w-md bg-[#111827] p-8 rounded-3xl border border-orange-500/30 shadow-2xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="p-4 bg-orange-500 rounded-2xl mb-4 shadow-lg shadow-orange-500/20">
                        <ShieldCheck size={40} className="text-black" />
                    </div>
                    <h1 className="text-3xl font-black text-white">ADMIN <span className="text-orange-500">LOGIN</span></h1>
                    <p className="text-gray-400 mt-2">Enter your professional credentials</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Admin Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange-500 transition-all font-medium"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-orange-500 transition-all font-medium"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-black font-black py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 uppercase tracking-wider"
                    >
                        Enter Dashboard
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-8 text-sm">
                    Protected Area &bull; Unauthorized access is restricted
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
