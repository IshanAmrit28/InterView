import { useState, useEffect } from 'react'
import { CheckCircle2, Circle, Clock, BookOpen, TrendingUp, ExternalLink, Star, ChevronDown, ChevronUp, PlayCircle, FileText, Check } from 'lucide-react'

import roadmapData from '../data/roadmapData'
import { getRoadmapIcon } from '../utils/roadmapIcons'
import './Roadmap.css'

const externalRoadmaps = {
    'Role Based': [
        { name: 'Frontend Beginner', url: 'https://roadmap.sh/frontend?r=frontend-beginner', icon: '🎨' },
        { name: 'Backend Beginner', url: 'https://roadmap.sh/backend?r=backend-beginner', icon: '⚙️' },
        { name: 'DevOps Beginner', url: 'https://roadmap.sh/devops?r=devops-beginner', icon: '🔧' },
        { name: 'Frontend', url: 'https://roadmap.sh/frontend', icon: '⚛️' },
        { name: 'Backend', url: 'https://roadmap.sh/backend', icon: '🖥️' },
        { name: 'Full Stack', url: 'https://roadmap.sh/full-stack', icon: '🚀' },
        { name: 'API Design', url: 'https://roadmap.sh/api-design', icon: '🔌' },
        { name: 'QA Engineer', url: 'https://roadmap.sh/qa', icon: '✅' },
        { name: 'DevOps', url: 'https://roadmap.sh/devops', icon: '♾️' },
        { name: 'Android Developer', url: 'https://roadmap.sh/android', icon: '🤖' },
        { name: 'iOS Developer', url: 'https://roadmap.sh/ios', icon: '📱' },
        { name: 'PostgreSQL DBA', url: 'https://roadmap.sh/postgresql-dba', icon: '🐘' },
        { name: 'Software Architect', url: 'https://roadmap.sh/software-architect', icon: '🏛️' },
        { name: 'Technical Writer', url: 'https://roadmap.sh/technical-writer', icon: '✍️' },
        { name: 'DevRel Engineer', url: 'https://roadmap.sh/devrel', icon: '🤝' },
        { name: 'Machine Learning', url: 'https://roadmap.sh/machine-learning', icon: '🤖' },
        { name: 'AI Data Scientist', url: 'https://roadmap.sh/ai-data-scientist', icon: '📊' },
        { name: 'AI Engineer', url: 'https://roadmap.sh/ai-engineer', icon: '🧠' },
        { name: 'AI Agents', url: 'https://roadmap.sh/ai-agents', icon: '🤖' },
        { name: 'Data Analyst', url: 'https://roadmap.sh/data-analyst', icon: '📈' },
        { name: 'BI Analyst', url: 'https://roadmap.sh/bi-analyst', icon: '📊' },
        { name: 'Data Engineer', url: 'https://roadmap.sh/data-engineer', icon: '🗄️' },
        { name: 'MLOps', url: 'https://roadmap.sh/mlops', icon: '⚡' },
        { name: 'Product Manager', url: 'https://roadmap.sh/product-manager', icon: '📋' },
        { name: 'Engineering Manager', url: 'https://roadmap.sh/engineering-manager', icon: '👔' },
        { name: 'Game Developer (Client)', url: 'https://roadmap.sh/game-developer', icon: '🎮' },
        { name: 'Game Developer (Server)', url: 'https://roadmap.sh/server-side-game-developer', icon: '🎮' },
        { name: 'UX Design', url: 'https://roadmap.sh/ux-design', icon: '🎨' },
        { name: 'Blockchain', url: 'https://roadmap.sh/blockchain', icon: '⛓️' },
        { name: 'Cyber Security', url: 'https://roadmap.sh/cyber-security', icon: '🔒' }
    ],
    'Skill Based': [
        { name: 'React', url: 'https://roadmap.sh/react', icon: '⚛️' },
        { name: 'Vue', url: 'https://roadmap.sh/vue', icon: '💚' },
        { name: 'Angular', url: 'https://roadmap.sh/angular', icon: '🅰️' },
        { name: 'Next.js', url: 'https://roadmap.sh/nextjs', icon: '▲' },
        { name: 'Node.js', url: 'https://roadmap.sh/nodejs', icon: '📗' },
        { name: 'Spring Boot', url: 'https://roadmap.sh/spring-boot', icon: '🍃' },
        { name: 'ASP.NET Core', url: 'https://roadmap.sh/aspnet-core', icon: '🔷' },
        { name: 'Laravel', url: 'https://roadmap.sh/laravel', icon: '🔴' },
        { name: 'Python', url: 'https://roadmap.sh/python', icon: '🐍' },
        { name: 'Java', url: 'https://roadmap.sh/java', icon: '☕' },
        { name: 'JavaScript', url: 'https://roadmap.sh/javascript', icon: '🟨' },
        { name: 'TypeScript', url: 'https://roadmap.sh/typescript', icon: '🔷' },
        { name: 'Go', url: 'https://roadmap.sh/golang', icon: '🐹' },
        { name: 'Rust', url: 'https://roadmap.sh/rust', icon: '🦀' },
        { name: 'C++', url: 'https://roadmap.sh/cpp', icon: '➕' },
        { name: 'Kotlin', url: 'https://roadmap.sh/kotlin', icon: '🟣' },
        { name: 'Swift', url: 'https://roadmap.sh/swift-ui', icon: '🍎' },
        { name: 'PHP', url: 'https://roadmap.sh/php', icon: '🐘' },
        { name: 'SQL', url: 'https://roadmap.sh/sql', icon: '🗄️' },
        { name: 'Docker', url: 'https://roadmap.sh/docker', icon: '🐳' },
        { name: 'Kubernetes', url: 'https://roadmap.sh/kubernetes', icon: '☸️' },
        { name: 'AWS', url: 'https://roadmap.sh/aws', icon: '☁️' },
        { name: 'Linux', url: 'https://roadmap.sh/linux', icon: '🐧' },
        { name: 'MongoDB', url: 'https://roadmap.sh/mongodb', icon: '🍃' },
        { name: 'Redis', url: 'https://roadmap.sh/redis', icon: '🔴' },
        { name: 'GraphQL', url: 'https://roadmap.sh/graphql', icon: '💜' },
        { name: 'System Design', url: 'https://roadmap.sh/system-design', icon: '🏗️' },
        { name: 'Data Structures', url: 'https://roadmap.sh/datastructures-and-algorithms', icon: '📚' },
        { name: 'Prompt Engineering', url: 'https://roadmap.sh/prompt-engineering', icon: '💬' }
    ]
}

