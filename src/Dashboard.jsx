import React, { useState, useEffect, useRef } from "react";
import "./dashboard.css";
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
import { useNavigate } from "react-router-dom";

// Main Dashboard Component
const ProviderDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [providerStatus, setProviderStatus] = useState("online");
  const [gpuData, setGpuData] = useState([
    {
      id: 1,
      model: "NVIDIA H100",
      status: "busy",
      utilization: 85,
      temp: 72,
      power: 320,
      rate: 2.5,
    },
    {
      id: 2,
      model: "NVIDIA A100",
      status: "online",
      utilization: 0,
      temp: 45,
      power: 0,
      rate: 1.8,
    },
    {
      id: 3,
      model: "RTX 4090",
      status: "online",
      utilization: 45,
      temp: 55,
      power: 180,
      rate: 0.85,
    },
    {
      id: 4,
      model: "RTX 4080",
      status: "maintenance",
      utilization: 0,
      temp: 38,
      power: 0,
      rate: 0.65,
    },
  ]);

  const [activeJobs, setActiveJobs] = useState([
    {
      id: "JOB-001",
      type: "AI Training",
      client: "TechCorp",
      rating: 4.8,
      gpu: "H100",
      progress: 65,
      earning: 2.5,
      eta: "2h 15m",
    },
    {
      id: "JOB-002",
      type: "Crypto Mining",
      client: "CryptoFarm",
      rating: 4.5,
      gpu: "RTX 4090",
      progress: 100,
      earning: 0.85,
      eta: "Ongoing",
    },
    {
      id: "JOB-003",
      type: "3D Rendering",
      client: "StudioMax",
      rating: 5.0,
      gpu: "A100",
      progress: 32,
      earning: 1.8,
      eta: "4h 30m",
    },
  ]);

  // Executive Overview Header Component
  const ExecutiveOverview = () => (
    <div className="executive-overview">
      <div className="status-section">
        <div className="provider-status">
          <div className={`status-indicator ${providerStatus}`}></div>
          <span className="status-text">Provider Status</span>
          <button
            className={`status-toggle ${providerStatus}`}
            onClick={() =>
              setProviderStatus(
                providerStatus === "online" ? "offline" : "online"
              )
            }
          >
            {providerStatus === "online" ? "GO OFFLINE" : "GO ONLINE"}
          </button>
        </div>
        <div className="reputation">
          <span className="reputation-score">4.9</span>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      <div className="metrics-section">
        <div className="metric">
          <h3>$12,847</h3>
          <span className="metric-label">Monthly Earnings</span>
          <span className="trend positive">+23.5%</span>
        </div>
        <div className="metric">
          <h3>8</h3>
          <span className="metric-label">Active Jobs</span>
          <div className="pulse-indicator"></div>
        </div>
      </div>

      <div className="actions-section">
        <button className="emergency-stop">EMERGENCY STOP</button>
        <button className="action-btn">Settings</button>
        <button className="action-btn">Support</button>
      </div>
    </div>
  );

  // Financial Performance Cards Component
  const FinancialCards = () => (
    <div className="financial-cards">
      <div className="card">
        <div className="card-header">
          <h4>Total Lifetime Earnings</h4>
          <span className="crypto-symbol">₿</span>
        </div>
        <div className="card-value">$284,592</div>
        <div className="card-trend positive">+156.7% since inception</div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>This Month's Revenue</h4>
          <span className="trend-arrow up">↗</span>
        </div>
        <div className="card-value">$12,847</div>
        <div className="card-trend positive">+23.5% vs last month</div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>Pending Payouts</h4>
          <span className="countdown">2d 14h</span>
        </div>
        <div className="card-value">$3,240</div>
        <div className="card-trend neutral">Next payout cycle</div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>Average Hourly Rate</h4>
          <span className="market-comparison">+15% vs market</span>
        </div>
        <div className="card-value">$1.89</div>
        <div className="card-trend positive">Above market average</div>
      </div>
    </div>
  );

  // GPU Resource Management Component
  const GPUManagement = () => (
    <div className="gpu-management">
      <div className="section-header">
        <h3>GPU Resources</h3>
        <button className="add-gpu-btn">+ Add GPU</button>
      </div>

      <div className="gpu-grid">
        {gpuData.map((gpu) => (
          <div key={gpu.id} className="gpu-card">
            <div className="gpu-header">
              <h4>{gpu.model}</h4>
              <span className={`status-badge ${gpu.status}`}>{gpu.status}</span>
            </div>

            <div className="gpu-metrics">
              <div className="metric-item">
                <span className="metric-label">Utilization</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${gpu.utilization}%` }}
                  ></div>
                </div>
                <span className="metric-value">{gpu.utilization}%</span>
              </div>

              <div className="metric-item">
                <span className="metric-label">Temperature</span>
                <div
                  className={`temperature-gauge ${
                    gpu.temp > 70 ? "warning" : "normal"
                  }`}
                >
                  <span>{gpu.temp}°C</span>
                </div>
              </div>

              <div className="metric-item">
                <span className="metric-label">Power Draw</span>
                <span className="metric-value">{gpu.power}W</span>
              </div>

              <div className="metric-item">
                <span className="metric-label">Rate/Hour</span>
                <span className="metric-value">${gpu.rate}</span>
              </div>
            </div>

            <div className="gpu-controls">
              <label className="toggle-switch">
                <input type="checkbox" onChange={()=>{}} checked={gpu.status !== "offline"} />
                <span className="slider"></span>
              </label>
              <button className="config-btn">Configure</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Active Jobs Monitoring Component
  const ActiveJobsTable = () => (
    <div className="jobs-monitoring">
      <div className="section-header">
        <h3>Active Jobs</h3>
        <div className="table-controls">
          <input
            type="text"
            placeholder="Search jobs..."
            className="search-input"
          />
          <button className="filter-btn">Filter</button>
          <div className="auto-refresh"><RefreshCw size={11}/> Auto-refresh: 5s</div>
        </div>
      </div>

      <div className="jobs-table">
        <table>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Type</th>
              <th>Client</th>
              <th>GPU</th>
              <th>Progress</th>
              <th>Rate/Hr</th>
              <th>ETA</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeJobs.map((job) => (
              <tr key={job.id}>
                <td>
                  <a href="#" className="job-link">
                    {job.id}
                  </a>
                </td>
                <td>
                  <span style={{backgroundColor: '#10B981'} }
                    className={`job-type-badge ${job.type
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {job.type}
                  </span>
                </td>
                <td>
                  <div className="client-info">
                    <span>{job.client}</span>
                    <div className="rating">★ {job.rating}</div>
                  </div>
                </td>
                <td>{job.gpu}</td>
                <td>
                  <div className="progress-cell">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                    <span>{job.progress}%</span>
                  </div>
                </td>
                <td>${job.earning}</td>
                <td>{job.eta}</td>
                <td>
                  <button className="action-btn small">Details</button>
                  <button className="emergency-btn small">Stop</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Performance Analytics Component
  const PerformanceAnalytics = () => (
    <div className="performance-analytics">
      <div className="section-header">
        <h3>Performance Analytics</h3>
        <div className="time-selectors">
          <button className="time-btn active">24H</button>
          <button className="time-btn">7D</button>
          <button className="time-btn">30D</button>
          <button className="time-btn">1Y</button>
        </div>
      </div>

      <div className="analytics-grid">
              <div className="chart-card">
          <h4>Earnings Trend</h4>
          <div className="chart-placeholder" style={{ position: "relative" }}>
            {/* Overlay SVG polyline connecting the points */}
            <svg
              className="trend-svg"
              style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none" }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Polyline points match the percent positions of the points below */}
              <polyline
                points="10,79 28.5,55 49,40 70,18.5 90,23"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />
            </svg>
            <div className="trend-line"></div>
            <div className="data-points">
              <div className="point" style={{ left: "10%", bottom: "20%" }}></div>
              <div className="point" style={{ left: "30%", bottom: "45%" }}></div>
              <div className="point" style={{ left: "50%", bottom: "60%" }}></div>
              <div className="point" style={{ left: "70%", bottom: "80%" }}></div>
              <div className="point" style={{ left: "90%", bottom: "75%" }}></div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h4>GPU Utilization Heatmap</h4>
          <div className="heatmap-grid">
            <div className="heatmap-cell high"></div>
            <div className="heatmap-cell medium"></div>
            <div className="heatmap-cell low"></div>
            <div className="heatmap-cell high"></div>
            <div className="heatmap-cell high"></div>
            <div className="heatmap-cell medium"></div>
            <div className="heatmap-cell low"></div>
            <div className="heatmap-cell medium"></div>
          </div>
        </div>

        <div className="metrics-card">
          <h4>Key Performance Indicators</h4>
          <div className="kpi-list">
            <div className="kpi-item">
              <span className="kpi-label">Job Completion Rate</span>
              <span className="kpi-value">98.7%</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">Average Efficiency</span>
              <span className="kpi-value">94.2%</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">Uptime</span>
              <span className="kpi-value">99.8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Hardware Health Monitoring Component
  const HardwareHealth = () => (
    <div className="hardware-health">
      <h3>System Health</h3>
      <div className="health-grid">
        <div className="health-card">
          <h4>CPU Usage</h4>
          <div className="gauge-container">
            <div className="gauge">
              <div
                className="gauge-fill"
                style={{ transform: "rotate(126deg)" }}
              ></div>
              <div className="gauge-center">42%</div>
            </div>
          </div>
        </div>

        <div className="health-card">
          <h4>Memory Usage</h4>
          <div className="gauge-container">
            <div className="gauge gauge2">
              <div
                className="gauge-fill"
                style={{ transform: "rotate(162deg)" }}
              ></div>
              <div className="gauge-center">67%</div>
            </div>
          </div>
        </div>

        <div className="health-card">
          <h4>Network I/O</h4>
          <div className="network-stats">
            <div className="stat">
              <span className="label">↑ Upload</span>
              <span className="value">125 MB/s</span>
            </div>
            <div className="stat">
              <span className="label">↓ Download</span>
              <span className="value">87 MB/s</span>
            </div>
          </div>
        </div>

        <div className="health-card">
          <h4>Storage</h4>
          <div className="storage-info">
            <div className="storage-bar">
              <div className="storage-used" style={{ width: "35%" }}></div>
            </div>
            <span className="storage-text">1.2TB / 3.4TB</span>
          </div>
        </div>
      </div>

      <div className="alerts-panel">
        <h4>System Alerts</h4>
        <div className="alert-item warning">
          <span className="alert-icon">⚠</span>
          <span className="alert-text">
            GPU #3 temperature above optimal (78°C)
          </span>
          <span className="alert-time">2 min ago</span>
        </div>
      </div>
    </div>
  );

  // Market Intelligence Component
  const MarketIntelligence = () => (
    <div className="market-intelligence">
      <h3>Market Intelligence</h3>
      <div className="market-grid">
        <div className="market-card">
          <h4>Current Rates</h4>
          <div className="rate-list">
            <div className="rate-item">
              <span className="gpu-type">H100</span>
              <span className="rate-range">$2.20 - $2.80</span>
              <span className="trend positive">+5.2%</span>
            </div>
            <div className="rate-item">
              <span className="gpu-type">A100</span>
              <span className="rate-range">$1.60 - $2.00</span>
              <span className="trend positive">+2.1%</span>
            </div>
            <div className="rate-item">
              <span className="gpu-type">RTX 4090</span>
              <span className="rate-range">$0.70 - $0.95</span>
              <span className="trend negative">-1.5%</span>
            </div>
          </div>
        </div>

        <div className="market-card">
          <h4>Demand Forecast</h4>
          <div className="demand-indicator">
            <div className="demand-bar high"></div>
            <span className="demand-label">High Demand</span>
            <span className="demand-note">AI training surge expected</span>
          </div>
        </div>

        <div className="market-card">
          <h4>Optimization Tips</h4>
          <div className="tip-list">
            <div className="tip-item">
              <span className="tip-icon"><Lightbulb size={12}/></span>
              <span className="tip-text">
                Increase H100 rate by 8% for optimal profit
              </span>
            </div>
            <div className="tip-item">
              <span className="tip-icon"><TrendingUp size={12} /></span>
              <span className="tip-text">
                Peak hours: 9AM-5PM EST (+15% demand)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Sidebar Navigation Component

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
    { icon: BarChart3, label: "Dashboard", active: true, link: "/dashboard" },
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
              <button className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-[#2a2a2a] transition-all duration-200">
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
        <div className="dashboard">
          <div className="main-content">
            <ExecutiveOverview />
            <FinancialCards />
            <GPUManagement />
            <ActiveJobsTable />
            <PerformanceAnalytics />
            <HardwareHealth />
            <MarketIntelligence />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProviderDashboard;
