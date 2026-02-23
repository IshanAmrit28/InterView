import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Target, Zap, Award, Users, TrendingUp } from 'lucide-react'
import './Landing.css'

function Landing() {
    const stats = [
        { number: '175+', label: 'Interview Questions' },
        { number: '50+', label: 'Study Resources' },
        { number: '5', label: 'Career Paths' },
        { number: '∞', label: 'AI-Powered Practice' }
    ]

    const features = [
        {
            icon: <Target size={28} />,
            title: 'Role-Based Preparation',
            description: 'Tailored content for Frontend, Backend, Full Stack, Data Analyst, and DevOps roles.',
            color: '#3b82f6'
        },
        {
            icon: <Zap size={28} />,
            title: 'Interactive Learning',
            description: 'Engaging quizzes, coding challenges, and scenario-based problems to master concepts.',
            color: '#f59e0b'
        },
        {
            icon: <Award size={28} />,
            title: 'Structured Roadmaps',
            description: 'Step-by-step learning paths designed by industry experts to guide your journey.',
            color: '#10b981'
        }
    ]

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="landing-hero">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                    <div className="grid-overlay"></div>

                    {/* Glassy Bubbles Animation */}
                    <div className="bubbles-container">
                        {[...Array(100)].map((_, i) => (
                            <div
                                key={i}
                                className="glassy-bubble"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    width: `${Math.random() * 50 + 10}px`,
                                    height: `${Math.random() * 50 + 10}px`,
                                    animationDelay: `${Math.random() * 10}s`,
                                    animationDuration: `${Math.random() * 10 + 10}s`,
                                    opacity: Math.random() * 0.4 + 0.1 // Brighter: 0.1 to 0.5 opacity
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Master Your Skills.<br />
                        <span className="gradient-text">Level Up Your Placement.</span>
                    </h1>

                    <p className="hero-subtitle">
                        Transform your preparation journey with our comprehensive resources,
                        and expert-curated content. Everything you need to land your dream tech job.
                    </p>

                    <div className="hero-cta-group">
                        <Link to="/dashboard" className="hero-cta primary">
                            Start Preparing Free <ArrowRight size={20} />
                        </Link>
                        <Link to="/roadmap" className="hero-cta secondary">
                            View Roadmaps
                        </Link>
                    </div>

                    {/* Stats Bar */}
                    <div className="hero-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Elements */}
                {/* Floating Elements Removed */}
            </section>

            {/* Features Section */}
            <section className="landing-features">
                <div className="features-container">
                    <div className="features-header">
                        <div className="section-badge">Why Choose Us</div>
                        <h2>Everything You Need to Succeed</h2>
                        <p>Comprehensive preparation platform designed for modern tech interviews</p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card" style={{ '--feature-color': feature.color }}>
                                <div className="feature-icon-wrapper" style={{ background: `linear-gradient(135deg, ${feature.color}22, ${feature.color}11)` }}>
                                    <div className="feature-icon" style={{ color: feature.color }}>
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div className="feature-shine"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="landing-cta">
                <div className="cta-content">
                    <h2>Ready to Ace Your Interviews?</h2>
                    <p>Join the platform trusted by thousands of aspiring developers</p>
                    <Link to="/dashboard" className="cta-button">
                        Get Started Now <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Landing
