import React, { useState, useEffect, useRef } from 'react';
import { Wallet, Send, AlertTriangle, CheckCircle, Loader, X, RefreshCw, Eye, History, Filter, Search, ExternalLink, Copy } from 'lucide-react';
import {Home, BarChart2, BarChart3, Bot, Trophy, ChevronDown, Book, Users, FileText, LifeBuoy, LogOut} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const WalletPage = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [availableAccounts, setAvailableAccounts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [balance, setBalance] = useState(null);
  const [network, setNetwork] = useState(null);
  const [customAmount, setCustomAmount] = useState('0.5'); // Default value
  const [customRecipient, setCustomRecipient] = useState('0xB8CBd37a158b8aC7EFC01751511081D889e42ADf');
  const [activeTab, setActiveTab] = useState('payment'); // 'payment', 'overview', 'history'
  const [tokenBalances, setTokenBalances] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Function to get URL parameters
  const getUrlParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  // Mock data for demonstration
  const mockTokens = {
    ETH: { symbol: 'ETH', name: 'Ethereum', decimals: 18, price: 2300 },
    USDC: { symbol: 'USDC', name: 'USD Coin', decimals: 6, price: 1.00 },
    USDT: { symbol: 'USDT', name: 'Tether', decimals: 6, price: 1.00 },
    DAI: { symbol: 'DAI', name: 'Dai', decimals: 18, price: 1.00 }
  };

  const mockTransactions = [
    {
      id: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890',
      type: 'payment',
      amount: '0.15',
      token: 'ETH',
      status: 'confirmed',
      timestamp: Date.now() - 3600000,
      from: '0x742d35Cc6634C0532925a3b8D6Aa6878a5B669af',
      to: '0xB8CBd37a158b8aC7EFC01751511081D889e42ADf'
    },
    {
      id: '0x2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890ab',
      type: 'earning',
      amount: '50.00',
      token: 'USDC',
      status: 'confirmed',
      timestamp: Date.now() - 7200000,
      from: '0xA1B2C3D4E5F6789012345678901234567890ABCD',
      to: walletAddress
    },
    {
      id: '0x3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcd',
      type: 'refund',
      amount: '25.50',
      token: 'USDT',
      status: 'pending',
      timestamp: Date.now() - 1800000,
      from: '0xDEF123456789ABCDEF123456789ABCDEF12345678',
      to: walletAddress
    }
  ];

  useEffect(() => {
    // Get amount from URL parameters
    const amountFromUrl = getUrlParameter('amount');
    if (amountFromUrl && !isNaN(amountFromUrl) && parseFloat(amountFromUrl) > 0) {
      setCustomAmount(amountFromUrl);
    }

    checkConnection();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  useEffect(() => {
    if (walletAddress) {
      loadTokenBalances();
      loadTransactions();
    }
  }, [walletAddress]);

  useEffect(() => {
    filterTransactions();
  }, [transactions, searchTerm, filterType, filterStatus]);

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const allAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch(() => []);
        setAvailableAccounts(allAccounts);
        
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          await getBalance(accounts[0]);
          await getNetwork();
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
    }
  };

  const handleAccountsChanged = async (accounts) => {
    setAvailableAccounts(accounts);
    if (accounts.length === 0) {
      setWalletAddress(null);
      setBalance(null);
      clearMessages();
    } else {
      setWalletAddress(accounts[0]);
      getBalance(accounts[0]);
      clearMessages();
    }
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  const getBalance = async (address) => {
    try {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });
      const ethBalance = parseFloat(parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4);
      setBalance(ethBalance);
    } catch (error) {
      console.error('Error getting balance:', error);
    }
  };

  const getNetwork = async () => {
    try {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const networks = {
        '0x1': 'Ethereum Mainnet',
        '0x3': 'Ropsten Testnet',
        '0x4': 'Rinkeby Testnet',
        '0x5': 'Goerli Testnet',
        '0xaa36a7': 'Sepolia Testnet',
        '0x89': 'Polygon Mainnet'
      };
      setNetwork(networks[chainId] || `Unknown Network (${chainId})`);
    } catch (error) {
      console.error('Error getting network:', error);
    }
  };

  const loadTokenBalances = async () => {
    // Mock token balances - in real app, you'd fetch from token contracts
    const mockBalances = {
      ETH: balance || '0',
      USDC: '125.50',
      USDT: '89.25',
      DAI: '45.75'
    };
    setTokenBalances(mockBalances);
  };

  const loadTransactions = () => {
    // Mock transactions - in real app, you'd fetch from blockchain/API
    setTransactions(mockTransactions);
  };

  const filterTransactions = () => {
    let filtered = [...transactions];
    
    if (searchTerm) {
      filtered = filtered.filter(tx => 
        tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.token.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterType !== 'all') {
      filtered = filtered.filter(tx => tx.type === filterType);
    }
    
    if (filterStatus !== 'all') {
      filtered = filtered.filter(tx => tx.status === filterStatus);
    }
    
    setFilteredTransactions(filtered);
  };

  const clearMessages = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      setErrorMessage('MetaMask is not installed. Please install MetaMask extension.');
      return;
    }

    setIsConnecting(true);
    clearMessages();

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAvailableAccounts(accounts);
      setWalletAddress(accounts[0]);
      await getBalance(accounts[0]);
      await getNetwork();
      setSuccessMessage('Wallet connected successfully!');
    } catch (error) {
      if (error.code === 4001) {
        setErrorMessage('Connection rejected by user');
      } else {
        setErrorMessage('Failed to connect wallet');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const switchWallet = async (accountAddress) => {
    try {
      setWalletAddress(accountAddress);
      await getBalance(accountAddress);
      setSuccessMessage(`Switched to ${accountAddress.slice(0, 6)}...${accountAddress.slice(-4)}`);
    } catch (error) {
      setErrorMessage('Failed to switch wallet');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setBalance(null);
    setNetwork(null);
    setAvailableAccounts([]);
    clearMessages();
  };

  const isValidAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  const sendPayment = async () => {
    if (!walletAddress) {
      setErrorMessage('Please connect your wallet first');
      return;
    }

    if (!isValidAddress(customRecipient)) {
      setErrorMessage('Invalid recipient address');
      return;
    }

    if (parseFloat(customAmount) <= 0) {
      setErrorMessage('Amount must be greater than 0');
      return;
    }

    if (balance && parseFloat(customAmount) > parseFloat(balance)) {
      setErrorMessage('Insufficient balance');
      return;
    }

    setIsSending(true);
    clearMessages();

    try {
      const weiValue = (parseFloat(customAmount) * Math.pow(10, 18)).toString(16);

      const transactionParameters = {
        to: customRecipient,
        from: walletAddress,
        value: '0x' + weiValue,
        gas: '0x5208',
      };

      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      setSuccessMessage(`Payment sent successfully! Transaction hash: ${txHash}`);
      setTimeout(() => getBalance(walletAddress), 2000);
    } catch (error) {
      if (error.code === 4001) {
        setErrorMessage('Transaction rejected by user');
      } else if (error.code === -32603) {
        setErrorMessage('Transaction failed - insufficient funds or gas');
      } else {
        setErrorMessage('Transaction failed: ' + (error.message || 'Unknown error'));
      }
    } finally {
      setIsSending(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setSuccessMessage('Copied to clipboard!');
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const calculateTotalValue = () => {
    let total = 0;
    Object.entries(tokenBalances).forEach(([token, balance]) => {
      const tokenInfo = mockTokens[token];
      if (tokenInfo) {
        total += parseFloat(balance) * tokenInfo.price;
      }
    });
    return total.toFixed(2);
  };

  const getExplorerUrl = (txHash) => {
    const baseUrls = {
      '0x1': 'https://etherscan.io/tx/',
      '0xaa36a7': 'https://sepolia.etherscan.io/tx/',
      '0x89': 'https://polygonscan.com/tx/'
    };
    const chainId = '0xaa36a7'; // Default to Sepolia for demo
    return (baseUrls[chainId] || baseUrls['0x1']) + txHash;
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
    { icon: Wallet, label: "Wallet", active: true, link: "/wallet" },
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
    <div className="min-h-screen w-full bg-[#181A20] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl p-8 bg-[#13151A] rounded-2xl shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Wallet className="w-6 h-6" />
          <h1 className="text-2xl font-bold text-white">MetaMask Wallet</h1>
        </div>

        

        {/* Tab Navigation */}
        <div className="flex mb-6 bg-[#1B1E27] rounded-lg p-1">
          <button
            onClick={() => setActiveTab('payment')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'payment' ? 'bg-amber-50 text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Send className="w-4 h-4 inline mr-2" />
            Payment
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-amber-50 text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4 inline mr-2" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'history' ? 'bg-amber-50 text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            <History className="w-4 h-4 inline mr-2" />
            History
          </button>
        </div>

        {!walletAddress ? (
          <div className="mb-6">
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium disabled:opacity-60"
            >
              {isConnecting ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                <Wallet className="w-4 h-4" />
              )}
              {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
            </button>
          </div>
        ) : (
          <div className="mb-6 p-4 bg-[#1B1E27] rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-semibold text-[#41C770]">Connected</span>
            </div>
            <p className="break-all mb-2 text-gray-200">
              <span className="font-bold">Address:</span> {walletAddress}
            </p>
            {balance && (
              <p className="mb-2 text-gray-200">
                <span className="font-bold">Balance:</span> {balance} ETH
              </p>
            )}
            {network && (
              <p className="mb-3 text-gray-200">
                <span className="font-bold">Network:</span> {network}
              </p>
            )}
            
            {/* Available Accounts Dropdown */}
            {availableAccounts.length > 1 && (
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Switch Account:
                </label>
                <select
                  value={walletAddress}
                  onChange={(e) => switchWallet(e.target.value)}
                  className="w-full px-3 py-2 bg-[#232736] text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {availableAccounts.map((account) => (
                    <option key={account} value={account}>
                      {account.slice(0, 6)}...{account.slice(-4)}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              onClick={disconnectWallet}
              className="inline-flex items-center gap-1 px-2 py-1 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <X className="w-4 h-4" />
              Disconnect
            </button>
          </div>
        )}

        {walletAddress && (
          <>
            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <div className="mb-6 space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-semibold text-white">Recipient Address</label>
                  <input
                  disabled
                    type="text"
                    value={customRecipient}
                    onChange={(e) => setCustomRecipient(e.target.value)}
                    placeholder="0x..."
                    className="w-full px-3 py-2 text-gray-100 bg-[#232736] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold text-white">Amount (ETH)</label>
                  <input
                  disabled
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    step="0.001"
                    min="0"
                    className="w-full px-3 py-2 text-gray-100 bg-[#232736] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={sendPayment}
                  disabled={!walletAddress || isSending}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-amber-50 text-black rounded-lg hover:bg-[#000] hover:text-amber-50 transition-colors font-bold disabled:opacity-60"
                >
                  {isSending ? (
                    <Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSending ? 'Sending...' : `Send ${customAmount} ETH`}
                </button>
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="p-4 bg-[#1B1E27] rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-3">Portfolio Overview</h3>
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-white">${calculateTotalValue()}</p>
                    <p className="text-gray-400">Total Portfolio Value</p>
                  </div>
                  
                  <div className="space-y-3">
                    {Object.entries(tokenBalances).map(([token, balance]) => {
                      const tokenInfo = mockTokens[token];
                      const value = tokenInfo ? (parseFloat(balance) * tokenInfo.price).toFixed(2) : '0.00';
                      return (
                        <div key={token} className="flex justify-between items-center p-3 bg-[#232736] rounded-lg">
                          <div>
                            <p className="font-medium text-white">{tokenInfo?.name || token}</p>
                            <p className="text-sm text-gray-400">{balance} {token}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-white">${value}</p>
                            <p className="text-sm text-gray-400">${tokenInfo?.price.toFixed(2) || '0.00'}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 bg-[#1B1E27] rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-3">Account Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Available Balance:</span>
                      <span className="text-green-400 font-medium">${(parseFloat(calculateTotalValue()) * 0.95).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pending Payments:</span>
                      <span className="text-yellow-400 font-medium">$25.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Locked (Escrow):</span>
                      <span className="text-orange-400 font-medium">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div className="space-y-4">
                {/* Search and Filters */}
                <div className="space-y-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-[#232736] text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="flex-1 px-3 py-2 bg-[#232736] text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Types</option>
                      <option value="payment">Payment</option>
                      <option value="earning">Earning</option>
                      <option value="refund">Refund</option>
                    </select>
                    
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="flex-1 px-3 py-2 bg-[#232736] text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Status</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>

                {/* Transaction List */}
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredTransactions.map((tx) => (
                    <div key={tx.id} className="p-4 bg-[#1B1E27] rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                              tx.type === 'payment' ? 'bg-red-900 text-red-300' :
                              tx.type === 'earning' ? 'bg-green-900 text-green-300' :
                              'bg-blue-900 text-blue-300'
                            }`}>
                              {tx.type}
                            </span>
                            <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                              tx.status === 'confirmed' ? 'bg-green-900 text-green-300' :
                              'bg-yellow-900 text-yellow-300'
                            }`}>
                              {tx.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            {formatTimestamp(tx.timestamp)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`font-medium ${
                            tx.type === 'payment' ? 'text-red-400' : 'text-green-400'
                          }`}>
                            {tx.type === 'payment' ? '-' : '+'}{tx.amount} {tx.token}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="break-all">
                          {tx.id.slice(0, 10)}...{tx.id.slice(-8)}
                        </span>
                        <button
                          onClick={() => copyToClipboard(tx.id)}
                          className="p-1 hover:bg-[#232736] rounded"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                        <a
                          href={getExplorerUrl(tx.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 hover:bg-[#232736] rounded"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                  
                  {filteredTransactions.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                      No transactions found
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* Messages */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-[#29191A] border border-[#C85752] rounded-lg flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-300">{errorMessage}</p>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3 bg-[#17281C] border border-[#2CA763] rounded-lg flex items-start gap-2 break-all">
            <CheckCircle className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-green-200">{successMessage}</p>
          </div>
        )}

        {!window.ethereum && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
            <p className="mb-2">MetaMask not detected. To use this feature:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Install MetaMask browser extension</li>
              <li>Create or import a wallet</li>
              <li>Refresh this page</li>
            </ol>
          </div>
        )}
      </div>
    </div>
    </section>
    </div>
  );
};

export default WalletPage;