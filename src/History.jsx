// Complete Enterprise-Grade Job History Dashboard
// GPU Compute Marketplace Platform

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  BarChart2,
  Bot,
  Trophy,
  Book,
  Users,
  LifeBuoy,
  LogOut,
  Wallet,
  History
} from "lucide-react";
import {
  Calendar, Filter, Brain, Zap, Box, TrendingUp, Atom, Cpu, DollarSign, Star,
  Search, Bookmark, X, Copy, Edit, CheckCircle, XCircle, StopCircle, Play,
  Target, MoreVertical, Eye, RotateCcw, Download, Share, Terminal, MessageSquare,
  Trash2, FolderDown, Info, Settings, BarChart3, FileText, Receipt, BookOpen,
  AlertCircle, CreditCard, FileDown, Calculator, Clock, ChevronDown, ChevronUp,
  ArrowUpDown, ArrowUp, ArrowDown, Menu, SlidersHorizontal, Plus, Minus
} from 'lucide-react';

const JobHistoryDashboard = () => {
  // State Management
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedJobDetails, setSelectedJobDetails] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [sortConfig, setSortConfig] = useState({ key: 'startTime', direction: 'desc' });
  const [filters, setFilters] = useState({
    dateRange: '30d',
    status: [],
    jobType: [],
    priceRange: [0, 10000]
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [activeSection, setActiveSection] = useState('templates');

  // Data Constants
  const summaryStats = [
    { title: 'Total Jobs Completed', value: '2,847', change: '+12.3%', trend: 'up', icon: CheckCircle },
    { title: 'Total Compute Hours', value: '145,628', change: '+8.7%', trend: 'up', icon: Clock },
    { title: 'Total Amount Spent', value: '$89,432', change: '-5.2%', trend: 'down', icon: DollarSign },
    { title: 'Success Rate', value: '94.7%', change: '+2.1%', trend: 'up', icon: Target }
  ];

  const jobTypes = [
    { key: 'ai-training', label: 'AI Training', icon: Brain, color: '#0EA5E9' },
    { key: 'crypto-mining', label: 'Crypto Mining', icon: Zap, color: '#10B981' },
    { key: '3d-rendering', label: '3D Rendering', icon: Box, color: '#F59E0B' },
    { key: 'trading-algo', label: 'Trading Algorithms', icon: TrendingUp, color: '#EF4444' },
    { key: 'scientific', label: 'Scientific Computing', icon: Atom, color: '#A855F7' }
  ];

  const mockJobs = [
    {
      id: 'job-001',
      name: 'GPT-4 Fine-tuning Model',
      type: 'ai-training',
      status: 'completed',
      startTime: '2025-09-27T10:30:00Z',
      endTime: '2025-09-27T14:45:00Z',
      duration: '4h 15m',
      gpuSpecs: '8x RTX 4090',
      provider: 'DataCenter Alpha',
      providerRating: 4.8,
      cost: '$247.50',
      cryptoCost: '0.0847 ETH',
      performanceScore: 96,
      utilizationRate: 94.3
    },
    {
      id: 'job-002', 
      name: 'Ethereum Mining Pool',
      type: 'crypto-mining',
      status: 'failed',
      startTime: '2025-09-27T08:00:00Z',
      endTime: '2025-09-27T08:23:00Z',
      duration: '23m',
      gpuSpecs: '12x RTX 3080',
      provider: 'GPU Farm Beta',
      providerRating: 4.2,
      cost: '$15.75',
      cryptoCost: '0.0054 ETH',
      performanceScore: 0,
      utilizationRate: 12.7
    },
    {
      id: 'job-003',
      name: 'Architectural Visualization',
      type: '3d-rendering',
      status: 'in-progress',
      startTime: '2025-09-27T12:00:00Z',
      endTime: null,
      duration: '3h 18m',
      gpuSpecs: '4x RTX 4080',
      provider: 'Render Cloud',
      providerRating: 4.9,
      cost: '$156.20',
      cryptoCost: '0.0535 ETH',
      performanceScore: 88,
      utilizationRate: 87.4
    }
  ];

  const templates = [
    {
      id: 'template-1',
      name: 'GPT Fine-tuning Standard',
      type: 'ai-training',
      description: 'Optimized configuration for GPT model fine-tuning',
      uses: 847,
      avgCost: '$245',
      avgDuration: '4h 15m',
      lastUsed: '2 days ago',
      performance: 94.7,
      tags: ['AI', 'NLP', 'Training']
    },
    {
      id: 'template-2',
      name: 'Ethereum Mining Optimized',
      type: 'crypto-mining',
      description: 'High-efficiency ETH mining configuration',
      uses: 1203,
      avgCost: '$89',
      avgDuration: '24h',
      lastUsed: '5 hours ago',
      performance: 91.2,
      tags: ['Mining', 'ETH', 'Long-running']
    },
    {
      id: 'template-3',
      name: '4K Architectural Render',
      type: '3d-rendering',
      description: 'Professional quality architectural visualization',
      uses: 342,
      avgCost: '$156',
      avgDuration: '2h 30m',
      lastUsed: '1 week ago',
      performance: 88.9,
      tags: ['Architecture', '4K', 'Professional']
    }
  ];

  const favorites = [
    {
      id: 'fav-1',
      name: 'ML Model Training - ResNet50',
      provider: 'DataCenter Alpha',
      avgCost: '$180',
      lastUsed: '1 day ago',
      starred: true
    },
    {
      id: 'fav-2',
      name: 'Stable Diffusion Art Generation',
      provider: 'GPU Farm Beta',
      avgCost: '$45',
      lastUsed: '3 days ago',
      starred: true
    }
  ];

  const billingData = {
    currentMonth: {
      totalSpent: '$12,847',
      change: '+23.5%',
      jobCount: 847,
      avgCostPerJob: '$15.17'
    },
    paymentMethods: [
      { type: 'ETH Wallet', address: '0x742d...A3f9', balance: '2.4 ETH', primary: true },
      { type: 'Credit Card', last4: '4242', expiry: '12/27', primary: false },
      { type: 'BTC Wallet', address: '1A1z...P2SH', balance: '0.15 BTC', primary: false }
    ],
    recentTransactions: [
      { id: 'tx-001', date: '2025-09-27', description: 'AI Training Job #1847', amount: '-$247.50', status: 'completed' },
      { id: 'tx-002', date: '2025-09-27', description: 'Wallet Top-up', amount: '+$500.00', status: 'completed' },
      { id: 'tx-003', date: '2025-09-26', description: '3D Rendering Job #1846', amount: '-$156.20', status: 'pending' }
    ]
  };

  const periods = [
    { key: '24h', label: '24 Hours' },
    { key: '7d', label: '7 Days' },
    { key: '30d', label: '30 Days' },
    { key: '1y', label: '1 Year' }
  ];

  const tabs = [
    { key: 'overview', label: 'Overview', icon: Info },
    { key: 'configuration', label: 'Configuration', icon: Settings },
    { key: 'performance', label: 'Performance', icon: BarChart3 },
    { key: 'logs', label: 'Logs', icon: Terminal },
    { key: 'files', label: 'Files', icon: FileText },
    { key: 'billing', label: 'Billing', icon: Receipt }
  ];

  // Helper Functions
  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return <ArrowUpDown className="h-4 w-4" />;
    return sortConfig.direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10B981';
      case 'failed': return '#EF4444';
      case 'cancelled': return '#F59E0B';
      case 'in-progress': return '#0EA5E9';
      default: return '#A1A1AA';
    }
  };

  const getJobTypeIcon = (type) => {
    const jobType = jobTypes.find(jt => jt.key === type);
    return jobType ? jobType.icon : Box;
  };

  const toggleRowExpansion = (jobId) => {
    setExpandedRows(prev => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  const openJobDetails = (job) => {
    setSelectedJobDetails(job);
    setShowJobDetails(true);
  };

  const closeJobDetails = () => {
    setShowJobDetails(false);
    setSelectedJobDetails(null);
    setActiveTab('overview');
  };

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
    { icon: History, label: "History", active: true, link: "/history" },
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
    <div
      className="h-screen w-screen bg-[#0a0a0a] text-white flex relative overflow-hidden"
      style={{ width: "100vw" }}
    >
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
      <section className="rewardsSec dashboardSec">
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5]">
      {/* Header */}
      <header className="border-b border-[#3F3F46] bg-[#18181B] px-8 py-6" style={{maxHeight: '76.5px'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              {/* <div className="flex items-center space-x-2 text-[#A1A1AA] text-sm mb-2">
                <span>Dashboard</span>
                <span>/</span>
                <span className="text-[#F4F4F5]">Job History</span>
              </div> */}
              <h1 className="text-3xl font-bold text-[#F4F4F5]">Job History</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#A1A1AA]" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-[#23232B] border border-[#3F3F46] rounded-lg text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]"
                />
              </div>
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 bg-[#23232B] border border-[#3F3F46] rounded-lg hover:bg-[#3F3F46] transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="h-6 w-6 text-[#0EA5E9]" />
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-[#10B981]' : 'text-[#EF4444]'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#F4F4F5] mb-1">{stat.value}</p>
                  <p className="text-sm text-[#A1A1AA]">{stat.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {!sidebarCollapsed && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6 sticky top-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#F4F4F5]">Filters</h3>
                  <button className="text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Date Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#F4F4F5] mb-3">
                    <Calendar className="inline h-4 w-4 mr-2" />
                    Date Range
                  </label>
                  <select 
                    className="w-full p-2 bg-[#18181B] border border-[#3F3F46] rounded-lg text-[#F4F4F5] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]"
                    value={filters.dateRange}
                    onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
                  >
                    <option value="24h">Last 24 Hours</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="90d">Last 90 Days</option>
                    <option value="1y">Last Year</option>
                  </select>
                </div>

                {/* Job Status */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#F4F4F5] mb-3">
                    <Filter className="inline h-4 w-4 mr-2" />
                    Job Status
                  </label>
                  <div className="space-y-2">
                    {['completed', 'failed', 'cancelled', 'in-progress'].map(status => (
                      <label key={status} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 rounded border-[#3F3F46] bg-[#18181B] text-[#0EA5E9] focus:ring-[#0EA5E9] focus:ring-offset-0"
                        />
                        <span className="text-sm text-[#D4D4D8] capitalize">{status.replace('-', ' ')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Types */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#F4F4F5] mb-3">Job Types</label>
                  <div className="flex flex-wrap gap-2">
                    {jobTypes.map(type => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.key}
                          className="flex items-center px-3 py-2 bg-[#18181B] border border-[#3F3F46] rounded-lg text-sm text-[#D4D4D8] hover:bg-[#3F3F46] transition-colors"
                        >
                          <IconComponent className="h-4 w-4 mr-2" />
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Clear All */}
                <button className="w-full px-4 py-2 bg-[#EF4444] text-white rounded-lg font-medium hover:bg-[#DC2626] transition-colors">
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Performance Analytics */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#F4F4F5]">Performance Analytics</h2>
                <div className="flex items-center space-x-2">
                  {periods.map(period => (
                    <button
                      key={period.key}
                      onClick={() => setSelectedPeriod(period.key)}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                        selectedPeriod === period.key
                          ? 'bg-[#0EA5E9] text-white'
                          : 'bg-[#23232B] border border-[#3F3F46] text-[#D4D4D8] hover:bg-[#3F3F46]'
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                  <button className="flex items-center px-3 py-2 bg-[#23232B] border border-[#3F3F46] rounded-lg text-sm text-[#D4D4D8] hover:bg-[#3F3F46] transition-colors ml-4">
                    <Download className="h-4 w-4 mr-2" />
                    Export Charts
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Analytics Charts */}
                <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-[#F4F4F5] flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-[#0EA5E9]" />
                      Job Completion Trends
                    </h3>
                    <span className="text-sm text-[#10B981]">↗ +12.3%</span>
                  </div>
                  <div className="h-64 bg-[#18181B] rounded-lg border border-[#3F3F46] flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-[#A1A1AA] mx-auto mb-2" />
                      <p className="text-[#A1A1AA] text-sm">Interactive chart visualization</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-[#F4F4F5] flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-[#0EA5E9]" />
                      Cost Analysis Over Time
                    </h3>
                    <span className="text-sm text-[#EF4444]">↘ -5.2%</span>
                  </div>
                  <div className="h-64 bg-[#18181B] rounded-lg border border-[#3F3F46] flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-[#A1A1AA] mx-auto mb-2" />
                      <p className="text-[#A1A1AA] text-sm">Cost trend analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Templates & Favorites */}
            <div className="mb-8">
              <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg">
                <div className="border-b border-[#3F3F46] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-6">
                      <button
                        onClick={() => setActiveSection('templates')}
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          activeSection === 'templates'
                            ? 'bg-[#0EA5E9] text-white'
                            : 'text-[#D4D4D8] hover:text-[#F4F4F5] hover:bg-[#3F3F46]'
                        }`}
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        Job Templates
                      </button>
                      <button
                        onClick={() => setActiveSection('favorites')}
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          activeSection === 'favorites'
                            ? 'bg-[#0EA5E9] text-white'
                            : 'text-[#D4D4D8] hover:text-[#F4F4F5] hover:bg-[#3F3F46]'
                        }`}
                      >
                        <Star className="h-4 w-4 mr-2" />
                        Favorites
                      </button>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-[#0EA5E9] text-white text-sm font-medium rounded-lg hover:bg-[#0284C7] transition-colors">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Template
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {activeSection === 'templates' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {templates.map(template => {
                        const IconComponent = getJobTypeIcon(template.type);
                        return (
                          <div key={template.id} className="bg-[#18181B] border border-[#3F3F46] rounded-lg p-5 hover:border-[#0EA5E9] transition-colors group">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-[#23232B] border border-[#3F3F46] rounded-lg">
                                  <IconComponent className="h-5 w-5 text-[#0EA5E9]" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-[#F4F4F5]">{template.name}</h4>
                                  <p className="text-sm text-[#A1A1AA] mt-1">{template.description}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <button className="px-3 py-1 bg-[#0EA5E9] text-white text-sm rounded-lg hover:bg-[#0284C7] transition-colors">
                                Use Template
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {favorites.map(favorite => (
                        <div key={favorite.id} className="bg-[#18181B] border border-[#3F3F46] rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Star className="h-5 w-5 text-[#F59E0B] fill-current" />
                            <div>
                              <h4 className="font-medium text-[#F4F4F5]">{favorite.name}</h4>
                              <p className="text-sm text-[#A1A1AA]">Provider: {favorite.provider}</p>
                            </div>
                          </div>
                          <button className="px-3 py-1 bg-[#0EA5E9] text-white text-sm rounded-lg hover:bg-[#0284C7] transition-colors">
                            Quick Launch
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bulk Operations */}
            <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded border-[#3F3F46] bg-[#18181B] text-[#0EA5E9] focus:ring-[#0EA5E9] focus:ring-offset-0"
                    />
                    <span className="text-sm text-[#D4D4D8]">Select All ({mockJobs.length} jobs)</span>
                  </label>
                  <span className="text-sm text-[#A1A1AA]">
                    {selectedJobs.length} jobs selected
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center px-3 py-2 bg-[#18181B] border border-[#3F3F46] rounded-lg text-sm text-[#D4D4D8] hover:bg-[#3F3F46] transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                  <button className="flex items-center px-3 py-2 bg-[#18181B] border border-[#3F3F46] rounded-lg text-sm text-[#D4D4D8] hover:bg-[#3F3F46] transition-colors">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Rerun
                  </button>
                </div>
              </div>
            </div>

            {/* Jobs Table */}
            <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#18181B] border-b border-[#3F3F46]">
                    <tr>
                      <th className="px-6 py-4 text-left">
                        <input
                          type="checkbox"
                          className="rounded border-[#3F3F46] bg-[#09090B] text-[#0EA5E9]"
                        />
                      </th>
                      <th className="px-6 py-4 text-left">
                        <button
                          onClick={() => handleSort('name')}
                          className="flex items-center space-x-2 text-sm font-medium text-[#F4F4F5] hover:text-[#0EA5E9]"
                        >
                          <span>Job</span>
                          {getSortIcon('name')}
                        </button>
                      </th>
                      <th className="px-6 py-4 text-left">
                        <span className="text-sm font-medium text-[#F4F4F5]">Type</span>
                      </th>
                      <th className="px-6 py-4 text-left">
                        <span className="text-sm font-medium text-[#F4F4F5]">Status</span>
                      </th>
                      <th className="px-6 py-4 text-left">
                        <span className="text-sm font-medium text-[#F4F4F5]">Started</span>
                      </th>
                      <th className="px-6 py-4 text-left">
                        <span className="text-sm font-medium text-[#F4F4F5]">Duration</span>
                      </th>
                      <th className="px-6 py-4 text-left">
                        <span className="text-sm font-medium text-[#F4F4F5]">Provider</span>
                      </th>
                      <th className="px-6 py-4 text-left">
                        <span className="text-sm font-medium text-[#F4F4F5]">Cost</span>
                      </th>
                      <th className="px-6 py-4 text-left">
                        <span className="text-sm font-medium text-[#F4F4F5]">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockJobs.map((job, index) => {
                      const IconComponent = getJobTypeIcon(job.type);
                      const isExpanded = expandedRows[job.id];

                      return (
                        <React.Fragment key={job.id}>
                          <tr className={`border-b border-[#3F3F46] hover:bg-[#18181B] transition-colors ${
                            index % 2 === 0 ? 'bg-[#23232B]' : 'bg-[#1C1C23]'
                          }`}>
                            <td className="px-6 py-4">
                              <input
                                type="checkbox"
                                className="rounded border-[#3F3F46] bg-[#09090B] text-[#0EA5E9]"
                              />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={() => toggleRowExpansion(job.id)}
                                  className="text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors"
                                >
                                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </button>
                                <div>
                                  <button
                                    onClick={() => openJobDetails(job)}
                                    className="font-medium text-[#F4F4F5] hover:text-[#0EA5E9] transition-colors"
                                  >
                                    {job.name}
                                  </button>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <p className="text-xs text-[#A1A1AA]">{job.id}</p>
                                    <button className="text-[#A1A1AA] hover:text-[#F4F4F5]">
                                      <Copy className="h-3 w-3" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <IconComponent className="h-4 w-4 text-[#0EA5E9]" />
                                <span className="text-sm text-[#D4D4D8]">
                                  {jobTypes.find(jt => jt.key === job.type)?.label}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: getStatusColor(job.status) }}
                                />
                                <span className="text-sm text-[#D4D4D8] capitalize">
                                  {job.status.replace('-', ' ')}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#D4D4D8]">
                                {new Date(job.startTime).toLocaleString()}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#D4D4D8]">{job.duration}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                <p className="text-sm text-[#D4D4D8]">{job.provider}</p>
                                <div className="flex items-center space-x-1 mt-1">
                                  <Star className="h-3 w-3 text-[#F59E0B] fill-current" />
                                  <span className="text-xs text-[#A1A1AA]">{job.providerRating}</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                <p className="text-sm font-medium text-[#F4F4F5]">{job.cost}</p>
                                <p className="text-xs text-[#A1A1AA]">{job.cryptoCost}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <button className="p-2 hover:bg-[#3F3F46] rounded-lg transition-colors">
                                <MoreVertical className="h-4 w-4 text-[#A1A1AA]" />
                              </button>
                            </td>
                          </tr>

                          {isExpanded && (
                            <tr className="border-b border-[#3F3F46]">
                              <td colSpan="9" className="px-6 py-6 bg-[#18181B]">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                  <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4">
                                    <h4 className="font-medium text-[#F4F4F5] mb-3 flex items-center">
                                      <BarChart3 className="h-4 w-4 mr-2" />
                                      Resource Utilization
                                    </h4>
                                    <div className="space-y-3">
                                      <div>
                                        <div className="flex justify-between text-sm mb-1">
                                          <span className="text-[#A1A1AA]">GPU Utilization</span>
                                          <span className="text-[#F4F4F5]">{job.utilizationRate}%</span>
                                        </div>
                                        <div className="w-full bg-[#3F3F46] rounded-full h-2">
                                          <div
                                            className="bg-[#0EA5E9] h-2 rounded-full"
                                            style={{ width: `${job.utilizationRate}%` }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4">
                                    <h4 className="font-medium text-[#F4F4F5] mb-3 flex items-center">
                                      <Terminal className="h-4 w-4 mr-2" />
                                      Recent Logs
                                    </h4>
                                    <div className="text-xs text-[#A1A1AA] font-mono space-y-1">
                                      <p>[2025-09-27 14:42:15] Job completed successfully</p>
                                      <p>[2025-09-27 14:42:10] Finalizing results...</p>
                                      <p>[2025-09-27 14:41:58] Processing batch 847/850</p>
                                    </div>
                                  </div>

                                  <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4">
                                    <h4 className="font-medium text-[#F4F4F5] mb-3 flex items-center">
                                      <MessageSquare className="h-4 w-4 mr-2" />
                                      Provider Communication
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                      <p className="text-[#D4D4D8]">Auto-scaled to 8 GPUs</p>
                                      <p className="text-[#A1A1AA]">2 hours ago</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-[#3F3F46] bg-[#18181B]">
                <div className="flex items-center space-x-2 text-sm text-[#A1A1AA]">
                  <span>Showing</span>
                  <select className="bg-[#23232B] border border-[#3F3F46] rounded px-2 py-1 text-[#F4F4F5]">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  <span>of 2,847 jobs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-[#3F3F46] rounded text-sm text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#0EA5E9] transition-colors">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-[#0EA5E9] text-white rounded text-sm">1</button>
                  <button className="px-3 py-1 border border-[#3F3F46] rounded text-sm text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#0EA5E9] transition-colors">
                    2
                  </button>
                  <button className="px-3 py-1 border border-[#3F3F46] rounded text-sm text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#0EA5E9] transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Cost & Billing */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#F4F4F5]">Cost & Billing</h2>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center px-4 py-2 bg-[#23232B] border border-[#3F3F46] rounded-lg text-sm text-[#D4D4D8] hover:bg-[#3F3F46] transition-colors">
                    <FileDown className="h-4 w-4 mr-2" />
                    Download Receipt
                  </button>
                  <button className="flex items-center px-4 py-2 bg-[#23232B] border border-[#3F3F46] rounded-lg text-sm text-[#D4D4D8] hover:bg-[#3F3F46] transition-colors">
                    <Calculator className="h-4 w-4 mr-2" />
                    Tax Report
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                  <h3 className="font-medium text-[#F4F4F5] mb-4 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-[#0EA5E9]" />
                    September 2025
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-[#F4F4F5]">{billingData.currentMonth.totalSpent}</p>
                      <p className="text-sm text-[#10B981]">{billingData.currentMonth.change} vs last month</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                  <h3 className="font-medium text-[#F4F4F5] mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-[#0EA5E9]" />
                    Payment Methods
                  </h3>
                  <div className="space-y-3">
                    {billingData.paymentMethods.map((method, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-[#18181B] border border-[#3F3F46] rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#0EA5E9] rounded-lg flex items-center justify-center">
                            {method.type.includes('Wallet') ? (
                              <div className="w-3 h-3 bg-white rounded-full" />
                            ) : (
                              <CreditCard className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#F4F4F5]">{method.type}</p>
                          </div>
                        </div>
                        {method.primary && (
                          <span className="px-2 py-1 bg-[#10B981] text-white text-xs rounded">Primary</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                  <h3 className="font-medium text-[#F4F4F5] mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-[#F59E0B]" />
                    Outstanding
                  </h3>
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 text-[#10B981] mx-auto mb-3" />
                    <p className="text-[#D4D4D8] font-medium">All payments current</p>
                    <p className="text-sm text-[#A1A1AA]">No outstanding balances</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      {showJobDetails && selectedJobDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#3F3F46] bg-[#18181B]">
              <div>
                <h2 className="text-lg font-semibold text-[#F4F4F5]">{selectedJobDetails.name}</h2>
                <p className="text-sm text-[#A1A1AA]">Job ID: {selectedJobDetails.id}</p>
              </div>
              <button
                onClick={closeJobDetails}
                className="p-2 text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#3F3F46] rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex border-b border-[#3F3F46] bg-[#18181B] overflow-x-auto">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.key
                        ? 'border-[#0EA5E9] text-[#0EA5E9] bg-[#23232B]'
                        : 'border-transparent text-[#A1A1AA] hover:text-[#D4D4D8] hover:border-[#3F3F46]'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 overflow-y-auto max-h-[calc(90vh-200px)] p-6">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-[#18181B] border border-[#3F3F46] rounded-lg p-4">
                    <h4 className="font-medium text-[#F4F4F5] mb-3">Job Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#A1A1AA]">Type:</span>
                        <span className="text-[#D4D4D8]">{jobTypes.find(jt => jt.key === selectedJobDetails.type)?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#A1A1AA]">Started:</span>
                        <span className="text-[#D4D4D8]">{new Date(selectedJobDetails.startTime).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#A1A1AA]">Duration:</span>
                        <span className="text-[#D4D4D8]">{selectedJobDetails.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#18181B] border border-[#3F3F46] rounded-lg p-4">
                    <h4 className="font-medium text-[#F4F4F5] mb-3">Quick Actions</h4>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-center px-4 py-2 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Rerun Job
                      </button>
                      <button className="w-full flex items-center justify-center px-4 py-2 bg-[#23232B] border border-[#3F3F46] text-[#D4D4D8] rounded-lg hover:bg-[#3F3F46] transition-colors">
                        <Download className="h-4 w-4 mr-2" />
                        Download Results
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* Other tabs would have similar implementations */}
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
    </div>
  );
};

export default JobHistoryDashboard;