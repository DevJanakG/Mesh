import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, GitBranch, Globe, User, Moon, Menu, PlayCircle, Upload, Code, Puzzle, 
  AlertCircle, Calendar, Clock, Share, Copy, ArrowUp, Hash, Play, Filter, 
  ThumbsUp, ThumbsDown, Download, HelpCircle, MessageCircle, Flag, ChevronRight,
  ChevronDown, BookOpen, Zap, Shield, Cpu, Database, Settings, FileText,
  Terminal, Bookmark, ExternalLink, CheckCircle, XCircle, Info, Star, Award,
  Layers, Network, Lock, TrendingUp, Activity, BarChart3,
} from 'lucide-react';

import Sidebar from './Sidebar';

const ComputeNetDocsPlatform = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState('getting-started');
  const [selectedArticle, setSelectedArticle] = useState('platform-overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [tocItems, setTocItems] = useState([]);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeTab, setActiveTab] = useState('javascript');
  const searchRef = useRef(null);

  // Navigation structure
  const navigationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: PlayCircle,
      expanded: true,
      items: [
        { id: 'platform-overview', title: 'Platform Overview', readTime: '5 min', difficulty: 'Beginner' },
        { id: 'quick-start', title: 'Quick Start Guide', readTime: '10 min', difficulty: 'Beginner' },
        { id: 'account-setup', title: 'Account Setup', readTime: '8 min', difficulty: 'Beginner' },
        { id: 'interactive-tutorial', title: 'Interactive Tutorial', readTime: '15 min', difficulty: 'Beginner' }
      ]
    },
    {
      id: 'job-submission',
      title: 'Job Submission',
      icon: Upload,
      expanded: false,
      items: [
        { id: 'job-configuration', title: 'Job Configuration', readTime: '12 min', difficulty: 'Intermediate' },
        { id: 'resource-selection', title: 'Resource Selection', readTime: '15 min', difficulty: 'Intermediate' },
        { id: 'pricing-payments', title: 'Pricing & Payments', readTime: '8 min', difficulty: 'Beginner' },
        { id: 'batch-processing', title: 'Batch Processing', readTime: '18 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      expanded: false,
      items: [
        { id: 'authentication', title: 'Authentication', readTime: '6 min', difficulty: 'Intermediate' },
        { id: 'endpoints', title: 'Endpoints', readTime: '20 min', difficulty: 'Advanced' },
        { id: 'sdks-libraries', title: 'SDKs & Libraries', readTime: '10 min', difficulty: 'Intermediate' },
        { id: 'webhooks', title: 'Webhooks', readTime: '14 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Puzzle,
      expanded: false,
      items: [
        { id: 'frameworks', title: 'ML Frameworks', readTime: '14 min', difficulty: 'Intermediate' },
        { id: 'cicd-pipelines', title: 'CI/CD Pipelines', readTime: '18 min', difficulty: 'Advanced' },
        { id: 'third-party-tools', title: 'Third-party Tools', readTime: '12 min', difficulty: 'Intermediate' },
        { id: 'enterprise-sso', title: 'Enterprise SSO', readTime: '10 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: AlertCircle,
      expanded: false,
      items: [
        { id: 'common-issues', title: 'Common Issues', readTime: '16 min', difficulty: 'Beginner' },
        { id: 'error-codes', title: 'Error Codes', readTime: '8 min', difficulty: 'Intermediate' },
        { id: 'performance-optimization', title: 'Performance Optimization', readTime: '22 min', difficulty: 'Advanced' },
        { id: 'monitoring-debugging', title: 'Monitoring & Debugging', readTime: '20 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      icon: Shield,
      expanded: false,
      items: [
        { id: 'security-compliance', title: 'Security & Compliance', readTime: '25 min', difficulty: 'Advanced' },
        { id: 'billing-management', title: 'Billing Management', readTime: '12 min', difficulty: 'Intermediate' },
        { id: 'team-collaboration', title: 'Team Collaboration', readTime: '15 min', difficulty: 'Intermediate' },
        { id: 'sla-support', title: 'SLA & Support', readTime: '8 min', difficulty: 'Beginner' }
      ]
    }
  ];

  // Mock article content with comprehensive data
  const getArticleContent = (articleId) => {
    const articles = {
      'platform-overview': {
        title: 'Platform Overview',
        description: 'Comprehensive introduction to the Mesh decentralized GPU marketplace',
        lastUpdated: '2025-09-27',
        difficulty: 'Beginner',
        category: 'Getting Started',
        tags: ['introduction', 'overview', 'blockchain', 'gpu-computing'],
        readTime: '5 min',
        contributors: ['Alex Chen', 'Maria Rodriguez'],
        version: '2.1'
      },
      'authentication': {
        title: 'Authentication',
        description: 'Secure authentication methods for accessing Mesh APIs',
        lastUpdated: '2025-09-26',
        difficulty: 'Intermediate',
        category: 'API Reference',
        tags: ['security', 'api-keys', 'jwt', 'oauth'],
        readTime: '6 min',
        contributors: ['Security Team'],
        version: '2.1'
      }
    };

    return articles[articleId] || articles['platform-overview'];
  };

  const currentArticle = getArticleContent(selectedArticle);

  // Advanced search functionality
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }

    // Mock search results with relevance scoring
    const mockResults = [
      {
        id: 1,
        title: 'GPU Resource Selection Guide',
        excerpt: 'Learn how to choose optimal GPU configurations for your compute workloads including CUDA cores, memory requirements, and performance benchmarks...',
        type: 'Guide',
        difficulty: 'Intermediate',
        readTime: '12 min',
        lastUpdated: '2025-09-25',
        relevance: 95,
        category: 'Job Submission',
        url: '/docs/resource-selection'
      },
      {
        id: 2,
        title: 'Authentication API Reference',
        excerpt: 'Complete API reference for authenticating with Mesh using JWT tokens, API keys, OAuth flows, and webhook signatures...',
        type: 'API Reference',
        difficulty: 'Advanced',
        readTime: '8 min',
        lastUpdated: '2025-09-27',
        relevance: 88,
        category: 'API Reference',
        url: '/docs/authentication'
      },
      {
        id: 3,
        title: 'Quick Start: Your First GPU Job',
        excerpt: 'Step-by-step tutorial to submit your first compute job to the decentralized GPU network in under 10 minutes with practical examples...',
        type: 'Tutorial',
        difficulty: 'Beginner',
        readTime: '10 min',
        lastUpdated: '2025-09-26',
        relevance: 92,
        category: 'Getting Started',
        url: '/docs/quick-start'
      }
    ];

    setSearchResults({
      query: query,
      results: mockResults,
      totalCount: 847,
      searchTime: '0.24s'
    });
  };

  // Code examples for different languages
  const codeExamples = {
    javascript: `import { ComputeNetClient } from '@computenet/sdk';

const client = new ComputeNetClient({
  apiKey: process.env.COMPUTENET_API_KEY,
  network: 'mainnet'
});

// Submit a GPU compute job
const job = await client.jobs.create({
  image: 'pytorch/pytorch:1.12.0-cuda11.3-cudnn8-runtime',
  command: 'python train_model.py --epochs 100',
  resources: {
    gpu: 'RTX3090',
    memory: '16GB',
    storage: '50GB'
  },
  maxPrice: 0.5, // USD per hour
  region: 'us-west-2'
});

console.log('Job submitted:', job.id);`,
    python: `import computenet

client = computenet.Client(
    api_key=os.environ['COMPUTENET_API_KEY'],
    network='mainnet'
)

# Submit a GPU compute job
job = client.jobs.create(
    image='pytorch/pytorch:1.12.0-cuda11.3-cudnn8-runtime',
    command='python train_model.py --epochs 100',
    resources={
        'gpu': 'RTX3090',
        'memory': '16GB',
        'storage': '50GB'
    },
    max_price=0.5,  # USD per hour
    region='us-west-2'
)

print(f'Job submitted: {job.id}')`,
    go: `package main

import (
    "context"
    "fmt"
    "os"

    "github.com/computenet/go-sdk/client"
)

func main() {
    c := client.New(client.Config{
        APIKey:  os.Getenv("COMPUTENET_API_KEY"),
        Network: "mainnet",
    })

    job, err := c.Jobs.Create(context.Background(), &client.CreateJobRequest{
        Image:   "pytorch/pytorch:1.12.0-cuda11.3-cudnn8-runtime",
        Command: "python train_model.py --epochs 100",
        Resources: client.Resources{
            GPU:     "RTX3090",
            Memory:  "16GB",
            Storage: "50GB",
        },
        MaxPrice: 0.5, // USD per hour
        Region:   "us-west-2",
    })

    if err != nil {
        panic(err)
    }

    fmt.Printf("Job submitted: %s\n", job.ID)
}`
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'k':
            e.preventDefault();
            if (searchRef.current) {
              searchRef.current.focus();
            }
            break;
          case 'b':
            e.preventDefault();
            setSidebarOpen(!sidebarOpen);
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [sidebarOpen]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-[#10B981]/20 text-[#10B981]';
      case 'Intermediate': return 'bg-[#F59E0B]/20 text-[#F59E0B]';
      case 'Advanced': return 'bg-[#EF4444]/20 text-[#EF4444]';
      default: return 'bg-[#A1A1AA]/20 text-[#A1A1AA]';
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const smartContractCode = `// Smart contract interaction
const contract = new ethers.Contract(contractAddress, contractABI, provider);
const jobId = await contract.submitJob({
  image: "tensorflow/tensorflow:latest-gpu",
  command: "python train.py",
  resources: { gpu: 1, memory: "8GB" }
});`;

  return (
    <div className="h-screen bg-[#0a0a0a] text-white flex relative overflow-hidden">
    <Sidebar type="doc"/>
    <section className='rewardsSec docSec'>
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] font-['Inter']">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#18181B]/95 backdrop-blur-sm border-b border-[#3F3F46]">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-[#23232B] rounded-lg transition-colors"
                title="Toggle sidebar (Ctrl+B)"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Mesh Docs</h1>
                  <p className="text-[#A1A1AA] text-sm">Decentralized GPU Marketplace</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#A1A1AA]" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search documentation... (Ctrl+K)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  performSearch(e.target.value);
                }}
                className="w-full pl-10 pr-4 py-2 bg-[#23232B] border border-[#3F3F46] rounded-lg text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchResults(null);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A1A1AA] hover:text-[#F4F4F5]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Header Controls */}
            <div className="flex items-center space-x-3">
              <select className="bg-[#23232B] border border-[#3F3F46] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]">
                <option>v2.1 (Latest)</option>
                <option>v2.0</option>
                <option>v1.9</option>
              </select>

              <button className="p-2 hover:bg-[#23232B] rounded-lg transition-colors" title="Language">
                <Globe className="w-5 h-5" />
              </button>

              <button className="p-2 hover:bg-[#23232B] rounded-lg transition-colors" title="Dark mode">
                <Moon className="w-5 h-5" />
              </button>

              <div className="relative group">
                <button className="p-2 hover:bg-[#23232B] rounded-lg transition-colors" title="Account">
                  <User className="w-5 h-5" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#23232B] border border-[#3F3F46] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-3 border-b border-[#3F3F46]">
                    <p className="font-medium">developer@company.com</p>
                    <p className="text-sm text-[#A1A1AA]">Pro Plan</p>
                  </div>
                  <div className="p-2">
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-[#18181B] rounded">
                      <Bookmark className="w-4 h-4" />
                      <span>Bookmarks</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-[#18181B] rounded">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Results Overlay */}
      {searchResults && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-start justify-center pt-20" onClick={() => setSearchResults(null)}>
          <div className="bg-[#18181B] border border-[#3F3F46] rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-[#3F3F46]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Search Results</h2>
                <button onClick={() => setSearchResults(null)} className="text-[#A1A1AA] hover:text-[#F4F4F5]">
                  ✕
                </button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-[#A1A1AA]">
                <span>Found {searchResults.totalCount} results for &quot;{searchResults.query}&quot; in {searchResults.searchTime}</span>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-96">
              <div className="space-y-4">
                {searchResults.results.map((result) => (
                  <div key={result.id} className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6 hover:border-[#0EA5E9]/50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-[#F4F4F5] hover:text-[#0EA5E9]">
                        {result.title}
                      </h3>
                      <span className="text-xs text-[#A1A1AA]">{result.relevance}% match</span>
                    </div>
                    <p className="text-[#D4D4D8] mb-4 leading-relaxed">{result.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(result.difficulty)}`}>
                          {result.difficulty}
                        </span>
                        <span className="text-xs text-[#A1A1AA] bg-[#3F3F46] px-2 py-1 rounded">
                          {result.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-[#A1A1AA]">
                        <span>{result.readTime}</span>
                        <span>{result.lastUpdated}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden`}>
          <div className="h-[calc(100vh-73px)] bg-[#18181B] border-r border-[#3F3F46] p-6 overflow-y-auto">
            <nav>
              {navigationSections.map((section) => (
                <div key={section.id} className="mb-6">
                  <button
                    className="flex items-center justify-between w-full mb-3 group"
                    onClick={() => {
                      // Toggle section expansion logic would go here
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <section.icon className="w-5 h-5 text-[#0EA5E9]" />
                      <h3 className="font-semibold text-[#F4F4F5] group-hover:text-[#0EA5E9]">
                        {section.title}
                      </h3>
                    </div>
                    {section.expanded ? (
                      <ChevronDown className="w-4 h-4 text-[#A1A1AA]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#A1A1AA]" />
                    )}
                  </button>

                  {section.expanded && (
                    <ul className="space-y-1 ml-7">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => {
                              setSelectedArticle(item.id);
                              setSelectedSection(section.id);
                            }}
                            className={`w-full text-left p-2 rounded-lg transition-colors flex items-center justify-between group ${
                              selectedArticle === item.id 
                                ? 'bg-[#23232B] text-[#0EA5E9] border border-[#0EA5E9]/20' 
                                : 'text-[#D4D4D8] hover:text-[#F4F4F5] hover:bg-[#23232B]'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{item.title}</span>
                                <span className="text-xs text-[#A1A1AA] group-hover:text-[#D4D4D8]">
                                  {item.readTime}
                                </span>
                              </div>
                              <div className="flex items-center mt-1">
                                <span className={`text-xs px-1.5 py-0.5 rounded ${getDifficultyColor(item.difficulty)}`}>
                                  {item.difficulty}
                                </span>
                              </div>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 py-8">
          <div className="max-w-4xl">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-2 mb-4 text-sm text-[#A1A1AA]">
                <span>Getting Started</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#0EA5E9]">{currentArticle.title}</span>
              </div>

              <h1 className="text-4xl font-bold mb-4 text-[#F4F4F5]">{currentArticle.title}</h1>
              <p className="text-lg text-[#D4D4D8] mb-6 leading-relaxed">{currentArticle.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#A1A1AA] mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {currentArticle.lastUpdated}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentArticle.readTime} read</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${getDifficultyColor(currentArticle.difficulty)}`}>
                  {currentArticle.difficulty}
                </span>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>4.8/5 (124 reviews)</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors">
                  <Share className="w-4 h-4" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-[#3F3F46] rounded-lg hover:bg-[#23232B] transition-colors">
                  <Bookmark className="w-4 h-4" />
                  <span>Bookmark</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-[#3F3F46] rounded-lg hover:bg-[#23232B] transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </header>

            {/* Quick Navigation Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4 hover:border-[#0EA5E9]/50 transition-colors cursor-pointer">
                <PlayCircle className="w-6 h-6 text-[#0EA5E9] mb-2" />
                <h4 className="font-semibold text-sm mb-1">Quick Start</h4>
                <p className="text-xs text-[#A1A1AA]">Get started in 10 minutes</p>
              </div>
              <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4 hover:border-[#0EA5E9]/50 transition-colors cursor-pointer">
                <Code className="w-6 h-6 text-[#10B981] mb-2" />
                <h4 className="font-semibold text-sm mb-1">API Reference</h4>
                <p className="text-xs text-[#A1A1AA]">Complete API docs</p>
              </div>
              <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4 hover:border-[#0EA5E9]/50 transition-colors cursor-pointer">
                <Terminal className="w-6 h-6 text-[#F59E0B] mb-2" />
                <h4 className="font-semibold text-sm mb-1">Examples</h4>
                <p className="text-xs text-[#A1A1AA]">Code samples & demos</p>
              </div>
              <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4 hover:border-[#0EA5E9]/50 transition-colors cursor-pointer">
                <HelpCircle className="w-6 h-6 text-[#8B5CF6] mb-2" />
                <h4 className="font-semibold text-sm mb-1">Support</h4>
                <p className="text-xs text-[#A1A1AA]">Get help & support</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {/* Main Content Sections */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#3F3F46] flex items-center space-x-3">
                  <Network className="w-6 h-6 text-[#0EA5E9]" />
                  <span>What is Mesh?</span>
                </h2>

                <div className="bg-gradient-to-r from-[#0EA5E9]/10 to-[#8B5CF6]/10 border border-[#0EA5E9]/20 rounded-lg p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#F4F4F5]">Revolutionary GPU Computing</h3>
                      <p className="text-[#D4D4D8] leading-relaxed">
                        Mesh is the world&apos;s first decentralized GPU compute marketplace, connecting GPU owners with developers, researchers, and enterprises who need high-performance computing power. Our blockchain-secured platform reduces costs by up to 80% while providing unprecedented scale and flexibility.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <TrendingUp className="w-6 h-6 text-[#10B981]" />
                      <h4 className="text-lg font-semibold">For Compute Consumers</h4>
                    </div>
                    <ul className="space-y-2 text-[#D4D4D8]">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                        <span><strong>80% Cost Savings</strong> compared to traditional cloud providers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                        <span><strong>Global Scale</strong> with 100,000+ GPUs worldwide</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                        <span><strong>Instant Scaling</strong> from 1 to 10,000+ GPUs in minutes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981] mt-1 flex-shrink-0" />
                        <span><strong>Low Latency</strong> optimized routing worldwide</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Activity className="w-6 h-6 text-[#0EA5E9]" />
                      <h4 className="text-lg font-semibold">For GPU Providers</h4>
                    </div>
                    <ul className="space-y-2 text-[#D4D4D8]">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0EA5E9] mt-1 flex-shrink-0" />
                        <span><strong>Passive Income</strong> monetize idle GPU resources</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0EA5E9] mt-1 flex-shrink-0" />
                        <span><strong>Flexible Scheduling</strong> set your own availability</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0EA5E9] mt-1 flex-shrink-0" />
                        <span><strong>Secure Execution</strong> isolated container environments</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0EA5E9] mt-1 flex-shrink-0" />
                        <span><strong>Instant Payments</strong> crypto payments via smart contracts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Architecture Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#3F3F46] flex items-center space-x-3">
                  <Layers className="w-6 h-6 text-[#F59E0B]" />
                  <span>Platform Architecture</span>
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#10B981]/20 to-[#10B981]/10 p-6 border-b border-[#3F3F46]">
                      <div className="flex items-center space-x-3 mb-3">
                        <Shield className="w-6 h-6 text-[#10B981]" />
                        <h3 className="text-xl font-semibold">1. Blockchain Layer</h3>
                      </div>
                      <p className="text-[#D4D4D8] leading-relaxed">
                        Smart contracts on Ethereum and Polygon networks manage job execution, payments, and resource verification with complete transparency and security.
                      </p>
                    </div>
                    <div className="p-6">
                      <div className="bg-[#1A1A1A] rounded-lg p-4 relative">
                        <button 
                          onClick={() => copyToClipboard(smartContractCode)}
                          className="absolute top-3 right-3 p-2 hover:bg-[#3F3F46] rounded transition-colors"
                        >
                          <Copy className="w-4 h-4 text-[#A1A1AA]" />
                        </button>
                        <pre className="text-sm text-[#D4D4D8] overflow-x-auto pr-12">
                          <code>{smartContractCode}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Search className="w-6 h-6 text-[#0EA5E9]" />
                      <h3 className="text-xl font-semibold">2. Resource Discovery</h3>
                    </div>
                    <p className="text-[#D4D4D8] mb-4">
                      AI-powered matching engine connects compute requests with optimal GPU resources based on:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-[#D4D4D8]">
                          <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                          <span>Performance requirements</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#D4D4D8]">
                          <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                          <span>Geographic location</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-[#D4D4D8]">
                          <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                          <span>Cost parameters</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#D4D4D8]">
                          <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                          <span>Availability windows</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Settings className="w-6 h-6 text-[#F59E0B]" />
                      <h3 className="text-xl font-semibold">3. Execution Environment</h3>
                    </div>
                    <p className="text-[#D4D4D8]">
                      Containerized workloads ensure security and isolation while maximizing performance across diverse hardware configurations. Each job runs in a secure sandbox with resource monitoring and automatic failover capabilities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Code Example Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#3F3F46] flex items-center space-x-3">
                  <Code className="w-6 h-6 text-[#8B5CF6]" />
                  <span>API Integration Example</span>
                </h2>

                <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg overflow-hidden mb-6">
                  {/* Language Tabs */}
                  <div className="flex border-b border-[#3F3F46] bg-[#18181B]">
                    {Object.keys(codeExamples).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveTab(lang)}
                        className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                          activeTab === lang
                            ? 'text-[#0EA5E9] border-[#0EA5E9] bg-[#23232B]'
                            : 'text-[#A1A1AA] border-transparent hover:text-[#F4F4F5] hover:border-[#3F3F46]'
                        }`}
                      >
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Code Content */}
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard(codeExamples[activeTab])}
                      className="absolute top-4 right-4 p-2 hover:bg-[#3F3F46] rounded transition-colors z-10"
                      title="Copy code"
                    >
                      <Copy className="w-4 h-4 text-[#A1A1AA]" />
                    </button>
                    <pre className="p-6 text-sm text-[#D4D4D8] overflow-x-auto bg-[#1A1A1A] pr-16">
                      <code>{codeExamples[activeTab]}</code>
                    </pre>
                  </div>
                </div>

                {/* Interactive Demo */}
                <div className="bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#0EA5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#F4F4F5] mb-2">Try it in the Interactive Playground</h4>
                      <p className="text-[#D4D4D8] mb-4">
                        Test API calls, explore different configurations, and see live responses in our interactive environment.
                      </p>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors">
                        <Terminal className="w-4 h-4" />
                        <span>Open Playground</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Stats Section */}
              <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 border border-[#10B981]/20 rounded-lg p-6 text-center">
                    <BarChart3 className="w-8 h-8 text-[#10B981] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#F4F4F5] mb-2">100,000+</div>
                    <div className="text-[#10B981] font-medium">Active GPUs</div>
                    <div className="text-sm text-[#A1A1AA] mt-1">Across 180 countries</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 border border-[#0EA5E9]/20 rounded-lg p-6 text-center">
                    <Activity className="w-8 h-8 text-[#0EA5E9] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#F4F4F5] mb-2">2.5M+</div>
                    <div className="text-[#0EA5E9] font-medium">Jobs Completed</div>
                    <div className="text-sm text-[#A1A1AA] mt-1">99.9% success rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#F59E0B]/20 to-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-lg p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-[#F59E0B] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#F4F4F5] mb-2">80%</div>
                    <div className="text-[#F59E0B] font-medium">Cost Savings</div>
                    <div className="text-sm text-[#A1A1AA] mt-1">vs traditional cloud</div>
                  </div>
                </div>
              </section>
            </div>

            {/* Navigation Footer */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#3F3F46]">
              <button className="flex items-center space-x-2 text-[#0EA5E9] hover:underline transition-colors">
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Previous: Documentation Home</span>
              </button>
              <button className="flex items-center space-x-2 text-[#0EA5E9] hover:underline transition-colors">
                <span>Next: Quick Start Guide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Feedback Section */}
            <div className="mt-12 bg-[#23232B] border border-[#3F3F46] rounded-lg p-6">
              <h4 className="font-semibold mb-4 text-[#F4F4F5]">Was this article helpful?</h4>
              <div className="flex items-center space-x-4 mb-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#10B981]/20 text-[#10B981] rounded-lg hover:bg-[#10B981]/30 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Yes (89)</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#EF4444]/20 text-[#EF4444] rounded-lg hover:bg-[#EF4444]/30 transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                  <span>No (3)</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-[#3F3F46] rounded-lg hover:bg-[#18181B] transition-colors text-[#A1A1AA] hover:text-[#F4F4F5]">
                  <Flag className="w-4 h-4" />
                  <span>Report Issue</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-[#3F3F46] rounded-lg hover:bg-[#18181B] transition-colors text-[#A1A1AA] hover:text-[#F4F4F5]">
                  <MessageCircle className="w-4 h-4" />
                  <span>Suggest Improvement</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Table of Contents */}
        <aside className="w-60 p-6">
          <div className="sticky top-24">
            <h4 className="font-semibold mb-4 text-[#F4F4F5] flex items-center space-x-2">
              <Hash className="w-4 h-4" />
              <span>On this page</span>
            </h4>
            <nav className="space-y-2 mb-8">
              <a href="#introduction" className="block text-sm py-1 text-[#0EA5E9] font-medium hover:underline">
                What is Mesh?
              </a>
              <a href="#key-benefits" className="block text-sm py-1 text-[#D4D4D8] pl-4 hover:text-[#0EA5E9] transition-colors">
                Key Benefits
              </a>
              <a href="#architecture" className="block text-sm py-1 text-[#D4D4D8] hover:text-[#0EA5E9] transition-colors">
                Platform Architecture
              </a>
              <a href="#integration" className="block text-sm py-1 text-[#D4D4D8] hover:text-[#0EA5E9] transition-colors">
                API Integration
              </a>
            </nav>

            {/* Quick Actions */}
            <div className="space-y-2 mb-8">
              <button className="w-full flex items-center space-x-2 text-left p-2 text-[#A1A1AA] hover:text-[#0EA5E9] hover:bg-[#23232B] rounded-lg transition-colors">
                <ArrowUp className="w-4 h-4" />
                <span>Back to top</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-left p-2 text-[#A1A1AA] hover:text-[#0EA5E9] hover:bg-[#23232B] rounded-lg transition-colors">
                <Bookmark className="w-4 h-4" />
                <span>Bookmark</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-left p-2 text-[#A1A1AA] hover:text-[#0EA5E9] hover:bg-[#23232B] rounded-lg transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span>Edit on GitHub</span>
              </button>
            </div>

            {/* Contributors */}
            <div className="bg-[#23232B] border border-[#3F3F46] rounded-lg p-4">
              <h5 className="font-semibold text-sm mb-3 text-[#F4F4F5]">Contributors</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-4.5">
                  <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                    JG
                  </div>
                  <span className="text-sm text-[#D4D4D8]">Janak Gohil</span>
                </div>
                <div className="flex items-center space-x-2 mb-4.5">
                  <div className="w-6 h-6 bg-[#0EA5E9] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                    MC
                  </div>
                  <span className="text-sm text-[#D4D4D8]">Manthan Chedda</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-[#0EA5E9] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                    PK
                  </div>
                  <span className="text-sm text-[#D4D4D8]">Pratham Kataria</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Floating Help Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
          <HelpCircle className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="fixed bottom-6 left-6 z-40 text-xs text-[#A1A1AA] bg-[#18181B] border border-[#3F3F46] rounded px-2 py-1">
        Press <kbd className="bg-[#3F3F46] px-1 rounded">Ctrl+K</kbd> to search
      </div>
    </div>
    </section>
    </div>
  );
};

export default ComputeNetDocsPlatform;