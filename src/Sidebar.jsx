import {
  Lightbulb,
  TrendingUp,
  RefreshCw,
  Home,
  BarChart2,
  BarChart3,
  Bot,
  Trophy,
  ChevronDown,
  Book,
  Users,
  FileText,
  LifeBuoy,
  LogOut,
  Wallet,
  History
} from "lucide-react";

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
const [sidebarOpen, setSidebarOpen] = useState(false);
  const teamRef = useRef(null);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("Crypto Mining");
  const teams = [
    { name: "Crypto Mining", members: 22, type: "current" },
    { name: "LLM Training", members: 12, type: "current" },
    { name: "Trading", members: 8, type: "team" },
    { name: "3D Rendering", members: 15, type: "team" },
    { name: "Create New Team", members: null, type: "action" },
  ];
  const navigationItems = [
    { icon: Home, label: "Home", active: false, link: "/" },
    {
      icon: BarChart2,
      label: "Marketplace",
      active: false,
      link: "/marketplace",
    },
    { icon: BarChart3, label: "Dashboard", active: false, link: "/dashboard" },
    { icon: Bot, label: "AI Job Submission", active: false, link: "/jobs" },
    { icon: Wallet, label: "Wallet", active: false, link: "/wallet" },
    { icon: History, label: "History", active: false, link: "/history" },
    {
      icon: Trophy,
      label: "NFTs & Achievements",
      active: false,
      link: "/rewards",
    },
  ];

  const policiesItems = [
    { label: "Terms of Service" },
    { label: "Privacy Policy" },
    { label: "Refund Policy" },
  ];

  const helpItems = [
    { label: "FAQs" },
    { label: "Contact Us" },
    { label: "My Tickets" },
  ];

  const handleTeamSelect = (team) => {
    if (team.type !== "action") {
      setSelectedTeam(team.name);
    }
    setShowTeamDropdown(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (teamRef.current && !teamRef.current.contains(event.target)) {
        setShowTeamDropdown(false);
      }
      if (policiesRef.current && !policiesRef.current.contains(event.target)) {
        setShowPoliciesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const policiesRef = useRef(null);
  const [showPoliciesDropdown, setShowPoliciesDropdown] = useState(false);
  const navigate = useNavigate();
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);
  const helpRef = useRef(null);
  return (
      <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Fixed Sidebar - NO SCROLLING */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative inset-y-0 left-0 w-80 bg-[#1a1a1a] border-r border-[#2a2a2a] flex flex-col z-50 transition-transform duration-300 ease-in-out h-full`}
      >
        {/* Company Header with Team Dropdown - FIXED */}
        <div className="p-4 border-b border-[#2a2a2a] flex-shrink-0">
          <div className="relative" ref={teamRef}>
            <button
              onClick={() => setShowTeamDropdown(!showTeamDropdown)}
              className="flex items-center justify-between w-full group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#1a1a1a] rounded-full"></div>
                </div>
                <div className="text-left">
                  <h2 className="font-semibold text-white group-hover:text-white/90 transition-colors">
                    {selectedTeam}
                  </h2>
                  <p className="text-sm text-white/60">
                    {teams.find((t) => t.name === selectedTeam)?.members}{" "}
                    members
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                  showTeamDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Team Dropdown */}
            {showTeamDropdown && (
              <div className="absolute top-full mt-2 w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg shadow-2xl z-50">
                {teams.map((team, index) => (
                  <button
                    key={index}
                    onClick={() => handleTeamSelect(team)}
                    className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                      team.type === "action"
                        ? "text-white/60 hover:text-white border-t border-[#3a3a3a]"
                        : "text-white hover:bg-[#1a1a1a]"
                    } ${index === 0 ? "rounded-t-lg" : ""} ${
                      index === teams.length - 1 ? "rounded-b-lg" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {team.name != "Create New Team" ? (
                          team.name
                        ) : (
                          <span className="flex items-center">
                            <Plus size={20} className="mr-2" />
                            {team.name}
                          </span>
                        )}
                      </span>
                      {team.members && (
                        <span className="text-xs text-white/60">
                          {team.members} members
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Navigation Content */}
        <div className="flex-1 py-4 overflow-y-auto custom-scrollbar">
          {/* Navigation */}
          <div className="px-4 mb-6">
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
              NAVIGATION
            </h3>
            <nav className="space-y-1">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    item.active
                      ? "bg-[#2a2a2a] text-white border border-[#3a3a3a]"
                      : "text-white/60 hover:text-white hover:bg-[#2a2a2a] hover:border hover:border-[#3a3a3a]"
                  }`}
                  onClick={() => navigate(item.link)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Help & Support */}
          <div className="px-4">
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
              HELP & SUPPORT
            </h3>
            <nav className="space-y-1">
              {/* Documentation */}
              <button className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-[#2a2a2a] transition-all duration-200">
                <Book className="w-5 h-5 mr-3" />
                Documentation
              </button>

              {/* Community */}
              <button onClick={()=>navigate('/community')} className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium hover:text-white hover:bg-[#2a2a2a] transition-all duration-200 bg-[#2a2a2a] text-white border border-[#3a3a3a]">
                <Users className="w-5 h-5 mr-3" />
                Community
              </button>

              {/* Policies Dropdown */}
              <div className="relative" ref={policiesRef}>
                <button
                  onClick={() => setShowPoliciesDropdown(!showPoliciesDropdown)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-[#2a2a2a] transition-all duration-200"
                >
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 mr-3" />
                    Policies
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showPoliciesDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showPoliciesDropdown && (
                  <div className="mt-1 ml-8 space-y-1">
                    {policiesItems.map((item, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-3 py-2 text-xs text-white/50 hover:text-white/80 rounded-md hover:bg-[#2a2a2a] transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Help Dropdown */}
              <div className="relative" ref={helpRef}>
                <button
                  onClick={() => setShowHelpDropdown(!showHelpDropdown)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-[#2a2a2a] transition-all duration-200"
                >
                  <div className="flex items-center">
                    <LifeBuoy className="w-5 h-5 mr-3" />
                    Help
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showHelpDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showHelpDropdown && (
                  <div className="mt-1 ml-8 space-y-1">
                    {helpItems.map((item, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-3 py-2 text-xs text-white/50 hover:text-white/80 rounded-md hover:bg-[#2a2a2a] transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Fixed User Profile at Bottom */}
        <div className="p-4 border-t border-[#2a2a2a] flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#3a3a3a] rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  John Doe
                </p>
                <p className="text-xs text-white/60 truncate">
                  john@techcorp.ai
                </p>
              </div>
            </div>
            <button className="p-2 text-white/60 hover:text-white hover:bg-[#2a2a2a] rounded-lg transition-all duration-200">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      </>
  )
}

export default Sidebar;