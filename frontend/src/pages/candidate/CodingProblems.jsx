import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Code2, 
    BookOpen, 
    Trophy, 
    CheckCircle2, 
    ChevronRight, 
    Zap, 
    Terminal,
    Search,
    Filter
} from 'lucide-react';
import { toast } from 'sonner';
import codingService from '../../services/coding.service';
import Pagination from '../../components/shared/Pagination';
import './CodingProblems.css';

const CodingProblems = () => {
    const navigate = useNavigate();
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const data = await codingService.getAllProblems();
                setProblems(data.problems);
            } catch (err) {
                toast.error("Failed to load problems");
            } finally {
                setLoading(false);
            }
        };
        fetchProblems();
    }, []);

    const filteredProblems = problems.filter(p => {
        const matchesDifficulty = difficultyFilter === 'All' || p.difficulty === difficultyFilter;
        
        let matchesStatus = true;
        if (statusFilter === 'Solved') matchesStatus = p.isSolved === true;
        else if (statusFilter === 'Unsolved') matchesStatus = !p.isSolved;

        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDifficulty && matchesStatus && matchesSearch;
    });

    const difficultyColors = {
        'Easy': 'bg-green-500/10 text-green-500 border-green-500/20',
        'Medium': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        'Hard': 'bg-red-500/10 text-red-500 border-red-500/20'
    };

    const totalProblems = problems.length;
    const solvedProblems = problems.filter(p => p.isSolved).length;

    const easyProblems = problems.filter(p => p.difficulty === 'Easy');
    const easyTotal = easyProblems.length;
    const easySolved = easyProblems.filter(p => p.isSolved).length;

    const mediumProblems = problems.filter(p => p.difficulty === 'Medium');
    const mediumTotal = mediumProblems.length;
    const mediumSolved = mediumProblems.filter(p => p.isSolved).length;

    const hardProblems = problems.filter(p => p.difficulty === 'Hard');
    const hardTotal = hardProblems.length;
    const hardSolved = hardProblems.filter(p => p.isSolved).length;

    const circ = 376.99; // 2 * Math.PI * 60
    const easyLen = totalProblems === 0 ? 0 : (easySolved / totalProblems) * circ;
    const medLen = totalProblems === 0 ? 0 : (mediumSolved / totalProblems) * circ;
    const hardLen = totalProblems === 0 ? 0 : (hardSolved / totalProblems) * circ;

    return (
        <div className="coding-problems-container">
            <header className="page-header">
                <div className="header-content">
                    <div className="title-section">
                        <div className="icon-wrapper">
                            <Terminal size={32} className="text-blue-500" />
                        </div>
                        <div>
                            <h1>Master Data Structures</h1>
                            <p>Solve high-impact DSA problems with our secure development environment.</p>
                        </div>
                    </div>
                    <div className="leetcode-stats">
                        <div className="circular-progress-container">
                            <svg className="progress-ring" width="140" height="140" viewBox="0 0 140 140">
                                <circle 
                                    className="progress-ring-bg" 
                                    cx="70" cy="70" r="60" 
                                />
                                <circle 
                                    className="progress-ring-easy" 
                                    cx="70" cy="70" r="60" 
                                    strokeDasharray={`${easyLen} ${circ}`}
                                    strokeDashoffset="0"
                                />
                                <circle 
                                    className="progress-ring-medium" 
                                    cx="70" cy="70" r="60" 
                                    strokeDasharray={`${medLen} ${circ}`}
                                    strokeDashoffset={-easyLen}
                                />
                                <circle 
                                    className="progress-ring-hard" 
                                    cx="70" cy="70" r="60" 
                                    strokeDasharray={`${hardLen} ${circ}`}
                                    strokeDashoffset={-(easyLen + medLen)}
                                />
                            </svg>
                            <div className="circular-progress-text">
                                <div className="total-solved-text">
                                    <span className="solved-count">{totalProblems === 0 ? 0 : solvedProblems}</span>
                                    <span className="total-count">/{totalProblems}</span>
                                </div>
                                <div className="solved-label">
                                    <CheckCircle2 size={12} className="text-green-500" /> 
                                    <span>Solved</span>
                                </div>
                            </div>
                        </div>

                        <div className="difficulty-stats">
                            <div className="diff-stat-card">
                                <span className="diff-label text-green-500">Easy</span>
                                <span className="diff-count">{easySolved}/{easyTotal}</span>
                            </div>
                            <div className="diff-stat-card">
                                <span className="diff-label text-yellow-500">Med.</span>
                                <span className="diff-count">{mediumSolved}/{mediumTotal}</span>
                            </div>
                            <div className="diff-stat-card">
                                <span className="diff-label text-red-500">Hard</span>
                                <span className="diff-count">{hardSolved}/{hardTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="content-grid">
                <section className="controls-bar">
                    <div className="search-wrapper">
                        <Search className="search-icon" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search problems by name..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                    <div className="filters-group">
                        <div className="filter-tabs">
                            {['All', 'Easy', 'Medium', 'Hard'].map(f => (
                                <button 
                                    key={f}
                                    className={`filter-tab ${difficultyFilter === f ? 'active' : ''}`}
                                    onClick={() => {
                                        setDifficultyFilter(f);
                                        setCurrentPage(1);
                                    }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                        <div className="filter-tabs">
                            {['All', 'Solved', 'Unsolved'].map(f => (
                                <button 
                                    key={f}
                                    className={`filter-tab ${statusFilter === f ? 'active' : ''}`}
                                    onClick={() => {
                                        setStatusFilter(f);
                                        setCurrentPage(1);
                                    }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="problems-list">
                    {loading ? (
                        Array(5).fill(0).map((_, i) => (
                            <div key={i} className="problem-card skeleton" />
                        ))
                    ) : filteredProblems.length > 0 ? (
                        <>
                            {filteredProblems
                                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                .map((problem) => (
                                <div 
                                    key={problem._id} 
                                    className="problem-card group"
                                    onClick={() => navigate(`/candidate/practice/${problem._id}`)}
                                >
                                    <div className="problem-main">
                                        <div className="status-indicator">
                                            <Code2 size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                        <div className="problem-info">
                                            <h3>{problem.title}</h3>
                                            <div className="problem-meta">
                                                <span className={`difficulty-badge ${difficultyColors[problem.difficulty]}`}>
                                                    {problem.difficulty}
                                                </span>
                                                <span className="time-limit flex items-center gap-1">
                                                    <Zap size={14} /> {problem.timeLimit}s
                                                </span>
                                                <span className="category flex items-center gap-1">
                                                    <BookOpen size={14} /> DSA
                                                </span>
                                                {problem.isSolved && (
                                                    <span className="solved-badge">
                                                        <CheckCircle2 size={14} /> Solved
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="problem-actions">
                                        <button className="solve-button">
                                            Solve <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            
                            <Pagination 
                                currentPage={currentPage}
                                totalPages={Math.ceil(filteredProblems.length / itemsPerPage)}
                                onPageChange={(page) => {
                                    setCurrentPage(page);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            />
                        </>
                    ) : (
                        <div className="empty-state">
                            <BookOpen size={48} className="empty-icon" />
                            <h3>No problems found</h3>
                            <p>Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </div>

                <aside className="sidebar-info">
                    <div className="info-card">
                        <h4>💡 Pro Tips</h4>
                        <ul className="tips-list">
                            <li>Focus on time complexity.</li>
                            <li>Write clean, modular code.</li>
                            <li>Test with edge cases.</li>
                            <li>Try multiple languages.</li>
                        </ul>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default CodingProblems;
