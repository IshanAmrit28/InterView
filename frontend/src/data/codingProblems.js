// Storytelling-based coding problems with real-world scenarios

export const codingProblems = [
    {
        id: 1,
        title: "The Library Book Finder",
        difficulty: "Easy",
        category: "Arrays & Binary Search",
        story: `You're working for a digital library system. The library keeps books sorted by their unique ISBN numbers in ascending order. 
        
A student walks in and asks: "Do you have the book with ISBN 978-0-13-468599-1?"

Your task is to quickly find if this book exists in the library's sorted collection and return its position on the shelf (array index). The library has millions of books, so a linear search would be too slow.`,
        problem: "Implement a binary search algorithm to find a book by its ISBN in O(log n) time.",
        hints: [
            "The books are already sorted by ISBN",
            "Compare the target ISBN with the middle element",
            "Eliminate half of the search space in each iteration"
        ],
        testCases: [
            { input: "[1, 3, 5, 7, 9, 11], target = 7", output: "3" },
            { input: "[1, 3, 5, 7, 9, 11], target = 6", output: "-1 (not found)" }
        ],
        tags: ["Binary Search", "Arrays", "Interview Classic"]
    },
    {
        id: 2,
        title: "The Warehouse Package Router",
        difficulty: "Medium",
        category: "Graphs & BFS",
        story: `You're building software for an Amazon warehouse. The warehouse is laid out as a grid, with some cells containing obstacles (shelves, walls) and others being open paths.

A robot needs to pick up a package from point A and deliver it to point B. The robot can only move up, down, left, or right, and cannot pass through obstacles.

Your manager asks: "What's the shortest path the robot should take?"`,
        problem: "Find the shortest path from start to end in a grid with obstacles using BFS.",
        hints: [
            "Use Breadth-First Search (BFS) as it finds shortest path in unweighted graphs",
            "Treat each cell as a node, and adjacent cells as edges",
            "Keep track of visited cells to avoid cycles",
            "Return -1 if no path exists"
        ],
        testCases: [
            { input: "Grid: [[0,0,0],[0,1,0],[0,0,0]], start=(0,0), end=(2,2)", output: "4 (distance)" },
            { input: "Grid with blocked path", output: "-1 (no path)" }
        ],
        tags: ["BFS", "Graphs", "Shortest Path", "Grid Problems"]
    },
    {
        id: 3,
        title: "The Social Media Feed",
        difficulty: "Medium",
        category: "Linked Lists",
        story: `You're building a social media platform like Twitter. When a user scrolls through their feed, posts are loaded dynamically.

The backend team represents the feed as a linked list of posts, where each post points to the next one. However, due to a bug, sometimes the linked list forms a cycle - a post accidentally points back to an earlier post, causing an infinite scroll!

Users are complaining: "My feed keeps showing the same posts over and over!"`,
        problem: "Detect if there's a cycle in the linked list using O(1) space.",
        hints: [
            "Use Floyd's Cycle Detection (Tortoise and Hare)",
            "Move one pointer one step at a time (slow)",
            "Move another pointer two steps at a time (fast)",
            "If they meet, there's a cycle"
        ],
        testCases: [
            { input: "List: 1->2->3->4->2 (points back to node 2)", output: "true (cycle detected)" },
            { input: "List: 1->2->3->4->null", output: "false (no cycle)" }
        ],
        tags: ["Linked List", "Two Pointers", "Floyd's Algorithm"]
    },
    {
        id: 4,
        title: "The Meeting Room Scheduler",
        difficulty: "Medium",
        category: "Intervals & Greedy",
        story: `You're building a meeting room booking system for a corporate office. Employees submit meeting requests with start and end times.

The office manager asks: "We only have one conference room. Can all these meetings fit without overlapping?"

For example, if someone books 9:00-10:30 AM and another person books 10:00-11:00 AM, there's a conflict!`,
        problem: "Given an array of meeting intervals, determine if a person can attend all meetings (no overlaps).",
        hints: [
            "Sort meetings by start time",
            "Check if any meeting starts before the previous one ends",
            "If end[i] > start[i+1], there's an overlap"
        ],
        testCases: [
            { input: "[[0,30], [5,10], [15,20]]", output: "false (overlap between 0-30 and 5-10)" },
            { input: "[[7,10], [2,4]]", output: "true (no overlap)" }
        ],
        tags: ["Intervals", "Sorting", "Greedy", "Real-world"]
    },
    {
        id: 5,
        title: "The E-commerce Shopping Cart",
        difficulty: "Easy",
        category: "Hash Maps",
        story: `You're developing an e-commerce platform. Customers add items to their cart, and each item has a unique product ID and price.

At checkout, the system needs to show:
1. Total number of items
2. Total cost
3. Which items appear most frequently

The marketing team wants to know: "What's the most popular item in this cart?"`,
        problem: "Use a hash map to track product frequency and find the most frequently added item.",
        hints: [
            "Use a hash map where key=productId, value=count",
            "Iterate through cart items and update counts",
            "Track the maximum count and corresponding product"
        ],
        testCases: [
            { input: "[101, 102, 101, 103, 101]", output: "Product 101 (appears 3 times)" },
            { input: "[201, 202, 203]", output: "All appear once" }
        ],
        tags: ["Hash Map", "Frequency Counter", "E-commerce"]
    },
    {
        id: 6,
        title: "The Password Validator",
        difficulty: "Easy",
        category: "String Manipulation",
        story: `You're implementing a signup page for a website. For security, passwords must meet these requirements:
- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one digit
- Contains at least one special character (!@#$%^&*)

A user tries to sign up with "password123" - should you accept it?`,
        problem: "Write a function to validate password strength based on multiple criteria.",
        hints: [
            "Check length first",
            "Use character class checks or regex",
            "Return specific error messages for failed criteria"
        ],
        testCases: [
            { input: "Password123!", output: "Valid" },
            { input: "weakpass", output: "Invalid: missing uppercase, digit, special char" }
        ],
        tags: ["Strings", "Validation", "Authentication"]
    },
    {
        id: 7,
        title: "The Stock Trading Bot",
        difficulty: "Medium",
        category: "Dynamic Programming",
        story: `You're building an automated trading bot. The bot has access to historical stock prices for a company over the past 30 days.

Your bot can make ONE buy and ONE sell transaction to maximize profit. It must buy before selling (no short selling!).

For example, if prices were [7, 1, 5, 3, 6, 4]:
- Buy at day 2 (price 1)
- Sell at day 5 (price 6)
- Profit = 6 - 1 = 5

What's the maximum profit your bot can make?`,
        problem: "Find the maximum profit from one buy-sell transaction given daily stock prices.",
        hints: [
            "Track the minimum price seen so far",
            "At each day, calculate profit if selling today",
            "Update maximum profit",
            "Time complexity should be O(n)"
        ],
        testCases: [
            { input: "[7,1,5,3,6,4]", output: "5 (buy at 1, sell at 6)" },
            { input: "[7,6,4,3,1]", output: "0 (prices only decrease)" }
        ],
        tags: ["Dynamic Programming", "Arrays", "Finance", "Greedy"]
    },
    {
        id: 8,
        title: "The Task Dependency Manager",
        difficulty: "Hard",
        category: "Topological Sort",
        story: `You're building a project management tool like Jira. Tasks have dependencies - some tasks can only start after others finish.

For example:
- Task A: "Design mockups" (no dependencies)
- Task B: "Write code" (depends on A)
- Task C: "Write tests" (depends on B)
- Task D: "Deploy" (depends on B and C)

The team lead asks: "In what order should we complete these tasks?"

But there's a catch - if there's a circular dependency (A depends on B, B depends on C, C depends on A), the tasks can never be completed!`,
        problem: "Given tasks and dependencies, return a valid completion order or detect if it's impossible (cycle).",
        hints: [
            "Model tasks as a directed graph (tasks = nodes, dependencies = edges)",
            "Use Topological Sort with Kahn's Algorithm (BFS) or DFS",
            "If cycle exists, return empty array or error",
            "Track in-degree (number of dependencies) for each task"
        ],
        testCases: [
            { input: "tasks=[A,B,C,D], deps=[[A,B],[B,C],[B,D],[C,D]]", output: "[A,B,C,D]" },
            { input: "Circular: A->B->C->A", output: "[] (impossible)" }
        ],
        tags: ["Topological Sort", "Graphs", "DFS", "BFS", "Cycle Detection"]
    },
    {
        id: 9,
        title: "The Cache System",
        difficulty: "Medium",
        category: "Design - LRU Cache",
        story: `You're optimizing a news website's backend. The site gets millions of requests for articles, but fetching from the database every time is slow.

Your senior engineer suggests: "Let's implement an LRU (Least Recently Used) cache. Keep the 1000 most recently accessed articles in memory. When the cache is full and a new article is requested, remove the least recently used one."

Requirements:
- get(articleId): Return article in O(1) time
- put(articleId, article): Add article in O(1) time
- If cache is full, remove least recently used article`,
        problem: "Implement an LRU Cache with O(1) get and put operations.",
        hints: [
            "Use a HashMap for O(1) lookup",
            "Use a Doubly Linked List to track access order",
            "Most recent = head, Least recent = tail",
            "On get/put, move item to head",
            "When full, remove tail"
        ],
        testCases: [
            { input: "capacity=2, operations: put(1,a), put(2,b), get(1), put(3,c)", output: "Evicts key 2" }
        ],
        tags: ["Design", "Hash Map", "Doubly Linked List", "System Design"]
    },
    {
        id: 10,
        title: "The Autocomplete System",
        difficulty: "Medium",
        category: "Trie",
        story: `You're building Google-like search suggestions. As users type "pytho", you need to instantly suggest:
- "python"
- "python tutorial"
- "python interview questions"

With millions of search queries in your database, how do you make suggestions appear in milliseconds?

A senior engineer suggests: "Use a Trie data structure. It's like a tree where each path from root to leaf represents a word."`,
        problem: "Implement a Trie to store words and find all words with a given prefix.",
        hints: [
            "Each node has 26 children (for each letter)",
            "Mark nodes that represent end of a word",
            "insert(word): Add word to trie",
            "search(prefix): Return all words starting with prefix",
            "Use DFS to collect all words from prefix node"
        ],
        testCases: [
            { input: "insert(['apple', 'app', 'apricot']), search('app')", output: "['apple', 'app']" }
        ],
        tags: ["Trie", "String", "Prefix Search", "Autocomplete"]
    },
    {
        id: 11,
        title: "The Rate Limiter",
        difficulty: "Medium",
        category: "Design",
        story: `Your API is getting hammered! A rogue script is making 10,000 requests per second, crashing your servers.

Your DevOps lead says: "We need rate limiting. Allow each user maximum 100 requests per minute. Block additional requests."

Requirements:
- Allow 100 requests per user per 60-second window
- Reject requests exceeding the limit
- Must be memory efficient (can't store every request timestamp)`,
        problem: "Implement a sliding window rate limiter.",
        hints: [
            "Use a hash map: userId -> queue of timestamps",
            "Remove timestamps older than 60 seconds",
            "Check if queue size < limit before allowing request",
            "Alternative: Token bucket algorithm"
        ],
        testCases: [
            { input: "100 requests in 50 seconds", output: "All allowed" },
            { input: "101st request in same window", output: "Blocked" }
        ],
        tags: ["Design", "System Design", "Rate Limiting", "Sliding Window"]
    },
    {
        id: 12,
        title: "The Fraud Detection System",
        difficulty: "Hard",
        category: "Sliding Window",
        story: `You work at a fintech company. Your fraud detection system needs to flag suspicious transactions.

A transaction is suspicious if:
- Amount is $1000 or more
- User made 3 or more such transactions within 10 minutes

For example, if a user makes these transactions:
- 2:00 PM - $1200
- 2:05 PM - $1500
- 2:08 PM - $1100
- 2:15 PM - $1300

The first three should trigger an alert!`,
        problem: "Detect if a user made 3+ large transactions in a 10-minute window.",
        hints: [
            "Sort transactions by timestamp",
            "Use sliding window with two pointers",
            "Expand window to include new transactions",
            "Shrink window if time difference > 10 minutes",
            "Track count of transactions in current window"
        ],
        testCases: [
            { input: "3 transactions of $1000+ within 10 min", output: "ALERT" },
            { input: "2 transactions of $1000+ within 10 min", output: "OK" }
        ],
        tags: ["Sliding Window", "Two Pointers", "Fraud Detection", "Real-world"]
    }
];

export const getProblemsByDifficulty = (difficulty) => {
    return codingProblems.filter(p => p.difficulty === difficulty);
};

export const getProblemsByCategory = (category) => {
    return codingProblems.filter(p => p.category.includes(category));
};

export const getRandomProblem = () => {
    return codingProblems[Math.floor(Math.random() * codingProblems.length)];
};
