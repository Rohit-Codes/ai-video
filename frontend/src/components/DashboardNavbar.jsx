import React, { useState, useRef, useEffect } from "react";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useAuthContext } from "../features/auth/hooks/useAuth";
import { Link } from "react-router";

const DashboardNavbar = () => {
  const { user, userLogout } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl leading-none">
              V
            </span>
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tight">
            Visio<span className="text-gradient">AI</span>
          </span>
        </Link>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
              <User size={20} />
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0a0a0f] border border-white/10 shadow-2xl py-2 z-50">
              <div className="px-4 py-3 border-b border-white/10">
                <p className="text-xs text-gray-400 mb-0.5">Signed in as</p>
                <p className="text-sm font-medium text-white truncate">
                  {user?.username || user?.email || "User"}
                </p>
              </div>
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  userLogout && userLogout();
                }}
                className="w-full text-left px-4 py-2 mt-1 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <LogOut size={16} />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