function Roadmap() {
    const [selectedRoadmap, setSelectedRoadmap] = useState('frontend')
    const [selectedTab, setSelectedTab] = useState('internal')
    const [expandedMilestones, setExpandedMilestones] = useState({})
    const [completedMilestones, setCompletedMilestones] = useState(() => {
        const saved = localStorage.getItem('roadmap_progress')
        return saved ? JSON.parse(saved) : {}
    })

    const toggleMilestone = (roadmapId, milestoneId) => {
        const key = `${roadmapId}_${milestoneId}`
        const newCompleted = {
            ...completedMilestones,
            [key]: !completedMilestones[key]
        }
        setCompletedMilestones(newCompleted)
        localStorage.setItem('roadmap_progress', JSON.stringify(newCompleted))
    }

    const toggleExpand = (milestoneId) => {
        setExpandedMilestones(prev => ({
            ...prev,
            [milestoneId]: !prev[milestoneId]
        }))
    }

    const isMilestoneCompleted = (roadmapId, milestoneId) => {
        return completedMilestones[`${roadmapId}_${milestoneId}`] || false
    }

    const getCompletionPercentage = (roadmapId) => {
        const roadmap = roadmapData[roadmapId]
        if (!roadmap) return 0
        const total = roadmap.milestones.length
        const completed = roadmap.milestones.filter(m =>
            isMilestoneCompleted(roadmapId, m.id)
        ).length
        if (total === 0) return 0
        return Math.round((completed / total) * 100)
    }

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return '#10b981'
            case 'Intermediate': return '#f59e0b'
            case 'Advanced': return '#ef4444'
            case 'Expert': return '#8b5cf6'
            default: return '#667eea'
        }
    }

    const currentRoadmap = roadmapData[selectedRoadmap]


    // Bubbles generation
    const [bubbles, setBubbles] = useState([])
    useEffect(() => {
        const newBubbles = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 8 + 2, // 2px to 10px
            delay: Math.random() * 20,
            duration: Math.random() * 10 + 10
        }))
        setBubbles(newBubbles)
    }, [])

    return (
        <div className="app-container" style={{ position: 'relative' }}>
            <div className="roadmap-background-bubbles">
                {bubbles.map(bubble => (
                    <div
                        key={bubble.id}
                        className="roadmap-bubble"
                        style={{
                            left: `${bubble.left}%`,
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            animationDelay: `${bubble.delay}s`,
                            animationDuration: `${bubble.duration}s`
                        }}
                    />
                ))}
            </div>


            {/* Tab Navigation */}
            <div className="roadmap-tabs-nav">
                <button
                    className={`tab-nav-btn ${selectedTab === 'internal' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('internal')}
                >
                    <BookOpen size={20} />
                    <span>Internal Roadmaps</span>
                </button>
                <button
                    className={`tab-nav-btn ${selectedTab === 'external' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('external')}
                >
                    <ExternalLink size={20} />
                    <span>External Resources</span>
                </button>
            </div>

            {selectedTab === 'internal' ? (
                <>
                    {/* Roadmap Selector */}
                    <div className="roadmap-selector">
                        {Object.values(roadmapData).map((roadmap) => {
                            const percent = getCompletionPercentage(roadmap.id)
                            return (
                                <button
                                    key={roadmap.id}
                                    className={`roadmap-tab ${selectedRoadmap === roadmap.id ? 'active' : ''}`}
                                    onClick={() => setSelectedRoadmap(roadmap.id)}
                                    style={{ '--roadmap-color': roadmap.color }}
                                >
                                    <span className="roadmap-icon">
                                        {getRoadmapIcon(roadmap.id, 32)}
                                    </span>
                                    <div className="roadmap-tab-info">
                                        <span className="roadmap-tab-title">{roadmap.title}</span>
                                        {percent > 0 && (
                                            <div className="roadmap-progress-mini">
                                                <div
                                                    className="progress-bar-fill"
                                                    style={{ width: `${percent}%`, background: roadmap.color }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* Roadmap Header */}
                    <div className="roadmap-header" style={{ background: currentRoadmap.color }}>
                        <div className="roadmap-header-content">
                            <div className="roadmap-icon-large">
                                {getRoadmapIcon(currentRoadmap.id, 64)}
                            </div>
                            <div>
                                <h2>{currentRoadmap.title}</h2>
                                <p>{currentRoadmap.description}</p>
                            </div>
                        </div>
                        <div className="roadmap-stats">
                            <div className="roadmap-stat">
                                <Clock size={20} />
                                <span>{currentRoadmap.estimatedTime}</span>
                            </div>
                            <div className="roadmap-stat">
                                <BookOpen size={20} />
                                <span>{currentRoadmap.milestones.length} Modules</span>
                            </div>
                            {getCompletionPercentage(currentRoadmap.id) > 0 && (
                                <div className="roadmap-stat">
                                    <TrendingUp size={20} />
                                    <span>{getCompletionPercentage(currentRoadmap.id)}% Done</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="roadmap-timeline">
                        {currentRoadmap.milestones.length > 0 ? currentRoadmap.milestones.map((milestone, index) => {
                            const isCompleted = isMilestoneCompleted(currentRoadmap.id, milestone.id)
                            const isExpanded = expandedMilestones[milestone.id]

                            return (
                                <div key={milestone.id} className={`milestone-card ${isCompleted ? 'completed' : ''}`}>
                                    {/* Timeline Connector */}
                                    <div className="timeline-connector">
                                        <div className="timeline-dot" style={{
                                            background: isCompleted ? '#10b981' : getDifficultyColor(milestone.difficulty)
                                        }}>
                                            {isCompleted ? (
                                                <Check size={16} color="white" strokeWidth={3} />
                                            ) : (
                                                <span className="milestone-number">{index + 1}</span>
                                            )}
                                        </div>
                                        {index < currentRoadmap.milestones.length - 1 && (
                                            <div className={`timeline-line ${isCompleted ? 'completed' : ''}`} />
                                        )}
                                    </div>

                                    {/* Milestone Content */}
                                    <div className="milestone-content">
                                        <div className="milestone-header-row" onClick={() => toggleExpand(milestone.id)}>
                                            <div className="milestone-title-section">
                                                <div className="milestone-top-badges">
                                                    <span
                                                        className="difficulty-badge"
                                                        style={{ color: getDifficultyColor(milestone.difficulty), borderColor: getDifficultyColor(milestone.difficulty) }}
                                                    >
                                                        {milestone.difficulty}
                                                    </span>
                                                    <span className="time-badge">
                                                        <Clock size={12} />
                                                        {milestone.estimatedHours}h
                                                    </span>
                                                </div>
                                                <h3>{milestone.title}</h3>
                                                <p className="milestone-description">{milestone.description}</p>
                                            </div>

                                            <div className="milestone-actions">
                                                <button
                                                    className={`milestone-check-btn ${isCompleted ? 'checked' : ''}`}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        toggleMilestone(currentRoadmap.id, milestone.id)
                                                    }}
                                                    title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                                                >
                                                    {isCompleted ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                                                </button>
                                                <button className="expand-btn">
                                                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        {isExpanded && (
                                            <div className="milestone-details">
                                                <div className="milestone-section">
                                                    <h4><PlayCircle size={16} /> Key Topics</h4>
                                                    <div className="roadmap-milestone-body">
                                                        {milestone.content && <div className="roadmap-milestone-content" style={{
                                                            marginBottom: '1rem',
                                                            lineHeight: '1.6',
                                                            color: 'var(--text-main)',
                                                            fontSize: '0.95rem',
                                                            padding: '1rem',
                                                            background: 'var(--bg-inset)',
                                                            borderRadius: '8px',
                                                            borderLeft: `4px solid ${currentRoadmap.color}`
                                                        }}>
                                                            {milestone.content}
                                                        </div>
                                                        }
                                                        <div className="roadmap-topics-grid">
                                                            {milestone.topics.map((topic, i) => (
                                                                <div key={i} className="roadmap-topic-chip">
                                                                    {topic}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {milestone.resources && milestone.resources.length > 0 && (
                                                    <div className="milestone-section">
                                                        <h4><BookOpen size={16} /> Resources</h4>
                                                        <div className="resources-list">
                                                            {milestone.resources.map((resource, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={resource.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="resource-link-item"
                                                                >
                                                                    <FileText size={14} />
                                                                    {resource.title}
                                                                    <ExternalLink size={12} className="ext-icon" />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        }) : (
                            <div className="empty-roadmap-state">
                                <p>Content for this roadmap is coming soon.</p>
                                <a href={currentRoadmap.link} target="_blank" rel="noreferrer" className="btn-primary">
                                    View on roadmap.sh <ExternalLink size={16} />
                                </a>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="external-roadmaps-container">
                    {/* External content same as before */}
                    {Object.entries(externalRoadmaps).map(([category, roadmaps]) => (
                        <div key={category} className="external-category">
                            <div className="category-header">
                                <Star size={24} fill="currentColor" />
                                <h2>{category}</h2>
                            </div>
                            <div className="external-roadmaps-grid">
                                {roadmaps.map((roadmap, index) => (
                                    <a
                                        key={index}
                                        href={roadmap.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="external-roadmap-card"
                                    >
                                        <div className="external-card-icon">{roadmap.icon}</div>
                                        <div className="external-card-content">
                                            <h3>{roadmap.name}</h3>
                                            <div className="external-link-indicator">
                                                <ExternalLink size={16} />
                                                <span>roadmap.sh</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    )
}

export default Roadmap
