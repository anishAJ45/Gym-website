import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { User, Mail, Phone, Calendar, CreditCard, ShieldCheck } from "lucide-react";

export default function AdmissionForm() {
  const Navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [membershipType, setMembershipType] = useState("Bronze");
  const [admissionDate, setAdmissionDate] = useState(new Date().toISOString().split('T')[0]);
  const [feeAmount, setFeeAmount] = useState("50");
  const [feeStatus, setFeeStatus] = useState("Not Completed");

  const handleMembershipChange = (e) => {
    const type = e.target.value;
    setMembershipType(type);

    if (type === "Bronze") {
      setFeeAmount("50");
    } else if (type === "Silver") {
      setFeeAmount("100");
    } else if (type === "Gold") {
      setFeeAmount("150");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingMembers = JSON.parse(localStorage.getItem("gymMembers") || "[]");

    const emailExists = existingMembers.find(member => member.email === email);
    if (emailExists) {
      toast.error("Member with this email already exists");
      return;
    }

    const newMember = {
      id: Date.now().toString(),
      fullName: fullName,
      email: email,
      phone: phone,
      membershipType: membershipType,
      admissionDate: admissionDate,
      feeAmount: feeAmount,
      feeStatus: feeStatus,
      createdAt: new Date().toISOString(),
    };

    existingMembers.push(newMember);
    localStorage.setItem("gymMembers", JSON.stringify(existingMembers));

    toast.success(`${fullName} admitted successfully!`);

    setFullName("");
    setEmail("");
    setPhone("");
    setMembershipType("Bronze");
    setAdmissionDate(new Date().toISOString().split('T')[0]);
    setFeeAmount("50");
    setFeeStatus("Not Completed");

    setTimeout(() => {
      Navigate("/admin/fee-status");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <AdminNavbar />

      <div className="relative z-10 flex items-center justify-center p-6 md:p-10">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />

        <div className="w-full max-w-4xl bg-[#121212] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <ShieldCheck size={48} className="text-orange-400/20" />
          </div>

          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
              Member <span className="text-orange-400">Admission</span>
            </h2>
            <p className="text-gray-400 font-medium">Register a new athlete to the gym system.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div className="relative group">
              <label className="flex items-center gap-2 text-sm font-bold text-orange-400 uppercase tracking-widest mb-3 ml-1">
                <User size={16} /> Full Name
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 group-hover:border-orange-400/50
                           rounded-2xl px-6 py-4 text-white
                           placeholder-gray-500 focus:outline-none
                           focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400
                           transition-all duration-300 shadow-inner"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-orange-400 uppercase tracking-widest mb-3 ml-1">
                  <Mail size={16} /> Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 group-hover:border-orange-400/50
                             rounded-2xl px-6 py-4 text-white
                             placeholder-gray-500 focus:outline-none
                             focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400
                             transition-all duration-300"
                  required
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-orange-400 uppercase tracking-widest mb-3 ml-1">
                  <Phone size={16} /> Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 group-hover:border-orange-400/50
                             rounded-2xl px-6 py-4 text-white
                             placeholder-gray-500 focus:outline-none
                             focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400
                             transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Membership Selection */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-orange-400 uppercase tracking-widest mb-3 ml-1">
                  <ShieldCheck size={16} /> Membership Plan
                </label>
                <select
                  value={membershipType}
                  onChange={handleMembershipChange}
                  className="w-full bg-white/5 border border-white/10 group-hover:border-orange-400/50
                             rounded-2xl px-6 py-4 text-white
                             focus:outline-none focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400
                             transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="Bronze" className="bg-[#121212]">Bronze Edition - $50</option>
                  <option value="Silver" className="bg-[#121212]">Silver Edition - $100</option>
                  <option value="Gold" className="bg-[#121212]">Gold Elite - $150</option>
                </select>
              </div>

              {/* Date */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-orange-400 uppercase tracking-widest mb-3 ml-1">
                  <Calendar size={16} /> Admission Date
                </label>
                <input
                  type="date"
                  value={admissionDate}
                  onChange={(e) => setAdmissionDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 group-hover:border-orange-400/50
                             rounded-2xl px-6 py-4 text-white
                             focus:outline-none focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400
                             transition-all duration-300 cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fee Amount */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-orange-400 uppercase tracking-widest mb-3 ml-1">
                  <CreditCard size={16} /> Fee Amount ($)
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input
                    type="number"
                    value={feeAmount}
                    onChange={(e) => setFeeAmount(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 group-hover:border-orange-400/50
                               rounded-2xl pl-10 pr-6 py-4 text-white
                               focus:outline-none focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400
                               transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Status */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-orange-400 uppercase tracking-widest mb-3 ml-1">
                  <ShieldCheck size={16} /> Initial Payment Status
                </label>
                <select
                  value={feeStatus}
                  onChange={(e) => setFeeStatus(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 group-hover:border-orange-400/50
                             rounded-2xl px-6 py-4 text-white
                             focus:outline-none focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400
                             transition-all duration-300 cursor-pointer"
                >
                  <option value="Not Completed" className="bg-[#121212]">⚠️ Pending Payment</option>
                  <option value="Completed" className="bg-[#121212]">✅ Fully Paid</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-400 text-black font-black text-xl uppercase tracking-widest
                         py-5 rounded-2xl hover:bg-orange-500
                         transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                         shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]"
            >
              Confirm Admission
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
