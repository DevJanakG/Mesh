import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import {
  MessageSquare, BookOpen, LifeBuoy, Calendar, Trophy, MessageCircle, 
  Settings, Cpu, Brain, Zap, Box, TrendingUp, Plus, HelpCircle, Search,
  Star, ChevronUp, ChevronDown, PlayCircle, GraduationCap, CheckSquare,
  Wrench, Reply, Award, Users, Heart, Clock, Megaphone, Sparkles,
  AlertTriangle, User, Eye, ThumbsUp, Pin, Filter, Bell, Menu, X,
  Globe, Coins, Shield, Verified, ChevronRight, ChevronLeft, MoreHorizontal
} from 'lucide-react';

const CommunityPlatform = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlineUsers, setOnlineUsers] = useState(12847);

  const colors = {
    primaryBg: '#09090B',
    secondaryBg: '#18181B', 
    cardBg: '#23232B',
    border: '#3F3F46',
    textPrimary: '#F4F4F5',
    textSecondary: '#D4D4D8',
    textMuted: '#A1A1AA',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    accent: '#0EA5E9'
  };

  const communityStats = {
    totalMembers: '2.4M',
    postsThisWeek: '15.2K',
    questionsAnswered: '98.7K',
    onlineNow: onlineUsers.toLocaleString()
  };

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, count: 2847 },
    { id: 'general', name: 'General Discussion', icon: MessageCircle, count: 1243 },
    { id: 'technical', name: 'Technical Support', icon: Settings, count: 892 },
    { id: 'providers', name: 'Provider Tips', icon: Cpu, count: 567 },
    { id: 'ai-ml', name: 'AI & ML', icon: Brain, count: 1456 },
    { id: 'crypto', name: 'Crypto Mining', icon: Zap, count: 743 },
    { id: 'rendering', name: '3D Rendering', icon: Box, count: 321 },
    { id: 'trading', name: 'Trading Algorithms', icon: TrendingUp, count: 234 }
  ];

  const discussionPosts = [
    {
      id: 1,
      title: "Best practices for optimizing GPU utilization across distributed networks",
      author: "CryptoMiner_Pro",
      avatar: "🔥",
      reputation: 15420,
      category: "Provider Tips",
      preview: "After running distributed GPU operations for 2+ years, I've discovered several optimization techniques that increased my daily earnings by 340%. Here's what worked...",
      views: 12847,
      replies: 234,
      likes: 892,
      timeAgo: "2h",
      lastActivity: "12m ago",
      status: "trending",
      badges: ["verified", "expert"]
    },
    {
      id: 2,
      title: "URGENT: Memory leak causing system crashes during AI training jobs",
      author: "DeepLearning_Dev",
      avatar: "🧠",
      reputation: 8934,
      category: "Technical Support", 
      preview: "My RTX 4090 rig keeps crashing after 6-8 hours of continuous AI model training. Memory usage steadily increases until system freeze. Has anyone encountered this?",
      views: 3421,
      replies: 45,
      likes: 123,
      timeAgo: "4h",
      lastActivity: "23m ago",
      status: "unsolved",
      badges: ["urgent"]
    },
    {
      id: 3,
      title: "New Web3 rewards system: Earn 25% more tokens with these strategies",
      author: "TokenWhale",
      avatar: "🐋",
      reputation: 23567,
      category: "Trading Algorithms",
      preview: "The latest platform update introduced dynamic reward multipliers based on network contribution and reliability scores. I've tested various approaches...",
      views: 8765,
      replies: 156,
      likes: 567,
      timeAgo: "6h", 
      lastActivity: "1h ago",
      status: "solved",
      badges: ["verified", "whale"]
    },
    {
      id: 4,
      title: "Hardware recommendation: RTX 4090 vs RTX 4080 for distributed computing",
      author: "HardwareGuru",
      avatar: "⚡",
      reputation: 19876,
      category: "Provider Tips",
      preview: "Comprehensive analysis of ROI, power efficiency, and earning potential between these two flagship GPUs. Real-world data from 6 months of operation...",
      views: 5432,
      replies: 87,
      likes: 298,
      timeAgo: "8h",
      lastActivity: "2h ago",
      status: "trending",
      badges: ["verified", "expert"]
    },
    {
      id: 5,
      title: "Smart contract vulnerability discovered in reward distribution system",
      author: "SecurityAuditor_X",
      avatar: "🛡️",
      reputation: 31245,
      category: "Technical Support",
      preview: "Critical security vulnerability affecting reward calculations for providers. Immediate action required. Here's what we found and how to protect yourself...",
      views: 15623,
      replies: 312,
      likes: 1456,
      timeAgo: "12h",
      lastActivity: "5m ago",
      status: "urgent",
      badges: ["verified", "security-expert", "whale"]
    }
  ];

  const leaderboard = [
    { rank: 1, username: "GPU_Wizard", reputation: 47892, badge: "legendary", earnings: "12.4K COMP" },
    { rank: 2, username: "DistributedKing", reputation: 41267, badge: "expert", earnings: "10.8K COMP" },
    { rank: 3, username: "CloudMiner_Elite", reputation: 38945, badge: "expert", earnings: "9.2K COMP" },
    { rank: 4, username: "AI_Researcher_Pro", reputation: 35621, badge: "expert", earnings: "8.7K COMP" },
    { rank: 5, username: "CryptoValidator", reputation: 32187, badge: "advanced", earnings: "7.9K COMP" }
  ];

  const upcomingEvents = [
    { title: "Decentralized Computing Summit 2025", date: "Oct 15", attendees: 2847, type: "conference" },
    { title: "GPU Provider Masterclass", date: "Oct 22", attendees: 1256, type: "workshop" },
    { title: "AI Training Optimization Workshop", date: "Nov 5", attendees: 892, type: "technical" },
    { title: "Web3 Rewards Strategy Deep Dive", date: "Nov 12", attendees: 634, type: "webinar" }
  ];

  const knowledgeBaseSections = [
    { 
      title: "Getting Started Guide", 
      icon: PlayCircle, 
      articles: 12, 
      category: "Beginner",
      description: "Everything you need to know to start earning with your GPU",
      readTime: "30 min read"
    },
    { 
      title: "Advanced GPU Optimization", 
      icon: GraduationCap, 
      articles: 24, 
      category: "Expert",
      description: "Professional techniques for maximizing compute efficiency",
      readTime: "2 hours read"
    },
    { 
      title: "Best Practices", 
      icon: CheckSquare, 
      articles: 18, 
      category: "Intermediate",
      description: "Industry standards and proven methodologies",
      readTime: "1 hour read"
    },
    { 
      title: "Troubleshooting Guide", 
      icon: Wrench, 
      articles: 35, 
      category: "Support",
      description: "Common issues and their solutions",
      readTime: "45 min read"
    },
    { 
      title: "Security & Safety", 
      icon: Shield, 
      articles: 16, 
      category: "Critical",
      description: "Protect your hardware and earnings",
      readTime: "1.5 hours read"
    },
    { 
      title: "Economics & Rewards", 
      icon: Coins, 
      articles: 21, 
      category: "Advanced",
      description: "Understanding the tokenomics and reward mechanisms",
      readTime: "2.5 hours read"
    }
  ];

  const recentActivity = [
    { type: "post", user: "NewMember123", action: "posted in Technical Support", time: "2m" },
    { type: "reply", user: "ExpertHelper", action: "replied to GPU Optimization", time: "5m" },
    { type: "join", user: "FutureProvider", action: "joined the community", time: "8m" },
    { type: "achievement", user: "TopContributor", action: "earned Expert badge", time: "12m" },
    { type: "post", user: "CloudComputing_Fan", action: "posted in AI & ML", time: "15m" }
  ];

  return (
    <div
      className="h-screen w-screen bg-[#0a0a0a] text-white flex relative overflow-hidden"
      style={{ width: "100vw" }}
    >
    <Sidebar />
    <section className="rewardsSec">
    <div 
      className="min-h-screen w-full"
      style={{ 
        backgroundColor: colors.primaryBg,
        color: colors.textPrimary,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      {/* Header */}
      <header 
        className="border-b sticky top-0 z-50 backdrop-blur-sm"
        style={{ 
          backgroundColor: colors.secondaryBg + 'f0',
          borderColor: colors.border
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 w-16 h-16 rounded-lg">
                  <img src="/logo.png" alt="" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight" style={{ color: colors.textPrimary }}>
                    Mesh
                  </h1>
                  <p className="text-sm font-medium" style={{ color: colors.textMuted }}>
                    Decentralized GPU Community
                  </p>
                </div>
              </div>

              <nav className="hidden lg:flex space-x-1">
                {[
                  { id: 'discussions', label: 'Discussions', icon: MessageSquare },
                  { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
                  { id: 'support', label: 'Support', icon: LifeBuoy },
                  { id: 'events', label: 'Events', icon: Calendar },
                  { id: 'leaderboards', label: 'Leaderboards', icon: Trophy }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                    style={{
                      backgroundColor: activeTab === tab.id ? colors.accent + '20' : 'transparent',
                      color: activeTab === tab.id ? colors.accent : colors.textSecondary,
                      border: activeTab === tab.id ? `1px solid ${colors.accent}40` : '1px solid transparent'
                    }}
                  >
                    <tab.icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
             

              <button 
                className="p-2.5 rounded-lg border transition-colors hover:scale-105"
                style={{
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                  color: colors.textSecondary
                }}
              >
                <Bell size={18} />
              </button>

              <div className="relative">
                <div 
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  style={{ borderColor: colors.success }}
                >
                  <User size={18} style={{ color: colors.textPrimary }} />
                </div>
                <div 
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{ 
                    backgroundColor: colors.success,
                    borderColor: colors.secondaryBg
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Community Stats Banner */}
      <div 
        className="border-b"
        style={{ 
          backgroundColor: colors.secondaryBg,
          borderColor: colors.border
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Active Members", value: communityStats.totalMembers, color: colors.success, icon: Users },
              { label: "Posts This Week", value: communityStats.postsThisWeek, color: colors.accent, icon: MessageSquare },
              { label: "Questions Answered", value: communityStats.questionsAnswered, color: colors.warning, icon: CheckSquare },
              { label: "Online Now", value: communityStats.onlineNow, color: colors.textPrimary, icon: Globe, pulse: true }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
                <div className="flex items-center justify-center mb-2">
                  {stat.pulse && (
                    <div className="w-3 h-3 rounded-full animate-pulse mr-2" style={{ backgroundColor: colors.success }}></div>
                  )}
                  <stat.icon size={20} style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: colors.textMuted }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: colors.accent, color: colors.textPrimary }}
            >
              <Plus size={20} />
              <span>New Post</span>
            </button>
            <button 
              className="flex items-center space-x-2 px-8 py-3 rounded-lg border font-semibold transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: 'transparent',
                borderColor: colors.border,
                color: colors.textSecondary
              }}
            >
              <HelpCircle size={20} />
              <span>Ask Question</span>
            </button>
            <button 
              className="flex items-center space-x-2 px-8 py-3 rounded-lg border font-semibold transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: 'transparent',
                borderColor: colors.border,
                color: colors.textSecondary
              }}
            >
              <MessageSquare size={20} />
              <span>Join Discussion</span>
            </button>
             <div className="relative hidden md:block">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: colors.textMuted }} />
                <input
                  type="text"
                  placeholder="Search discussions, tutorials, users..."
                  className="w-80 pl-10 pr-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: colors.cardBg,
                    borderColor: colors.border,
                    color: colors.textPrimary
                  }}
                />
              </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="space-y-6 sticky top-32">
              {/* Categories */}
              <div 
                className="rounded-lg p-6"
                style={{ backgroundColor: colors.cardBg }}
              >
                <h3 className="text-lg font-bold mb-6" style={{ color: colors.textPrimary }}>
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left hover:scale-[1.02]"
                      style={{
                        backgroundColor: selectedCategory === category.id ? colors.accent + '20' : 'transparent',
                        color: selectedCategory === category.id ? colors.accent : colors.textSecondary,
                        border: selectedCategory === category.id ? `1px solid ${colors.accent}40` : '1px solid transparent'
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon size={18} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span 
                        className="text-xs px-2 py-1 rounded-full font-semibold"
                        style={{ 
                          backgroundColor: selectedCategory === category.id ? colors.accent + '30' : colors.border,
                          color: selectedCategory === category.id ? colors.accent : colors.textMuted
                        }}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div 
                className="rounded-lg p-6"
                style={{ backgroundColor: colors.cardBg }}
              >
                <h3 className="text-lg font-bold mb-6" style={{ color: colors.textPrimary }}>
                  Top Contributors
                </h3>
                <div className="space-y-4">
                  {leaderboard.slice(0, 3).map((user, index) => (
                    <div key={user.rank} className="flex items-center space-x-3 p-3 rounded-lg hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundColor: colors.secondaryBg }}>
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ 
                          backgroundColor: index === 0 ? colors.warning : index === 1 ? colors.textMuted : colors.border,
                          color: colors.textPrimary
                        }}
                      >
                        {user.rank}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold" style={{ color: colors.textPrimary }}>
                          {user.username}
                        </div>
                        <div className="text-xs" style={{ color: colors.textMuted }}>
                          {user.reputation.toLocaleString()} rep
                        </div>
                      </div>
                      <Star size={14} style={{ color: colors.warning }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Activity */}
              <div 
                className="rounded-lg p-6"
                style={{ backgroundColor: colors.cardBg }}
              >
                <h3 className="text-lg font-bold mb-6" style={{ color: colors.textPrimary }}>
                  Live Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: colors.success }}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold" style={{ color: colors.textPrimary }}>
                            {activity.user}
                          </span>{" "}
                          <span style={{ color: colors.textSecondary }}>
                            {activity.action}
                          </span>
                        </p>
                        <p className="text-xs mt-1" style={{ color: colors.textMuted }}>
                          {activity.time} ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events Preview */}
              <div 
                className="rounded-lg p-6"
                style={{ backgroundColor: colors.cardBg }}
              >
                <h3 className="text-lg font-bold mb-6" style={{ color: colors.textPrimary }}>
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.slice(0, 2).map((event, index) => (
                    <div key={index} className="p-4 rounded-lg border hover:scale-[1.02] transition-transform cursor-pointer" style={{ borderColor: colors.border }}>
                      <div className="text-sm font-semibold mb-2" style={{ color: colors.textPrimary }}>
                        {event.title}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium" style={{ color: colors.accent }}>
                          {event.date}
                        </div>
                        <div className="text-xs" style={{ color: colors.success }}>
                          {event.attendees} attending
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {activeTab === 'discussions' && (
              <div className="space-y-8">
                {/* Header with Filters */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                      Community Discussions
                    </h2>
                    <p className="text-lg" style={{ color: colors.textMuted }}>
                      Share knowledge, get help, and connect with the community
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Filter size={18} style={{ color: colors.textMuted }} />
                      <select 
                        className="bg-transparent border rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.border,
                          color: colors.textSecondary,
                          backgroundColor: colors.cardBg
                        }}
                      >
                        <option value="recent">Most Recent</option>
                        <option value="popular">Most Popular</option>
                        <option value="trending">Trending</option>
                        <option value="unanswered">Unanswered</option>
                        <option value="solved">Solved</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Discussion Posts */}
                <div className="space-y-6">
                  {discussionPosts.map(post => (
                    <article 
                      key={post.id}
                      className="p-8 rounded-lg border transition-all duration-200 hover:border-opacity-80 hover:scale-[1.01] cursor-pointer"
                      style={{ 
                        backgroundColor: colors.cardBg,
                        borderColor: colors.border
                      }}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div 
                            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2"
                            style={{ 
                              backgroundColor: colors.secondaryBg,
                              borderColor: colors.border
                            }}
                          >
                            {post.avatar}
                          </div>
                        </div>

                        <div className="flex-1">
                          {/* Post Header */}
                          <div className="flex items-center flex-wrap gap-3 mb-4">
                            <span 
                              className="text-xs px-3 py-1 rounded-full font-semibold"
                              style={{ 
                                backgroundColor: colors.accent + '20',
                                color: colors.accent
                              }}
                            >
                              {post.category}
                            </span>

                            {post.status === 'trending' && (
                              <div className="flex items-center space-x-1">
                                <TrendingUp size={16} style={{ color: colors.warning }} />
                                <span className="text-xs font-semibold" style={{ color: colors.warning }}>
                                  Trending
                                </span>
                              </div>
                            )}

                            {post.status === 'solved' && (
                              <div className="flex items-center space-x-1">
                                <CheckSquare size={16} style={{ color: colors.success }} />
                                <span className="text-xs font-semibold" style={{ color: colors.success }}>
                                  Solved
                                </span>
                              </div>
                            )}

                            {post.status === 'unsolved' && (
                              <div className="flex items-center space-x-1">
                                <HelpCircle size={16} style={{ color: colors.error }} />
                                <span className="text-xs font-semibold" style={{ color: colors.error }}>
                                  Needs Help
                                </span>
                              </div>
                            )}

                            {post.status === 'urgent' && (
                              <div className="flex items-center space-x-1">
                                <AlertTriangle size={16} style={{ color: colors.error }} />
                                <span className="text-xs font-semibold" style={{ color: colors.error }}>
                                  Urgent
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Post Title */}
                          <h3 
                            className="text-2xl font-bold mb-4 hover:underline cursor-pointer leading-tight"
                            style={{ color: colors.textPrimary }}
                          >
                            {post.title}
                          </h3>

                          {/* Post Preview */}
                          <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.textSecondary }}>
                            {post.preview}
                          </p>

                          {/* Post Footer */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                              <div className="flex items-center space-x-3">
                                <span className="font-semibold" style={{ color: colors.textPrimary }}>
                                  {post.author}
                                </span>
                                <div className="flex items-center space-x-1">
                                  <Star size={16} style={{ color: colors.warning }} />
                                  <span className="text-sm font-medium" style={{ color: colors.textMuted }}>
                                    {post.reputation.toLocaleString()}
                                  </span>
                                </div>
                                {post.badges?.includes('verified') && (
                                  <Verified size={16} style={{ color: colors.success }} />
                                )}
                              </div>
                              <span className="text-sm" style={{ color: colors.textMuted }}>
                                {post.timeAgo} • Last activity {post.lastActivity}
                              </span>
                            </div>

                            <div className="flex items-center space-x-8 text-sm" style={{ color: colors.textMuted }}>
                              <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
                                <Eye size={18} />
                                <span className="font-medium">{post.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
                                <MessageSquare size={18} />
                                <span className="font-medium">{post.replies}</span>
                              </div>
                              <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
                                <ThumbsUp size={18} />
                                <span className="font-medium">{post.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'knowledge' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                    Knowledge Base
                  </h2>
                  <p className="text-lg" style={{ color: colors.textMuted }}>
                    Comprehensive guides and tutorials for the decentralized GPU ecosystem
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {knowledgeBaseSections.map((section, index) => (
                    <div 
                      key={index}
                      className="p-8 rounded-lg border cursor-pointer transition-all duration-200 hover:border-opacity-80 hover:scale-[1.02]"
                      style={{ 
                        backgroundColor: colors.cardBg,
                        borderColor: colors.border
                      }}
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div 
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: colors.accent + '20' }}
                        >
                          <section.icon size={28} style={{ color: colors.accent }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
                            {section.title}
                          </h3>
                          <span 
                            className="text-sm px-2 py-1 rounded-full font-semibold"
                            style={{ 
                              backgroundColor: section.category === 'Critical' ? colors.error + '20' : colors.border,
                              color: section.category === 'Critical' ? colors.error : colors.textMuted
                            }}
                          >
                            {section.category}
                          </span>
                        </div>
                      </div>

                      <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.textSecondary }}>
                        {section.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm" style={{ color: colors.textMuted }}>
                          <span className="font-medium">{section.articles} articles</span>
                          <span>•</span>
                          <span>{section.readTime}</span>
                        </div>
                        <ChevronRight size={24} style={{ color: colors.accent }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'leaderboards' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                    Community Leaderboards
                  </h2>
                  <p className="text-lg" style={{ color: colors.textMuted }}>
                    Recognize and celebrate our top contributors
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Top Contributors", data: leaderboard, icon: Trophy, description: "Overall community impact" },
                    { title: "Most Helpful", data: leaderboard, icon: Heart, description: "Best answers and support" },
                    { title: "Best Providers", data: leaderboard, icon: Cpu, description: "Highest GPU performance" },
                    { title: "Rising Stars", data: leaderboard, icon: TrendingUp, description: "Fastest growing members" }
                  ].map((board, boardIndex) => (
                    <div 
                      key={boardIndex}
                      className="p-8 rounded-lg border"
                      style={{ 
                        backgroundColor: colors.cardBg,
                        borderColor: colors.border
                      }}
                    >
                      <div className="flex items-center space-x-4 mb-8">
                        <div 
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: colors.accent + '20' }}
                        >
                          <board.icon size={28} style={{ color: colors.accent }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
                            {board.title}
                          </h3>
                          <p className="text-sm" style={{ color: colors.textMuted }}>
                            {board.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {board.data.map((user, index) => (
                          <div 
                            key={user.rank} 
                            className="flex items-center justify-between p-6 rounded-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer" 
                            style={{ backgroundColor: colors.secondaryBg }}
                          >
                            <div className="flex items-center space-x-4">
                              <div 
                                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                                style={{ 
                                  backgroundColor: index === 0 ? colors.warning : index === 1 ? colors.textMuted + '80' : colors.border,
                                  color: colors.textPrimary
                                }}
                              >
                                {user.rank}
                              </div>
                              <div>
                                <div className="font-bold text-lg" style={{ color: colors.textPrimary }}>
                                  {user.username}
                                </div>
                                <div className="text-sm" style={{ color: colors.textMuted }}>
                                  {user.reputation.toLocaleString()} reputation
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg" style={{ color: colors.success }}>
                                {user.earnings}
                              </div>
                              <div className="text-sm" style={{ color: colors.textMuted }}>
                                total earned
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                    Community Events
                  </h2>
                  <p className="text-lg" style={{ color: colors.textMuted }}>
                    Join workshops, conferences, and networking opportunities
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="p-8 rounded-lg border cursor-pointer transition-all duration-200 hover:border-opacity-80 hover:scale-[1.02]"
                      style={{ 
                        backgroundColor: colors.cardBg,
                        borderColor: colors.border
                      }}
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div 
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: colors.accent + '20' }}
                        >
                          <Calendar size={28} style={{ color: colors.accent }} />
                        </div>
                        <div>
                          <span 
                            className="text-xs px-3 py-1 rounded-full font-semibold"
                            style={{ 
                              backgroundColor: colors.warning + '20',
                              color: colors.warning
                            }}
                          >
                            {event.type.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                        {event.title}
                      </h3>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold" style={{ color: colors.accent }}>
                          {event.date}
                        </div>
                        <div className="text-sm" style={{ color: colors.success }}>
                          {event.attendees} registered
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                    Community Support Center
                  </h2>
                  <p className="text-lg" style={{ color: colors.textMuted }}>
                    Get help from experts and community members
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div 
                    className="p-8 rounded-lg border"
                    style={{ 
                      backgroundColor: colors.cardBg,
                      borderColor: colors.border
                    }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <LifeBuoy size={28} style={{ color: colors.accent }} />
                      <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
                        Technical Support
                      </h3>
                    </div>
                    <p className="mb-6" style={{ color: colors.textSecondary }}>
                      Get expert help with technical issues and platform questions
                    </p>
                    <button 
                      className="w-full py-3 px-4 rounded-lg font-semibold transition-colors"
                      style={{ backgroundColor: colors.accent, color: colors.textPrimary }}
                    >
                      Create Support Ticket
                    </button>
                  </div>

                  <div 
                    className="p-8 rounded-lg border"
                    style={{ 
                      backgroundColor: colors.cardBg,
                      borderColor: colors.border
                    }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <MessageSquare size={28} style={{ color: colors.success }} />
                      <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
                        Live Chat
                      </h3>
                    </div>
                    <p className="mb-6" style={{ color: colors.textSecondary }}>
                      Chat with community experts and get real-time assistance
                    </p>
                    <button 
                      className="w-full py-3 px-4 rounded-lg border font-semibold transition-colors"
                      style={{ 
                        backgroundColor: 'transparent',
                        borderColor: colors.success,
                        color: colors.success
                      }}
                    >
                      Start Live Chat
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer 
        className="border-t mt-16"
        style={{ 
          backgroundColor: colors.secondaryBg,
          borderColor: colors.border
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div><img className='w-8 h-8' src="/logo.png" alt="" /></div>
              <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
                Mesh Community
              </h3>
            </div>
            <p style={{ color: colors.textMuted }}>
              Powering the future of decentralized computing through collaboration
            </p>
          </div>
        </div>
      </footer>
    </div>
    </section>
    </div>
  );
};

export default CommunityPlatform;