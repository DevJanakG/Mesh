
// Mock Data Utilities for DecentraGPU Provider Dashboard
// This file contains realistic data generators for development and testing

export const generateMockEarningsData = (days = 30) => {
  const data = [];
  const baseEarning = 150;

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));

    const variance = (Math.random() - 0.5) * 50;
    const trend = Math.sin((i / days) * Math.PI) * 30;
    const earnings = Math.max(0, baseEarning + variance + trend);

    data.push({
      date: date.toISOString().split('T')[0],
      earnings: Math.round(earnings * 100) / 100,
      jobs: Math.floor(Math.random() * 10) + 5,
      uptime: 95 + Math.random() * 5
    });
  }

  return data;
};

export const generateMockGPUData = () => {
  const gpuModels = [
    { model: 'NVIDIA H100', baseRate: 2.50, maxTemp: 85, maxPower: 700 },
    { model: 'NVIDIA A100', baseRate: 1.80, maxTemp: 85, maxPower: 400 },
    { model: 'RTX 4090', baseRate: 0.85, maxTemp: 85, maxPower: 450 },
    { model: 'RTX 4080', baseRate: 0.65, maxTemp: 85, maxPower: 320 },
    { model: 'RTX 3090', baseRate: 0.55, maxTemp: 85, maxPower: 350 },
    { model: 'RTX 3080', baseRate: 0.45, maxTemp: 85, maxPower: 320 }
  ];

  const statuses = ['online', 'busy', 'offline', 'maintenance'];

  return gpuModels.map((gpu, index) => ({
    id: index + 1,
    model: gpu.model,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    utilization: Math.floor(Math.random() * 100),
    temperature: Math.floor(Math.random() * 40) + 40,
    power: gpu.status === 'offline' ? 0 : Math.floor(Math.random() * gpu.maxPower),
    rate: gpu.baseRate + (Math.random() - 0.5) * 0.2,
    uptime: 95 + Math.random() * 5,
    earnings24h: Math.random() * 50 + 20,
    jobsCompleted: Math.floor(Math.random() * 100) + 50
  }));
};

export const generateMockJobData = () => {
  const jobTypes = [
    { type: 'AI Training', clients: ['TechCorp', 'DeepMind Labs', 'AI Research Inc'], baseRate: 2.0 },
    { type: 'Crypto Mining', clients: ['CryptoFarm', 'BlockChain Co', 'MinerPro'], baseRate: 0.8 },
    { type: '3D Rendering', clients: ['StudioMax', 'Render Farm', 'VFX Studios'], baseRate: 1.5 },
    { type: 'Scientific Computing', clients: ['University Labs', 'Research Institute', 'BioTech Corp'], baseRate: 1.8 },
    { type: 'Machine Learning', clients: ['Data Science Co', 'ML Analytics', 'Neural Networks Ltd'], baseRate: 2.2 }
  ];

  return Array.from({ length: 15 }, (_, index) => {
    const jobType = jobTypes[Math.floor(Math.random() * jobTypes.length)];
    const client = jobType.clients[Math.floor(Math.random() * jobType.clients.length)];

    return {
      id: `JOB-${String(index + 1).padStart(3, '0')}`,
      type: jobType.type,
      client: client,
      clientRating: 3.5 + Math.random() * 1.5,
      gpu: ['H100', 'A100', 'RTX 4090', 'RTX 4080'][Math.floor(Math.random() * 4)],
      progress: Math.floor(Math.random() * 100),
      hourlyRate: jobType.baseRate + (Math.random() - 0.5) * 0.5,
      duration: Math.floor(Math.random() * 48) + 1,
      eta: `${Math.floor(Math.random() * 12)}h ${Math.floor(Math.random() * 60)}m`,
      priority: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)],
      startTime: new Date(Date.now() - Math.random() * 86400000 * 7).toISOString(),
      estimatedCompletion: new Date(Date.now() + Math.random() * 86400000 * 2).toISOString()
    };
  });
};

export const generateMockMarketData = () => {
  return {
    currentRates: {
      'H100': { min: 2.20, max: 2.80, trend: 5.2 },
      'A100': { min: 1.60, max: 2.00, trend: 2.1 },
      'RTX 4090': { min: 0.70, max: 0.95, trend: -1.5 },
      'RTX 4080': { min: 0.50, max: 0.75, trend: -0.8 },
      'RTX 3090': { min: 0.40, max: 0.65, trend: -2.1 },
      'RTX 3080': { min: 0.35, max: 0.55, trend: -1.8 }
    },
    demandForecast: {
      overall: 'high',
      aiTraining: { demand: 'very-high', growth: 25.5 },
      cryptoMining: { demand: 'medium', growth: -5.2 },
      rendering: { demand: 'high', growth: 12.8 },
      scientific: { demand: 'high', growth: 18.3 }
    },
    optimizationTips: [
      {
        type: 'pricing',
        message: 'Increase H100 rate by 8% for optimal profit',
        impact: 'high',
        confidence: 92
      },
      {
        type: 'timing',
        message: 'Peak hours: 9AM-5PM EST (+15% demand)',
        impact: 'medium',
        confidence: 87
      },
      {
        type: 'efficiency',
        message: 'Enable auto-scaling for 12% efficiency gain',
        impact: 'high',
        confidence: 94
      }
    ]
  };
};

export const generateMockSystemHealth = () => {
  return {
    cpu: {
      usage: Math.floor(Math.random() * 60) + 20,
      temperature: Math.floor(Math.random() * 30) + 45,
      cores: 32,
      model: 'Intel Xeon E5-2698 v4'
    },
    memory: {
      usage: Math.floor(Math.random() * 40) + 40,
      total: 128,
      used: Math.floor(Math.random() * 50) + 50,
      available: 128 - (Math.floor(Math.random() * 50) + 50)
    },
    storage: {
      total: 3400,
      used: 1200 + Math.floor(Math.random() * 800),
      available: 2200 - Math.floor(Math.random() * 800),
      ioRead: Math.floor(Math.random() * 500) + 100,
      ioWrite: Math.floor(Math.random() * 300) + 50
    },
    network: {
      upload: Math.floor(Math.random() * 200) + 50,
      download: Math.floor(Math.random() * 150) + 30,
      latency: Math.floor(Math.random() * 20) + 5,
      packetsLost: Math.random() * 0.1
    },
    alerts: [
      {
        id: 1,
        type: 'warning',
        message: 'GPU #3 temperature above optimal (78°C)',
        timestamp: new Date(Date.now() - 120000),
        severity: 'medium'
      },
      {
        id: 2,
        type: 'info',
        message: 'Scheduled maintenance in 2 hours',
        timestamp: new Date(Date.now() - 300000),
        severity: 'low'
      }
    ]
  };
};

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const formatPercentage = (value, decimals = 1) => {
  return `${value > 0 ? '+' : ''}${value.toFixed(decimals)}%`;
};

export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

export const getStatusColor = (status) => {
  const statusColors = {
    online: 'var(--success)',
    busy: 'var(--warning)',
    offline: 'var(--error)',
    maintenance: 'var(--text-muted)'
  };
  return statusColors[status] || 'var(--text-muted)';
};

export const calculateEfficiency = (actual, optimal) => {
  return Math.min(100, (actual / optimal) * 100);
};

export const generatePerformanceMetrics = () => {
  return {
    uptime: 99.8,
    jobCompletionRate: 98.7,
    averageEfficiency: 94.2,
    customerSatisfaction: 4.9,
    responseTime: 1.2,
    errorRate: 0.03,
    profitMargin: 67.5
  };
};
