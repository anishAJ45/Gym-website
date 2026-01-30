import { useState } from "react";
import { toast } from "react-toastify";
import {
    PhoneCall,
    Mail,
    MapPin,
    Clock,
    Send,
    User,
    MessageSquare,
    Instagram,
    Facebook,
    Twitter
} from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields");
            return;
        }

        toast.success("Message sent successfully! We'll get back to you soon.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
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
                        <PhoneCall size={16} className="text-orange-400" />
                        <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">Connect With Us</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
                        Get In <span className="text-orange-400">Touch</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Have questions about memberships or programs? Our team is here to help you start your journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] space-y-12">
                            <div className="flex items-start gap-6">
                                <div className="bg-orange-400/10 p-4 rounded-2xl text-orange-400">
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase mb-2">Location</h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">
                                        123 Fitness Street, Gym City<br />
                                        GC 12345, Calicut, Kerala
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-orange-400/10 p-4 rounded-2xl text-orange-400">
                                    <Clock size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase mb-2">Opening Hours</h3>
                                    <div className="text-gray-400 font-medium space-y-1 text-sm">
                                        <p className="flex justify-between gap-8"><span>Mon - Fri:</span> <span className="text-white">6 AM - 10 PM</span></p>
                                        <p className="flex justify-between gap-8"><span>Saturday:</span> <span className="text-white">7 AM - 8 PM</span></p>
                                        <p className="flex justify-between gap-8"><span>Sunday:</span> <span className="text-white">8 AM - 6 PM</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-orange-400/10 p-4 rounded-2xl text-orange-400">
                                    <PhoneCall size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase mb-2">Direct Contact</h3>
                                    <p className="text-gray-400 font-medium hover:text-orange-400 transition-colors cursor-pointer">(555) 123-4567</p>
                                    <p className="text-gray-400 font-medium hover:text-orange-400 transition-colors cursor-pointer">info@makeusfit.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                                <button key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl text-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-300">
                                    <Icon size={24} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-14 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                                <Send size={200} className="text-orange-400 -rotate-12" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-10 flex items-center gap-4">
                                Send a Message
                                <div className="h-px flex-1 bg-white/10" />
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-400/80 ml-1">
                                            <User size={14} /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:border-orange-400 focus:outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-400/80 ml-1">
                                            <Mail size={14} /> Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:border-orange-400 focus:outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-400/80 ml-1">
                                        <MessageSquare size={14} /> Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you reach your goals?"
                                        rows="6"
                                        className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder-gray-600 focus:border-orange-400 focus:outline-none transition-all resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-400 text-black font-black text-xl uppercase tracking-widest py-5 rounded-2xl hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(251,146,60,0.2)] flex items-center justify-center gap-3"
                                >
                                    <span>Send Message</span>
                                    <Send size={24} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
