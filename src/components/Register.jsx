import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, UserPlus, ArrowRight, User } from "lucide-react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://gym-website-backend-86fc.onrender.com/auth/register", {
        email,
        password,
        role,
      });
      toast.success("Account created! Welcome to the team 💪");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center
                    bg-black relative overflow-hidden px-4 py-8">

      {/* Formal Background with Gym Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.2]"
        style={{ backgroundImage: `url('/assets/gym.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/90 to-black" />

      <div className="relative z-10 w-full max-w-5xl h-auto md:h-[600px]
                      flex flex-col md:flex-row
                      bg-slate-900/80 backdrop-blur-xl rounded-[1.5rem] overflow-hidden
                      border border-slate-700/50 shadow-2xl
                      transition-all duration-500">

        {/* LEFT IMAGE SECTION */}
        <div className="hidden md:block md:w-1/2 relative group">
          <img
            src="/assets/login.jpg"
            alt="Gym"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/80 to-transparent md:bg-gradient-to-l" />
          <div className="absolute top-10 right-10 text-right text-white">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter">Start Your<br /><span className="text-orange-400">Legacy</span></h3>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-sm">
            <div className="mb-10 text-center">
              <div className="inline-flex p-4 bg-orange-400/10 rounded-2xl mb-4 border border-orange-400/20">
                <UserPlus className="text-orange-400" size={32} />
              </div>
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tight">
                Sign <span className="text-orange-400">Up</span>
              </h2>
              <p className="text-gray-400 mt-2 font-medium">Join the ultimate fitness community</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              {/* Email Input */}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400/70 group-focus-within:text-orange-400 transition-colors" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white
                             placeholder-gray-500 focus:outline-none focus:border-orange-500/50 
                             focus:ring-1 focus:ring-orange-500/50 transition-all font-medium"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400/70 group-focus-within:text-orange-400 transition-colors" size={20} />
                <input
                  type="password"
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white
                             placeholder-gray-500 focus:outline-none focus:border-orange-500/50 
                             focus:ring-1 focus:ring-orange-500/50 transition-all font-medium"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-black font-black py-4 rounded-2xl
                           transition-all duration-300 shadow-lg shadow-orange-500/20 uppercase tracking-widest
                           flex items-center justify-center gap-2 group mt-4"
              >
                <span>Create Account</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-center text-gray-400 mt-8 font-medium">
              Already a member?{" "}
              <Link to="/login" className="text-orange-400 font-black hover:text-orange-300 underline underline-offset-4 decoration-2">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
