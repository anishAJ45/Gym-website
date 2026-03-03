import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, ShieldCheck, LogIn, ChevronDown } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://gym-website-backend-86fc.onrender.com/auth/login", {
        email,
        password,
        role,
      });
      const data = res.data;
      if (res.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", role);
        toast.success("Welcome back! 💪");

        if (role === "admin") {
          localStorage.setItem("isAdminLoggedIn", "true");
          Navigate("/admin");
        } else {
          localStorage.setItem("isAdminLoggedIn", "false");
          Navigate("/");
        }
        window.dispatchEvent(new Event("authChange"));
      } else {
        toast.error("Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password");
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
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter">Join the<br /><span className="text-orange-400">Elite</span></h3>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-sm">
            <div className="mb-10 text-center">
              <div className="inline-flex p-4 bg-orange-400/10 rounded-2xl mb-4 border border-orange-400/20">
                <LogIn className="text-orange-400" size={32} />
              </div>
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tight">
                Sign <span className="text-orange-400">In</span>
              </h2>
              <p className="text-gray-400 mt-2 font-medium">Continue your fitness journey</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Role Selection */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400/70 group-focus-within:text-orange-400 transition-colors">
                  {role === 'admin' ? <ShieldCheck size={20} /> : <User size={20} />}
                </div>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-10 text-white 
                             focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50
                             appearance-none transition-all font-bold cursor-pointer"
                >
                  <option value="user">Standard User</option>
                  <option value="admin">Administrator</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
              </div>

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
                  placeholder="Secret Password"
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
                <span>Process Sign In</span>
                <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-center text-gray-400 mt-8 font-medium">
              New to the tribe?{" "}
              <Link to="/register" className="text-orange-400 font-black hover:text-orange-300 underline underline-offset-4 decoration-2">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
