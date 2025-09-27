import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  Copy, 
  BanknoteArrowDown,
  Home,
  BarChart3, 
  Settings, 
  MessageCircle, 
  Book, 
  Users, 
  Search,
  Heart,
  BarChart2,
  Clock,
  MapPin,
  ChevronDown,
  Filter,
  SlidersHorizontal,
  X,
  Menu,
  LogOut,
  ChevronUp,
  Shield,
  Cpu,
  HardDrive,
  Activity,
  DollarSign,
  Calendar,
  Award,
  AlertTriangle,
  CheckCircle,
  Wallet,
  History,
  Trophy,
  FileText,
  Phone,
  LifeBuoy,
  Mail,
  Plus,
  Bot
} from 'lucide-react';
import { 
  Brain, 
  Zap, 
  Box, 
  TrendingUp, 
  Atom, 
  Gamepad2, 
  Upload, 
  Github, 
  HelpCircle, 
  ChevronRight,
  Star,
  Sliders,
  CheckCircle2,
  AlertCircle,
  MemoryStick,
  Globe,
  Repeat,
  Bell,
  Save,
  Send
} from 'lucide-react';
// import { ethers } from 'ethers';

const Jobs = () => {
  const [selectedJobType, setSelectedJobType] = useState('');
  const [currentStep, setCurrentStep] = useState(2);
  const [gpuQuantity, setGpuQuantity] = useState(1);
  const [vram, setVram] = useState(16);
  const [cpu, setCpu] = useState(8);
  const [ram, setRam] = useState(32);
  const [selectedGpu, setSelectedGpu] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(true);
  const [priority, setPriority] = useState('standard');
  const [autoMatch, setAutoMatch] = useState(true);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [savings, setSavings] = useState(0);
  const [jobName, setJobName] = useState('');
  const [framework, setFramework] = useState('');

  const jobTypes = [
    {
      id: 'ai-training',
      title: 'AI Training',
      description: 'Train neural networks and machine learning models',
      icon: Brain,
      costRange: '$0.80-2.40/hr',
      popular: true
    },
    {
      id: 'crypto-mining',
      title: 'Crypto Mining',
      description: 'Mine cryptocurrencies with optimal hashrates',
      icon: Zap,
      costRange: '$0.45-1.80/hr'
    },
    {
      id: '3d-rendering',
      title: '3D Rendering',
      description: 'Render complex 3D scenes and animations',
      icon: Box,
      costRange: '$0.60-2.10/hr'
    },
    {
      id: 'trading-algorithms',
      title: 'Trading Algorithms',
      description: 'Run high-frequency trading and backtesting',
      icon: TrendingUp,
      costRange: '$0.90-3.20/hr'
    },
    {
      id: 'scientific-computing',
      title: 'Scientific Computing',
      description: 'Complex simulations and research computations',
      icon: Atom,
      costRange: '$1.10-2.80/hr'
    },
    {
      id: 'game-development',
      title: 'Game Development',
      description: 'Build and test gaming environments',
      icon: Gamepad2,
      costRange: '$0.70-2.50/hr'
    }
  ];

  const gpuOptions = [
    {
      id: 'h100',
      name: 'NVIDIA H100',
      vram: '80GB HBM3',
      performance: '100%',
      price: 3.20,
      availability: 'high',
      specs: '14,592 CUDA cores'
    },
    {
      id: 'a100',
      name: 'NVIDIA A100',
      vram: '40GB HBM2e',
      performance: '85%',
      price: 2.40,
      availability: 'high',
      specs: '6,912 CUDA cores'
    },
    {
      id: 'rtx4090',
      name: 'RTX 4090',
      vram: '24GB GDDR6X',
      performance: '70%',
      price: 1.80,
      availability: 'medium',
      specs: '16,384 CUDA cores'
    },
    {
      id: 'v100',
      name: 'Tesla V100',
      vram: '32GB HBM2',
      performance: '65%',
      price: 1.60,
      availability: 'high',
      specs: '5,120 CUDA cores'
    }
  ];

  const providers = [
    {
      id: 'provider1',
      name: 'CloudGPU Labs',
      rating: 4.9,
      location: 'US West',
      latency: '12ms',
      reputation: 98,
      available: true,
      gpus: 'H100, A100'
    },
    {
      id: 'provider2',
      name: 'EuroCompute',
      rating: 4.7,
      location: 'EU Central',
      latency: '45ms',
      reputation: 94,
      available: true,
      gpus: 'A100, RTX 4090'
    },
    {
      id: 'provider3',
      name: 'AsiaGrid',
      rating: 4.8,
      location: 'Asia Pacific',
      latency: '78ms',
      reputation: 96,
      available: false,
      gpus: 'V100, RTX 4090'
    }
  ];

  const frameworks = ['PyTorch', 'TensorFlow', 'JAX', 'Hugging Face', 'Custom'];

  useEffect(() => {
    if (selectedGpu && gpuQuantity) {
      const gpu = gpuOptions.find(g => g.id === selectedGpu);
      if (gpu) {
        const baseCost = gpu.price * gpuQuantity;
        const multiplier = priority === 'high' ? 1.5 : priority === 'low' ? 0.8 : 1;
        const totalCost = baseCost * multiplier;
        setEstimatedCost(totalCost);
        setSavings(Math.round((totalCost * 2.5 - totalCost) / (totalCost * 2.5) * 100));
      }
    }
  }, [selectedGpu, gpuQuantity, priority]);

  const renderJobTypeCard = (jobType) => (
    <div
      key={jobType.id}
      className={`relative p-6 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-lg ${
        selectedJobType === jobType.id
          ? 'bg-[#18181B] border-[#0EA5E9] shadow-[0_0_0_1px_#0EA5E9]'
          : 'bg-[#18181B] border-[#3F3F46] hover:border-[#52525B]'
      }`}
      onClick={() => setSelectedJobType(jobType.id)}
    >
      {jobType.popular && (
        <div className="absolute -top-2 -right-2 bg-[#0EA5E9] text-white text-xs px-2 py-1 rounded-full">
          Popular
        </div>
      )}
      <div className="flex flex-col items-center text-center space-y-3">
        <jobType.icon className={`w-8 h-8 ${selectedJobType === jobType.id ? 'text-[#0EA5E9]' : 'text-[#A1A1AA]'}`} />
        <h3 className="font-semibold text-[#F4F4F5]">{jobType.title}</h3>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">{jobType.description}</p>
        <div className="text-sm font-medium text-[#10B981]">{jobType.costRange}</div>
      </div>
    </div>
  );

  const renderGpuCard = (gpu) => (
    <div
      key={gpu.id}
      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
        selectedGpu === gpu.id
          ? 'bg-[#18181B] border-[#0EA5E9] shadow-[0_0_0_1px_#0EA5E9]'
          : 'bg-[#18181B] border-[#3F3F46] hover:border-[#52525B]'
      }`}
      onClick={() => setSelectedGpu(gpu.id)}
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-[#F4F4F5]">{gpu.name}</h4>
        <div className={`w-3 h-3 rounded-full ${
          gpu.availability === 'high' ? 'bg-[#10B981]' : 
          gpu.availability === 'medium' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'
        }`} />
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-[#A1A1AA]">
          <span>VRAM:</span>
          <span className="text-[#D4D4D8]">{gpu.vram}</span>
        </div>
        <div className="flex justify-between text-[#A1A1AA]">
          <span>Performance:</span>
          <span className="text-[#D4D4D8]">{gpu.performance}</span>
        </div>
        <div className="flex justify-between text-[#A1A1AA]">
          <span>Price:</span>
          <span className="text-[#10B981] font-semibold">${gpu.price}/hr</span>
        </div>
      </div>
    </div>
  );

  const renderProviderCard = (provider) => (
    <div
      key={provider.id}
      className={`p-4 rounded-lg border ${
        provider.available 
          ? 'bg-[#18181B] border-[#3F3F46] hover:border-[#52525B] cursor-pointer' 
          : 'bg-[#12121280] border-[#27272A] opacity-60'
      } transition-all duration-200`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-semibold text-[#F4F4F5] mb-1">{provider.name}</h4>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(provider.rating) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-[#3F3F46]'}`}
              />
            ))}
            <span className="text-xs text-[#A1A1AA] ml-1">{provider.rating}</span>
          </div>
        </div>
        <div className={`px-2 py-1 rounded text-xs ${
          provider.available ? 'bg-[#10B981] text-white' : 'bg-[#3F3F46] text-[#A1A1AA]'
        }`}>
          {provider.available ? 'Available' : 'Busy'}
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center text-[#A1A1AA]">
          <MapPin className="w-3 h-3 mr-2" />
          <span>{provider.location} • {provider.latency}</span>
        </div>
        <div className="flex justify-between text-[#A1A1AA]">
          <span>Reputation:</span>
          <span className="text-[#D4D4D8]">{provider.reputation}%</span>
        </div>
      </div>
    </div>
  );

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
      { icon: Bot, label: "AI Job Submission", active: true, link: "/jobs" },
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
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
    
      // Close sidebar on mobile when clicking outside
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setSidebarOpen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  const policiesRef = useRef(null);
  const [showPoliciesDropdown, setShowPoliciesDropdown] = useState(false);
  const navigate = useNavigate();
    const [showHelpDropdown, setShowHelpDropdown] = useState(false);
    const helpRef = useRef(null);
    return (
      <div className="h-screen w-screen bg-[#0a0a0a] text-white flex relative overflow-hidden" style={{width: '100vw'}}>
           {/* Mobile backdrop */}
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
                <button onClick={() => navigate("/docs")} className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-[#2a2a2a] transition-all duration-200">
                  <Book className="w-5 h-5 mr-3" />
                  Documentation
                </button>
  
                {/* Community */}
                <button onClick={()=>navigate('/community')} className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-[#2a2a2a] transition-all duration-200">
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
    <section className='rewardsSec'>
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            {/* <div className="flex items-center text-sm text-[#A1A1AA] mb-2">
              <span>Dashboard</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span>Jobs</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#D4D4D8]">Submit New Job</span>
            </div> */}
            <h1 className="text-3xl font-bold text-[#F4F4F5]">Submit New Job</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 px-4 py-2 bg-[#18181B] rounded-lg border border-[#3F3F46]">
              <span className="text-sm text-[#A1A1AA]">Step {currentStep} of 5</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full ${
                      step <= currentStep ? 'bg-[#0EA5E9]' : 'bg-[#3F3F46]'
                    }`}
                  />
                ))}
              </div>
            </div> */}
            <button className="p-2 bg-[#18181B] rounded-lg border border-[#3F3F46] hover:border-[#52525B] transition-colors">
              <HelpCircle className="w-5 h-5 text-[#A1A1AA]" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Job Type Selection */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
              <h2 className="text-xl font-semibold mb-6 text-[#F4F4F5]">Select Job Type</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobTypes.map(renderJobTypeCard)}
              </div>
            </div>

            {/* Job Configuration */}
            {selectedJobType && (
              <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#F4F4F5]">Job Configuration</h2>
                  <div className="flex items-center text-sm text-[#0EA5E9] cursor-pointer">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Need help? Ask AI assistant
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#D4D4D8] mb-2">Job Name</label>
                    <input
                      type="text"
                      value={jobName}
                      onChange={(e) => setJobName(e.target.value)}
                      placeholder="Enter a descriptive name for your job"
                      className="w-full px-3 py-2 bg-[#23232B] border border-[#3F3F46] rounded-md text-[#F4F4F5] placeholder-[#71717A] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#D4D4D8] mb-2">Framework</label>
                      <select
                        value={framework}
                        onChange={(e) => setFramework(e.target.value)}
                        className="w-full px-3 py-2 bg-[#23232B] border border-[#3F3F46] rounded-md text-[#F4F4F5] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                      >
                        <option value="">Select framework</option>
                        {frameworks.map(fw => (
                          <option key={fw} value={fw}>{fw}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#D4D4D8] mb-2">Repository</label>
                      <div className="relative">
                        <Github className="absolute left-3 top-2.5 w-4 h-4 text-[#A1A1AA]" />
                        <input
                          type="text"
                          placeholder="github.com/username/repo"
                          className="w-full pl-10 pr-3 py-2 bg-[#23232B] border border-[#3F3F46] rounded-md text-[#F4F4F5] placeholder-[#71717A] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-[#D4D4D8] mb-2">Upload Files</label>
                    <div className="border-2 border-dashed border-[#3F3F46] rounded-lg p-8 text-center hover:border-[#52525B] transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-[#A1A1AA] mx-auto mb-4" />
                      <p className="text-[#D4D4D8] mb-2">Drop files here or click to browse</p>
                      <p className="text-sm text-[#A1A1AA]">Supports .py, .ipynb, .zip files up to 100MB</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* GPU Selection */}
            {selectedJobType && (
              <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
                <h2 className="text-xl font-semibold mb-6 text-[#F4F4F5]">GPU Requirements</h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {gpuOptions.map(renderGpuCard)}
                </div>

                {selectedGpu && (
                  <div className="space-y-6 mt-6 p-4 bg-[#23232B] rounded-lg">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-[#D4D4D8]">GPU Quantity</label>
                        <span className="text-sm text-[#0EA5E9]">{gpuQuantity} GPU{gpuQuantity > 1 ? 's' : ''}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="8"
                        value={gpuQuantity}
                        onChange={(e) => setGpuQuantity(parseInt(e.target.value))}
                        className="w-full h-2 bg-[#3F3F46] rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-[#D4D4D8]">VRAM</label>
                          <span className="text-sm text-[#0EA5E9]">{vram}GB</span>
                        </div>
                        <input
                          type="range"
                          min="8"
                          max="80"
                          step="8"
                          value={vram}
                          onChange={(e) => setVram(parseInt(e.target.value))}
                          className="w-full h-2 bg-[#3F3F46] rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-[#D4D4D8]">CPU Cores</label>
                          <span className="text-sm text-[#0EA5E9]">{cpu}</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="32"
                          value={cpu}
                          onChange={(e) => setCpu(parseInt(e.target.value))}
                          className="w-full h-2 bg-[#3F3F46] rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-[#D4D4D8]">RAM</label>
                          <span className="text-sm text-[#0EA5E9]">{ram}GB</span>
                        </div>
                        <input
                          type="range"
                          min="8"
                          max="128"
                          step="8"
                          value={ram}
                          onChange={(e) => setRam(parseInt(e.target.value))}
                          className="w-full h-2 bg-[#3F3F46] rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Provider Matching */}
            {selectedGpu && (
              <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#F4F4F5]">Provider Selection</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-[#A1A1AA]">Auto-match</span>
                    <button
                      onClick={() => setAutoMatch(!autoMatch)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        autoMatch ? 'bg-[#0EA5E9]' : 'bg-[#3F3F46]'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        autoMatch ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                {!autoMatch && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {providers.map(renderProviderCard)}
                  </div>
                )}

                {autoMatch && (
                  <div className="p-4 bg-[#23232B] rounded-lg border border-[#3F3F46]">
                    <div className="flex items-center mb-3">
                      <CheckCircle2 className="w-5 h-5 text-[#10B981] mr-2" />
                      <span className="font-medium text-[#F4F4F5]">Auto-matching enabled</span>
                    </div>
                    <p className="text-sm text-[#A1A1AA]">
                      We'll automatically select the best available provider based on performance, cost, and latency.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Advanced Settings */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between w-full text-left"
              >
                <h2 className="text-xl font-semibold text-[#F4F4F5]">Advanced Settings</h2>
                {showAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {showAdvanced && (
                <div className="mt-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#D4D4D8] mb-3">Job Priority</label>
                    <div className="flex space-x-4">
                      {[
                        { value: 'low', label: 'Low Cost', desc: '-20% cost, longer queue' },
                        { value: 'standard', label: 'Standard', desc: 'Balanced cost & speed' },
                        { value: 'high', label: 'High Priority', desc: '+50% cost, faster start' }
                      ].map((option) => (
                        <label key={option.value} className="flex-1 cursor-pointer">
                          <input
                            type="radio"
                            name="priority"
                            value={option.value}
                            checked={priority === option.value}
                            onChange={(e) => setPriority(e.target.value)}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-lg border text-center ${
                            priority === option.value 
                              ? 'border-[#0EA5E9] bg-[#0EA5E910]' 
                              : 'border-[#3F3F46] hover:border-[#52525B]'
                          } transition-colors`}>
                            <div className="font-medium text-[#F4F4F5] mb-1">{option.label}</div>
                            <div className="text-xs text-[#A1A1AA]">{option.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#D4D4D8] mb-2">Max Runtime</label>
                      <select className="w-full px-3 py-2 bg-[#23232B] border border-[#3F3F46] rounded-md text-[#F4F4F5] focus:border-[#0EA5E9] focus:outline-none">
                        <option>1 hour</option>
                        <option>6 hours</option>
                        <option>24 hours</option>
                        <option>No limit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#D4D4D8] mb-2">Budget Limit</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-2.5 w-4 h-4 text-[#A1A1AA]" />
                        <input
                          type="number"
                          placeholder="100"
                          className="w-full pl-10 pr-3 py-2 bg-[#23232B] border border-[#3F3F46] rounded-md text-[#F4F4F5] placeholder-[#71717A] focus:border-[#0EA5E9] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Section */}
            {selectedJobType && selectedGpu && (
              <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
                <h2 className="text-xl font-semibold mb-6 text-[#F4F4F5]">Review & Submit</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#A1A1AA]">Job Type:</span>
                    <span className="text-[#F4F4F5]">{jobTypes.find(j => j.id === selectedJobType)?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1A1AA]">GPU:</span>
                    <span className="text-[#F4F4F5]">{gpuOptions.find(g => g.id === selectedGpu)?.name} × {gpuQuantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1A1AA]">Priority:</span>
                    <span className="text-[#F4F4F5] capitalize">{priority}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1A1AA]">Est. Completion:</span>
                    <span className="text-[#F4F4F5]">2-4 hours</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <input type="checkbox" id="terms" className="rounded" />
                  <label htmlFor="terms" className="text-sm text-[#D4D4D8]">
                    I agree to the <span className="text-[#0EA5E9] cursor-pointer">Terms of Service</span> and <span className="text-[#0EA5E9] cursor-pointer">Privacy Policy</span>
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 px-6 py-3 bg-transparent border border-[#3F3F46] text-[#A1A1AA] rounded-lg hover:border-[#52525B] hover:text-[#D4D4D8] transition-colors flex items-center justify-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Save as Template</span>
                  </button>
                  <button className="flex-1 px-6 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors flex items-center justify-center space-x-2 font-semibold">
                    <Send className="w-4 h-4" />
                    <span>Submit Job</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Cost Calculator */}
          <div className="space-y-6">
            {/* Cost Calculator */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46] top-6">
              <h3 className="text-lg font-semibold mb-4 text-[#F4F4F5]">Cost Estimate</h3>
              
              {estimatedCost > 0 ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0EA5E9] mb-1">
                      ${estimatedCost.toFixed(2)}
                    </div>
                    <div className="text-sm text-[#A1A1AA]">per hour</div>
                  </div>

                  <div className="p-3 bg-[#10B98110] border border-[#10B981] rounded-lg">
                    <div className="flex items-center justify-center space-x-2 text-[#10B981]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-semibold">{savings}% savings</span>
                    </div>
                    <div className="text-center text-xs text-[#A1A1AA] mt-1">
                      vs traditional cloud providers
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#A1A1AA]">Base GPU cost:</span>
                      <span className="text-[#F4F4F5]">
                        ${(gpuOptions.find(g => g.id === selectedGpu)?.price * gpuQuantity || 0).toFixed(2)}/hr
                      </span>
                    </div>
                    {priority !== 'standard' && (
                      <div className="flex justify-between">
                        <span className="text-[#A1A1AA]">Priority modifier:</span>
                        <span className={priority === 'high' ? 'text-[#F59E0B]' : 'text-[#10B981]'}>
                          {priority === 'high' ? '+50%' : '-20%'}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-[#A1A1AA]">Network & storage:</span>
                      <span className="text-[#F4F4F5]">$0.05/hr</span>
                    </div>
                    <hr className="border-[#3F3F46]" />
                    <div className="flex justify-between font-semibold">
                      <span className="text-[#F4F4F5]">Total per hour:</span>
                      <span className="text-[#0EA5E9]">${(estimatedCost + 0.05).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-[#23232B] rounded-lg">
                    <div className="text-sm text-[#A1A1AA] mb-2">Estimated for 4-hour job:</div>
                    <div className="text-xl font-bold text-[#F4F4F5]">
                      ${((estimatedCost + 0.05) * 4).toFixed(2)}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-[#A1A1AA]">Payment Method</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-3 bg-[#23232B] rounded-lg border border-[#3F3F46] cursor-pointer hover:border-[#52525B]">
                        <Wallet className="w-4 h-4 text-[#A1A1AA]" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-[#F4F4F5]">MetaMask Wallet</div>
                          <div className="text-xs text-[#A1A1AA]">0x1234...5678</div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-[#0EA5E9]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <DollarSign className="w-12 h-12 text-[#3F3F46] mx-auto mb-3" />
                  <p className="text-[#A1A1AA] text-sm">
                    Select job type and GPU to see cost estimate
                  </p>
                </div>
              )}
            </div>

            {/* AI Assistant */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
              <h3 className="text-lg font-semibold mb-4 text-[#F4F4F5] flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-[#0EA5E9]" />
                AI Assistant
              </h3>
              
              <div className="space-y-3 mb-4">
                <div className="p-3 bg-[#0EA5E910] border border-[#0EA5E9] rounded-lg">
                  <div className="text-sm text-[#F4F4F5] mb-1 font-medium">💡 Optimization Tip</div>
                  <div className="text-xs text-[#A1A1AA]">
                    For AI training jobs, consider using multiple smaller GPUs instead of one large GPU for better cost efficiency.
                  </div>
                </div>

                {selectedJobType === 'ai-training' && (
                  <div className="p-3 bg-[#F59E0B10] border border-[#F59E0B] rounded-lg">
                    <div className="text-sm text-[#F4F4F5] mb-1 font-medium">⚠️ Recommendation</div>
                    <div className="text-xs text-[#A1A1AA]">
                      PyTorch jobs typically need 20% more VRAM for gradient storage. Consider upgrading VRAM allocation.
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Ask me anything about your job setup..."
                  className="w-full px-3 py-2 bg-[#23232B] border border-[#3F3F46] rounded-lg text-sm text-[#F4F4F5] placeholder-[#71717A] focus:border-[#0EA5E9] focus:outline-none"
                />
                <button className="w-full px-3 py-2 bg-[#0EA5E9] text-white text-sm rounded-lg hover:bg-[#0284C7] transition-colors">
                  Get AI Help
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
              <h3 className="text-lg font-semibold mb-4 text-[#F4F4F5]">Your Recent Jobs</h3>
              
              <div className="space-y-3">
                {[
                  { name: 'BERT Fine-tuning', status: 'completed', time: '2h ago', cost: '$12.40' },
                  { name: 'Image Classification', status: 'running', time: '5h ago', cost: '$8.20' },
                  { name: 'Text Generation', status: 'failed', time: '1d ago', cost: '$2.15' }
                ].map((job, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-[#23232B] rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      job.status === 'completed' ? 'bg-[#10B981]' : 
                      job.status === 'running' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[#F4F4F5] truncate">{job.name}</div>
                      <div className="text-xs text-[#A1A1AA]">{job.time} • {job.cost}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      job.status === 'completed' ? 'bg-[#10B98120] text-[#10B981]' : 
                      job.status === 'running' ? 'bg-[#F59E0B20] text-[#F59E0B]' : 'bg-[#EF444420] text-[#EF4444]'
                    }`}>
                      {job.status}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-sm text-[#0EA5E9] hover:text-[#0284C7] transition-colors">
                View All Jobs →
              </button>
            </div>

            {/* Status Indicators */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#3F3F46]">
              <h3 className="text-lg font-semibold mb-4 text-[#F4F4F5]">Network Status</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                    <span className="text-sm text-[#F4F4F5]">GPU Network</span>
                  </div>
                  <span className="text-xs text-[#10B981]">Healthy</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                    <span className="text-sm text-[#F4F4F5]">Payment Network</span>
                  </div>
                  <span className="text-xs text-[#10B981]">Online</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse"></div>
                    <span className="text-sm text-[#F4F4F5]">Available GPUs</span>
                  </div>
                  <span className="text-xs text-[#F59E0B]">1,247</span>
                </div>

                <div className="mt-4 p-3 bg-[#23232B] rounded-lg">
                  <div className="text-xs text-[#A1A1AA] mb-1">Average Queue Time</div>
                  <div className="text-sm font-semibold text-[#F4F4F5]">2.3 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #F4F4F5;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #F4F4F5;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          border: none;
        }

        .slider::-webkit-slider-track {
          background: linear-gradient(to right, #0EA5E9 0%, #0EA5E9 var(--value), #3F3F46 var(--value), #3F3F46 100%);
          height: 8px;
          border-radius: 4px;
        }

        .slider::-moz-range-track {
          background: #3F3F46;
          height: 8px;
          border-radius: 4px;
        }

        .slider::-moz-range-progress {
          background: #0EA5E9;
          height: 8px;
          border-radius: 4px;
        }
      `}</style>
    </div>
    </section>
    </div>
  );
};


export default Jobs;
