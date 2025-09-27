import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
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
import './marketplace.css';

const GPUMarketplace = () => {
  const navigate = useNavigate('')
  const [activeTab, setActiveTab] = useState('Marketplace');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [sortOrder, setSortOrder] = useState('high-to-low');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('Crypto Mining');
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [selectedGpu, setSelectedGpu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPoliciesDropdown, setShowPoliciesDropdown] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    gpuType: [],
    vramSize: [],
    performance: '',
    location: [],
    priceRange: [0, 100],
    availability: '',
    rating: ''
  });

  const searchRef = useRef(null);
  const sortRef = useRef(null);
  const teamRef = useRef(null);
  const policiesRef = useRef(null);
  const helpRef = useRef(null);

  const img = ['null', '/case1.png', '/case2.png', '/case3.png', '/case4.png', '/case5.png', '/case6.png', '/case7.png', '/case8.png', '/case9.png', '/case5.png', '/case3.png', '/case2.png', '/case1.png', '/case4.png', '/case9.png', '/case6.png', '/case8.png', '/case7.png', '/case1.png'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSortDropdown(false);
      }
      if (teamRef.current && !teamRef.current.contains(event.target)) {
        setShowTeamDropdown(false);
      }
      if (policiesRef.current && !policiesRef.current.contains(event.target)) {
        setShowPoliciesDropdown(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setShowHelpDropdown(false);
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

  const gpuData = [
    {
      id: 1,
      model: 'NVIDIA RTX 4090',
      rating: 'Excellent',
      price: '0.75 ETH/hour',
      provider: 'CloudGPU Pro',
      bootTime: '12ms',
      availability: '24h avail',
      location: 'US-West',
      stars: 4.8,
      vram: '24GB',
      performance: 95,
      reviews: 342,
      completedJobs: 1250,
      disputes: 2,
      specs: { cores: '16384', baseClock: '2230 MHz', boostClock: '2520 MHz', memory: '24GB GDDR6X', bandwidth: '1008 GB/s', architecture: 'Ada Lovelace' },
      benchmarks: { gaming4K: 98, aiTraining: 95, rendering: 96, mining: 89 },
      providerHistory: { joinDate: '2023-01-15', totalJobs: 3200, successRate: 98.5, avgResponseTime: '2.3 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '720 hours (30 days)', billing: 'Per minute after first hour', deposits: 'Required for rentals > 24h' },
      sla: { uptime: '99.9%', support: '24/7 Technical Support', compensation: 'Full refund for downtime > 1%', maintenance: 'Scheduled weekly, 2-4 AM UTC' }
    },
    {
      id: 2,
      model: 'NVIDIA RTX 4080',
      rating: 'Good',
      price: '0.55 ETH/hour',
      provider: 'AI Compute Hub',
      bootTime: '15ms',
      availability: '18h avail',
      location: 'EU-Central',
      stars: 4.6,
      vram: '16GB',
      performance: 87,
      reviews: 198,
      completedJobs: 856,
      disputes: 5,
      specs: { cores: '9728', baseClock: '2205 MHz', boostClock: '2505 MHz', memory: '16GB GDDR6X', bandwidth: '717 GB/s', architecture: 'Ada Lovelace' },
      benchmarks: { gaming4K: 85, aiTraining: 82, rendering: 88, mining: 79 },
      providerHistory: { joinDate: '2023-03-22', totalJobs: 2100, successRate: 96.8, avgResponseTime: '3.1 hours' },
      paymentTerms: { minRental: '2 hours', maxRental: '360 hours (15 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 12h' },
      sla: { uptime: '99.5%', support: 'Business hours support', compensation: 'Partial refund for downtime > 2%', maintenance: 'Scheduled bi-weekly' }
    },
    {
      id: 3,
      model: 'NVIDIA RTX 3090',
      rating: 'Good',
      price: '0.45 BTC/hour',
      provider: 'TechFlow Systems',
      bootTime: '18ms',
      availability: '12h avail',
      location: 'US-East',
      stars: 4.4,
      vram: '24GB',
      performance: 82,
      reviews: 156,
      completedJobs: 723,
      disputes: 3,
      specs: { cores: '10496', baseClock: '1395 MHz', boostClock: '1695 MHz', memory: '24GB GDDR6X', bandwidth: '936 GB/s', architecture: 'Ampere' },
      benchmarks: { gaming4K: 82, aiTraining: 79, rendering: 85, mining: 88 },
      providerHistory: { joinDate: '2022-11-08', totalJobs: 1850, successRate: 95.2, avgResponseTime: '4.2 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '240 hours (10 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 8h' },
      sla: { uptime: '99.2%', support: 'Business hours support', compensation: 'Partial refund for downtime > 3%', maintenance: 'Scheduled monthly' }
    },
    {
      id: 4,
      model: 'AMD RX 7900 XTX',
      rating: 'Good',
      price: '0.42 ETH/hour',
      provider: 'RedCompute Labs',
      bootTime: '14ms',
      availability: '20h avail',
      location: 'EU-West',
      stars: 4.3,
      vram: '24GB',
      performance: 78,
      reviews: 89,
      completedJobs: 445,
      disputes: 1,
      specs: { cores: '6144', baseClock: '1855 MHz', boostClock: '2500 MHz', memory: '24GB GDDR6', bandwidth: '960 GB/s', architecture: 'RDNA 3' },
      benchmarks: { gaming4K: 78, aiTraining: 72, rendering: 82, mining: 75 },
      providerHistory: { joinDate: '2023-06-12', totalJobs: 890, successRate: 97.1, avgResponseTime: '2.8 hours' },
      paymentTerms: { minRental: '2 hours', maxRental: '168 hours (7 days)', billing: 'Per minute after first hour', deposits: 'Required for rentals > 12h' },
      sla: { uptime: '99.1%', support: '24/7 Community Support', compensation: 'Partial refund for downtime > 4%', maintenance: 'Scheduled bi-weekly' }
    },
    {
      id: 5,
      model: 'NVIDIA RTX 4070 Ti',
      rating: 'Fair',
      price: '0.38 ETH/hour',
      provider: 'Budget GPU Hub',
      bootTime: '16ms',
      availability: '16h avail',
      location: 'Asia-Pacific',
      stars: 4.1,
      vram: '12GB',
      performance: 74,
      reviews: 67,
      completedJobs: 234,
      disputes: 4,
      specs: { cores: '7680', baseClock: '2310 MHz', boostClock: '2610 MHz', memory: '12GB GDDR6X', bandwidth: '504 GB/s', architecture: 'Ada Lovelace' },
      benchmarks: { gaming4K: 74, aiTraining: 71, rendering: 77, mining: 68 },
      providerHistory: { joinDate: '2023-08-19', totalJobs: 567, successRate: 94.3, avgResponseTime: '5.1 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '120 hours (5 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 6h' },
      sla: { uptime: '98.8%', support: 'Business hours support', compensation: 'No compensation', maintenance: 'Scheduled weekly' }
    },
    {
      id: 6,
      model: 'NVIDIA RTX 4090',
      rating: 'Excellent',
      price: '0.78 ETH/hour',
      provider: 'Premium Compute',
      bootTime: '10ms',
      availability: '24h avail',
      location: 'US-East',
      stars: 4.9,
      vram: '24GB',
      performance: 96,
      reviews: 412,
      completedJobs: 1567,
      disputes: 0,
      specs: { cores: '16384', baseClock: '2230 MHz', boostClock: '2520 MHz', memory: '24GB GDDR6X', bandwidth: '1008 GB/s', architecture: 'Ada Lovelace' },
      benchmarks: { gaming4K: 99, aiTraining: 97, rendering: 98, mining: 91 },
      providerHistory: { joinDate: '2022-12-03', totalJobs: 4200, successRate: 99.2, avgResponseTime: '1.8 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '720 hours (30 days)', billing: 'Per minute', deposits: 'Required for rentals > 24h' },
      sla: { uptime: '99.9%', support: '24/7 Premium Support', compensation: 'Full refund for any downtime', maintenance: 'Scheduled weekly, 1-3 AM UTC' }
    },
    {
      id: 7,
      model: 'NVIDIA RTX 4080 Super',
      rating: 'Excellent',
      price: '0.62 ETH/hour',
      provider: 'NextGen Computing',
      bootTime: '13ms',
      availability: '22h avail',
      location: 'US-Central',
      stars: 4.7,
      vram: '16GB',
      performance: 89,
      reviews: 234,
      completedJobs: 987,
      disputes: 1,
      specs: { cores: '10240', baseClock: '2295 MHz', boostClock: '2550 MHz', memory: '16GB GDDR6X', bandwidth: '736 GB/s', architecture: 'Ada Lovelace' },
      benchmarks: { gaming4K: 89, aiTraining: 86, rendering: 91, mining: 82 },
      providerHistory: { joinDate: '2023-02-14', totalJobs: 2456, successRate: 97.8, avgResponseTime: '2.5 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '480 hours (20 days)', billing: 'Per minute after first hour', deposits: 'Required for rentals > 16h' },
      sla: { uptime: '99.6%', support: '24/7 Technical Support', compensation: 'Partial refund for downtime > 1%', maintenance: 'Scheduled bi-weekly, 2-4 AM UTC' }
    },
    {
      id: 8,
      model: 'AMD RX 7800 XT',
      rating: 'Good',
      price: '0.35 ETH/hour',
      provider: 'OpenSource GPU',
      bootTime: '17ms',
      availability: '14h avail',
      location: 'EU-North',
      stars: 4.2,
      vram: '16GB',
      performance: 72,
      reviews: 78,
      completedJobs: 356,
      disputes: 2,
      specs: { cores: '3840', baseClock: '1295 MHz', boostClock: '2430 MHz', memory: '16GB GDDR6', bandwidth: '624 GB/s', architecture: 'RDNA 3' },
      benchmarks: { gaming4K: 72, aiTraining: 68, rendering: 75, mining: 71 },
      providerHistory: { joinDate: '2023-07-25', totalJobs: 689, successRate: 95.8, avgResponseTime: '3.7 hours' },
      paymentTerms: { minRental: '2 hours', maxRental: '144 hours (6 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 8h' },
      sla: { uptime: '98.9%', support: 'Community Support', compensation: 'No compensation', maintenance: 'Scheduled monthly' }
    },
    {
      id: 9,
      model: 'NVIDIA RTX 3080 Ti',
      rating: 'Good',
      price: '0.41 BTC/hour',
      provider: 'Legacy Compute',
      bootTime: '19ms',
      availability: '10h avail',
      location: 'Asia-East',
      stars: 4.0,
      vram: '12GB',
      performance: 76,
      reviews: 145,
      completedJobs: 612,
      disputes: 6,
      specs: { cores: '10240', baseClock: '1365 MHz', boostClock: '1665 MHz', memory: '12GB GDDR6X', bandwidth: '912 GB/s', architecture: 'Ampere' },
      benchmarks: { gaming4K: 76, aiTraining: 73, rendering: 79, mining: 84 },
      providerHistory: { joinDate: '2022-08-16', totalJobs: 1234, successRate: 93.1, avgResponseTime: '6.2 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '96 hours (4 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 4h' },
      sla: { uptime: '98.2%', support: 'Business hours support', compensation: 'No compensation', maintenance: 'Scheduled weekly' }
    },
    {
      id: 10,
      model: 'NVIDIA RTX 4060 Ti',
      rating: 'Fair',
      price: '0.28 ETH/hour',
      provider: 'Entry Level Labs',
      bootTime: '21ms',
      availability: '8h avail',
      location: 'US-South',
      stars: 3.9,
      vram: '16GB',
      performance: 65,
      reviews: 45,
      completedJobs: 178,
      disputes: 3,
      specs: { cores: '4352', baseClock: '2310 MHz', boostClock: '2535 MHz', memory: '16GB GDDR6', bandwidth: '288 GB/s', architecture: 'Ada Lovelace' },
      benchmarks: { gaming4K: 65, aiTraining: 62, rendering: 68, mining: 58 },
      providerHistory: { joinDate: '2023-09-05', totalJobs: 289, successRate: 91.7, avgResponseTime: '7.3 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '48 hours (2 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 2h' },
      sla: { uptime: '97.5%', support: 'Email support only', compensation: 'No compensation', maintenance: 'Unscheduled' }
    },
    {
      id: 11,
      model: 'AMD RX 6900 XT',
      rating: 'Good',
      price: '0.33 ETH/hour',
      provider: 'Retro Gaming Hub',
      bootTime: '20ms',
      availability: '15h avail',
      location: 'EU-South',
      stars: 4.1,
      vram: '16GB',
      performance: 69,
      reviews: 67,
      completedJobs: 423,
      disputes: 4,
      specs: { cores: '5120', baseClock: '1825 MHz', boostClock: '2250 MHz', memory: '16GB GDDR6', bandwidth: '512 GB/s', architecture: 'RDNA 2' },
      benchmarks: { gaming4K: 69, aiTraining: 65, rendering: 72, mining: 78 },
      providerHistory: { joinDate: '2022-05-30', totalJobs: 1045, successRate: 94.6, avgResponseTime: '4.8 hours' },
      paymentTerms: { minRental: '2 hours', maxRental: '72 hours (3 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 6h' },
      sla: { uptime: '98.1%', support: 'Community Support', compensation: 'Partial refund for downtime > 5%', maintenance: 'Scheduled monthly' }
    },
    {
      id: 12,
      model: 'NVIDIA RTX 4070',
      rating: 'Good',
      price: '0.36 ETH/hour',
      provider: 'MidRange Masters',
      bootTime: '17ms',
      availability: '19h avail',
      location: 'Canada-East',
      stars: 4.3,
      vram: '12GB',
      performance: 71,
      reviews: 112,
      completedJobs: 534,
      disputes: 2,
      specs: { cores: '5888', baseClock: '1920 MHz', boostClock: '2475 MHz', memory: '12GB GDDR6X', bandwidth: '504 GB/s', architecture: 'Ada Lovelace' },
      benchmarks: { gaming4K: 71, aiTraining: 68, rendering: 74, mining: 63 },
      providerHistory: { joinDate: '2023-04-18', totalJobs: 1123, successRate: 96.2, avgResponseTime: '3.4 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '192 hours (8 days)', billing: 'Per minute after first hour', deposits: 'Required for rentals > 12h' },
      sla: { uptime: '99.0%', support: 'Business hours support', compensation: 'Partial refund for downtime > 2%', maintenance: 'Scheduled bi-weekly' }
    },
    {
      id: 13,
      model: 'Intel Arc A770',
      rating: 'Fair',
      price: '0.25 ETH/hour',
      provider: 'Intel Enthusiasts',
      bootTime: '23ms',
      availability: '6h avail',
      location: 'US-Northwest',
      stars: 3.7,
      vram: '16GB',
      performance: 58,
      reviews: 34,
      completedJobs: 89,
      disputes: 5,
      specs: { cores: '4096', baseClock: '2100 MHz', boostClock: '2400 MHz', memory: '16GB GDDR6', bandwidth: '560 GB/s', architecture: 'Xe HPG' },
      benchmarks: { gaming4K: 58, aiTraining: 55, rendering: 61, mining: 52 },
      providerHistory: { joinDate: '2023-10-12', totalJobs: 156, successRate: 88.5, avgResponseTime: '9.1 hours' },
      paymentTerms: { minRental: '2 hours', maxRental: '24 hours (1 day)', billing: 'Hourly blocks', deposits: 'No deposits required' },
      sla: { uptime: '95.8%', support: 'Email support only', compensation: 'No compensation', maintenance: 'Unscheduled' }
    },
    {
      id: 14,
      model: 'NVIDIA RTX 3070 Ti',
      rating: 'Good',
      price: '0.32 BTC/hour',
      provider: 'Balanced Computing',
      bootTime: '18ms',
      availability: '13h avail',
      location: 'Australia-East',
      stars: 4.2,
      vram: '8GB',
      performance: 73,
      reviews: 98,
      completedJobs: 467,
      disputes: 3,
      specs: { cores: '6144', baseClock: '1580 MHz', boostClock: '1770 MHz', memory: '8GB GDDR6X', bandwidth: '608 GB/s', architecture: 'Ampere' },
      benchmarks: { gaming4K: 73, aiTraining: 70, rendering: 76, mining: 81 },
      providerHistory: { joinDate: '2022-09-22', totalJobs: 934, successRate: 95.1, avgResponseTime: '4.1 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '120 hours (5 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 8h' },
      sla: { uptime: '98.6%', support: 'Business hours support', compensation: 'Partial refund for downtime > 3%', maintenance: 'Scheduled monthly' }
    },
    {
      id: 15,
      model: 'AMD RX 7600',
      rating: 'Fair',
      price: '0.22 ETH/hour',
      provider: 'Budget Friendly GPU',
      bootTime: '25ms',
      availability: '11h avail',
      location: 'Mexico-Central',
      stars: 3.8,
      vram: '8GB',
      performance: 61,
      reviews: 42,
      completedJobs: 156,
      disputes: 2,
      specs: { cores: '2048', baseClock: '1720 MHz', boostClock: '2625 MHz', memory: '8GB GDDR6', bandwidth: '288 GB/s', architecture: 'RDNA 3' },
      benchmarks: { gaming4K: 61, aiTraining: 57, rendering: 64, mining: 59 },
      providerHistory: { joinDate: '2023-11-08', totalJobs: 234, successRate: 92.3, avgResponseTime: '6.7 hours' },
      paymentTerms: { minRental: '2 hours', maxRental: '48 hours (2 days)', billing: 'Hourly blocks', deposits: 'No deposits required' },
      sla: { uptime: '96.9%', support: 'Community Support', compensation: 'No compensation', maintenance: 'Unscheduled' }
    },
    {
      id: 16,
      model: 'NVIDIA RTX 4090 Ti',
      rating: 'Excellent',
      price: '0.89 ETH/hour',
      provider: 'Ultra Performance',
      bootTime: '9ms',
      availability: '24h avail',
      location: 'Japan-East',
      stars: 4.95,
      vram: '24GB',
      performance: 99,
      reviews: 156,
      completedJobs: 678,
      disputes: 0,
      specs: { cores: '17408', baseClock: '2330 MHz', boostClock: '2620 MHz', memory: '24GB GDDR6X', bandwidth: '1152 GB/s', architecture: 'Ada Lovelace' },
      benchmarks: { gaming4K: 100, aiTraining: 99, rendering: 99, mining: 94 },
      providerHistory: { joinDate: '2023-12-15', totalJobs: 1123, successRate: 99.8, avgResponseTime: '1.2 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '720 hours (30 days)', billing: 'Per second', deposits: 'Required for rentals > 48h' },
      sla: { uptime: '99.99%', support: 'Instant 24/7 Premium Support', compensation: 'Full refund + bonus for any downtime', maintenance: 'Real-time monitoring, zero downtime' }
    },
    {
      id: 17,
      model: 'AMD RX 7900 GRE',
      rating: 'Good',
      price: '0.39 ETH/hour',
      provider: 'AMD Specialists',
      bootTime: '16ms',
      availability: '17h avail',
      location: 'Germany-Central',
      stars: 4.4,
      vram: '16GB',
      performance: 75,
      reviews: 87,
      completedJobs: 398,
      disputes: 1,
      specs: { cores: '5376', baseClock: '1880 MHz', boostClock: '2245 MHz', memory: '16GB GDDR6', bandwidth: '576 GB/s', architecture: 'RDNA 3' },
      benchmarks: { gaming4K: 75, aiTraining: 71, rendering: 78, mining: 73 },
      providerHistory: { joinDate: '2023-05-20', totalJobs: 823, successRate: 96.7, avgResponseTime: '2.9 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '240 hours (10 days)', billing: 'Per minute after first hour', deposits: 'Required for rentals > 16h' },
      sla: { uptime: '99.3%', support: '24/7 Community Support', compensation: 'Partial refund for downtime > 2%', maintenance: 'Scheduled bi-weekly' }
    },
    {
      id: 18,
      model: 'NVIDIA RTX 3060 Ti',
      rating: 'Good',
      price: '0.29 BTC/hour',
      provider: 'Classic Computing',
      bootTime: '20ms',
      availability: '9h avail',
      location: 'Brazil-South',
      stars: 4.0,
      vram: '8GB',
      performance: 68,
      reviews: 134,
      completedJobs: 567,
      disputes: 7,
      specs: { cores: '4864', baseClock: '1410 MHz', boostClock: '1665 MHz', memory: '8GB GDDR6', bandwidth: '448 GB/s', architecture: 'Ampere' },
      benchmarks: { gaming4K: 68, aiTraining: 64, rendering: 71, mining: 79 },
      providerHistory: { joinDate: '2022-03-14', totalJobs: 1456, successRate: 92.8, avgResponseTime: '5.6 hours' },
      paymentTerms: { minRental: '1 hour', maxRental: '72 hours (3 days)', billing: 'Hourly blocks', deposits: 'Required for rentals > 4h' },
      sla: { uptime: '97.8%', support: 'Business hours support', compensation: 'No compensation', maintenance: 'Scheduled weekly' }
    }
  ];

  const teams = [
    { name: 'Crypto Mining', members: 22, type: 'current' },
    { name: 'LLM Training', members: 12, type: 'current' },
    { name: 'Trading', members: 8, type: 'team' },
    { name: '3D Rendering', members: 15, type: 'team' },
    { name: 'Create New Team', members: null, type: 'action' }
  ];

  const sortOptions = [
    { value: 'price', label: 'Price' },
    { value: 'availability', label: 'Availability' },
    { value: 'rating', label: 'Rating' },
    { value: 'performance', label: 'Performance' },
    { value: 'proximity', label: 'Proximity' }
  ];

  const sortOrderOptions = [
    { value: 'high-to-low', label: 'High to Low' },
    { value: 'low-to-high', label: 'Low to High' }
  ];

  const filterOptions = {
    gpuType: ['NVIDIA', 'AMD', 'Intel'],
    vramSize: ['8GB', '12GB', '16GB', '24GB', '32GB+'],
    location: ['US-West', 'US-East', 'EU-Central', 'EU-West', 'Asia-Pacific'],
    availability: ['24h', '18h+', '12h+', '6h+'],
    rating: ['4.5+', '4.0+', '3.5+', '3.0+']
  };

  const navigationItems = [
    { icon: Home, label: 'Home', active: false, link: "/"},
    { icon: BarChart2, label: 'Marketplace', active: true, link: "/marketplace" },
    { icon: BarChart3, label: 'Dashboard', active: false, link: "/dashboard" },
    { icon: Bot, label: "AI Job Submission", active: false, link: "/jobs" },
    { icon: Wallet, label: 'Wallet', active: false, link: "/wallet" },
    { icon: History, label: 'History', active: false, link: "/history" },
    { icon: Trophy, label: 'NFTs & Achievements', active: false, link: "/rewards" }
  ];

  const policiesItems = [
    { label: 'Terms of Service' },
    { label: 'Privacy Policy' },
    { label: 'Refund Policy' }
  ];

  const helpItems = [
    { label: 'FAQs' },
    { label: 'Contact Us' },
    { label: 'My Tickets' }
  ];

  const getRatingColor = (rating) => {
    return 'bg-white/10 text-white border-white/20';
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prev => {
      if (category === 'gpuType' || category === 'vramSize' || category === 'location') {
        const currentValues = prev[category];
        if (currentValues.includes(value)) {
          return { ...prev, [category]: currentValues.filter(v => v !== value) };
        } else {
          return { ...prev, [category]: [...currentValues, value] };
        }
      } else {
        return { ...prev, [category]: value };
      }
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      gpuType: [],
      vramSize: [],
      performance: '',
      location: [],
      priceRange: [0, 100],
      availability: '',
      rating: ''
    });
    setSelectedSort('');
    setSortOrder('high-to-low');
  };

  const handleCardClick = (gpu) => {
    setSelectedGpu(gpu);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedGpu(null);
  };

  const handleTeamSelect = (team) => {
    if (team.type !== 'action') {
      setSelectedTeam(team.name);
    }
    setShowTeamDropdown(false);
  };

  return (
    <div className="h-screen bg-[#0a0a0a] text-white flex relative overflow-hidden">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Fixed Sidebar - NO SCROLLING */}
      <div className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:relative inset-y-0 left-0 w-64 bg-[#1a1a1a] border-r border-[#2a2a2a] flex flex-col z-50 transition-transform duration-300 ease-in-out h-full`}>

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
                    {teams.find(t => t.name === selectedTeam)?.members} members
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                showTeamDropdown ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Team Dropdown */}
            {showTeamDropdown && (
              <div className="absolute top-full mt-2 w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg shadow-2xl z-50">
                {teams.map((team, index) => (
                  <button
                    key={index}
                    onClick={() => handleTeamSelect(team)}
                    className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                      team.type === 'action' 
                        ? 'text-white/60 hover:text-white border-t border-[#3a3a3a]' 
                        : 'text-white hover:bg-[#1a1a1a]'
                    } ${index === 0 ? 'rounded-t-lg' : ''} ${index === teams.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{team.name!="Create New Team"?team.name:<span className='flex items-center'><Plus size={20} className='mr-2'/>{team.name}</span>}</span>
                      {team.members && (
                        <span className="text-xs text-white/60">{team.members} members</span>
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
                      ? 'bg-[#2a2a2a] text-white border border-[#3a3a3a]'
                      : 'text-white/60 hover:text-white hover:bg-[#2a2a2a] hover:border hover:border-[#3a3a3a]'
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
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    showPoliciesDropdown ? 'rotate-180' : ''
                  }`} />
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
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    showHelpDropdown ? 'rotate-180' : ''
                  }`} />
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
                <p className="text-sm font-medium text-white truncate">John Doe</p>
                <p className="text-xs text-white/60 truncate">john@techcorp.ai</p>
              </div>
            </div>
            <button className="p-2 text-white/60 hover:text-white hover:bg-[#2a2a2a] rounded-lg transition-all duration-200">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - FIXED HEIGHT, NO SCROLL */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Fixed Header - NO SCROLL */}
        <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] px-4 lg:px-8 py-6 flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-[#2a2a2a] rounded-lg transition-all duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>

            <h1 className="text-2xl lg:text-3xl font-bold text-white">Marketplace</h1>
            <div className="lg:hidden w-10"></div> {/* Spacer for mobile */}
          </div>

          {/* Search Bar with Dropdown */}
          <div className="relative max-w-2xl" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search GPU models, providers, or specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchDropdown(true)}
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-200"
              />
            </div>

            {/* Search Dropdown */}
            {showSearchDropdown && (
              <div className="absolute top-full mt-2 w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl shadow-2xl z-30 max-h-96 overflow-y-auto custom-scrollbar">
                <div className="p-4">
                  {/* Sort Section */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-white flex items-center">
                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                        Sort by
                      </h4>
                    </div>

                    <div className="flex space-x-3 mb-3">
                      {/* Sort Order Dropdown */}
                      <div className="relative flex-1" ref={sortRef}>
                        <button
                          onClick={() => setShowSortDropdown(!showSortDropdown)}
                          className="w-full flex items-center justify-between p-2.5 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-sm font-medium text-white hover:bg-[#0a0a0a] transition-all duration-200"
                        >
                          {sortOrderOptions.find(option => option.value === sortOrder)?.label}
                          <ChevronDown className="w-4 h-4" />
                        </button>

                        {showSortDropdown && (
                          <div className="absolute top-full mt-1 w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg shadow-lg z-40">
                            {sortOrderOptions.map((option) => (
                              <button
                                key={option.value}
                                onClick={() => {
                                  setSortOrder(option.value);
                                  setShowSortDropdown(false);
                                }}
                                className="w-full text-left px-3 py-2 text-sm text-white hover:bg-[#2a2a2a] first:rounded-t-lg last:rounded-b-lg transition-all duration-200"
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSelectedSort(option.value)}
                          className={`p-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                            selectedSort === option.value
                              ? 'bg-white/10 text-white border border-white/20'
                              : 'bg-[#1a1a1a] text-white/60 hover:text-white hover:bg-[#0a0a0a] border border-transparent'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filters Section */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-white flex items-center">
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                      </h4>
                      <button
                        onClick={clearFilters}
                        className="text-xs text-white/60 hover:text-white transition-colors duration-200"
                      >
                        Clear all
                      </button>
                    </div>

                    {/* GPU Type Filter */}
                    <div className="mb-4">
                      <h5 className="text-xs font-medium text-white/80 mb-2">GPU Type</h5>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.gpuType.map((type) => (
                          <button
                            key={type}
                            onClick={() => handleFilterChange('gpuType', type)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                              selectedFilters.gpuType.includes(type)
                                ? 'bg-white/10 text-white border border-white/20'
                                : 'bg-[#1a1a1a] text-white/60 hover:text-white hover:bg-[#0a0a0a] border border-transparent'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* VRAM Size Filter */}
                    <div className="mb-4">
                      <h5 className="text-xs font-medium text-white/80 mb-2">VRAM Size</h5>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.vramSize.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleFilterChange('vramSize', size)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                              selectedFilters.vramSize.includes(size)
                                ? 'bg-white/10 text-white border border-white/20'
                                : 'bg-[#1a1a1a] text-white/60 hover:text-white hover:bg-[#0a0a0a] border border-transparent'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location Filter */}
                    <div className="mb-4">
                      <h5 className="text-xs font-medium text-white/80 mb-2">Location</h5>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.location.map((location) => (
                          <button
                            key={location}
                            onClick={() => handleFilterChange('location', location)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                              selectedFilters.location.includes(location)
                                ? 'bg-white/10 text-white border border-white/20'
                                : 'bg-[#1a1a1a] text-white/60 hover:text-white hover:bg-[#0a0a0a] border border-transparent'
                            }`}
                          >
                            {location}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="mb-4">
                      <h5 className="text-xs font-medium text-white/80 mb-2">Minimum Rating</h5>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.rating.map((rating) => (
                          <button
                            key={rating}
                            onClick={() => handleFilterChange('rating', rating)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                              selectedFilters.rating === rating
                                ? 'bg-white/10 text-white border border-white/20'
                                : 'bg-[#1a1a1a] text-white/60 hover:text-white hover:bg-[#0a0a0a] border border-transparent'
                            }`}
                          >
                            {rating} ★
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Availability Filter */}
                    <div>
                      <h5 className="text-xs font-medium text-white/80 mb-2">Availability</h5>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.availability.map((avail) => (
                          <button
                            key={avail}
                            onClick={() => handleFilterChange('availability', avail)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                              selectedFilters.availability === avail
                                ? 'bg-white/10 text-white border border-white/20'
                                : 'bg-[#1a1a1a] text-white/60 hover:text-white hover:bg-[#0a0a0a] border border-transparent'
                            }`}
                          >
                            {avail}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ONLY THIS AREA SCROLLS - GPU Cards Grid */}
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {gpuData.map((gpu) => (
              <div
                key={gpu.id}
                onClick={() => handleCardClick(gpu)}
                className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {/* SMALLER Card Header - Reduced height */}
                <div 
                  className="w-full bg-[#2a2a2a] border-b border-[#3a3a3a] flex items-center justify-center p-4"
                  style={{ height: '320px' }}
                >
                 <img style={{ height: '320px' }} src={img[(gpu.id+1)]} alt="" />
                </div>

                {/* Card Content */}
                <div className="p-4 lg:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-base lg:text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">
                      {gpu.model}
                    </h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getRatingColor(gpu.rating)}`}>
                      {gpu.rating}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xl lg:text-2xl font-bold text-white mb-1">{gpu.price}</p>
                    <p className="text-white/60 text-sm">{gpu.provider}</p>
                  </div>

                  {/* Stats Grid with Transparent Background */}
                  <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-4 lg:mb-6 text-sm">
                    <div className="flex items-center text-white/90 bg-white/5 rounded-lg p-2 border border-white/10">
                      <Clock className="w-4 h-4 mr-2 text-white/70" />
                      <span className="text-xs lg:text-sm">{gpu.bootTime}</span>
                    </div>
                    <div className="flex items-center text-white/90 bg-white/5 rounded-lg p-2 border border-white/10">
                      <MapPin className="w-4 h-4 mr-2 text-white/70" />
                      <span className="text-xs lg:text-sm">{gpu.location}</span>
                    </div>
                    <div className="flex items-center text-white/90 bg-white/5 rounded-lg p-2 border border-white/10">
                      <Zap className="w-4 h-4 mr-2 text-white/70" />
                      <span className="text-xs lg:text-sm">{gpu.availability}</span>
                    </div>
                    <div className="flex items-center text-white/90 bg-white/5 rounded-lg p-2 border border-white/10">
                      <Star className="w-4 h-4 mr-2 fill-white/70 text-white/70" />
                      <span className="text-xs lg:text-sm">{gpu.stars}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle request compute
                      }}
                      className="flex-1 bg-white hover:bg-white/90 text-[#0a0a0a] font-medium py-2.5 lg:py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-lg text-sm"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Request Compute</span>
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 lg:p-3 border border-[#3a3a3a] hover:border-[#4a4a4a] rounded-xl text-white/60 hover:text-white transition-all duration-200"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 lg:p-3 border border-[#3a3a3a] hover:border-[#4a4a4a] rounded-xl text-white/60 hover:text-white transition-all duration-200"
                    >
                      <BarChart2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with FIXED HEADER */}
      {showModal && selectedGpu && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            {/* FIXED Modal Header - NO SCROLL */}
            <div className="flex items-center justify-between p-6 border-b border-[#2a2a2a] flex-shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedGpu.model}</h2>
                <p className="text-white/60">{selectedGpu.provider}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-white/60 hover:text-white hover:bg-[#2a2a2a] rounded-lg transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* SCROLLABLE Modal Content */}
            <div className="flex-1 p-6 space-y-8 overflow-y-auto custom-scrollbar">
              {/* Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#2a2a2a] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{selectedGpu.price}</div>
                  <div className="text-white/60 text-sm">Per Hour</div>
                </div>
                <div className="bg-[#2a2a2a] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{selectedGpu.stars}</div>
                  <div className="text-white/60 text-sm">{selectedGpu.reviews} Reviews</div>
                </div>
                <div className="bg-[#2a2a2a] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{selectedGpu.completedJobs}</div>
                  <div className="text-white/60 text-sm">Completed Jobs</div>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Cpu className="w-5 h-5 mr-2" />
                  Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedGpu.specs).map(([key, value]) => (
                    <div key={key} className="bg-[#2a2a2a] rounded-lg p-3">
                      <div className="text-white/60 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="text-white font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benchmarks */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Performance Benchmarks
                </h3>
                <div className="space-y-3">
                  {Object.entries(selectedGpu.benchmarks).map(([key, value]) => (
                    <div key={key} className="bg-[#2a2a2a] rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-white font-bold">{value}%</span>
                      </div>
                      <div className="w-full bg-[#3a3a3a] rounded-full h-2">
                        <div 
                          className="bg-white h-2 rounded-full transition-all duration-500"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Provider History */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Provider History
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#2a2a2a] rounded-lg p-4">
                    <div className="text-white/60 text-sm">Member Since</div>
                    <div className="text-white font-medium">{selectedGpu.providerHistory.joinDate}</div>
                  </div>
                  <div className="bg-[#2a2a2a] rounded-lg p-4">
                    <div className="text-white/60 text-sm">Total Jobs</div>
                    <div className="text-white font-medium">{selectedGpu.providerHistory.totalJobs}</div>
                  </div>
                  <div className="bg-[#2a2a2a] rounded-lg p-4">
                    <div className="text-white/60 text-sm">Success Rate</div>
                    <div className="text-white font-medium">{selectedGpu.providerHistory.successRate}%</div>
                  </div>
                  <div className="bg-[#2a2a2a] rounded-lg p-4">
                    <div className="text-white/60 text-sm">Avg Response Time</div>
                    <div className="text-white font-medium">{selectedGpu.providerHistory.avgResponseTime}</div>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Payment Terms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedGpu.paymentTerms).map(([key, value]) => (
                    <div key={key} className="bg-[#2a2a2a] rounded-lg p-3">
                      <div className="text-white/60 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="text-white font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SLA Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  SLA Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedGpu.sla).map(([key, value]) => (
                    <div key={key} className="bg-[#2a2a2a] rounded-lg p-3">
                      <div className="text-white/60 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="text-white font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews & Disputes Summary */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Reviews & Disputes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#2a2a2a] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{selectedGpu.reviews}</div>
                    <div className="text-white/60 text-sm">Total Reviews</div>
                  </div>
                  <div className="bg-[#2a2a2a] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{selectedGpu.stars}</div>
                    <div className="text-white/60 text-sm">Average Rating</div>
                  </div>
                  <div className="bg-[#2a2a2a] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{selectedGpu.disputes}</div>
                    <div className="text-white/60 text-sm">Disputes Filed</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4 border-t border-[#2a2a2a]">
                <button className="flex-1 bg-white hover:bg-white/90 text-[#0a0a0a] font-medium py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200">
                  <Zap className="w-5 h-5" />
                  <span>Request Compute</span>
                </button>
                <button className="px-6 py-3 border border-[#3a3a3a] hover:border-[#4a4a4a] rounded-xl text-white/60 hover:text-white transition-all duration-200 flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GPUMarketplace;