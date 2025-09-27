import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Computer,
    Security,
    Speed,
    TrendingUp,
    Shield,
    MonetizationOn,
    CloudQueue,
    Analytics,
    AutoAwesome,
    CurrencyBitcoin,
    ViewInAr,
    Science,
    Movie,
    Storefront,
    Face,
    Diversity2,
    Grade,
    Gavel,
    Policy,
    Approval
} from '@mui/icons-material';

const HomePage = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [metrics, setMetrics] = useState({
        gpus: 15420,
        jobs: 89340,
        savings: 2400000,
        providers: 8500
    });
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                gpus: prev.gpus + Math.floor(Math.random() * 3),
                jobs: prev.jobs + Math.floor(Math.random() * 5),
                savings: prev.savings + Math.floor(Math.random() * 500),
                providers: prev.providers + Math.floor(Math.random() * 2)
            }));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const theme = {
        colors: {
            primary: '#6366f1',
            primaryDark: '#4338ca',
            secondary: '#10b981',
            secondaryDark: '#047857',
            background: '#0f0f23',
            surface: '#1a1a2e',
            surfaceVariant: '#252547',
            onSurface: '#ffffff',
            onSurfaceVariant: '#a1a1aa',
            outline: '#3f3f46',
            outlineVariant: '#27272a',
            error: '#ef4444',
            success: '#22c55e',
            warning: '#f59e0b'
        },
        shadows: {
            sm: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
        },
        borderRadius: {
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            full: '9999px'
        }
    };

    const NavBar = () => (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: scrollY > 100 ? 'rgba(15, 15, 35, 0.9)' : 'transparent',
            backdropFilter: scrollY > 100 ? 'blur(20px)' : 'none',
            borderBottom: scrollY > 100 ? `1px solid ${theme.colors.outline}` : 'none',
            transition: 'all 0.3s ease',
            padding: '1rem 2rem'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                        borderRadius: theme.borderRadius.sm,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#ffffff'
                    }}>
                        GPU
                    </div>
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: theme.colors.onSurface
                    }}>
                        Mesh
                    </span>
                </div>
                
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    '@media (max-width: 768px)': { display: 'none' }
                }}>
                   
                        <a href="/" style={{
                            color: theme.colors.onSurfaceVariant,
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: '500',
                            transition: 'color 0.2s ease'
                        }}>
                           Home
                        </a>
                        <a href="/marketplace" style={{
                            color: theme.colors.onSurfaceVariant,
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: '500',
                            transition: 'color 0.2s ease'
                        }}>
                           Marketplace
                        </a>
                        <a href="/wallet" style={{
                            color: theme.colors.onSurfaceVariant,
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: '500',
                            transition: 'color 0.2s ease'
                        }}>
                           Wallet
                        </a>
                        <a href="/jobs" style={{
                            color: theme.colors.onSurfaceVariant,
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: '500',
                            transition: 'color 0.2s ease'
                        }}>
                           Jobs
                        </a>
                    
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={()=>navigate('/signin')} style={{
                        background: 'transparent',
                        border: `2px solid ${theme.colors.primary}`,
                        color: theme.colors.primary,
                        padding: '0.75rem 1.5rem',
                        borderRadius: theme.borderRadius.full,
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                    }}>
                        Sign In
                    </button>
                    <button onClick={()=>navigate('/signin')} style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
                        border: 'none',
                        color: '#ffffff',
                        padding: '0.75rem 1.5rem',
                        borderRadius: theme.borderRadius.full,
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: theme.shadows.md
                    }}>
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );

    const HeroSection = () => (
        <section ref={heroRef} style={{
            minHeight: '100vh',
            background: `linear-gradient(135deg, ${theme.colors.background} 0%, #1a1a2e 50%, #16213e 100%)`,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '8rem 2rem 4rem'
        }}>
            {/* Animated Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, ${theme.colors.primary}20 0%, transparent 70%)`,
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '200px',
                height: '200px',
                background: `radial-gradient(circle, ${theme.colors.secondary}20 0%, transparent 70%)`,
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite reverse'
            }} />
            
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                '@media (max-width: 1024px)': {
                    gridTemplateColumns: '1fr',
                    textAlign: 'center'
                }
            }}>
                <div>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: `${theme.colors.surfaceVariant}40`,
                        padding: '0.5rem 1rem',
                        borderRadius: theme.borderRadius.full,
                        marginBottom: '2rem',
                        border: `1px solid ${theme.colors.outline}`
                    }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: theme.colors.success,
                            animation: 'pulse 2s infinite'
                        }} />
                        <span style={{
                            fontSize: '0.875rem',
                            color: theme.colors.onSurfaceVariant,
                            fontWeight: '500'
                        }}>
                            Live Network • {metrics.gpus.toLocaleString()} GPUs Online
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Decentralized GPU Compute for Everyone
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: theme.colors.onSurfaceVariant,
                        lineHeight: '1.6',
                        marginBottom: '3rem',
                        maxWidth: '600px'
                    }}>
                        Access powerful GPU compute for AI training, crypto mining, 3D rendering, scientific computing, and trading algorithms. Save up to 80% compared to traditional cloud providers.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '3rem',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
                            border: 'none',
                            color: '#ffffff',
                            padding: '1rem 2rem',
                            borderRadius: theme.borderRadius.md,
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: theme.shadows.lg,
                            minWidth: '200px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}>
                            <span onClick={()=>navigate('/marketplace')}>Start Computing</span>
                            {/* Arrow Right Icon Placeholder */}
                            <span style={{ fontSize: '1.2rem' }}>→</span>
                        </button>
                        <button style={{
                            background: 'transparent',
                            border: `2px solid ${theme.colors.secondary}`,
                            color: theme.colors.secondary,
                            padding: '1rem 2rem',
                            borderRadius: theme.borderRadius.md,
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            minWidth: '200px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}>
                            <span onClick={()=>navigate('/marketplace')}>Monetize Your GPU</span>
                            {/* Dollar Sign Icon Placeholder */}
                            <span style={{ fontSize: '1.2rem' }}>$</span>
                        </button>
                    </div>

                    {/* Key Metrics */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                        gap: '2rem',
                        padding: '2rem',
                        background: `${theme.colors.surface}60`,
                        borderRadius: theme.borderRadius.lg,
                        border: `1px solid ${theme.colors.outline}`,
                        backdropFilter: 'blur(20px)'
                    }}>
                        {[
                            { label: 'Active GPUs', value: metrics.gpus.toLocaleString(), color: theme.colors.primary },
                            { label: 'Jobs Completed', value: `${Math.floor(metrics.jobs / 1000)}K+`, color: theme.colors.secondary },
                            { label: 'Cost Savings', value: `$${Math.floor(metrics.savings / 1000)}K+`, color: theme.colors.warning },
                            { label: 'Providers', value: `${Math.floor(metrics.providers / 1000)}K+`, color: theme.colors.success }
                        ].map((metric, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '700',
                                    color: metric.color,
                                    marginBottom: '0.25rem'
                                }}>
                                    {metric.value}
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: theme.colors.onSurfaceVariant,
                                    fontWeight: '500'
                                }}>
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Visual Placeholder */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    <div style={{
                        width: '500px',
                        height: '500px',
                        background: `linear-gradient(135deg, ${theme.colors.surface}, ${theme.colors.surfaceVariant})`,
                        borderRadius: theme.borderRadius.xl,
                        border: `1px solid ${theme.colors.outline}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        color: theme.colors.onSurfaceVariant,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Network Visualization Placeholder */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: 'url("/gpu.jpg")',
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat"
                        }} />
                       
                    </div>
                </div>
            </div>
        </section>
    );

    const HowItWorksSection = () => {
        const steps = [
            {
                step: '01',
                title: 'Connect Your Hardware',
                description: 'Install our lightweight client and securely connect your idle GPU compute power to the global network.',
                icon: Computer,
                color: theme.colors.primary
            },
            {
                step: '02',
                title: 'Submit Compute Jobs',
                description: 'Users submit jobs for AI training, crypto mining, rendering, or any GPU-intensive workload with specific requirements.',
                icon: CloudQueue, // Placeholder for upload icon
                color: theme.colors.secondary
            },
            {
                step: '03',
                title: 'Smart Job Matching',
                description: 'Our intelligent matching system automatically pairs jobs with the most suitable GPUs based on performance and cost.',
                icon: Analytics, // Placeholder for matching icon
                color: theme.colors.warning
            },
            {
                step: '04',
                title: 'Secure Execution',
                description: 'Jobs execute in sandboxed environments with real-time monitoring, ensuring security and optimal performance.',
                icon: Shield, // Placeholder for shield icon
                color: theme.colors.success
            },
            {
                step: '05',
                title: 'Instant Settlements',
                description: 'Smart contracts handle automatic payments - providers earn crypto rewards, users pay only for compute consumed.',
                icon: MonetizationOn, // Placeholder for payment icon
                color: theme.colors.error
            }
        ];

        return (
            <section style={{
                padding: '8rem 2rem',
                background: theme.colors.surface,
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: '700',
                            color: theme.colors.onSurface,
                            marginBottom: '1rem'
                        }}>
                            How Our Network Works
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: theme.colors.onSurfaceVariant,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            A decentralized marketplace connecting GPU providers with compute users across multiple industries
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        position: 'relative'
                    }}>
                        {steps.map((step, index) => (
                            <div key={index} style={{
                                background: `${theme.colors.background}80`,
                                padding: '2.5rem',
                                borderRadius: theme.borderRadius.lg,
                                border: `1px solid ${theme.colors.outline}`,
                                position: 'relative',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.borderColor = step.color;
                                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${step.color}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = theme.colors.outline;
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '2rem',
                                    background: step.color,
                                    color: '#ffffff',
                                    padding: '0.5rem 1rem',
                                    borderRadius: theme.borderRadius.full,
                                    fontSize: '0.875rem',
                                    fontWeight: '700'
                                }}>
                                    {step.step}
                                </div>

                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: `${step.color}20`,
                                    borderRadius: theme.borderRadius.md,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    marginTop: '1rem'
                                }}>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        color: step.color,
                                        fontWeight: '600',
                                        marginTop: '-6px'
                                    }}>
                                        <step.icon />
                                    </span>
                                </div>

                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    color: theme.colors.onSurface,
                                    marginBottom: '1rem'
                                }}>
                                    {step.title}
                                </h3>

                                <p style={{
                                    color: theme.colors.onSurfaceVariant,
                                    lineHeight: '1.6',
                                    fontSize: '1rem'
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const UseCasesSection = () => {
        const useCases = [
            {
                category: 'Artificial Intelligence',
                icon: AutoAwesome, // Placeholder for AI brain icon
                color: theme.colors.primary,
                applications: [
                    'Large Language Model Training',
                    'Computer Vision Development',
                    'Neural Network Inference',
                    'Deep Learning Research',
                    'AI Model Fine-tuning'
                ]
            },
            {
                category: 'Cryptocurrency Mining',
                icon: CurrencyBitcoin, // Placeholder for crypto icon
                color: theme.colors.warning,
                applications: [
                    'Ethereum Mining (ETH)',
                    'Ravencoin Mining (RVN)',
                    'Ergo Network Mining',
                    'Beam Cryptocurrency',
                    'Conflux Network Mining'
                ]
            },
            {
                category: '3D Rendering & Graphics',
                icon: ViewInAr, // Placeholder for 3D icon
                color: theme.colors.secondary,
                applications: [
                    'Film & Animation Rendering',
                    'Architectural Visualization',
                    'Product Design Rendering',
                    'Game Asset Creation',
                    'VFX & Motion Graphics'
                ]
            },
            {
                category: 'Financial Trading',
                icon: TrendingUp, // Placeholder for trading icon
                color: theme.colors.success,
                applications: [
                    'High-Frequency Trading',
                    'Risk Modeling & Analysis',
                    'Algorithmic Trading Strategies',
                    'Portfolio Optimization',
                    'Market Data Processing'
                ]
            },
            {
                category: 'Scientific Computing',
                icon: Science, // Placeholder for science icon
                color: theme.colors.error,
                applications: [
                    'Molecular Dynamics Simulation',
                    'Climate Modeling',
                    'Protein Folding Analysis',
                    'Quantum Computing Simulation',
                    'Genomics & Bioinformatics'
                ]
            },
            {
                category: 'Video Processing',
                icon: Movie, // Placeholder for video icon
                color: '#8b5cf6',
                applications: [
                    '4K/8K Video Transcoding',
                    'Real-time Streaming',
                    'Video Compression',
                    'Live Broadcasting',
                    'Content Creation Pipeline'
                ]
            }
        ];

        return (
            <section style={{
                padding: '8rem 2rem',
                background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 100%)`,
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: '700',
                            color: theme.colors.onSurface,
                            marginBottom: '1rem'
                        }}>
                            Unlimited Computing Possibilities
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: theme.colors.onSurfaceVariant,
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            From AI research to crypto mining, our distributed GPU network powers every compute-intensive application
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '2rem'
                    }}>
                        {useCases.map((useCase, index) => (
                            <div key={index} style={{
                                background: `${theme.colors.surface}60`,
                                borderRadius: theme.borderRadius.lg,
                                border: `1px solid ${theme.colors.outline}`,
                                padding: '2rem',
                                backdropFilter: 'blur(20px)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = useCase.color;
                                e.currentTarget.style.background = `${useCase.color}10`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = theme.colors.outline;
                                e.currentTarget.style.background = `${theme.colors.surface}60`;
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div style={{
                                        paddingLeft: '12px',
                                        paddingRight: '12px',
                                        height: '50px',
                                        background: `${useCase.color}20`,
                                        borderRadius: theme.borderRadius.md,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <span style={{
                                            color: useCase.color,
                                            fontSize: '1.5rem',
                                            fontWeight: '600',
                                            marginBottom: '6px'
                                        }}>
                                            <useCase.icon />
                                        </span>
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '600',
                                        color: theme.colors.onSurface,
                                        margin: 0
                                    }}>
                                        {useCase.category}
                                    </h3>
                                </div>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                }}>
                                    {useCase.applications.map((app, appIndex) => (
                                        <li key={appIndex} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            color: theme.colors.onSurfaceVariant,
                                            fontSize: '1rem'
                                        }}>
                                            <div style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: useCase.color,
                                                flexShrink: 0
                                            }} />
                                            {app}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const BenefitsSection = () => (
        <section style={{
            padding: '8rem 2rem',
            background: theme.colors.surface,
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: '700',
                        color: theme.colors.onSurface,
                        marginBottom: '1rem'
                    }}>
                        Benefits for Every User
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: theme.colors.onSurfaceVariant,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Whether you're providing compute power or using it, our platform delivers exceptional value
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                    gap: '3rem'
                }}>
                    {/* GPU Providers */}
                    <div style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.primary}05)`,
                        borderRadius: theme.borderRadius.xl,
                        border: `1px solid ${theme.colors.primary}30`,
                        padding: '3rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '100px',
                            height: '100px',
                            background: `${theme.colors.primary}20`,
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: `${theme.colors.primary}20`,
                                borderRadius: theme.borderRadius.md,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{
                                    fontSize: '1.8rem',
                                    color: theme.colors.primary,
                                    marginTop: '-6px'
                                }}>
                                    <Storefront />
                                </span>
                            </div>
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: theme.colors.primary,
                                margin: 0
                            }}>
                                For GPU Providers
                            </h3>
                        </div>

                        <div style={{
                            display: 'grid',
                            gap: '1.5rem'
                        }}>
                            {[
                                {
                                    title: 'Steady Passive Income',
                                    description: 'Turn idle GPU time into consistent cryptocurrency earnings, even while gaming or working'
                                },
                                {
                                    title: 'Flexible Participation',
                                    description: 'Set your own availability schedule and pricing. Full control over when and how you share compute'
                                },
                                {
                                    title: 'Secure Sandboxed Execution',
                                    description: 'Jobs run in isolated environments protecting your system from any potential security risks'
                                },
                                {
                                    title: 'Automated Payments',
                                    description: 'Smart contracts ensure instant, transparent payments in crypto without intermediaries'
                                },
                                {
                                    title: 'Easy Setup & Monitoring',
                                    description: 'One-click installation with comprehensive dashboard to track earnings and performance'
                                }
                            ].map((benefit, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: theme.colors.success,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '0.25rem'
                                    }}>
                                        <span style={{
                                            color: '#ffffff',
                                            fontSize: '0.875rem',
                                            fontWeight: '700'
                                        }}>
                                            ✓
                                        </span>
                                    </div>
                                    <div>
                                        <h4 style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '600',
                                            color: theme.colors.onSurface,
                                            marginBottom: '0.5rem'
                                        }}>
                                            {benefit.title}
                                        </h4>
                                        <p style={{
                                            color: theme.colors.onSurfaceVariant,
                                            fontSize: '1rem',
                                            lineHeight: '1.5',
                                            margin: 0
                                        }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Compute Users */}
                    <div style={{
                        background: `linear-gradient(135deg, ${theme.colors.secondary}15, ${theme.colors.secondary}05)`,
                        borderRadius: theme.borderRadius.xl,
                        border: `1px solid ${theme.colors.secondary}30`,
                        padding: '3rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '100px',
                            height: '100px',
                            background: `${theme.colors.secondary}20`,
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: `${theme.colors.secondary}20`,
                                borderRadius: theme.borderRadius.md,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{
                                    fontSize: '1.8rem',
                                    color: theme.colors.secondary,
                                    marginTop: '-6px'
                                }}>
                                    <Face />
                                </span>
                            </div>
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: theme.colors.secondary,
                                margin: 0
                            }}>
                                For Compute Users
                            </h3>
                        </div>

                        <div style={{
                            display: 'grid',
                            gap: '1.5rem'
                        }}>
                            {[
                                {
                                    title: 'Massive Cost Savings',
                                    description: 'Save up to 80% compared to AWS, Google Cloud, and Azure with competitive distributed pricing'
                                },
                                {
                                    title: 'Global GPU Access',
                                    description: 'Access latest hardware worldwide including H100s, A100s, RTX 4090s, and specialized mining GPUs'
                                },
                                {
                                    title: 'Pay-Per-Use Model',
                                    description: 'No long-term contracts or minimum commitments. Pay only for the compute time you actually use'
                                },
                                {
                                    title: 'Instant Scalability',
                                    description: 'Scale from single GPU jobs to massive distributed workloads across thousands of devices'
                                },
                                {
                                    title: 'Multi-Framework Support',
                                    description: 'Works with TensorFlow, PyTorch, CUDA, OpenCL, and all major ML/mining frameworks'
                                }
                            ].map((benefit, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: theme.colors.success,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '0.25rem'
                                    }}>
                                        <span style={{
                                            color: '#ffffff',
                                            fontSize: '0.875rem',
                                            fontWeight: '700'
                                        }}>
                                            ✓
                                        </span>
                                    </div>
                                    <div>
                                        <h4 style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '600',
                                            color: theme.colors.onSurface,
                                            marginBottom: '0.5rem'
                                        }}>
                                            {benefit.title}
                                        </h4>
                                        <p style={{
                                            color: theme.colors.onSurfaceVariant,
                                            fontSize: '1rem',
                                            lineHeight: '1.5',
                                            margin: 0
                                        }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const PricingSection = () => {
        const pricingData = [
            {
                gpu: 'RTX 4090',
                performance: '24GB VRAM',
                traditional: '$4.50',
                platform: '$1.35',
                savings: '70%',
                popular: false
            },
            {
                gpu: 'A100 80GB',
                performance: '80GB HBM2e',
                traditional: '$8.00',
                platform: '$2.40',
                savings: '70%',
                popular: true
            },
            {
                gpu: 'H100 80GB',
                performance: '80GB HBM3',
                traditional: '$12.00',
                platform: '$3.60',
                savings: '70%',
                popular: false
            },
            {
                gpu: 'RTX 3080',
                performance: '10GB VRAM',
                traditional: '$2.80',
                platform: '$0.84',
                savings: '70%',
                popular: false
            }
        ];

        return (
            <section style={{
                padding: '8rem 2rem',
                background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 100%)`,
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: '700',
                            color: theme.colors.onSurface,
                            marginBottom: '1rem'
                        }}>
                            Transparent Pricing
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: theme.colors.onSurfaceVariant,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Compare our rates with traditional cloud providers and see the massive savings
                        </p>
                    </div>

                    <div style={{
                        background: `${theme.colors.surface}80`,
                        borderRadius: theme.borderRadius.xl,
                        border: `1px solid ${theme.colors.outline}`,
                        overflow: 'hidden',
                        backdropFilter: 'blur(20px)'
                    }}>
                        <div style={{
                            background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20)`,
                            padding: '1.5rem 2rem',
                            borderBottom: `1px solid ${theme.colors.outline}`
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                                gap: '1rem',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: theme.colors.onSurface
                                }}>
                                    GPU Model
                                </div>
                                <div style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: theme.colors.onSurface,
                                    textAlign: 'center'
                                }}>
                                    Traditional Cloud
                                </div>
                                <div style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: theme.colors.onSurface,
                                    textAlign: 'center'
                                }}>
                                    Our Platform
                                </div>
                                <div style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: theme.colors.onSurface,
                                    textAlign: 'center'
                                }}>
                                    You Save
                                </div>
                                <div style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: theme.colors.onSurface,
                                    textAlign: 'center'
                                }}>
                                    Action
                                </div>
                            </div>
                        </div>

                        {pricingData.map((row, index) => (
                            <div key={index} style={{
                                padding: '2rem',
                                borderBottom: index < pricingData.length - 1 ? `1px solid ${theme.colors.outline}` : 'none',
                                background: row.popular ? `${theme.colors.primary}10` : 'transparent',
                                position: 'relative'
                            }}>
                                {row.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '2rem',
                                        background: theme.colors.primary,
                                        color: '#ffffff',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: theme.borderRadius.full,
                                        fontSize: '0.75rem',
                                        fontWeight: '600'
                                    }}>
                                        Most Popular
                                    </div>
                                )}

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                                    gap: '1rem',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <div style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                            color: theme.colors.onSurface,
                                            marginBottom: '0.25rem'
                                        }}>
                                            {row.gpu}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: theme.colors.onSurfaceVariant
                                        }}>
                                            {row.performance}
                                        </div>
                                    </div>

                                    <div style={{
                                        textAlign: 'center',
                                        color: theme.colors.error,
                                        fontSize: '1.2rem',
                                        fontWeight: '600'
                                    }}>
                                        {row.traditional}/hour
                                    </div>

                                    <div style={{
                                        textAlign: 'center',
                                        color: theme.colors.success,
                                        fontSize: '1.2rem',
                                        fontWeight: '700'
                                    }}>
                                        {row.platform}/hour
                                    </div>

                                    <div style={{
                                        textAlign: 'center'
                                    }}>
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: theme.colors.success,
                                            color: '#ffffff',
                                            padding: '0.5rem 1rem',
                                            borderRadius: theme.borderRadius.full,
                                            fontSize: '1.1rem',
                                            fontWeight: '700'
                                        }}>
                                            {row.savings}
                                        </div>
                                    </div>

                                    <div style={{ textAlign: 'center' }}>
                                        <button onClick={()=>navigate('/marketplace')} style={{
                                            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
                                            border: 'none',
                                            color: '#ffffff',
                                            padding: '0.75rem 1.5rem',
                                            borderRadius: theme.borderRadius.md,
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease'
                                        }}>
                                            Rent Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '3rem',
                        textAlign: 'center',
                        padding: '2rem',
                        background: `${theme.colors.surface}60`,
                        borderRadius: theme.borderRadius.lg,
                        border: `1px solid ${theme.colors.outline}`
                    }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: theme.colors.onSurface,
                            marginBottom: '1rem'
                        }}>
                            Need Custom Pricing?
                        </h3>
                        <p style={{
                            color: theme.colors.onSurfaceVariant,
                            marginBottom: '2rem'
                        }}>
                            Enterprise customers and large-scale operations can get custom rates and dedicated support
                        </p>
                        <button style={{
                            background: 'transparent',
                            border: `2px solid ${theme.colors.secondary}`,
                            color: theme.colors.secondary,
                            padding: '1rem 2rem',
                            borderRadius: theme.borderRadius.md,
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                        }}>
                            Contact Sales
                        </button>
                    </div>
                </div>
        </section>
    );
    }
    const SecuritySection = () => {
        const securityFeatures = [
            {
                icon: Diversity2,
                title: 'Blockchain-Secured Transactions',
                description: 'All payments and contracts are secured by immutable smart contracts with complete audit trails and transparency.',
                color: theme.colors.primary
            },
            {
                icon: Shield,
                title: 'Sandboxed Execution Environment',
                description: 'Jobs run in completely isolated containers protecting both providers and users from security vulnerabilities.',
                color: theme.colors.secondary
            },
            {
                icon: Grade,
                title: 'Community Reputation System',
                description: 'Comprehensive rating and review system ensures quality providers and legitimate compute jobs.',
                color: theme.colors.warning
            },
            {
                icon: Gavel,
                title: 'Automated Dispute Resolution',
                description: 'Smart contract-based dispute resolution with transparent arbitration and automated settlements.',
                color: theme.colors.error
            },
            {
                icon: Policy,
                title: 'Comprehensive Insurance Coverage',
                description: 'All compute jobs and provider hardware are covered by our insurance policy for complete peace of mind.',
                color: '#8b5cf6'
            },
            {
                icon: Security,
                title: 'Real-Time Security Monitoring',
                description: '24/7 network monitoring with AI-powered fraud detection and instant threat response capabilities.',
                color: theme.colors.success
            },
             {
                icon: Approval,
                title: 'Security Certifications & Compliance',
                description: 'We promise your security with these certifications and more: SOC 2 Type II, ISO 27001, GDPR Compliant, PCI DSS Level 1 ',
                color: theme.colors.warning
            }
        ];

        return (
            <section style={{
                padding: '8rem 2rem',
                background: theme.colors.surface,
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: '700',
                            color: theme.colors.onSurface,
                            marginBottom: '1rem'
                        }}>
                            Enterprise-Grade Security
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: theme.colors.onSurfaceVariant,
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            Built with security-first architecture ensuring complete protection for all network participants
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '2rem'
                    }}>
                        {securityFeatures.map((feature, index) => (
                            <div key={index} style={{
                                background: `${theme.colors.background}80`,
                                borderRadius: theme.borderRadius.lg,
                                border: `1px solid ${theme.colors.outline}`,
                                padding: '2.5rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = feature.color;
                                e.currentTarget.style.background = `${feature.color}05`;
                                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${feature.color}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = theme.colors.outline;
                                e.currentTarget.style.background = `${theme.colors.background}80`;
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    width: '60px',
                                    height: '60px',
                                    background: `${feature.color}20`,
                                    borderRadius: '50%',
                                    filter: 'blur(30px)'
                                }} />

                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    background: `${feature.color}20`,
                                    borderRadius: theme.borderRadius.md,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <span style={{
                                        fontSize: '2rem',
                                        color: feature.color,
                                        fontWeight: '600',
                                        marginTop: '-6px'
                                    }}>
                                        <feature.icon />
                                    </span>
                                </div>

                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    color: theme.colors.onSurface,
                                    marginBottom: '1rem'
                                }}>
                                    {feature.title}
                                </h3>

                                <p style={{
                                    color: theme.colors.onSurfaceVariant,
                                    lineHeight: '1.6',
                                    fontSize: '1rem'
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                   
                </div>
           
        </section>
    );
    }
    const TestimonialsSection = () => {
        const testimonials = [
            {
                quote: "This platform revolutionized our AI research lab. We're training large language models at 75% lower cost than AWS while accessing the latest H100 hardware. The distributed architecture also provides better fault tolerance for our long-running jobs.",
                author: "Dr. Sarah Chen",
                role: "AI Research Director, Stanford University",
                category: "AI Research",
                avatar: "SC",
                color: theme.colors.primary
            },
            {
                quote: "My gaming rig now earns me $300-500 monthly when I'm not using it. The setup was incredibly simple, and I love that I can set availability windows around my gaming schedule. Payments are automatic and transparent through smart contracts.",
                author: "Alex Rodriguez",
                role: "GPU Provider & Streamer",
                category: "Gaming Community",
                avatar: "AR",
                color: theme.colors.secondary
            },
            {
                quote: "We've processed over 50,000 rendering jobs through this network with 99.9% uptime. The cost savings allowed us to take on larger projects and the distributed approach means faster turnaround times for our clients in film and advertising.",
                author: "Michael Thompson",
                role: "VFX Studio Owner",
                category: "Content Creation",
                avatar: "MT",
                color: theme.colors.warning
            },
            {
                quote: "Our cryptocurrency mining operation expanded globally through this platform. We can now access diverse GPU hardware across different regions, optimizing for electricity costs and network latency. The smart contract payments eliminate counterparty risk.",
                author: "Lisa Wang",
                role: "Mining Pool Operator",
                category: "Crypto Mining",
                avatar: "LW",
                color: theme.colors.success
            },
            {
                quote: "For our quantitative trading models, we need massive parallel computing power during market hours. This platform lets us scale from 10 to 1000 GPUs instantly and pay only for active compute time. It's a game-changer for algorithmic trading.",
                author: "David Kumar",
                role: "Head of Quantitative Research",
                category: "Financial Trading",
                avatar: "DK",
                color: theme.colors.error
            },
            {
                quote: "Our molecular dynamics simulations now run 60% faster at half the cost. The platform's job scheduling automatically optimizes for our specific scientific computing requirements, and we can access specialized hardware that would be too expensive to purchase.",
                author: "Prof. Elena Vasquez",
                role: "Computational Biology, MIT",
                category: "Scientific Computing",
                avatar: "EV",
                color: '#8b5cf6'
            }
        ];

        return (
            <section style={{
                padding: '8rem 2rem',
                background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 100%)`,
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: '700',
                            color: theme.colors.onSurface,
                            marginBottom: '1rem'
                        }}>
                            Trusted by Industry Leaders
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: theme.colors.onSurfaceVariant,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            From AI researchers to crypto miners, see how our platform transforms computing workflows
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                        gap: '2rem'
                    }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} style={{
                                background: `${theme.colors.surface}80`,
                                borderRadius: theme.borderRadius.xl,
                                border: `1px solid ${theme.colors.outline}`,
                                padding: '2.5rem',
                                backdropFilter: 'blur(20px)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = testimonial.color;
                                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${testimonial.color}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = theme.colors.outline;
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: `${testimonial.color}20`,
                                    color: testimonial.color,
                                    padding: '0.5rem 1rem',
                                    borderRadius: theme.borderRadius.full,
                                    fontSize: '0.75rem',
                                    fontWeight: '600'
                                }}>
                                    {testimonial.category}
                                </div>

                                <div style={{
                                    fontSize: '3rem',
                                    color: `${testimonial.color}40`,
                                    marginBottom: '1rem',
                                    fontFamily: 'serif'
                                }}>
                                    "
                                </div>

                                <p style={{
                                    fontSize: '1.1rem',
                                    color: theme.colors.onSurfaceVariant,
                                    lineHeight: '1.6',
                                    marginBottom: '2rem',
                                    fontStyle: 'italic'
                                }}>
                                    {testimonial.quote}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}80)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        color: '#ffffff'
                                    }}>
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: theme.colors.onSurface,
                                            marginBottom: '0.25rem'
                                        }}>
                                            {testimonial.author}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: theme.colors.onSurfaceVariant
                                        }}>
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const CTASection = () => (
        <section style={{
            padding: '8rem 2rem',
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
            }} />

            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    lineHeight: '1.2'
                }}>
                    Ready to Transform Your Computing?
                </h2>

                <p style={{
                    fontSize: '1.3rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '3rem',
                    maxWidth: '700px',
                    margin: '0 auto 3rem auto'
                }}>
                    Join the decentralized revolution. Whether you need compute power or want to monetize your GPU, start your journey today.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    marginBottom: '4rem',
                    flexWrap: 'wrap'
                }}>
                    <button onClick={()=>navigate('/marketplace')} style={{
                        background: '#ffffff',
                        color: theme.colors.primary,
                        border: 'none',
                        padding: '1.25rem 2.5rem',
                        borderRadius: theme.borderRadius.md,
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        minWidth: '220px',
                        boxShadow: theme.shadows.xl
                    }}>
                        Start Computing Now
                    </button>
                    <button onClick={()=>navigate('/marketplace')} style={{
                        background: 'transparent',
                        color: '#ffffff',
                        border: '2px solid rgba(255, 255, 255, 0.8)',
                        padding: '1.25rem 2.5rem',
                        borderRadius: theme.borderRadius.md,
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        minWidth: '220px'
                    }}>
                        Become a Provider
                    </button>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: theme.borderRadius.xl,
                    padding: '3rem',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '1.5rem'
                    }}>
                        Get Early Access & Beta Rewards
                    </h3>

                    <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '2rem',
                        fontSize: '1.1rem'
                    }}>
                        Join our beta program and receive exclusive benefits including reduced fees, priority access, and bonus rewards.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            style={{
                                flex: 1,
                                minWidth: '300px',
                                padding: '1rem 1.5rem',
                                borderRadius: theme.borderRadius.md,
                                border: 'none',
                                fontSize: '1rem',
                                outline: 'none',
                                background: '#ffffff',
                                color: theme.colors.background
                            }}
                        />
                        <button style={{
                            background: theme.colors.background,
                            color: '#ffffff',
                            border: 'none',
                            padding: '1rem 2rem',
                            borderRadius: theme.borderRadius.md,
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap'
                        }}>
                            Join Beta
                        </button>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginTop: '2rem',
                        flexWrap: 'wrap'
                    }}>
                        {['Early Access', 'Reduced Fees', 'Priority Support', 'Bonus Rewards'].map((benefit, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: '0.9rem'
                            }}>
                                <span style={{
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    background: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.7rem',
                                    color: theme.colors.primary,
                                    fontWeight: '700'
                                }}>
                                    ✓
                                </span>
                                {benefit}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    const Footer = () => (
        <footer style={{
            padding: '4rem 2rem 2rem',
            background: theme.colors.background,
            borderTop: `1px solid ${theme.colors.outline}`
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1rem'
                        }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                                borderRadius: theme.borderRadius.sm,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                                fontWeight: '700',
                                color: '#ffffff'
                            }}>
                                GPU
                            </div>
                            <span style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: theme.colors.onSurface
                            }}>
                                Mesh
                            </span>
                        </div>
                        <p style={{
                            color: theme.colors.onSurfaceVariant,
                            lineHeight: '1.6',
                            fontSize: '1rem',
                            maxWidth: '300px'
                        }}>
                            Democratizing access to GPU compute power through blockchain technology and decentralized networks.
                        </p>
                    </div>

                    {[
                        {
                            title: 'Platform',
                            links: ['How it Works', 'Pricing', 'Security', 'API Documentation', 'Status Page']
                        },
                        {
                            title: 'Use Cases',
                            links: ['AI & Machine Learning', 'Cryptocurrency Mining', '3D Rendering', 'Scientific Computing', 'Trading Algorithms']
                        },
                        {
                            title: 'Support',
                            links: ['Help Center', 'Community Forum', 'Discord Server', 'Contact Support', 'Bug Reports']
                        },
                        {
                            title: 'Company',
                            links: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Partnerships']
                        }
                    ].map((section, index) => (
                        <div key={index}>
                            <h4 style={{
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                color: theme.colors.onSurface,
                                marginBottom: '1rem'
                            }}>
                                {section.title}
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            }}>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" style={{
                                            color: theme.colors.onSurfaceVariant,
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                            transition: 'color 0.2s ease'
                                        }}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{
                    paddingTop: '2rem',
                    borderTop: `1px solid ${theme.colors.outline}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div style={{
                        color: theme.colors.onSurfaceVariant,
                        fontSize: '0.9rem'
                    }}>
                        © 2025 GPU Mesh. All rights reserved.
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <a href="#" style={{
                            color: theme.colors.onSurfaceVariant,
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            transition: 'color 0.2s ease'
                        }}>
                            Privacy Policy
                        </a>
                        <a href="#" style={{
                            color: theme.colors.onSurfaceVariant,
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            transition: 'color 0.2s ease'
                        }}>
                            Terms of Service
                        </a>
                        <a href="#" style={{
                            color: theme.colors.onSurfaceVariant,
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            transition: 'color 0.2s ease'
                        }}>
                            Cookie Policy
                        </a>
                        
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'center'
                        }}>
                            {['Twitter', 'Discord', 'GitHub', 'LinkedIn'].map((social, index) => (
                                <a key={index} href="#" style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: `${theme.colors.surface}60`,
                                    border: `1px solid ${theme.colors.outline}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: theme.colors.onSurfaceVariant,
                                    textDecoration: 'none',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    transition: 'all 0.2s ease'
                                }}>
                                    {social.charAt(0)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: '2rem',
                    padding: '1.5rem',
                    background: `${theme.colors.surface}40`,
                    borderRadius: theme.borderRadius.md,
                    border: `1px solid ${theme.colors.outline}`,
                    textAlign: 'center'
                }}>
                    <p style={{
                        color: theme.colors.onSurfaceVariant,
                        fontSize: '0.9rem',
                        margin: 0,
                        lineHeight: '1.5'
                    }}>
                        <strong>Disclaimer:</strong> Cryptocurrency mining and trading involve financial risk. 
                        GPU providers are responsible for electricity costs and hardware maintenance. 
                        All transactions are secured by blockchain smart contracts. Platform operates globally 
                        subject to local regulations.
                    </p>
                </div>
            </div>
        </footer>
    );

    return (
        <div style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.onSurface,
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            lineHeight: '1.6',
            overflow: 'hidden'
        }}>
            <NavBar />
            <HeroSection />
            <HowItWorksSection />
            <UseCasesSection />
            <BenefitsSection />
            <PricingSection />
            <SecuritySection />
            <TestimonialsSection />
            <CTASection />
            <Footer />

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 1024px) {
                    section {
                        padding: 4rem 1.5rem !important;
                    }
                }
                
                @media (max-width: 768px) {
                    section {
                        padding: 3rem 1rem !important;
                    }
                    
                    h1 {
                        font-size: 2.5rem !important;
                    }
                    
                    h2 {
                        font-size: 2rem !important;
                    }
                    
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                        text-align: center !important;
                    }
                    
                    .metrics-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1rem !important;
                    }
                    
                    .pricing-table {
                        overflow-x: auto !important;
                    }
                    
                    .feature-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .metrics-grid {
                        grid-template-columns: 1fr !important;
                    }
                    
                    .cta-buttons {
                        flex-direction: column !important;
                        width: 100% !important;
                    }
                    
                    .cta-buttons button {
                        width: 100% !important;
                    }
                }

                /* Smooth scroll behavior */
                html {
                    scroll-behavior: smooth;
                }
                
                /* Custom scrollbar */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                
                ::-webkit-scrollbar-track {
                    background: ${theme.colors.background};
                }
                
                ::-webkit-scrollbar-thumb {
                    background: ${theme.colors.primary};
                    border-radius: 4px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: ${theme.colors.primaryDark};
                }

                /* Button hover effects */
                button:hover {
                    transform: translateY(-2px);
                    filter: brightness(1.1);
                }
                
                button:active {
                    transform: translateY(0);
                }

                /* Input focus effects */
                input:focus {
                    box-shadow: 0 0 0 3px ${theme.colors.primary}40;
                    border-color: ${theme.colors.primary};
                }

                /* Card hover effects */
                .card:hover {
                    transform: translateY(-5px);
                }

                /* Accessibility improvements */
                button:focus-visible,
                a:focus-visible {
                    outline: 2px solid ${theme.colors.primary};
                    outline-offset: 2px;
                }

                /* Loading states */
                .loading {
                    animation: pulse 2s infinite;
                }

                /* High contrast mode support */
                @media (prefers-contrast: high) {
                    * {
                        border-color: ${theme.colors.onSurface} !important;
                    }
                }

                /* Reduced motion support */
                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </div>
    );
};

    

export default HomePage;