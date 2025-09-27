import React, { useState, useEffect, useRef } from "react";
import "./NFTDashboard.css";
import { useNavigate } from "react-router-dom";
import { 
  Copy, 
  BanknoteArrowDown,
  Home,
  BarChart3, 
  Settings, 
  HelpCircle, 
  MessageCircle, 
  Book, 
  Users, 
  Search,
  Zap,
  Heart,
  BarChart2,
  Clock,
  MapPin,
  Star,
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
  TrendingUp,
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

const NFTDashboard = () => {
  const [activeTab, setActiveTab] = useState("referral");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [userStats, setUserStats] = useState({
    totalBadges: 47,
    referralEarnings: 2847.32,
    streakDays: 23,
    currentRank: "Diamond",
    level: 12,
    levelProgress: 78,
  });

  // Mock NFT badge data
  const nftBadges = [
    {
      id: 1,
      name: "First Referral",
      rarity: "Common",
      image: "🎯",
      dateEarned: "2024-03-15",
      description: "Successfully referred your first user",
    },
    {
      id: 2,
      name: "GPU Master",
      rarity: "Legendary",
      image: "⚡",
      dateEarned: "2024-03-20",
      description: "Provided 1000+ hours of GPU compute",
    },
    {
      id: 3,
      name: "Community Hero",
      rarity: "Epic",
      image: "🏆",
      dateEarned: "2024-03-25",
      description: "Helped 50+ users in the community",
    },
    {
      id: 4,
      name: "Early Adopter",
      rarity: "Rare",
      image: "🚀",
      dateEarned: "2024-02-10",
      description: "Joined during the beta phase",
    },
    {
      id: 5,
      name: "Milestone Walker",
      rarity: "Common",
      image: "📈",
      dateEarned: "2024-03-30",
      description: "Completed 100 GPU jobs",
    },
    {
      id: 6,
      name: "Crypto Whale",
      rarity: "Legendary",
      image: "🐋",
      dateEarned: "2024-04-01",
      description: "Earned over 10,000 tokens",
    },
    {
      id: 7,
      name: "Speed Runner",
      rarity: "Epic",
      image: "💨",
      dateEarned: "2024-04-05",
      description: "Completed jobs 50% faster than average",
    },
    {
      id: 8,
      name: "Night Owl",
      rarity: "Rare",
      image: "🦉",
      dateEarned: "2024-04-10",
      description: "Active during peak hours for 30 days",
    },
  ];

  const leaderboardData = [
    {
      rank: 1,
      username: "CryptoMiner_2024",
      badges: 89,
      avatar: "👑",
      money: "$432",
    },
    {
      rank: 2,
      username: "GPU_Wizard",
      badges: 76,
      avatar: "🧙",
      money: "$392",
    },
    {
      rank: 3,
      username: "BlockchainBeast",
      badges: 65,
      avatar: "🦄",
      money: "$248",
    },
    { rank: 4, username: "TokenHunter", badges: 58, avatar: "🎯" },
    { rank: 5, username: "DefiDegen", badges: 52, avatar: "💎" },
    { rank: 6, username: "You", badges: 47, avatar: "🚀", isCurrentUser: true },
    { rank: 7, username: "NFTCollector", badges: 43, avatar: "🖼️" },
    { rank: 8, username: "Web3Builder", badges: 39, avatar: "🔨" },
  ];

  const getRarityColor = (rarity) => {
    const colors = {
      Common: "#71717A",
      Rare: "#0EA5E9",
      Epic: "#A855F7",
      Legendary: "#F59E0B",
    };
    return colors[rarity] || "#71717A";
  };

  const BadgeCard = ({ badge }) => (
    <div className={`badge-card badge-${badge.rarity.toLowerCase()}`}>
      <div className="badge-glow"></div>
      <div className="badge-image">
        <span className="badge-emoji">{badge.image}</span>
        <div className="blockchain-indicator">⛓️</div>
      </div>
      <div className="badge-info">
        <h4 className="badge-name">{badge.name}</h4>
        <span className={`badge-rarity rarity-${badge.rarity.toLowerCase()}`}>
          {badge.rarity}
        </span>
        <p className="badge-description">{badge.description}</p>
        <span className="badge-date">Earned: {badge.dateEarned}</span>
      </div>
      <div className="badge-actions">
        <button className="action-btn view-btn">View in Wallet</button>
        <button className="action-btn sell-btn">List for Sale</button>
      </div>
    </div>
  );

  const MetricCard = ({
    icon,
    title,
    value,
    change,
    prefix = "",
    suffix = "",
  }) => (
    <div className="metric-card">
      <div className="metric-icon">{icon}</div>
      <div className="metric-content">
        <h3 className="metric-title">{title}</h3>
        <div className="metric-value">
          {prefix}
          {value}
          {suffix}
        </div>
        <div
          className={`metric-change ${change >= 0 ? "positive" : "negative"}`}
        >
          {change >= 0 ? "↗" : "↘"} {Math.abs(change)}%
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
    { icon: Bot, label: "AI Job Submission", active: false, link: "/jobs" },
    { icon: Wallet, label: "Wallet", active: false, link: "/wallet" },
    { icon: History, label: "History", active: false, link: "/history" },
    {
      icon: Trophy,
      label: "NFTs & Achievements",
      active: true,
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
    <section className="rewardsSec">

      <div className="nft-dashboard">
        {/* Header Section */}
        <header className="dashboard-header">
          <div className="header-content">
            <div className="header-left">
              <h1 className="page-title">
                <span className="title-gradient">Rewards & Achievements</span>
              </h1>
              <div className="user-level">
                <div className="level-info">
                  <span className="level-label">Level {userStats.level}</span>
                  <span className="rank-badge">{userStats.currentRank}</span>
                </div>
                <div className="level-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${userStats.levelProgress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {userStats.levelProgress}% to next level
                  </span>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="earnings-display">
                <div className="total-earnings">
                  <span className="earnings-label">Total Earnings</span>
                  <span className="earnings-value">$2,847.32</span>
                </div>
                <div className="nft-value">
                  <span className="nft-label">NFT Collection Value</span>
                  <span className="nft-value-amount">$15,420.50</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Metrics Overview */}
        <section className="metrics-overview">
          <div className="metrics-grid">
            <MetricCard
              icon="🎨"
              title="Total NFT Badges"
              value={userStats.totalBadges}
              change={12.5}
            />
            <MetricCard
              icon="💰"
              title="Referral Earnings"
              value={userStats.referralEarnings.toLocaleString()}
              change={24.3}
              prefix="$"
            />
            <MetricCard
              icon="🔥"
              title="Current Streak"
              value={userStats.streakDays}
              change={8.7}
              suffix=" days"
            />
            <MetricCard
              icon="🏆"
              title="Current Rank"
              value={userStats.currentRank}
              change={15.2}
            />
          </div>
        </section>

        {/* NFT Badge Collection */}
        <section className="badge-collection">
          <div className="section-header">
            <h2 className="section-title">NFT Badge Collection</h2>
            <div className="filter-controls">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Rarities</option>
                <option value="legendary">Legendary</option>
                <option value="epic">Epic</option>
                <option value="rare">Rare</option>
                <option value="common">Common</option>
              </select>
            </div>
          </div>

          <div className="badges-grid">
            {nftBadges
              .filter(
                (badge) =>
                  selectedFilter === "all" ||
                  badge.rarity.toLowerCase() === selectedFilter
              )
              .map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
          </div>
        </section>

        {/* Achievement Categories */}
        <section className="achievement-categories">
          <div className="section-header">
            <h2 className="section-title">Achievement Categories</h2>
          </div>

          <div className="tabs-container">
            <div className="tabs-nav">
              {["referral", "gpu", "user", "community", "events"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
                  {tab === "referral"
                    ? "Milestones"
                    : tab === "gpu"
                    ? "Provider"
                    : tab === "user"
                    ? "Achievements"
                    : tab === "community"
                    ? "Badges"
                    : "Events"}
                </button>
              ))}
            </div>

            <div className="tab-content">
              <div className="progress-items">
                <div className="progress-item">
                  <div className="progress-info">
                    <span className="progress-name">
                      Next Milestone: 100 Referrals
                    </span>
                    <span className="progress-reward">
                      Reward: Legendary Badge + 500 tokens
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "73%" }}
                      ></div>
                    </div>
                    <span className="progress-percent">73/100</span>
                  </div>
                </div>

                <div className="progress-item">
                  <div className="progress-info">
                    <span className="progress-name">
                      Referral Master: 500 Referrals
                    </span>
                    <span className="progress-reward">
                      Reward: Ultra Rare Badge + 2000 tokens
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                    <span className="progress-percent">73/500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Program */}
        <section className="referral-program">
          <div className="section-header">
            <h2 className="section-title">Referral Program</h2>
          </div>

          <div className="referral-content">
            <div className="referral-link-card">
              <h3>Your Referral Link</h3>
              <div className="link-container">
                <input
                  type="text"
                  value="https://platform.com/ref/user123abc"
                  readOnly
                  className="referral-input"
                />
                <button className="copy-btn flex items-center">
                  <Copy className="mr-2" size={16} /> Copy
                </button>
              </div>
              <div className="leaderboard-list">
                {leaderboardData.slice(0, 3).map((user) => (
                  <div
                    key={user.rank}
                    className={`leaderboard-item ${
                      user.isCurrentUser ? "current-user" : ""
                    }`}
                  >
                    <div className="rank">#{user.rank}</div>
                    <div className="user-info">
                      <span className="avatar">{user.avatar}</span>
                      <span className="username">{user.username}</span>
                    </div>
                    <div className="user-badges">{user.money}</div>
                  </div>
                ))}
              </div>
              {/* <div className="qr-code">
              <div className="qr-placeholder"></div>
            </div> */}
            </div>

            <div className="referral-stats">
              <div className="stat-item">
                <span className="stat-value">73</span>
                <span className="stat-label">Active Referrals</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">$2,847</span>
                <span className="stat-label">Total Earnings</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">68%</span>
                <span className="stat-label">Conversion Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="leaderboard">
          <div className="section-header">
            <h2 className="section-title">Global Leaderboard</h2>
            <div className="time-filter">
              <button className="time-btn active">All Time</button>
              <button className="time-btn">Monthly</button>
              <button className="time-btn">Weekly</button>
            </div>
          </div>

          <div className="leaderboard-list">
            {leaderboardData.map((user) => (
              <div
                key={user.rank}
                className={`leaderboard-item ${
                  user.isCurrentUser ? "current-user" : ""
                }`}
              >
                <div className="rank">#{user.rank}</div>
                <div className="user-info">
                  <span className="avatar">{user.avatar}</span>
                  <span className="username">{user.username}</span>
                </div>
                <div className="user-badges">{user.badges} badges</div>
              </div>
            ))}
          </div>
        </section>

        {/* Rewards Panel */}
        <section className="rewards-panel">
          <div className="panel-grid">
            <div className="wallet-balance">
              <h3>Cryptocurrency Wallet</h3>
              <div className="balance-display">
                <div className="balance-item">
                  <span className="currency">COMPUTE</span>
                  <span className="amount">15,420.50</span>
                </div>
                <div className="balance-item">
                  <span className="currency">ETH</span>
                  <span className="amount">2.847</span>
                </div>
              </div>
              <button className="withdraw-btn flex items-center content-center">
                <BanknoteArrowDown className="mr-4" /> Withdraw Earnings
              </button>
            </div>

            <div className="earnings-breakdown">
              <h3>Earnings Breakdown</h3>
              <div className="breakdown-items">
                <div className="breakdown-item">
                  <span className="source">Referrals</span>
                  <span className="amount">$1,847.32</span>
                </div>
                <div className="breakdown-item">
                  <span className="source">Achievements</span>
                  <span className="amount">$650.00</span>
                </div>
                <div className="breakdown-item">
                  <span className="source">Bonuses</span>
                  <span className="amount">$350.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NFT Marketplace Integration */}
        <section className="marketplace-integration">
          <div className="section-header">
            <h2 className="section-title">NFT Marketplace</h2>
            <button className="browse-btn">Browse Marketplace →</button>
          </div>

          <div className="marketplace-content">
            <div className="recent-sales">
              <h3>Recent Badge Sales</h3>
              <div className="sales-list">
                <div className="sale-item">
                  <span className="badge-info">⚡ GPU Master</span>
                  <span className="sale-price">2.5 ETH</span>
                </div>
                <div className="sale-item">
                  <span className="badge-info">🏆 Community Hero</span>
                  <span className="sale-price">1.2 ETH</span>
                </div>
                <div className="sale-item">
                  <span className="badge-info">🚀 Early Adopter</span>
                  <span className="sale-price">0.8 ETH</span>
                </div>
              </div>
            </div>

            <div className="trending-badges">
              <h3>Trending Badges</h3>
              <div className="trending-list">
                <div className="trending-item">
                  <span className="trend-badge">🐋 Crypto Whale</span>
                  <span className="trend-change positive">+23.5%</span>
                </div>
                <div className="trending-item">
                  <span className="trend-badge">💨 Speed Runner</span>
                  <span className="trend-change positive">+15.2%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    </div>
  );
};

export default NFTDashboard;
