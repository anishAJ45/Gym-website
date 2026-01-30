import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Home,
  Users,
  ShieldCheck,
  Info,
  PhoneCall,
  LogIn,
  LogOut,
  Menu,
  X,
  Dumbbell,
  ArrowRight
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/login");
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Trainers", path: "/trainer", icon: <Users size={18} /> },
    { name: "Membership", path: "/membership", icon: <ShieldCheck size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "Contact", path: "/contact", icon: <PhoneCall size={18} /> },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-md sticky top-0 z-50 p-4 md:p-5 border-b border-orange-500/30 shadow-[0_4px_30px_rgba(249,115,22,0.1)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
          <div className="bg-orange-400 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Dumbbell size={24} className="text-black" />
          </div>
          <h1 className="text-2xl md:text-3xl text-orange-400 font-black tracking-tighter uppercase italic group-hover:text-orange-300 transition-colors">
            Make Us Fit
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-2 font-bold text-orange-400/80 hover:text-white transition-all duration-300 relative group py-1"
            >
              {link.icon}
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          <div className="h-6 w-px bg-white/20 ml-2" />

          {!isLoggedIn ? (
            <Link
              to="/login"
              className="bg-orange-400 font-black text-black px-6 py-2.5 rounded-xl
                         hover:bg-orange-500 hover:scale-105 transition-all duration-300
                         shadow-[0_0_15px_rgba(251,146,60,0.4)] flex items-center gap-2"
            >
              <LogIn size={18} />
              <span>Sign In</span>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-white/5 border border-white/20 font-black text-white px-6 py-2.5 rounded-xl
                         hover:bg-red-500 hover:border-red-500 transition-all duration-300
                         flex items-center gap-2 group"
            >
              <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
              <span>Sign Out</span>
            </button>
          )}
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-orange-400 p-2 hover:bg-orange-400/10 rounded-lg transition-colors z-50"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Full Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Semi-transparent Backdrop with Strong Blur to fade content without hiding fully */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={closeMenu} />

        {/* Menu Content */}
        <div
          className={`relative h-full w-full flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-orange-400 p-2 hover:bg-orange-400/10 rounded-full transition-colors"
          >
            <X size={36} />
          </button>

          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="flex items-center justify-between px-6 py-4 w-full rounded-2xl bg-white/5 border border-white/10 text-xl font-black text-white hover:text-orange-400 hover:border-orange-400/50 transition-all duration-300 group italic uppercase tracking-tight"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-orange-400 group-hover:scale-110 transition-transform">{link.icon}</span>
                  {link.name}
                </div>
                <ArrowRight size={20} className="text-orange-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </Link>
            ))}

            <div className="my-4 w-12 h-1 bg-orange-400/30 rounded-full" />

            {!isLoggedIn ? (
              <Link
                to="/login"
                onClick={closeMenu}
                className="w-full bg-orange-400 font-black text-black px-6 py-4 rounded-2xl text-xl
                           hover:bg-orange-500 transition-all duration-300
                           shadow-[0_15px_30px_rgba(251,146,60,0.3)] flex items-center justify-center gap-3 uppercase italic"
              >
                <LogIn size={24} />
                Sign In
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full bg-white/5 border-2 border-white/10 text-white font-black px-6 py-4 rounded-2xl text-xl
                           hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300
                           flex items-center justify-center gap-3 uppercase italic"
              >
                <LogOut size={24} />
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

