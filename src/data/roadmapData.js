/**
 * Comprehensive Roadmap Data for Different Career Paths */

import { extraRoadmaps } from './extraRoadmaps';

export const roadmapData = {
    frontend: {
        id: 'frontend',
        title: 'Frontend Developer Roadmap',
        description: 'Complete path to becoming a professional frontend developer',
        icon: '🎨',
        color: '#667eea',
        estimatedTime: '6-8 months',
        milestones: [
            {
                id: 'html-css',
                title: 'HTML & CSS Fundamentals',
                description: 'Master the building blocks of web development',
                difficulty: 'Beginner',
                estimatedHours: 40,
                topics: [
                    'HTML5 Semantic Elements',
                    'CSS Flexbox & Grid',
                    'Responsive Design',
                    'CSS Animations',
                    'Accessibility (a11y)'
                ],
                resources: [
                    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
                    { title: 'CSS Tricks', url: 'https://css-tricks.com' }
                ]
            },
            {
                id: 'javascript',
                title: 'JavaScript Essentials',
                description: 'Learn modern JavaScript (ES6+)',
                difficulty: 'Beginner',
                estimatedHours: 60,
                topics: [
                    'Variables, Data Types, Operators',
                    'Functions & Arrow Functions',
                    'Arrays & Objects',
                    'DOM Manipulation',
                    'Event Handling',
                    'Async/Await & Promises',
                    'Fetch API'
                ],
                resources: [
                    { title: 'JavaScript.info', url: 'https://javascript.info' },
                    { title: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net' }
                ]
            },
            {
                id: 'react',
                title: 'React Framework',
                description: 'Build modern UIs with React',
                difficulty: 'Intermediate',
                estimatedHours: 80,
                topics: [
                    'Components & Props',
                    'State & Lifecycle',
                    'Hooks (useState, useEffect, etc.)',
                    'Context API',
                    'React Router',
                    'Form Handling',
                    'Performance Optimization'
                ],
                resources: [
                    { title: 'React Official Docs', url: 'https://react.dev' },
                    { title: 'React Patterns', url: 'https://reactpatterns.com' }
                ]
            },
            {
                id: 'state-management',
                title: 'State Management',
                description: 'Manage complex application state',
                difficulty: 'Intermediate',
                estimatedHours: 30,
                topics: [
                    'Redux Toolkit',
                    'Zustand',
                    'React Query',
                    'Global vs Local State'
                ],
                resources: [
                    { title: 'Redux Docs', url: 'https://redux.js.org' }
                ]
            },
            {
                id: 'build-tools',
                title: 'Build Tools & Bundlers',
                description: 'Modern development workflow',
                difficulty: 'Intermediate',
                estimatedHours: 20,
                topics: [
                    'Vite',
                    'Webpack',
                    'npm/yarn',
                    'Environment Variables',
                    'Code Splitting'
                ],
                resources: [
                    { title: 'Vite Guide', url: 'https://vitejs.dev' }
                ]
            },
            {
                id: 'testing',
                title: 'Testing',
                description: 'Write reliable, maintainable code',
                difficulty: 'Advanced',
                estimatedHours: 40,
                topics: [
                    'Jest',
                    'React Testing Library',
                    'Unit Tests',
                    'Integration Tests',
                    'E2E Testing (Playwright)'
                ],
                resources: [
                    { title: 'Testing Library', url: 'https://testing-library.com' }
                ]
            }
        ]
    },

    backend: {
        id: 'backend',
        title: 'Backend Developer Roadmap',
        description: 'Master server-side development',
        icon: '⚙️',
        color: '#f093fb',
        estimatedTime: '6-9 months',
        milestones: [
            {
                id: 'programming-basics',
                title: 'Programming Fundamentals',
                description: 'Choose and master a backend language',
                difficulty: 'Beginner',
                estimatedHours: 60,
                topics: [
                    'Python / Node.js / Java',
                    'Data Structures',
                    'OOP Concepts',
                    'Error Handling',
                    'File I/O'
                ],
                resources: [
                    { title: 'Python Docs', url: 'https://docs.python.org' },
                    { title: 'Node.js Docs', url: 'https://nodejs.org' }
                ]
            },
            {
                id: 'databases',
                title: 'Databases',
                description: 'SQL and NoSQL databases',
                difficulty: 'Intermediate',
                estimatedHours: 50,
                topics: [
                    'PostgreSQL / MySQL',
                    'MongoDB',
                    'SQL Queries',
                    'Database Design',
                    'Indexing',
                    'Transactions',
                    'ORMs (Sequelize, Mongoose)'
                ],
                resources: [
                    { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com' }
                ]
            },
            {
                id: 'api-development',
                title: 'API Development',
                description: 'Build RESTful and GraphQL APIs',
                difficulty: 'Intermediate',
                estimatedHours: 70,
                topics: [
                    'REST API Design',
                    'Express.js / FastAPI',
                    'Authentication (JWT, OAuth)',
                    'Authorization',
                    'API Documentation (Swagger)',
                    'GraphQL Basics'
                ],
                resources: [
                    { title: 'REST API Tutorial', url: 'https://restfulapi.net' }
                ]
            },
            {
                id: 'security',
                title: 'Security Best Practices',
                description: 'Secure your applications',
                difficulty: 'Advanced',
                estimatedHours: 30,
                topics: [
                    'HTTPS/TLS',
                    'CORS',
                    'SQL Injection Prevention',
                    'XSS Protection',
                    'Rate Limiting',
                    'Environment Variables'
                ],
                resources: [
                    { title: 'OWASP Top 10', url: 'https://owasp.org' }
                ]
            },
            {
                id: 'caching',
                title: 'Caching & Performance',
                description: 'Optimize application performance',
                difficulty: 'Advanced',
                estimatedHours: 25,
                topics: [
                    'Redis',
                    'Memcached',
                    'CDN',
                    'Database Query Optimization',
                    'Load Balancing'
                ],
                resources: [
                    { title: 'Redis Docs', url: 'https://redis.io' }
                ]
            },
            {
                id: 'deployment',
                title: 'Deployment & DevOps',
                description: 'Deploy and maintain applications',
                difficulty: 'Advanced',
                estimatedHours: 40,
                topics: [
                    'Docker',
                    'CI/CD Pipelines',
                    'AWS / Azure / GCP',
                    'Nginx',
                    'Monitoring & Logging'
                ],
                resources: [
                    { title: 'Docker Docs', url: 'https://docs.docker.com' }
                ]
            }
        ]
    },

    dsa: {
        id: 'dsa',
        title: 'Data Structures & Algorithms',
        description: 'Master DSA for coding interviews',
        icon: '🧮',
        color: '#4facfe',
        estimatedTime: '4-6 months',
        milestones: [
            {
                id: 'complexity',
                title: 'Time & Space Complexity',
                description: 'Analyze algorithm efficiency',
                difficulty: 'Beginner',
                estimatedHours: 15,
                topics: [
                    'Big O Notation',
                    'Time Complexity Analysis',
                    'Space Complexity Analysis',
                    'Best, Average, Worst Cases'
                ],
                resources: [
                    { title: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com' }
                ]
            },
            {
                id: 'arrays-strings',
                title: 'Arrays & Strings',
                description: 'Master fundamental data structures',
                difficulty: 'Beginner',
                estimatedHours: 40,
                topics: [
                    'Two Pointers',
                    'Sliding Window',
                    'Prefix Sum',
                    'String Manipulation',
                    'Common Patterns'
                ],
                resources: [
                    { title: 'LeetCode Patterns', url: 'https://leetcode.com' }
                ]
            },
            {
                id: 'linked-lists',
                title: 'Linked Lists',
                description: 'Linear data structures',
                difficulty: 'Beginner',
                estimatedHours: 25,
                topics: [
                    'Singly Linked List',
                    'Doubly Linked List',
                    'Fast & Slow Pointers',
                    'Reversal',
                    'Cycle Detection'
                ],
                resources: [
                    { title: 'Visualgo', url: 'https://visualgo.net' }
                ]
            },
            {
                id: 'stacks-queues',
                title: 'Stacks & Queues',
                description: 'LIFO and FIFO structures',
                difficulty: 'Beginner',
                estimatedHours: 20,
                topics: [
                    'Stack Implementation',
                    'Queue Implementation',
                    'Monotonic Stack',
                    'Priority Queue',
                    'Deque'
                ],
                resources: []
            },
            {
                id: 'trees',
                title: 'Trees & Binary Search Trees',
                description: 'Hierarchical data structures',
                difficulty: 'Intermediate',
                estimatedHours: 50,
                topics: [
                    'Binary Tree Traversals',
                    'BST Operations',
                    'Tree Construction',
                    'Lowest Common Ancestor',
                    'Path Sum Problems'
                ],
                resources: []
            },
            {
                id: 'graphs',
                title: 'Graphs',
                description: 'Complex relationships and networks',
                difficulty: 'Intermediate',
                estimatedHours: 60,
                topics: [
                    'Graph Representation',
                    'BFS & DFS',
                    'Shortest Path (Dijkstra)',
                    'Topological Sort',
                    'Union Find',
                    'Minimum Spanning Tree'
                ],
                resources: []
            },
            {
                id: 'dynamic-programming',
                title: 'Dynamic Programming',
                description: 'Optimization problems',
                difficulty: 'Advanced',
                estimatedHours: 80,
                topics: [
                    'Memoization',
                    'Tabulation',
                    '1D DP',
                    '2D DP',
                    'Knapsack Problems',
                    'LCS, LIS',
                    'State Machine DP'
                ],
                resources: [
                    { title: 'DP Patterns', url: 'https://leetcode.com/discuss/general-discussion/458695' }
                ]
            },
            {
                id: 'advanced-topics',
                title: 'Advanced Topics',
                description: 'Specialized algorithms',
                difficulty: 'Advanced',
                estimatedHours: 40,
                topics: [
                    'Backtracking',
                    'Greedy Algorithms',
                    'Bit Manipulation',
                    'Trie',
                    'Segment Tree',
                    'Binary Search Variations'
                ],
                resources: []
            }
        ]
    },

    systemDesign: {
        id: 'systemDesign',
        title: 'System Design',
        description: 'Design scalable distributed systems',
        icon: '🏗️',
        color: '#fa709a',
        estimatedTime: '3-4 months',
        milestones: [
            {
                id: 'fundamentals',
                title: 'System Design Fundamentals',
                description: 'Core concepts and principles',
                difficulty: 'Intermediate',
                estimatedHours: 30,
                topics: [
                    'Scalability',
                    'Reliability',
                    'Availability',
                    'CAP Theorem',
                    'Consistency Patterns',
                    'Load Balancing'
                ],
                resources: [
                    { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' }
                ]
            },
            {
                id: 'databases-scaling',
                title: 'Database Scaling',
                description: 'Scale your data layer',
                difficulty: 'Intermediate',
                estimatedHours: 35,
                topics: [
                    'Replication',
                    'Sharding',
                    'Partitioning',
                    'SQL vs NoSQL',
                    'Database Indexing',
                    'Connection Pooling'
                ],
                resources: []
            },
            {
                id: 'caching-cdn',
                title: 'Caching & CDN',
                description: 'Improve performance with caching',
                difficulty: 'Intermediate',
                estimatedHours: 25,
                topics: [
                    'Cache Strategies',
                    'Redis/Memcached',
                    'CDN',
                    'Cache Invalidation',
                    'Write-through vs Write-back'
                ],
                resources: []
            },
            {
                id: 'messaging',
                title: 'Message Queues & Pub/Sub',
                description: 'Asynchronous communication',
                difficulty: 'Advanced',
                estimatedHours: 30,
                topics: [
                    'RabbitMQ',
                    'Kafka',
                    'Message Queue Patterns',
                    'Event-Driven Architecture',
                    'Pub/Sub Model'
                ],
                resources: []
            },
            {
                id: 'microservices',
                title: 'Microservices Architecture',
                description: 'Design distributed systems',
                difficulty: 'Advanced',
                estimatedHours: 40,
                topics: [
                    'Service Discovery',
                    'API Gateway',
                    'Circuit Breaker',
                    'Service Mesh',
                    'Inter-service Communication'
                ],
                resources: []
            },
            {
                id: 'case-studies',
                title: 'Real-World Case Studies',
                description: 'Design popular systems',
                difficulty: 'Advanced',
                estimatedHours: 50,
                topics: [
                    'Design Twitter',
                    'Design Instagram',
                    'Design URL Shortener',
                    'Design Netflix',
                    'Design Uber',
                    'Design WhatsApp'
                ],
                resources: [
                    { title: 'Grokking System Design', url: 'https://www.educative.io' }
                ]
            }
        ]
    },

    fullstack: {
        id: 'fullstack',
        title: 'Full Stack Developer',
        description: 'Master both frontend and backend',
        icon: '🚀',
        color: '#764ba2',
        estimatedTime: '10-12 months',
        milestones: [
            {
                id: 'web-fundamentals',
                title: 'Web Fundamentals',
                description: 'HTML, CSS, JavaScript basics',
                difficulty: 'Beginner',
                estimatedHours: 60,
                topics: [
                    'HTML5 & CSS3',
                    'JavaScript ES6+',
                    'Responsive Design',
                    'Git & GitHub'
                ],
                resources: []
            },
            {
                id: 'frontend-framework',
                title: 'Frontend Framework',
                description: 'React or Vue.js',
                difficulty: 'Intermediate',
                estimatedHours: 80,
                topics: [
                    'React/Vue Fundamentals',
                    'Component Architecture',
                    'State Management',
                    'Routing'
                ],
                resources: []
            },
            {
                id: 'backend-basics',
                title: 'Backend Development',
                description: 'Server-side programming',
                difficulty: 'Intermediate',
                estimatedHours: 70,
                topics: [
                    'Node.js/Python',
                    'Express/FastAPI',
                    'RESTful APIs',
                    'Authentication'
                ],
                resources: []
            },
            {
                id: 'database-management',
                title: 'Database Management',
                description: 'SQL and NoSQL',
                difficulty: 'Intermediate',
                estimatedHours: 50,
                topics: [
                    'PostgreSQL',
                    'MongoDB',
                    'Database Design',
                    'ORMs'
                ],
                resources: []
            },
            {
                id: 'deployment-devops',
                title: 'Deployment & DevOps',
                description: 'Ship your applications',
                difficulty: 'Advanced',
                estimatedHours: 45,
                topics: [
                    'Docker',
                    'CI/CD',
                    'Cloud Platforms (AWS/Azure)',
                    'Monitoring'
                ],
                resources: []
            },
            {
                id: 'fullstack-projects',
                title: 'Full Stack Projects',
                description: 'Build end-to-end applications',
                difficulty: 'Advanced',
                estimatedHours: 100,
                topics: [
                    'E-commerce Platform',
                    'Social Media App',
                    'Real-time Chat',
                    'Project Management Tool'
                ],
                resources: []
            }
        ]
    },
    ...extraRoadmaps
}

export default roadmapData
