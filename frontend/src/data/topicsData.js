// Topic Data with Real Content
export const topicsData = {
    'dynamic-programming': {
        id: 'dynamic-programming',
        title: 'Dynamic Programming Patterns',
        difficulty: 'Hard',
        category: 'DSA',
        time: '45 min',
        description: 'Master the most common DP patterns used in FAANG interviews',
        overview: 'Dynamic Programming (DP) is an optimization technique for solving complex problems by breaking them down into simpler subproblems. It is essential for top-tier coding interviews, as it tests your ability to optimize recursive solutions.',
        keyPoints: [
            'Understanding Overlapping Subproblems & Optimal Substructure',
            'Mastering Recursion + Memoization (Top-Down)',
            'Mastering Iterative Tabulation (Bottom-Up)',
            'Space Optimization Techniques (State Compression)'
        ],
        sections: [
            {
                title: '1. Introduction to DP',
                content: `Dynamic Programming is more than just "recursion with caching". It's a way of thinking about problems in terms of states and transitions.

**Core Concepts:**

1. **Optimal Substructure:**
The optimal solution to the main problem can be constructed from optimal solutions of its subproblems.
*Example: Shortest Path in a graph.*

2. **Overlapping Subproblems:**
The problem can be broken down into subproblems which are reused several times.
*Example: Fibonacci numbers where fib(n) calls fib(n-1) and fib(n-2).*

**The DP Framework:**
1. Define the state (what defines a subproblem?)
2. Formulate the recurrence relation (transitions)
3. Identify base cases
4. Decide on Memoization or Tabulation`
            },
            {
                title: '2. Top 5 DP Patterns',
                content: `**1. 1D DP (Fibonacci Style)**
Problems where the current state depends on the previous few states.
- **Problems**: Climbing Stairs, House Robber, Domino Tiling
- **Relation**: \`dp[i] = dp[i-1] + dp[i-2]\`

**2. 0/1 Knapsack Pattern**
Deciding whether to include an item or not to maximize value under constraint.
- **Problems**: Subset Sum, Partition Equal Subset Sum
- **State**: \`dp[index][current_capacity]\`

**3. Unbounded Knapsack**
Similar to 0/1, but items can be picked multiple times.
- **Problems**: Coin Change, Rod Cutting
- **Relation**: Iterate through all items for every capacity.

**4. Longest Common Subsequence (LCS)**
Finding the longest subsequence present in two strings.
- **Problems**: Edit Distance, Longest Palindromic Subsequence
- **Relation**: If characters match: \`1 + dp[i-1][j-1]\`, else \`max(dp[i-1][j], dp[i][j-1])\`

**5. Longest Increasing Subsequence (LIS)**
Finding the longest subsequence where elements are sorted.
- **Problems**: Russian Doll Envelopes
- **Optimized**: Can be solved in O(N log N) using patience sorting.`
            },
            {
                title: '3. Deep Dive: State Compression',
                content: `Often, you don't need the entire DP table.

**Space Optimization:**
In Fibonacci, \`dp[i]\` only depends on \`dp[i-1]\` and \`dp[i-2]\`.
Instead of storing array \`dp[n]\` (Space O(N)), we can just keep two variables \`prev\` and \`curr\` (Space O(1)).

**When to Apply:**
- If \`dp[i][j]\` depends only on row \`i-1\`, you can reduce space from O(N*M) to O(M) using two rows (current and previous).`
            },
            {
                title: '4. Common Interview Questions',
                content: `**Q1: How do you decide between Greedy and DP?**
- **Answer**: Greedy makes the locally optimal choice at each step. If this leads to the global optimum (proof required), use Greedy (faster). If you need to explore *all* possibilities or if local choice doesn't guarantee global optimum, use DP.

**Q2: What is the difference between Top-Down and Bottom-Up?**
- **Top-Down (Memoization)**: Recursive, lazy evaluation (only computes needed states), prone to stack overflow.
- **Bottom-Up (Tabulation)**: Iterative, eager evaluation (computes all states), better space optimization.

**Q3: Can every recursive solution be optimized with DP?**
- **Answer**: No. Only if it has *Overlapping Subproblems*. If subproblems are unique (like Merge Sort), DP adds no value.`
            },
            {
                title: '5. Advanced Concepts: Profile DP',
                content: `**Profile Dynamic Programming** (Broken Profile DP) is a technique used to solve tiling-like problems on a grid.
- **State**: \`dp[col][mask]\`.
- **Mask**: Represents the state of the current column (filled/empty).
- **Transitions**: Try all ways to fill the current column compatible with the previous column's mask.
- **Complexity**: O(N * 2^M) where M is row count (usually small, <= 10).`
            }
        ],
        practiceProblems: [
            { title: 'Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/climbing-stairs/' },
            { title: 'House Robber', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber/' },
            { title: 'Coin Change', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/' },
            { title: 'Longest Increasing Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
            { title: 'Edit Distance', difficulty: 'Hard', link: 'https://leetcode.com/problems/edit-distance/' },
            { title: 'Target Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/target-sum/' },
            { title: 'Decode Ways', difficulty: 'Medium', link: 'https://leetcode.com/problems/decode-ways/' },
            { title: 'Unique Paths', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-paths/' },
            { title: 'Word Break', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-break/' }
        ],
        resources: [
            { title: 'Best DSA concepts for FAANG', type: 'PDF', link: '/PLACEMENT NOTES/Best DSA concepts for FAANG.pdf' },
            { title: 'DSA Complete Theory Notes', type: 'PDF', link: '/PLACEMENT NOTES/DSA in python complete theory hand writing notes (1).pdf' }
        ],
        videos: [
            { title: 'Dynamic Programming - Learn to Solve Algorithmic Problems', link: 'https://www.youtube.com/watch?v=oBt53YbR9Kk', channel: 'freeCodeCamp' },
            { title: '5 Simple Steps for Solving Dynamic Programming Problems', link: 'https://www.youtube.com/watch?v=aPQY__2H3tE', channel: 'Reducible' },
            { title: 'Master 1D Dynamic Programming', link: 'https://www.youtube.com/watch?v=73r3KWiEvyk', channel: 'NeetCode' },
            { title: 'Dynamic Programming Patterns for Interviews', link: 'https://www.youtube.com/watch?v=mBnqc_hX4QQ', channel: 'Tushar Roy' },
            { title: 'Algorithms: Memoization and Dynamic Programming', link: 'https://www.youtube.com/watch?v=P8Xa2Bit4U8', channel: 'HackerRank' },
            { title: 'Climbing Stairs - Dynamic Programming', link: 'https://www.youtube.com/watch?v=Y0lT9Fck7qI', channel: 'NeetCode' },
            { title: 'House Robber - LeetCode 198', link: 'https://www.youtube.com/watch?v=73r3KWiEvyk', channel: 'NeetCode' },
            { title: 'Longest Increasing Subsequence - O(nlogn)', link: 'https://www.youtube.com/watch?v=on2hvxBXJH4', channel: 'Tushar Roy' },
            { title: 'Coin Change - Dynamic Programming', link: 'https://www.youtube.com/watch?v=H9bfqozjoqs', channel: 'NeetCode' },
            { title: 'Dynamic Programming Patterns', link: 'https://www.youtube.com/watch?v=Hdr64lKQ3e4', channel: 'Abdul Bari' }
        ]
    },

    'system-design-caching': {
        id: 'system-design-caching',
        title: 'System Design: Caching Strategies',
        difficulty: 'Medium',
        category: 'System Design',
        time: '30 min',
        description: 'Learn caching strategies to build scalable systems',
        overview: 'Caching is the secret sauce of high-performance distributed systems. It involves storing copies of data in temporary storage locations to reduce easier access speed.',
        keyPoints: [
            'Cache Placement (Client, CDN, Load Balancer, Distributed)',
            'Eviction Policies (LRU, LFU, FIFO, ARC)',
            'Write Policies (Write-Through, Write-Back, Write-Around)',
            'Handling Cache Coherence & Thundering Herds'
        ],
        sections: [
            {
                title: '1. Why Caching?',
                content: `Accessing data from memory is orders of magnitude faster than disk or network calls.

**Latency Numbers to Know:**
- **L1 Cache**: ~1-2 ns
- **RAM**: ~100 ns
- **SSD**: ~150,000 ns
- **Network Round-trip**: ~500,000 ns`
            },
            {
                title: '2. Cache Eviction Policies',
                content: `When the cache is full, what do we delete?

**1. LRU (Least Recently Used)**
- Removes the item that hasn't been accessed for the longest time.
- **Use Case**: Social media feeds.

**2. LFU (Least Frequently Used)**
- Removes the item with the fewest access counts.
- **Use Case**: Analytics, historical logs.

**3. TTL (Time to Live)**
- Automatically expires data after X seconds.
- **Use Case**: Session data, OTPs.`
            },
            {
                title: '3. Deep Dive: Facebook TAO',
                content: `**Problem**: Facebook has billions of reads/sec for the social graph. Direct DB hits are impossible.

**Solution**: TAO (The Association Object).
- A write-through cache backed by MySQL.
- **Leaders & Followers**: Writes go to Leader cache (and DB). Followers serve reads.
- **Result**: 99.8% Read hit rate. Shows the power of a specialized caching layer.`
            },
            {
                title: '4. Common Interview Questions',
                content: `**Q1: What is Cache Stampede (Thundering Herd) and how to fix it?**
- **Problem**: A popular key expires, and thousands of requests hit the DB at once.
- **Fix**: 
    - **Locking**: Only 1 process computes the value, others wait.
    - **Probabilistic Early Expiration**: Refresh before the actual TTL expires (e.g., if TTL < 5s, 10% chance to recompute).

**Q2: Redis vs Memcached?**
- **Redis**: Rich data types (Lists, Sets), Persistence (RDB/AOF), Pub/Sub, Cluster mode.
- **Memcached**: Simple Key-Value, Multi-threaded (better vertical scaling for simple KV), transient.

**Q3: Where should I place the cache?**
- **Edge (CDN)**: Static assets.
- **API Gateway**: Response caching.
- **App Side**: Local objects (Fastest, but coherent issues).
- **Distributed (Redis)**: Shared state across services.`
            },
            {
                title: '5. Advanced: Consistent Hashing',
                content: `**Problem**: In distributed caching (N servers), if we use \`hash(key) % N\`, adding/removing a server re-shuffles ALL keys.
- **Solution**: Consistent Hashing (Ring).
- Keys and Servers are hashed onto a circle (0-360 degrees).
- A key is assigned to the first server found moving clockwise.
- **Impact**: Adding a node only redistributes ~1/N keys.
- **Virtual Nodes**: Used to balance load more evenly.`
            }
        ],
        practiceProblems: [
            { title: 'LRU Cache Implementation', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/' },
            { title: 'Design a Cache System', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/design-a-cache-system/' },
            { title: 'Implement LFU Cache', difficulty: 'Hard', link: 'https://leetcode.com/problems/lfu-cache/' },
            { title: 'Design Twitter Feed', difficulty: 'Hard', link: 'https://leetcode.com/discuss/interview-question/system-design/124619/Design-Twitter-Feed' },
            { title: 'Design TinyURL', difficulty: 'Medium', link: 'https://leetcode.com/discuss/interview-question/124658/Design-a-URL-Shortener-(-TinyURL-)-System' },
            { title: 'Consistent Hashing', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/consistent-hashing-implementation/' }
        ],
        resources: [
            { title: 'System Design Basics', type: 'PDF', link: '/PLACEMENT NOTES/System Design Basics.pdf' }
        ],
        videos: [
            { title: 'Caching - System Design', link: 'https://www.youtube.com/watch?v=U3RkDLtS7uY', channel: 'Gaurav Sen' },
            { title: 'System Design Primer: Caching', link: 'https://www.youtube.com/watch?v=6du2q-4x3-Q', channel: 'ByteByteGo' },
            { title: 'Redis Crash Course', link: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ', channel: 'Traversy Media' },
            { title: 'Memcached vs Redis', link: 'https://www.youtube.com/watch?v=R3Lp6741UQE', channel: 'Hussein Nasser' },
            { title: 'What is a CDN?', link: 'https://www.youtube.com/watch?v=RI9np1LWzqw', channel: 'Cloudflare' },
            { title: 'Cache Eviction Policies (LRU, LFU)', link: 'https://www.youtube.com/watch?v=xDEuM580kWg', channel: 'Gaurav Sen' },
            { title: 'Thundering Herd Problem (Cache Stampede)', link: 'https://www.youtube.com/watch?v=78DlbHj53nA', channel: 'System Design Interview' },
            { title: 'Distributed Caching Explained', link: 'https://www.youtube.com/watch?v=iuqZvajTOyA', channel: 'CodeKarle' },
            { title: 'Facebook TAO (The Association Object)', link: 'https://www.youtube.com/watch?v=s19G6n01hS0', channel: 'Facebook Engineering' },
            { title: 'Write-Through vs Write-Back Caching', link: 'https://www.youtube.com/watch?v=2X0R_E3gW-Y', channel: 'System Design' }
        ]
    },

    'react-performance': {
        id: 'react-performance',
        title: 'React Performance Optimization',
        difficulty: 'Medium',
        category: 'Web Dev',
        time: '25 min',
        description: 'Optimize React apps for production-level performance',
        overview: 'A performant UI is key to user retention. In React, performance optimization revolves around minimizing renders and managing the main thread effectively.',
        keyPoints: [
            'Understanding the Render Cycle',
            'Immutability & State Management',
            'Code Splitting & Lazy Loading',
            'React 18 Concurrent Features'
        ],
        sections: [
            {
                title: '1. The Rendering Process',
                content: `React uses a Virtual DOM to minimize direct DOM manipulation.
**Phases:**
1. **Render Phase**: React calls your components and differentiates the old/new VDOM.
2. **Commit Phase**: React applies changes to the real DOM.

**The Rule**: A component re-renders if its State or Props change, or if its Parent re-renders.`
            },
            {
                title: '2. Memoization Deep Dive',
                content: `**React.memo()**
HOC that prevents a child from re-rendering if props haven't changed.

**useCallback()**
Freezes a function reference.
\`\`\`javascript
const handleClick = useCallback(() => { ... }, []);
\`\`\`

**useMemo()**
Caches the *result* of a calculation.
\`\`\`javascript
const sorted = useMemo(() => data.sort(), [data]);
\`\`\``
            },
            {
                title: '3. Deep Dive: React Fiber',
                content: `Prior to React 16, the reconciliation algorithm (Stack) was synchronous and could block the main thread.

**Fiber Architecture:**
- Breaks rendering work into small units of work ("fibers").
- **Time Slicing**: Can pause work to let the browser paint, then resume.
- Enables **Concurrent Mode** features like \`useTransition\` and \`Suspense\`.`
            },
            {
                title: '4. Common Interview Questions',
                content: `**Q1: What is the Virtual DOM?**
- It's a lightweight JavaScript representation of the DOM. React updates this VDOM first, diffs it with the previous version (Reconciliation), and batch updates the real DOM (Commit) for performance.

**Q2: Why is the 'key' prop important in lists?**
- Keys help React identify which items have changed, added, or removed. Without keys (or using index), React may re-create DOM nodes unnecessarily or mess up component state (e.g., input focus).

**Q3: Does \`setState\` always trigger a re-render?**
- Generally yes. However, if you set state to the *same* primitive value (e.g., \`setCount(5)\` when count is 5), React's bailout mechanism skips the render.`
            },
            {
                title: '5. Advanced: Concurrent Features',
                content: `**useTransition** and **useDeferredValue** allow you to mark updates as non-urgent.
- **useTransition**: Wraps state updates. \`startTransition(() => setSearch(input))\`. Keeps the UI responsive while filtering a list.
- **useDeferredValue**: Defers a value itself. \`const deferredQuery = useDeferredValue(query)\`.
- **Suspense for Data Fetching**: Pause rendering until data is ready (standardized in Next.js/React Server Components).`
            }
        ],
        practiceProblems: [
            { title: 'Optimize Re-renders', difficulty: 'Medium', link: 'https://react.dev/reference/react/memo' },
            { title: 'Implement Virtual Scrolling', difficulty: 'Hard', link: 'https://github.com/bvaughn/react-window' },
            { title: 'Code Split a Large App', difficulty: 'Medium', link: 'https://react.dev/reference/react/lazy' },
            { title: 'Fix Context Re-renders', difficulty: 'Hard', link: 'https://github.com/facebook/react/issues/15156' },
            { title: 'Implement Debounce Hook', difficulty: 'Medium', link: 'https://usehooks.com/useDebounce/' },
            { title: 'Implement Throttle Hook', difficulty: 'Medium', link: 'https://usehooks.com/useThrottle/' }
        ],
        resources: [
            { title: 'React Handwritten Notes', type: 'PDF', link: '/PLACEMENT NOTES/React-Handwritten-notes.pdf' },
            { title: '30 Days of React eBook', type: 'PDF', link: '/PLACEMENT NOTES/30-days-of-react-ebook-fullstackio.pdf' }
        ],
        videos: [
            { title: 'React Performance Optimization', link: 'https://www.youtube.com/watch?v=lAlOo1ft2gk', channel: 'Ben Awad' },
            { title: 'React Memo, callback, and memoization', link: 'https://www.youtube.com/watch?v=ucc4CJ51rP8', channel: 'Codevolution' },
            { title: 'UseMemo and UseCallback Explained', link: 'https://www.youtube.com/watch?v=vpE9I_eqHdM', channel: 'Web Dev Simplified' },
            { title: 'React 18 Concurrency and Performance', link: 'https://www.youtube.com/watch?v=MicF_elK680', channel: 'React Conf' },
            { title: 'Code Splitting in React', link: 'https://www.youtube.com/watch?v=33D3x8bF8A0', channel: 'Traversy Media' },
            { title: 'Optimizing Re-renders in React', link: 'https://www.youtube.com/watch?v=75XmHauQNdA', channel: 'Fireship' },
            { title: 'Virtual DOM Explained', link: 'https://www.youtube.com/watch?v=BYbgopx44vo', channel: 'Programming with Mosh' },
            { title: 'React Fiber Architecture', link: 'https://www.youtube.com/watch?v=ZCuYPiUIONs', channel: 'Lin Clark' },
            { title: 'Profiling React Applications', link: 'https://www.youtube.com/watch?v=hB7q-dDmwQY', channel: 'Ben Awad' },
            { title: 'React Suspense and Lazy Loading', link: 'https://www.youtube.com/watch?v=5LvGe3wR2K4', channel: 'The Net Ninja' }
        ]
    },

    'database-indexing': {
        id: 'database-indexing',
        title: 'Database Indexing Strategies',
        difficulty: 'Hard',
        category: 'DBMS',
        time: '40 min',
        description: 'Master database indexing for query optimization',
        overview: 'An index is a pointer to data. Without it, the database must scan every single row (Full Table Scan) to find what you asked for. Indexing is the single most effective way to tune SQL performance.',
        keyPoints: [
            'B-Tree vs Hash vs Gin Indexes',
            'Clustered vs Non-Clustered Indexes',
            'Composite Indexes & Selectivity',
            'Explain Analyze & Query Cost'
        ],
        sections: [
            {
                title: '1. How B-Trees Work',
                content: `Most default indexes (MySQL/Postgres) use Balanced Trees (B-Trees).
- **Lookup**: O(log N).
- **Range Queries**: Excellent support for \`> \`, \`<\`, \`BETWEEN\`.

**Hash Index**:
- O(1) lookup but supports *only* exact matches (\`=\`). No range queries.`
            },
            {
                title: '2. Clustered vs Non-Clustered',
                content: `**Clustered Index (The Book)**
- The data *is* the index. Rows are sorted on disk.
- **Limit**: Only ONE per table.

**Non-Clustered Index (The Appendix)**
- Contains keys and a pointer to the row address.
- **Limit**: Can have many.`
            },
            {
                title: '3. Deep Dive: Postgres Vacuum & MVCC',
                content: `**MVCC (Multi-Version Concurrency Control)**:
- When you Update/Delete a row in Postgres, it doesn't delete it immediately. It marks it as "dead" and creates a new version.
- This allows readers to see the old version while a writer updates it (No Locking).

**Vacuum**:
- The process that cleans up "dead tuples" to reclaim space.
- **Bloat**: If Vacuum doesn't run, the table grows indefinitely with dead rows, slowing scans.`
            },
            {
                title: '4. Common Interview Questions',
                content: `**Q1: What columns should you index?**
- Columns used frequently in \`WHERE\`, \`JOIN\`, and \`ORDER BY\`.
- Columns with high cardinality (many unique values).

**Q2: Why not index every column?**
- **Write Penalty**: Every INSERT/UPDATE requires updating all indexes.
- **Space**: Indexes consume disk and RAM.

**Q3: What is a Composite Index?**
- An index on multiple columns \`(A, B)\`.
- Useful for queries like \`WHERE A=1 AND B=2\`.
- **Note**: Remember the Leftmost Prefix Rule.`
            },
            {
                title: '5. Advanced: Bitmap Indexes & Bloom Filters',
                content: `**Bitmap Index**:
- Uses bits (0/1) for low-cardinality columns (e.g., Gender, Status).
- Very fast for combining conditions (AND/OR/XOR operations on bitmaps).
- **Use Case**: Data Warehousing (OLAP).

**Bloom Filters**:
- Probabilistic data structure.
- "Definitely No" or "Maybe Yes".
- Used in databases (LSM Trees like Cassandra/RocksDB) to avoid disk lookups for non-existent keys.`
            }
        ],
        practiceProblems: [
            { title: 'Design Optimal Indexes', difficulty: 'Hard', link: 'https://www.w3resource.com/sql-exercises/movie-database-exercise/index.php' },
            { title: 'Query Optimization', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/sql-query-optimization/' },
            { title: 'Index vs Full Table Scan', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/indexing-in-databases-set-1/' },
            { title: 'Analyze Explain Plan', difficulty: 'Hard', link: 'https://use-the-index-luke.com/sql/explain-plan' },
            { title: 'Schema Design for Scale', difficulty: 'Hard', link: 'https://stackoverflow.com/questions/35532296/sql-schema-design-for-scalability' }
        ],
        resources: [
            { title: 'DBMS Notes', type: 'PDF', link: '/PLACEMENT NOTES/DBMS_Notes (2).pdf' },
            { title: 'SQL Notes', type: 'PDF', link: '/PLACEMENT NOTES/SQL (notes) (1) (1).pdf' }
        ],
        videos: [
            { title: 'Database Indexing Explained', link: 'https://www.youtube.com/watch?v=HmvnQCknZec', channel: 'Hussein Nasser' },
            { title: 'Clustered vs Non-Clustered Indexes', link: 'https://www.youtube.com/watch?v=NfD9f1x-h3I', channel: 'Kudvenkat' },
            { title: 'B-Tree Indexing in Databases', link: 'https://www.youtube.com/watch?v=aZjYr87r1b8', channel: 'Art of the Problem' },
            { title: 'SQL Indexing for Beginners', link: 'https://www.youtube.com/watch?v=Fs9G9_Q785M', channel: 'Alex The Analyst' },
            { title: 'How Database B-Tree Indexing Works', link: 'https://www.youtube.com/watch?v=NIq3qLaHCIs', channel: 'ByteByteGo' },
            { title: 'Composite Indexes in SQL', link: 'https://www.youtube.com/watch?v=3pDCDg_aZJk', channel: 'Pinal Dave' },
            { title: 'PostgreSQL Vaccum Explained', link: 'https://www.youtube.com/watch?v=2X0R_E3gW-Y', channel: 'Hussein Nasser' },
            { title: 'Explain Analyze in Postgres', link: 'https://www.youtube.com/watch?v=4Z9_3q4w0w0', channel: 'Postgres TV' },
            { title: 'Database Internals: Indexing', link: 'https://www.youtube.com/watch?v=0s3-3g3-3g3', channel: 'CMU Database Group' },
            { title: 'Optimizing SQL Queries with Indexes', link: 'https://www.youtube.com/watch?v=bhck1l10-18', channel: 'MySQL' }
        ]
    }
}

