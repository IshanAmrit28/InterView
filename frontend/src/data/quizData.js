export const quizTopics = [
    { id: 'dsa', name: 'Data Structures', count: 35, difficulty: 'High' },
    { id: 'os', name: 'Operating Systems', count: 25, difficulty: 'Medium' },
    { id: 'dbms', name: 'DBMS & SQL', count: 25, difficulty: 'Medium' },
    { id: 'web', name: 'Web Technologies', count: 27, difficulty: 'Easy' },
    { id: 'cn', name: 'Computer Networks', count: 15, difficulty: 'Medium' },
    { id: 'aptitude', name: 'General Aptitude', count: 15, difficulty: 'Medium' },
    { id: 'cloud', name: 'Cloud Computing', count: 25, difficulty: 'Medium' },
    { id: 'devops', name: 'DevOps & SRE', count: 25, difficulty: 'High' },
    { id: 'ml', name: 'Machine Learning', count: 25, difficulty: 'High' },
];

export const quizzes = {
    dsa: [
        {
            id: 1,
            question: "What is the time complexity of searching in a balanced Binary Search Tree (BST)?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: 1,
            explanation: "In a balanced BST (like AVL or Red-Black tree), the height is log(n), making search operations logarithmic."
        },
        {
            id: 2,
            question: "Which data structure is typically used to implement a recursive algorithm iteratively?",
            options: ["Queue", "Stack", "Linked List", "Tree"],
            answer: 1,
            explanation: "A Stack mimics the call stack used in recursion, allowing iterative implementation of DFS etc."
        },
        {
            id: 3,
            question: "In specialized Graph algorithms, what is Dijkstra's algorithm used for?",
            options: ["Topological Sorting", "Shortest Path (Weighted)", "Minimum Spanning Tree", "Cycle Detection"],
            answer: 1,
            explanation: "Dijkstra's is used for finding the shortest paths between nodes in a graph with non-negative edge weights."
        },
        {
            id: 4,
            question: "What is the worst-case complexity of QuickSort?",
            options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
            answer: 1,
            explanation: "QuickSort degrades to O(n²) when the pivot selection is poor (e.g., sorted array with first element pivot)."
        },
        {
            id: 5,
            question: "What is the space complexity of Merge Sort?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 2,
            explanation: "Merge Sort requires O(n) auxiliary space for temporary arrays during the merge process."
        },
        {
            id: 6,
            question: "Which traversal technique uses a Queue?",
            options: ["Preorder", "Inorder", "Postorder", "Level Order"],
            answer: 3,
            explanation: "Level Order (BFS) traversal uses a Queue to process nodes level by level."
        },
        {
            id: 7,
            question: "What is a Hash Collision?",
            options: ["Two keys hashing to same index", "Array overflow", "Stack overflow", "Memory leak"],
            answer: 0,
            explanation: "Hash collision occurs when two different keys produce the same hash value, requiring collision resolution."
        },
        {
            id: 8,
            question: "Which algorithm is used for finding cycles in a graph?",
            options: ["Dijkstra", "DFS", "Merge Sort", "Binary Search"],
            answer: 1,
            explanation: "DFS with back edges detection is commonly used to find cycles in directed graphs."
        },
        {
            id: 9,
            question: "What is the best case time complexity of Insertion Sort?",
            options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
            answer: 2,
            explanation: "When the array is already sorted, Insertion Sort only needs to scan once, making it O(n)."
        },
        {
            id: 10,
            question: "Which data structure is best for implementing LRU Cache?",
            options: ["Array", "Doubly Linked List + HashMap", "Stack", "Binary Tree"],
            answer: 1,
            explanation: "LRU Cache requires O(1) access and update, achieved with HashMap for lookup and Doubly Linked List for ordering."
        },
        {
            id: 11,
            question: "What is Dynamic Programming?",
            options: ["A sorting technique", "Breaking problem into overlapping subproblems", "A graph algorithm", "Memory allocation"],
            answer: 1,
            explanation: "DP solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation."
        },
        {
            id: 12,
            question: "What is the height of a complete binary tree with n nodes?",
            options: ["n", "log n", "n/2", "2n"],
            answer: 1,
            explanation: "A complete binary tree has height of log₂(n), making operations logarithmic."
        },
        {
            id: 13,
            question: "Which sorting algorithm is NOT stable?",
            options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Bubble Sort"],
            answer: 1,
            explanation: "Quick Sort does not preserve the relative order of equal elements, making it unstable."
        },
        {
            id: 14,
            question: "What is a Trie data structure used for?",
            options: ["Sorting numbers", "String operations and prefix matching", "Graph traversal", "Memory management"],
            answer: 1,
            explanation: "Trie (prefix tree) is ideal for string operations, autocomplete, and dictionary implementations."
        },
        {
            id: 15,
            question: "What is the time complexity of finding the kth smallest element using Quick Select?",
            options: ["O(n log n)", "O(n²)", "O(n) average", "O(k log k)"],
            answer: 2,
            explanation: "Quick Select has average time complexity of O(n), though worst case is O(n²)."
        },
        {
            id: 16,
            question: "What does the Bellman-Ford algorithm detect?",
            options: ["Shortest path with negative weights", "Minimum spanning tree", "Topological order", "Strongly connected components"],
            answer: 0,
            explanation: "Bellman-Ford can handle negative edge weights and detect negative cycles."
        },
        {
            id: 17,
            question: "Which operation is NOT efficient in a standard array?",
            options: ["Random access", "Insertion at beginning", "Access by index", "Sequential traversal"],
            answer: 1,
            explanation: "Inserting at the beginning requires shifting all elements, making it O(n)."
        },
        {
            id: 18,
            question: "What is a Min Heap property?",
            options: ["Parent > Children", "Parent < Children", "Sorted array", "FIFO order"],
            answer: 1,
            explanation: "In a Min Heap, every parent node has a value less than or equal to its children."
        },
        {
            id: 19,
            question: "Which algorithm uses greedy approach?",
            options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Tarjan's"],
            answer: 0,
            explanation: "Dijkstra's algorithm uses greedy approach by always selecting the nearest unvisited vertex."
        },
        {
            id: 20,
            question: "What is the auxiliary space for in-place sorting algorithms?",
            options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            answer: 2,
            explanation: "In-place sorting algorithms use only O(1) extra space, modifying the input array directly."
        },
        // NEW DSA QUESTIONS
        {
            id: 21,
            question: "What is the time complexity of building a heap from an array of n elements?",
            options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
            answer: 1,
            explanation: "Building a heap can be done in O(n) using the bottom-up approach."
        },
        {
            id: 22,
            question: "Which data structure is used to check for balanced parentheses in an expression?",
            options: ["Queue", "Stack", "Tree", "Array"],
            answer: 1,
            explanation: "A Stack is ideal for tracking open parentheses and matching them with closing ones."
        },
        {
            id: 23,
            question: "Which of these is an example of a Divide and Conquer algorithm?",
            options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
            answer: 2,
            explanation: "Merge Sort recursively divides the array into halves and merges them, following Divide and Conquer."
        },
        {
            id: 24,
            question: "What is the maximum number of edges in a directed graph with n nodes (no self-loops)?",
            options: ["n(n-1)/2", "n(n-1)", "n²", "2n"],
            answer: 1,
            explanation: "Each of the n nodes can have edges to the other n-1 nodes, so n*(n-1)."
        },
        {
            id: 25,
            question: "Which data structure is suitable for implementing a Priority Queue?",
            options: ["Array", "Linked List", "Heap", "Stack"],
            answer: 2,
            explanation: "A Heap provides efficient O(log n) insertions and O(log n) extraction of the minimum/maximum."
        },
        {
            id: 26,
            question: "What is the primary advantage of a B-Tree over a Binary Search Tree?",
            options: ["Faster in-memory search", "Optimized for disk storage", "Simpler implementation", "Uses less memory"],
            answer: 1,
            explanation: "B-Trees minimize disk I/O operations by storing multiple keys in a node, making them suitable for databases."
        },
        {
            id: 27,
            question: "What is the best case time complexity of Bubble Sort?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
            answer: 0,
            explanation: "With an optimized flag for swaps, Bubble Sort is O(n) if the array is already sorted."
        },
        {
            id: 28,
            question: "Which hashing technique handles collisions by using a linked list?",
            options: ["Open Addressing", "Chaining", "Linear Probing", "Double Hashing"],
            answer: 1,
            explanation: "Chaining stores colliding elements in a linked list at the same index."
        },
        {
            id: 29,
            question: "Which traversal is used to print nodes of a BST in sorted order?",
            options: ["Preorder", "Postorder", "Inorder", "Level Order"],
            answer: 2,
            explanation: "Inorder traversal of a BST visits nodes in non-decreasing (sorted) order."
        },
        {
            id: 30,
            question: "What is the worst-case time complexity of DFS in a graph with V vertices and E edges?",
            options: ["O(V)", "O(E)", "O(V + E)", "O(V*E)"],
            answer: 2,
            explanation: "DFS visits every vertex and edge once in the worst case using an adjacency list."
        },
        {
            id: 31,
            question: "Which data structure is used in Breadth-First Search (BFS)?",
            options: ["Stack", "Queue", "Heap", "Hash Map"],
            answer: 1,
            explanation: "BFS uses a Queue to explore neighbors level by level."
        },
        {
            id: 32,
            question: "In a Red-Black Tree, what is the color of the root node?",
            options: ["Red", "Black", "Either Red or Black", "Green"],
            answer: 1,
            explanation: "One of the properties of a Red-Black Tree is that the root is always black."
        },
        {
            id: 33,
            question: "What is the primary use of a disjoint-set data structure?",
            options: ["Sorting", "Shortest Path", "Grouping partitioned elements (Union-Find)", "Pattern Matching"],
            answer: 2,
            explanation: "Disjoint-set (Union-Find) is used to track elements partitioned into disjoint sets, useful in Kruskal's algorithm."
        },
        {
            id: 34,
            question: "Which algorithm finds the Minimum Spanning Tree?",
            options: ["Dijkstra's", "Kruskal's", "Floyd-Warshall", "Bellman-Ford"],
            answer: 1,
            explanation: "Kruskal's (and Prim's) algorithm is used to find the Minimum Spanning Tree of a graph."
        },
        {
            id: 35,
            question: "What is the worst-case lookup time in a perfect Hash Table?",
            answer: 0,
            explanation: "A perfect hash function maps each key to a distinct integer, ensuring no collisions and O(1) access."
        }
    ],
    os: [
        {
            id: 1,
            question: "Which of the following is NOT a state in the process lifecycle?",
            options: ["Running", "Blocked", "Deleted", "Ready"],
            answer: 2,
            explanation: "Processes are 'Terminated', not 'Deleted'. Deleted usually refers to files."
        },
        {
            id: 2,
            question: "What is 'Thrashing' in the context of OS memory management?",
            options: ["Excessive paging", "Disk failure", "CPU overheating", "Process deadlock"],
            answer: 0,
            explanation: "Thrashing occurs when the OS spends more time swapping pages in/out of memory than executing processes."
        },
        {
            id: 3,
            question: "Semaphore is a variable used for...?",
            options: ["Storing memory addresses", "Process Synchronization", "Deadlock creation", "File management"],
            answer: 1,
            explanation: "Semaphores are synchronization primitives used to control access to common resources."
        },
        {
            id: 4,
            question: "What is the primary purpose of virtual memory?",
            options: ["Increase CPU speed", "Allow processes to use more memory than physically available", "Encrypt data", "Backup files"],
            answer: 1,
            explanation: "Virtual memory creates an illusion of large memory by using disk space to extend RAM."
        },
        {
            id: 5,
            question: "Which scheduling algorithm can cause starvation?",
            options: ["Round Robin", "Priority Scheduling", "FCFS", "SJF with aging"],
            answer: 1,
            explanation: "Priority Scheduling without aging can cause low-priority processes to starve indefinitely."
        },
        {
            id: 6,
            question: "What is a deadlock?",
            options: ["CPU overload", "Two or more processes waiting indefinitely", "Memory leak", "File corruption"],
            answer: 1,
            explanation: "Deadlock occurs when processes are blocked waiting for resources held by each other."
        },
        {
            id: 7,
            question: "Which is NOT a condition for deadlock?",
            options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
            answer: 2,
            explanation: "No Preemption is required for deadlock. Preemption actually prevents deadlock."
        },
        {
            id: 8,
            question: "What does the kernel do?",
            options: ["Manages hardware resources", "Creates documents", "Runs web browsers", "Compiles code"],
            answer: 0,
            explanation: "The kernel is the core OS component managing CPU, memory, I/O, and other resources."
        },
        {
            id: 9,
            question: "What is context switching?",
            options: ["Changing tabs", "Saving and loading process state", "File transfer", "Network routing"],
            answer: 1,
            explanation: "Context switching involves saving the state of one process and loading another for execution."
        },
        {
            id: 10,
            question: "Which memory management technique divides memory into fixed-size blocks?",
            options: ["Segmentation", "Paging", "Dynamic allocation", "Virtual memory"],
            answer: 1,
            explanation: "Paging divides physical and logical memory into fixed-size blocks called pages/frames."
        },
        {
            id: 11,
            question: "What is the purpose of a Translation Lookaside Buffer (TLB)?",
            options: ["Store files", "Cache page table entries", "Manage processes", "Handle interrupts"],
            answer: 1,
            explanation: "TLB is a cache for virtual-to-physical address translations to speed up memory access."
        },
        {
            id: 12,
            question: "Which scheduling algorithm gives best average waiting time?",
            options: ["FCFS", "Shortest Job First", "Round Robin", "Priority"],
            answer: 1,
            explanation: "SJF gives optimal average waiting time when burst times are known in advance."
        },
        {
            id: 13,
            question: "What is internal fragmentation?",
            options: ["Unused space within allocated blocks", "Gaps between allocated blocks", "Memory leak", "Buffer overflow"],
            answer: 0,
            explanation: "Internal fragmentation occurs when allocated memory blocks have unused space inside them."
        },
        {
            id: 14,
            question: "What is the dining philosophers problem demonstrating?",
            options: ["Sorting", "Deadlock and synchronization", "Scheduling", "Memory management"],
            answer: 1,
            explanation: "It's a classic synchronization problem illustrating deadlock and resource allocation issues."
        },
        {
            id: 15,
            question: "What is a race condition?",
            options: ["CPU speed test", "Multiple processes accessing shared data incorrectly", "Network latency", "Disk failure"],
            answer: 1,
            explanation: "Race conditions occur when output depends on the sequence of uncontrolled events in concurrent execution."
        },
        // NEW OS QUESTIONS
        {
            id: 16,
            question: "What is Belady's Anomaly?",
            options: ["More frames leads to more page faults", "CPU slows down with more RAM", "Disk speed decreases with size", "Network lag increases with bandwidth"],
            answer: 0,
            explanation: "Belady's Anomaly is a phenomenon in some page replacement algorithms (like FIFO) where increasing the number of page frames results in an increase in the number of page faults."
        },
        {
            id: 17,
            question: "Which command lists running processes in Unix/Linux?",
            options: ["ls", "ps", "cd", "top -l"], // 'top' works too but 'ps' is standard list
            answer: 1,
            explanation: "`ps` (process status) displays information about a selection of the active processes."
        },
        {
            id: 18,
            question: "What is a Zombie process?",
            options: ["A virus", "A process that has completed but its entry remains in the process table", "A sleeping process", "A background daemon"],
            answer: 1,
            explanation: "A zombie process is a process that has completed execution but still has an entry in the process table to report its exit status to the parent."
        },
        {
            id: 19,
            question: "What is the main function of the 'init' process (PID 1)?",
            options: ["Kernel loading", "Parent of all processes", "Memory management", "File system check"],
            answer: 1,
            explanation: "In Unix-based systems, `init` is the first process started by the kernel and is the parent of all other processes."
        },
        {
            id: 20,
            question: "Which type of kernel is Linux?",
            options: ["Microkernel", "Monolithic Kernel", "Hybrid Kernel", "Exokernel"],
            answer: 1,
            explanation: "Linux is a monolithic kernel, where the entire operating system runs in kernel space."
        },
        {
            id: 21,
            question: "What is 'Spooling'?",
            options: ["Simultaneous Peripheral Operations On-line", "System Performance Optimization", "Storage Pool management", "Security Protocol"],
            answer: 0,
            explanation: "Spooling puts data for I/O devices (like printers) into a temporary storage area (buffer) so the device can process it at its own speed."
        },
        {
            id: 22,
            question: "Which lock allows multiple readers but only one writer?",
            options: ["Mutex", "Spinlock", "Read-Write Lock", "Binary Semaphore"],
            answer: 2,
            explanation: "Read-Write locks allow concurrent access for read-only operations, while write operations require exclusive access."
        },
        {
            id: 23,
            question: "What is the Banker's Algorithm used for?",
            options: ["Sorting bank accounts", "Deadlock Avoidance", "Memory allocation", "Process scheduling"],
            answer: 1,
            explanation: "The Banker's algorithm tests for safety by simulating the allocation for predetermined maximum possible amounts of all resources, avoiding unsafe states."
        },
        {
            id: 24,
            question: "What is 'Swapping' in OS?",
            options: ["Variables exchange", "Moving processes between main memory and disk", "Changing user context", "Replacing hardware"],
            answer: 1,
            explanation: "Swapping is a mechanism in which a process can be swapped temporarily out of main memory to a backing store, and then brought back into memory."
        },
        {
            id: 25,
            question: "What does 'Sudo' stand for?",
            options: ["SuperUser DO", "System User DO", "Secure User Domain", "Standard User Default Option"],
            answer: 0,
            explanation: "Sudo stands for 'SuperUser DO', allowing a permitted user to execute a command as the superuser or another user."
        }
    ],
    dbms: [
        {
            id: 1,
            question: "Which normal form removes transitive dependencies?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            answer: 2,
            explanation: "3NF ensures that non-key attributes are not dependent on other non-key attributes (transitive dependency)."
        },
        {
            id: 2,
            question: "ACID properties stand for...?",
            options: [
                "Atomicity, Consistency, Isolation, Durability",
                "Availability, Consistency, Isolation, Durability",
                "Atomicity, Concurrency, Isolation, Database",
                "Atomicity, Consistency, Integration, Durability"
            ],
            answer: 0,
            explanation: "These are the standard properties that guarantee database transactions are processed reliably."
        },
        {
            id: 3,
            question: "What does a PRIMARY KEY ensure?",
            options: ["Uniqueness and NOT NULL", "Only uniqueness", "Only NOT NULL", "Foreign key constraint"],
            answer: 0,
            explanation: "PRIMARY KEY uniquely identifies each record and automatically enforces NOT NULL constraint."
        },
        {
            id: 4,
            question: "Which SQL clause is used to filter grouped data?",
            options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
            answer: 1,
            explanation: "HAVING filters groups after GROUP BY, while WHERE filters rows before grouping."
        },
        {
            id: 5,
            question: "What is a FOREIGN KEY?",
            options: ["Primary key in another table", "Unique constraint", "Link between two tables", "Index type"],
            answer: 2,
            explanation: "FOREIGN KEY establishes and enforces a link between data in two tables."
        },
        {
            id: 6,
            question: "Which join returns all rows from both tables?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
            answer: 3,
            explanation: "FULL OUTER JOIN returns all rows from both tables, with NULLs where there's no match."
        },
        {
            id: 7,
            question: "What is database normalization?",
            options: ["Backup process", "Organizing data to reduce redundancy", "Indexing", "Encryption"],
            answer: 1,
            explanation: "Normalization organizes data to minimize redundancy and dependency issues."
        },
        {
            id: 8,
            question: "Which isolation level prevents dirty reads?",
            options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "All except READ UNCOMMITTED"],
            answer: 3,
            explanation: "Dirty reads only occur at READ UNCOMMITTED level; all higher levels prevent them."
        },
        {
            id: 9,
            question: "What is an index in a database?",
            options: ["Backup file", "Data structure for faster retrieval", "User account", "Log file"],
            answer: 1,
            explanation: "Index is a data structure (usually B-tree) that improves query performance."
        },
        {
            id: 10,
            question: "What does COMMIT do in a transaction?",
            options: ["Rollback changes", "Save changes permanently", "Delete data", "Create backup"],
            answer: 1,
            explanation: "COMMIT permanently saves all transaction changes to the database."
        },
        {
            id: 11,
            question: "What is a view in SQL?",
            options: ["Physical table", "Virtual table from query", "Index", "Trigger"],
            answer: 1,
            explanation: "A view is a virtual table based on a SELECT query, not storing data physically."
        },
        {
            id: 12,
            question: "Which is faster: DELETE or TRUNCATE?",
            options: ["DELETE", "TRUNCATE", "Same speed", "Depends on data"],
            answer: 1,
            explanation: "TRUNCATE is faster as it doesn't log individual row deletions and can't be rolled back easily."
        },
        {
            id: 13,
            question: "What is a trigger?",
            options: ["Backup command", "Automatic procedure on events", "Index type", "Join operation"],
            answer: 1,
            explanation: "Trigger automatically executes in response to INSERT, UPDATE, or DELETE events."
        },
        {
            id: 14,
            question: "What does CAP theorem state?",
            options: ["Can achieve all three: Consistency, Availability, Partition tolerance", "Can achieve only two of three", "Relates to SQL syntax", "About database size"],
            answer: 1,
            explanation: "CAP theorem states distributed systems can satisfy only 2 of 3: Consistency, Availability, Partition tolerance."
        },
        {
            id: 15,
            question: "What is database sharding?",
            options: ["Backup method", "Horizontal partitioning across servers", "Vertical partitioning", "Index optimization"],
            answer: 1,
            explanation: "Sharding distributes data across multiple servers horizontally for scalability."
        },
        // NEW DBMS QUESTIONS
        {
            id: 16,
            question: "What does `UNION` do in SQL?",
            options: ["Joins tables", "Combines result sets of two queries and removes duplicates", "Combines result sets keeping duplicates", "Sorts data"],
            answer: 1,
            explanation: "`UNION` combines the result sets of two or more SELECT statements and removes duplicate rows. `UNION ALL` keeps duplicates."
        },
        {
            id: 17,
            question: "Which of these is a NoSQL database?",
            options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
            answer: 2,
            explanation: "MongoDB is a document-oriented NoSQL database, while the others are RDBMS."
        },
        {
            id: 18,
            question: "What is the purpose of the `DISTINCT` keyword?",
            options: ["Sort results", "Retrieve unique records", "Count records", "Group records"],
            answer: 1,
            explanation: "`SELECT DISTINCT` is used to return only distinct (different) values."
        },
        {
            id: 19,
            question: "Which constraint ensures that all values in a column are different?",
            options: ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"],
            answer: 1,
            explanation: "The `UNIQUE` constraint ensures that all values in a column are different."
        },
        {
            id: 20,
            question: "What is the command to create a new database?",
            options: ["MAKE DATABASE", "NEW DATABASE", "CREATE DATABASE", "ADD DATABASE"],
            answer: 2,
            explanation: "The standard SQL command is `CREATE DATABASE dbname;`."
        },
        {
            id: 21,
            question: "What is an Entity-Relationship (ER) model used for?",
            options: ["Query optimization", "Conceptual database design", "Data backup", "User permission"],
            answer: 1,
            explanation: "The ER model is describing the data requirements for a system in a simple, abstract way, often used in conceptual design."
        },
        {
            id: 22,
            question: "What does `COUNT(*)` return?",
            options: ["Number of distinct values", "Number of columns", "Number of rows in the table", "Number of NULL values"],
            answer: 2,
            explanation: "`COUNT(*)` returns the total number of rows in the table, including those with NULL values."
        },
        {
            id: 23,
            question: "Which type of lock prevents other users from reading or writing?",
            options: ["Shared Lock", "Exclusive Lock", "Update Lock", "Intent Lock"],
            answer: 1,
            explanation: "An Exclusive Lock (X Lock) blocks all other transactions from reading or modifying the resource."
        },
        {
            id: 24,
            question: "What is the specialized language used to query a relational database?",
            options: ["HTML", "XML", "SQL", "Java"],
            answer: 2,
            explanation: "SQL (Structured Query Language) is the standard language for relational database management systems."
        },
        {
            id: 25,
            question: "What does the `LIKE` operator do?",
            options: ["Compares numbers", "Searches for a specified pattern in a column", "Joins tables", "Sorts data"],
            answer: 1,
            explanation: "`LIKE` is used in a WHERE clause to search for a specified pattern (using wildcards like % and _) in a column."
        }
    ],
    web: [
        {
            id: 1,
            question: "What does the Virtual DOM in React do?",
            options: [
                "Directly updates the HTML",
                "Minimizes direct DOM manipulation",
                "Is slower than real DOM",
                "Compiles JS to C++"
            ],
            answer: 1,
            explanation: "React updates the Virtual DOM first, compares it with the previous state (diffing), and only updates changed elements in the real DOM."
        },
        {
            id: 2,
            question: "What is the purpose of useState in React?",
            options: ["Manage component state", "Make API calls", "Style components", "Route navigation"],
            answer: 0,
            explanation: "useState is a Hook that lets you add state variables to functional components."
        },
        {
            id: 3,
            question: "What does REST stand for?",
            options: ["Relative State Transfer", "Representational State Transfer", "Remote System Testing", "Resource State Template"],
            answer: 1,
            explanation: "REST is an architectural style for designing networked applications using stateless communication."
        },
        {
            id: 4,
            question: "Which HTTP method is idempotent?",
            options: ["POST", "GET", "PATCH", "All of the above"],
            answer: 1,
            explanation: "GET, PUT, DELETE are idempotent (same result on multiple calls), but POST is not."
        },
        {
            id: 5,
            question: "What is CORS?",
            options: ["Database system", "Cross-Origin Resource Sharing security", "CSS framework", "API protocol"],
            answer: 1,
            explanation: "CORS is a security feature that allows/restricts web pages to request resources from different domains."
        },
        {
            id: 6,
            question: "What is the box model in CSS?",
            options: ["Animation technique", "Content, Padding, Border, Margin", "Layout grid", "Flexbox alternative"],
            answer: 1,
            explanation: "The CSS box model consists of content, padding, border, and margin around elements."
        },
        {
            id: 7,
            question: "What does useEffect do in React?",
            options: ["Create animations", "Handle side effects", "Style components", "Validate forms"],
            answer: 1,
            explanation: "useEffect lets you perform side effects like data fetching, subscriptions, or DOM updates."
        },
        {
            id: 8,
            question: "What is the difference between let and const?",
            options: ["No difference", "const cannot be reassigned", "let is global", "const is faster"],
            answer: 1,
            explanation: "const creates immutable bindings (cannot reassign), while let allows reassignment."
        },
        {
            id: 9,
            question: "What is event delegation?",
            options: ["Removing events", "Handling events on parent instead of children", "Creating custom events", "Preventing default behavior"],
            answer: 1,
            explanation: "Event delegation leverages event bubbling to handle events at a parent level for efficiency."
        },
        {
            id: 10,
            question: "What is the purpose of webpack?",
            options: ["Database", "Module bundler", "Testing framework", "CSS preprocessor"],
            answer: 1,
            explanation: "Webpack bundles JavaScript modules and assets for optimized deployment."
        },
        {
            id: 11,
            question: "What is a Promise in JavaScript?",
            options: ["Loop type", "Object for async operations", "Array method", "Event listener"],
            answer: 1,
            explanation: "Promise represents eventual completion (or failure) of an asynchronous operation."
        },
        {
            id: 12,
            question: "What does async/await do?",
            options: ["Makes code slower", "Simplifies Promise handling", "Creates threads", "Blocks execution"],
            answer: 1,
            explanation: "async/await provides syntactic sugar for working with Promises in a synchronous-like manner."
        },
        // NEW WEB QUESTIONS
        {
            id: 13,
            question: "What does HTML stand for?",
            options: ["HyperText Machine Language", "HyperText Markup Language", "HighText Markup Language", "HyperTool Markup Language"],
            answer: 1,
            explanation: "HTML stands for HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser."
        },
        {
            id: 14,
            question: "Which CSS property changes the text color?",
            options: ["text-color", "color", "font-color", "text-font"],
            answer: 1,
            explanation: "The `color` property is used to set the color of the text."
        },
        {
            id: 15,
            question: "What is the default display value of a `<div>` element?",
            options: ["inline", "block", "inline-block", "flex"],
            answer: 1,
            explanation: "A `<div>` is a block-level element, meaning it takes up the full width available."
        },
        {
            id: 16,
            question: "Which JavaScript function converts a JSON string into an object?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
            answer: 1,
            explanation: "`JSON.parse()` takes a JSON string and transforms it into a JavaScript object."
        },
        {
            id: 17,
            question: "What represents the 'Cascade' in CSS?",
            options: ["The color scheme", "The order of rule application", "The grid layout", "Animation flow"],
            answer: 1,
            explanation: "The Cascade determines which CSS rules apply based on importance, specificity, and source order."
        },
        {
            id: 18,
            question: "What is the purpose of the <head> tag?",
            options: ["Main content", "Metadata and links", "Footer info", "Navigation"],
            answer: 1,
            explanation: "The `<head>` element searches as a container for metadata (title, scripts, style sheets, meta info) that isn't displayed on the page."
        },
        {
            id: 19,
            question: "Which unit is relative to the font-size of the root element?",
            options: ["em", "rem", "px", "%"],
            answer: 1,
            explanation: "`rem` stands for 'root em' and is relative to the font-size of the root element (<html>)."
        },
        {
            id: 20,
            question: "What is a Closure in JavaScript?",
            options: ["Block scope", "A function bundled with its lexical environment", "Error handling", "Class method"],
            answer: 1,
            explanation: "A closure gives you access to an outer function's scope from an inner function, even after the outer function has closed."
        },
        {
            id: 21,
            question: "Which HTML5 tag is used for semantic navigation?",
            options: ["<navigate>", "<nav>", "<menu>", "<header>"],
            answer: 1,
            explanation: "The `<nav>` tag is used to define a set of navigation links."
        },
        {
            id: 22,
            question: "What is the purpose of 'use strict' in JavaScript?",
            options: ["Enforce strict types", "Enforce stricter parsing and error handling", "Make code run faster", "Allow legacy features"],
            answer: 1,
            explanation: "'use strict' enables strict mode, which catches common coding bloopers and prevents the use of relatively 'unsafe' actions."
        },
        {
            id: 23,
            question: "Which status code indicates 'Not Found'?",
            options: ["200", "500", "404", "301"],
            answer: 2,
            explanation: "404 Not Found indicates that the server cannot find the requested resource."
        },
        {
            id: 24,
            question: "What is LocalStorage?",
            options: ["Server-side storage", "Client-side storage with no expiration", "Session-based storage", "Cookie alternative"],
            answer: 1,
            explanation: "LocalStorage allows web applications to store key-value pairs in the browser with no expiration date."
        },
        {
            id: 25,
            question: "What is the Grid System in CSS?",
            options: ["Table layout", "2D layout system", "1D layout system", "Float based layout"],
            answer: 1,
            explanation: "CSS Grid Layout is a 2-dimensional system for handling both columns and rows."
        },
        {
            id: 26,
            question: "Which directive allows embedding dynamic values in JSX?",
            options: ["{{ }}", "<% %>", "{ }", "${ }"],
            answer: 2,
            explanation: "In JSX, curly braces `{ }` are used to embed JavaScript expressions."
        },
        {
            id: 27,
            question: "What is Semantic HTML?",
            options: ["Uses only <div>", "Uses tags that convey meaning (e.g., <article>, <section>)", "Uses colorful tags", "Uses XML syntax"],
            answer: 1,
            explanation: "Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer."
        }
    ],
    cn: [
        {
            id: 1,
            question: "Which layer of the OSI model is responsible for routing?",
            options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
            answer: 2,
            explanation: "The Network Layer (Layer 3) handles routing and forwarding os packets across networks (e.g., IP)."
        },
        {
            id: 2,
            question: "What is the size of an IPv4 address?",
            options: ["32 bits", "64 bits", "128 bits", "16 bits"],
            answer: 0,
            explanation: "IPv4 addresses are 32-bit numbers, typically displayed in dot-decimal notation."
        },
        {
            id: 3,
            question: "Which protocol is connection-oriented?",
            options: ["UDP", "IP", "TCP", "ICMP"],
            answer: 2,
            explanation: "TCP (Transmission Control Protocol) is connection-oriented, ensuring reliable, ordered, and error-checked delivery."
        },
        {
            id: 4,
            question: "What does DNS stand for?",
            options: ["Data Network Service", "Domain Name System", "Digital Network Security", "Domain Number System"],
            answer: 1,
            explanation: "DNS (Domain Name System) translates human-readable domain names (like google.com) to IP addresses."
        },
        {
            id: 5,
            question: "Which device operates at the Data Link Layer?",
            options: ["Router", "Hub", "Switch", "Repeater"],
            answer: 2,
            explanation: "Switches operate at Layer 2 (Data Link Layer) and use MAC addresses to forward frames."
        },
        {
            id: 6,
            question: "What is the purpose of ARP?",
            options: ["Resolve IP to MAC", "Resolve MAC to IP", "Route packets", "Encrypt data"],
            answer: 0,
            explanation: "ARP (Address Resolution Protocol) maps an IP address to a physical machine address (MAC)."
        },
        {
            id: 7,
            question: "Which port is used by HTTP?",
            options: ["21", "22", "80", "443"],
            answer: 2,
            explanation: "HTTP traffic typically uses port 80, while HTTPS uses port 443."
        },
        {
            id: 8,
            question: "What is a Subnet Mask used for?",
            options: ["To hide the IP address", "To identify the network and host portions of an IP", "To encrypt the packet", "To route data"],
            answer: 1,
            explanation: "A subnet mask separates the IP address into the network address and the host address."
        },
        {
            id: 9,
            question: "Which layer ensures reliable data transmission?",
            options: ["Application", "Presentation", "Session", "Transport"],
            answer: 3,
            explanation: "The Transport Layer (Layer 4) manages end-to-end communication and reliability (e.g., via TCP)."
        },
        {
            id: 10,
            question: "What is latency?",
            options: ["Data transfer rate", "Time taken for data to travel from source to destination", "Packet loss", "Bandwidth width"],
            answer: 1,
            explanation: "Latency is the delay before a transfer of data begins following an instruction for its transfer."
        },
        {
            id: 11,
            question: "What is localhost IP address?",
            options: ["192.168.1.1", "127.0.0.1", "10.0.0.1", "0.0.0.0"],
            answer: 1,
            explanation: "127.0.0.1 is the standard loopback address for the local computer (localhost)."
        },
        {
            id: 12,
            question: "What does DHCP do?",
            options: ["Resolves domain names", "Assigns IP addresses dynamically", "Encrypts traffic", "Filters packets"],
            answer: 1,
            explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration to devices."
        },
        {
            id: 13,
            question: "Which command checks connectivity between two nodes?",
            options: ["ipconfig", "ping", "netstat", "nslookup"],
            answer: 1,
            explanation: "`ping` sends ICMP Echo Request messages to verify connectivity to a target host."
        },
        {
            id: 14,
            question: "What is the range of Class C IP addresses?",
            options: ["1.0.0.0 to 126.0.0.0", "128.0.0.0 to 191.255.0.0", "192.0.0.0 to 223.255.255.0", "224.0.0.0 to 239.0.0.0"],
            answer: 2,
            explanation: "Class C addresses range from 192.0.0.0 to 223.255.255.255, commonly used for small local networks."
        },
        {
            id: 15,
            question: "What is a Firewall?",
            options: ["A physical wall", "Network security system monitoring traffic", "A virus", "A routing protocol"],
            answer: 1,
            explanation: "A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules."
        }
    ],
    aptitude: [
        {
            id: 1,
            question: "If a train 100m long crosses a bridge 200m long in 20 seconds, what is the speed of the train?",
            options: ["36 km/hr", "45 km/hr", "54 km/hr", "72 km/hr"],
            answer: 2,
            explanation: "Total distance = 100 + 200 = 300m. Time = 20s. Speed = 300/20 = 15 m/s. 15 * 18/5 = 54 km/hr."
        },
        {
            id: 2,
            question: "A generic work can be done by A in 10 days and B in 15 days. If they work together, how many days will it take?",
            options: ["5 days", "6 days", "8 days", "7 days"],
            answer: 1,
            explanation: "A's 1 day work = 1/10. B's 1 day work = 1/15. Together = 1/10 + 1/15 = (3+2)/30 = 5/30 = 1/6. So 6 days."
        },
        {
            id: 3,
            question: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
            options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
            answer: 1,
            explanation: "Each number is half of the previous number. (1/4) / 2 = 1/8."
        },
        {
            id: 4,
            question: "Which word does NOT belong with the others?",
            options: ["Tyre", "Steering wheel", "Engine", "Car"],
            answer: 3,
            explanation: "Tyre, steering wheel, and engine are parts of a car. Car is the whole vehicle."
        },
        {
            id: 5,
            question: "If 10% of x is 20, what is x?",
            options: ["200", "20", "2", "2000"],
            answer: 0,
            explanation: "0.10 * x = 20 => x = 20 / 0.10 = 200."
        },
        {
            id: 6,
            question: "Introducing a boy, a girl said, 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?",
            options: ["Brother", "Nephew", "Uncle", "Son-in-law"],
            answer: 0,
            explanation: "Father of uncle -> Grandfather. Daughter of grandfather -> Mother (or Aunt). Son of Mother -> Brother."
        },
        {
            id: 7,
            question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had how many?",
            options: ["588 apples", "600 apples", "672 apples", "700 apples"],
            answer: 3,
            explanation: "Remaining 60% = 420. Total = 420 / 0.60 = 700."
        },
        {
            id: 8,
            question: "SCD, TEF, UGH, ____, WKL. What comes in the blank?",
            options: ["CMN", "UJI", "VIJ", "IJT"],
            answer: 2,
            explanation: "First letter: S, T, U, V, W. Second: C, E, G, I, K. Third: D, F, H, J, L. So VIJ."
        },
        {
            id: 9,
            question: "The average of first 50 natural numbers is?",
            options: ["25.30", "25.5", "25.00", "12.25"],
            answer: 1,
            explanation: "Sum of n natural numbers = n(n+1)/2. Average = (n+1)/2. (50+1)/2 = 25.5."
        },
        {
            id: 10,
            question: "A works twice as fast as B. If B can complete a work in 12 days independently, the number of days in which A and B can together finish the work in?",
            options: ["4 days", "6 days", "8 days", "18 days"],
            answer: 0,
            explanation: "B takes 12 days, so A takes 6 days. Together: 1/12 + 1/6 = 3/12 = 1/4. So 4 days."
        },
        {
            id: 11,
            question: "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
            options: ["Brother", "Uncle", "Cousin", "Father"],
            answer: 3,
            explanation: "Only son of my mother = Suresh himself. Son of Suresh = The boy. So Suresh is the Father."
        },
        {
            id: 12,
            question: "Which number replaces the question mark? 3, 5, 8, 13, 21, ?",
            options: ["30", "32", "34", "35"],
            answer: 2,
            explanation: "Fibonacci series: 3+5=8, 5+8=13, 8+13=21, 13+21=34."
        },
        {
            id: 13,
            question: "Find the odd one out: 3, 5, 7, 12, 13, 17, 19",
            options: ["19", "17", "13", "12"],
            answer: 3,
            explanation: "All except 12 are prime numbers."
        },
        {
            id: 14,
            question: "If CUP = 40, then KITE = ?",
            options: ["10", "20", "30", "45"],
            answer: 3,
            explanation: "C=3, U=21, P=16 -> 3+21+16 = 40. K=11, I=9, T=20, E=5 -> 11+9+20+5 = 45."
        },
        {
            id: 15,
            question: "Cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
            options: ["15", "16", "18", "25"],
            answer: 1,
            explanation: "CP of 20 = SP of x. Profit = 25%. (20-x)/x = 1/4 -> 80 - 4x = x -> 5x = 80 -> x = 16."
        }
    ],
    cloud: [
        {
            id: 1,
            question: "Which cloud service model provides the highest level of abstraction and least management overhead?",
            options: ["IaaS", "PaaS", "SaaS", "FaaS"],
            answer: 2,
            explanation: "SaaS (Software as a Service) allows users to use applications over the internet without managing any underlying infrastructure or platforms."
        },
        {
            id: 2,
            question: "What is the 'Shared Responsibility Model' in cloud computing?",
            options: ["Cloud provider handles everything", "User handles everything", "Division of security tasks between provider and customer", "Shared cost between users"],
            answer: 2,
            explanation: "The CSP handles security 'of' the cloud, while the customer handles security 'in' the cloud (data, configuration, etc.)."
        },
        {
            id: 3,
            question: "Which of the following describes 'Vertical Scaling'?",
            options: ["Adding more instances", "Increasing CPU/RAM of an existing instance", "Distributing load over multiple servers", "Using CDNs"],
            answer: 1,
            explanation: "Vertical scaling (scaling up) involves adding more power to an existing machine, whereas horizontal scaling involves adding more machines."
        },
        {
            id: 4,
            question: "What is a 'Region' in major cloud providers like AWS or Azure?",
            options: ["A single datacenter", "A geographic area containing multiple Availability Zones", "A virtual private cloud", "A specific server rack"],
            answer: 1,
            explanation: "A Region is a physical location in the world where multiple Availability Zones (datacenters) are located."
        },
        {
            id: 5,
            question: "Which storage type is best for static website hosting in the cloud?",
            options: ["Block Storage", "Object Storage", "File Storage", "RAM Disk"],
            answer: 1,
            explanation: "Object storage (like AWS S3) is highly scalable and ideal for unstructured data and static web content."
        },
        {
            id: 6,
            question: "What is the primary benefit of 'Serverless' computing?",
            options: ["No servers are involved", "Users don't manage server infrastructure", "Always free of cost", "Faster execution than VMs"],
            answer: 1,
            explanation: "Serverless doesn't mean no servers; it means the provider handles all server management, allowing developers to focus solely on code."
        },
        {
            id: 7,
            question: "What is 'Cloud-Native' architecture primary focus?",
            options: ["Running legacy apps in VMs", "Using containers, microservices, and dynamic orchestration", "Buying physical servers", "Using only one cloud provider"],
            answer: 1,
            explanation: "Cloud-native apps are designed to leverage cloud features like elasticity, containers (Docker), and orchestration (Kubernetes)."
        },
        {
            id: 8,
            question: "In cloud databases, what does 'Read Replicas' help with?",
            options: ["Data durability", "Write performance", "Read scalability and reducing primary load", "Backup recovery"],
            answer: 2,
            explanation: "Read replicas allow you to scale out read-heavy workloads by offloading reads from the primary database instance."
        },
        {
            id: 9,
            question: "What is 'IaC' (Infrastructure as Code)?",
            options: ["Manual server setup", "Managing infrastructure through machine-readable definition files", "Writing code only for frontend", "A programming language"],
            answer: 1,
            explanation: "IaC (e.g., Terraform, CloudFormation) allows you to automate infrastructure deployment using code, ensuring consistency and version control."
        },
        {
            id: 10,
            question: "Which scenario is most suitable for 'Spot Instances'?",
            options: ["Production database", "Mission-critical apps", "Batch processing and fault-tolerant workloads", "Real-time user transactions"],
            answer: 2,
            explanation: "Spot instances offer high discounts but can be reclaimed by the provider; they are best for tasks that can handle interruptions."
        },
        {
            id: 11,
            question: "What is a 'VPC' (Virtual Private Cloud)?",
            options: ["A public internet connection", "A private, isolated section of the cloud network", "A physical server", "A types of database"],
            answer: 1,
            explanation: "A VPC allows you to launch cloud resources into a virtual network that you've defined and isolated."
        },
        {
            id: 12,
            question: "What is 'Edge Computing'?",
            options: ["Centralized cloud storage", "Processing data closer to the source/user", "Using old versions of cloud", "High-performance GPUs"],
            answer: 1,
            explanation: "Edge computing reduces latency by processing data at the 'edge' of the network, near where it is generated."
        },
        {
            id: 13,
            question: "Which cloud service helps in distributing incoming application traffic?",
            options: ["Auto Scaling", "Load Balancer", "Route Table", "VPC Peering"],
            answer: 1,
            explanation: "A Load Balancer distributes incoming traffic across multiple targets (like EC2 instances) to increase availability."
        },
        {
            id: 14,
            question: "What is 'Egress' traffic in cloud billing?",
            options: ["Data coming into the cloud", "Data leaving the cloud network", "Internal data transfer", "API calls"],
            answer: 1,
            explanation: "Cloud providers usually charge for data leaving their network (Egress), while data coming in (Ingress) is often free."
        },
        {
            id: 15,
            question: "What is the purpose of a 'CDN' (Content Delivery Network)?",
            options: ["Database backup", "Delivering content with low latency using edge locations", "Increasing CPU power", "Private connectivity"],
            answer: 1,
            explanation: "CDNs (like CloudFront) cache content globally to serve users from the location closest to them."
        },
        {
            id: 16,
            question: "What is 'Cold Start' in serverless functions?",
            options: ["Restarting a server", "Latency when a function is invoked after being idle", "Starting a VM", "Freezing code"],
            answer: 1,
            explanation: "A cold start happens when a serverless function is triggered after not being used for a while, requiring the provider to initialize the environment."
        },
        {
            id: 17,
            question: "What is 'Multi-Tenant' architecture?",
            options: ["One server per user", "Multiple users sharing the same application and infrastructure", "Multiple clouds for one user", "Renting multiple offices"],
            answer: 1,
            explanation: "Multi-tenancy allows a single instance of software to serve multiple customers (tenants), maximizing resource efficiency."
        },
        {
            id: 18,
            question: "What is 'Cloud Agnostic'?",
            options: ["Being locked into one provider", "Designing apps that can run on any cloud provider", "Rejecting cloud technology", "Using only private clouds"],
            answer: 1,
            explanation: "Cloud-agnostic tools (like Terraform/K8s) allow you to switch providers or avoid vendor lock-in."
        },
        {
            id: 19,
            question: "Which consistency model does S3 now support for all operations?",
            options: ["Eventual Consistency", "Strong Read-After-Write Consistency", "Weak Consistency", "Delayed Consistency"],
            answer: 1,
            explanation: "Amazon S3 provides strong read-after-write consistency for all applications, simplifying distributed systems design."
        },
        {
            id: 20,
            question: "What is 'Blue-Green Deployment'?",
            options: ["Color coding servers", "Running two identical environments, one live and one idle", "Incremental updates to all servers", "Deleting old servers immediately"],
            answer: 1,
            explanation: "It reduces downtime and risk by having two environments; you switch traffic to 'Green' while 'Blue' is the old version for rollback."
        },
        {
            id: 21,
            question: "Which cloud tool is used for auditing and logging API activity?",
            options: ["CloudWatch", "CloudTrail", "IAM", "S3"],
            answer: 1,
            explanation: "CloudTrail (in AWS) records API calls made within an account, which is crucial for security auditing."
        },
        {
            id: 22,
            question: "What is 'Elasticity' in cloud?",
            options: ["Fixing server size", "The ability to scale resources up or down automatically based on demand", "Manual scaling", "Network flexibility"],
            answer: 1,
            explanation: "Elasticity ensures that you have just the right amount of resources at any given time, saving costs."
        },
        {
            id: 23,
            question: "What is a 'Hybrid Cloud'?",
            options: ["Two private clouds", "A mix of on-premises infrastructure and public cloud", "A mix of AWS and Azure only", "Using cloud only for storage"],
            answer: 1,
            explanation: "Hybrid cloud combines private (on-prem) and public cloud resources, allowing data and apps to be shared between them."
        },
        {
            id: 24,
            question: "What is 'Database Migration Service' (DMS)?",
            options: ["Copying files", "Moving databases to the cloud with minimal downtime", "Deleting databases", "Updating database drivers"],
            answer: 1,
            explanation: "DMS helps migrate databases to the cloud quickly and securely, often while the source database remains operational."
        },
        {
            id: 25,
            question: "Which of these is a container orchestration service?",
            options: ["AWS EC2", "Kubernetes (EKS/AKS/GKE)", "AWS Lambda", "Azure Functions"],
            answer: 1,
            explanation: "Kubernetes is the industry standard for automating deployment, scaling, and management of containerized applications."
        }
    ],
    devops: [
        {
            id: 1,
            question: "What is the primary goal of Continuous Integration (CI)?",
            options: ["Deploying to production", "Automatically merging and testing code changes", "Monitoring server health", "Writing documentation"],
            answer: 1,
            explanation: "CI focuses on frequently merging code into a central repository where automated builds and tests are run."
        },
        {
            id: 2,
            question: "In Docker, what is the purpose of a Dockerfile?",
            options: ["To store database records", "To define the steps to build a container image", "To manage network traffic", "To track user logins"],
            answer: 1,
            explanation: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image."
        },
        {
            id: 3,
            question: "What is 'Immutable Infrastructure'?",
            options: ["Manually updating servers", "Infrastructure that is never changed but replaced when updates are needed", "Storing data in immutable databases", "Physically locked server racks"],
            answer: 1,
            explanation: "Immutable infrastructure involves replacing servers with new ones rather than making changes in-place, ensuring consistency."
        },
        {
            id: 4,
            question: "Which Kubernetes resource ensures that a specified number of pod replicas are running at any given time?",
            options: ["Pod", "Namespace", "Deployment/ReplicaSet", "Service"],
            answer: 2,
            explanation: "ReplicaSets (managed by Deployments) maintain a stable set of replica Pods running at any given time."
        },
        {
            id: 5,
            question: "What are the 'Four Golden Signals' of SRE monitoring?",
            options: ["CPU, RAM, Disk, Network", "Latency, Traffic, Errors, Saturation", "Speed, Security, Scale, Stability", "Users, Costs, Bugs, Features"],
            answer: 1,
            explanation: "As defined by Google SRE, these are the four key metrics to monitor in user-facing systems."
        },
        {
            id: 6,
            question: "What does 'SLO' stand for in SRE?",
            options: ["System Level Order", "Service Level Objective", "Service Logic Optimization", "System Load Overflow"],
            answer: 1,
            explanation: "An SLO is a target level for a service performance metric (SLI) that the SRE team commits to meeting."
        },
        {
            id: 7,
            question: "What is the difference between Blue-Green and Canary deployments?",
            options: ["There is no difference", "Blue-Green switches all at once; Canary rolls out to a subset of users first", "Canary is faster than Blue-Green", "Blue-Green is only for databases"],
            answer: 1,
            explanation: "Canary allows testing new versions on a small user group before full rollout, while Blue-Green swaps two environments."
        },
        {
            id: 8,
            question: "What is 'Infrastructure as Code' (IaC) primarily used for?",
            options: ["Writing application logic", "Automating infrastructure management through configuration files", "Debugging frontend code", "Scaling databases only"],
            answer: 1,
            explanation: "IaC tools like Terraform allow you to manage your entire infrastructure (networks, VMs, etc.) using declarative code."
        },
        {
            id: 9,
            question: "Which tool is commonly used for configuration management and automation?",
            options: ["Ansible", "React", "PostgreSQL", "Docker"],
            answer: 0,
            explanation: "Ansible uses YAML-based playbooks to automate configuration, orchestration, and deployments."
        },
        {
            id: 10,
            question: "What is a 'Liveness Probe' in Kubernetes?",
            options: ["Checks if the pod is ready to serve traffic", "Checks if the container is running and healthy; restarts if not", "Checks pod memory usage", "Checks network latency"],
            answer: 1,
            explanation: "A liveness probe tells Kubernetes if an application has crashed or deadlocked, triggering a restart if necessary."
        },
        {
            id: 11,
            question: "What is 'GitOps'?",
            options: ["Using Git for everything", "Using Git as the single source of truth for infrastructure and app config", "A new version of Git", "Hosting Git on-premises"],
            answer: 1,
            explanation: "In GitOps, the desired state of your system is stored in Git, and automated tools (like ArgoCD) synchronize it with the cluster."
        },
        {
            id: 12,
            question: "In Prometheus, what is an 'Exporter'?",
            options: ["A tool to backup data", "A component that fetches metrics from a system and formats them for Prometheus", "A report generator", "A load balancer"],
            answer: 1,
            explanation: "Exporters translate third-party metrics into a format Prometheus can scrape."
        },
        {
            id: 13,
            question: "What is the purpose of 'Chaos Engineering'?",
            options: ["Trying to crash servers for fun", "Testing system resilience by injecting failures", "Randomly deleting files", "Scaling resources to the limit"],
            answer: 1,
            explanation: "Chaos Engineering (e.g., Chaos Monkey) helps identify weaknesses in distributed systems before they cause real outages."
        },
        {
            id: 14,
            question: "What is 'Trunk-based development'?",
            options: ["Working on separate long-term branches", "Merging small updates frequently to a single main branch", "Using a tree-like folder structure", "Developing on a local backup server"],
            answer: 1,
            explanation: "Trunk-based development avoids 'merge hell' by encouraging developers to commit to 'main' several times a day."
        },
        {
            id: 15,
            question: "What does 'Docker Layer Caching' help with?",
            options: ["Reducing image size", "Speeding up build times by reusing unchanged layers", "Encrypting images", "Managing multi-stage builds"],
            answer: 1,
            explanation: "Docker caches the results of each step in a Dockerfile; if a step hasn't changed, Docker reuses the cached layer."
        },
        {
            id: 16,
            question: "Which K8s resource is used to manage external access to services, typically HTTP?",
            options: ["ConfigMap", "Ingress", "Secret", "Volume"],
            answer: 1,
            explanation: "An Ingress controller manages external traffic routing (Layer 7) into your Kubernetes cluster services."
        },
        {
            id: 17,
            question: "What is an 'Error Budget'?",
            options: ["Money allocated for bug fixes", "The amount of allowed unreliability before development must stop to fix issues", "A list of known bugs", "The cost of cloud outages"],
            answer: 1,
            explanation: "If you exceed your error budget (e.g., 0.1% downtime), you stop deploying new features and focus on stability."
        },
        {
            id: 18,
            question: "What is 'Post-mortem' in SRE?",
            options: ["Deleting an old server", "An analysis of an incident to prevent recurrence", "Closing a project", "A security scan"],
            answer: 1,
            explanation: "Blameless post-mortems focus on process and system failures rather than human error."
        },
        {
            id: 19,
            question: "Which tool is standard for creating dashboards from Prometheus data?",
            options: ["Grafana", "Tableau", "Excel", "Logstash"],
            answer: 0,
            explanation: "Grafana is the most popular open-source tool for visualizing time-series database metrics."
        },
        {
            id: 20,
            question: "What is a 'Sidecar' pattern in Kubernetes?",
            options: ["A backup server", "A container that runs alongside the main app container for helper tasks", "A user interface for K8s", "A type of load balancer"],
            answer: 1,
            explanation: "Sidecars handle peripheral tasks like logging, proxying (e.g., Istio), or monitoring for the main container."
        },
        {
            id: 21,
            question: "What is 'Rolling Update' in Kubernetes?",
            options: ["Deleting all pods and starting new ones", "Gradually replacing old pods with new ones without downtime", "Updating the OS of the node", "Manual pod restart"],
            answer: 1,
            explanation: "Rolling updates allow deployments update to take place with zero downtime by incrementally updating instances."
        },
        {
            id: 22,
            question: "What does `kubectl describe pod <name>` do?",
            options: ["Deletes the pod", "Shows detailed status and events for a pod", "Prints pod logs", "Starts a shell in the pod"],
            answer: 1,
            explanation: "It's essential for debugging as it shows events like image pull failures or resource constraints."
        },
        {
            id: 23,
            question: "What is the purpose of 'Secrets management' tools like HashiCorp Vault?",
            options: ["Storing private keys", "Securely managing passwords, API keys, and certificates", "Encrypting hard drives", "Managing user roles"],
            answer: 1,
            explanation: "It centralizes and secures access to sensitive environment variables and credentials."
        },
        {
            id: 24,
            question: "In Jenkins, what is a 'Pipeline as Code'?",
            options: ["Manual UI configuration", "Defining build steps in a Jenkinsfile", "Writing Jenkins plugins", "Using Python for builds"],
            answer: 1,
            explanation: "Jenkinsfiles allow you to version control your CI/CD pipeline logic alongside your source code."
        },
        {
            id: 25,
            question: "What is 'Shift-Left' testing?",
            options: ["Moving tests to the end of the cycle", "Moving testing earlier in the development process", "Only testing on the left side of the UI", "Automation testing"],
            answer: 1,
            explanation: "Shift-left aims to find and fix bugs as soon as possible, reducing the cost of repairs."
        }
    ],
    ml: [
        {
            id: 1,
            question: "What is the primary difference between Supervised and Unsupervised learning?",
            options: ["Supervised uses labeled data; Unsupervised does not", "Unsupervised is faster", "Supervised is for images only", "There is no difference"],
            answer: 0,
            explanation: "Supervised learning requires a dataset with known labels/outputs to train the model, while unsupervised find patterns in unlabeled data."
        },
        {
            id: 2,
            question: "In Machine Learning, what does the 'Bias-Variance Tradeoff' refer to?",
            options: ["The cost of training vs the cost of deployment", "The balance between underfitting and overfitting", "Choosing between two different algorithms", "The speed of the model"],
            answer: 1,
            explanation: "High bias can cause underfitting (oversimplification), while high variance can cause overfitting (too much noise in training data)."
        },
        {
            id: 3,
            question: "Which of the following is a technique used to prevent Overfitting?",
            options: ["Increasing model complexity", "Regularization (L1/L2)", "Using less training data", "Removing validation sets"],
            answer: 1,
            explanation: "Regularization adds a penalty for larger weights in the model, discouraging complexity and helping with generalization."
        },
        {
            id: 4,
            question: "What does 'Precision' measure in a classification model?",
            options: ["Total correct predictions", "Accuracy of positive predictions", "Ability to find all positive instances", "The speed of prediction"],
            answer: 1,
            explanation: "Precision is the ratio of correctly predicted positive observations to the total predicted positives."
        },
        {
            id: 5,
            question: "In Gradient Descent, what is the 'Learning Rate'?",
            options: ["The speed of data processing", "The size of the steps taken to reach the minimum of the loss function", "The number of layers in a neural network", "The accuracy of the model"],
            answer: 1,
            explanation: "Learning rate determines how much we adjust the weights of our network with respect to the loss gradient."
        },
        {
            id: 6,
            question: "Which algorithm is commonly used for Dimensionality Reduction?",
            options: ["Random Forest", "K-Means", "PCA (Principal Component Analysis)", "Linear Regression"],
            answer: 2,
            explanation: "PCA transforms a large set of variables into a smaller one that still contains most of the information in the large set."
        },
        {
            id: 7,
            question: "What is the purpose of an 'Activation Function' in a Neural Network?",
            options: ["To store data", "To introduce non-linearity into the output of a neuron", "To sort the data", "To reduce the number of neurons"],
            answer: 1,
            explanation: "Without non-linear activation functions (like ReLU), a neural network would just be a linear regression model regardless of the number of layers."
        },
        {
            id: 8,
            question: "In Random Forest, what does 'Bagging' stand for?",
            options: ["Boosting Accuracy and Generative Graphs", "Bootstrap Aggregating", "Base Aggregation", "Batch Aggregating"],
            answer: 1,
            explanation: "Bagging involves training multiple models on different subsets of the data (with replacement) and averaging their predictions."
        },
        {
            id: 9,
            question: "Which of the following is a clustering algorithm?",
            options: ["SVM", "Logistic Regression", "K-Means", "Decision Tree"],
            answer: 2,
            explanation: "K-Means is an unsupervised learning algorithm used for grouping unlabelled data into K clusters."
        },
        {
            id: 10,
            question: "What is 'Cross-Validation' used for?",
            options: ["Checking for duplicate data", "Assessing how the results of a statistical analysis will generalize to an independent data set", "Encrypting the model", "Combining two datasets"],
            answer: 1,
            explanation: "K-fold cross-validation helps ensure the model isn't just memorizing the training data (overfitting)."
        },
        {
            id: 11,
            question: "What does 'MSE' stand for in regression?",
            options: ["Mean Square Error", "Maximum Standard Error", "Median Standard Estimate", "Mean Square Entropy"],
            answer: 0,
            explanation: "MSE is a common loss function for regression that measures the average of the squares of the errors (deviations)."
        },
        {
            id: 12,
            question: "Which neural network architecture is most suitable for Image Recognition?",
            options: ["RNN (Recurrent)", "CNN (Convolutional)", "GAN (Generative)", "Transformer"],
            answer: 1,
            explanation: "CNNs are designed to automatically and adaptively learn spatial hierarchies of features from images."
        },
        {
            id: 13,
            question: "What is 'Transfer Learning'?",
            options: ["Moving data between servers", "Using a pre-trained model on a new, related task", "Teaching a model multiple languages", "Converting a model to a different framework"],
            answer: 1,
            explanation: "Transfer learning allows you to leverage knowledge gained from one task to improve performance on another, often with less data."
        },
        {
            id: 14,
            question: "What is the purpose of 'Softmax' function?",
            options: ["To normalize values to a range of [0, 1] that sum to 1", "To make the model 'soft'", "To handle negative values only", "To speed up training"],
            answer: 0,
            explanation: "Softmax is typically used in the final layer of a multi-class classifier to represent the probability distribution of classes."
        },
        {
            id: 15,
            question: "What is 'One-Hot Encoding'?",
            options: ["A way to encrypt data", "Converting categorical variables into a numerical format", "A feature scaling technique", "A type of neural network"],
            answer: 1,
            explanation: "One-hot encoding creates binary columns for each category, allowing the model to process non-numeric data."
        },
        {
            id: 16,
            question: "What is an 'Epoch' in ML training?",
            options: ["One iteration over a single data point", "One complete pass through the entire training dataset", "A period of history", "The time taken for one prediction"],
            answer: 1,
            explanation: "Multiple epochs are usually needed for the model's weights to converge."
        },
        {
            id: 17,
            question: "In NLP, what is 'Word Embedding'?",
            options: ["Storing words in a database", "Mapping words to vectors of real numbers", "Checking for spelling errors", "Translating text"],
            answer: 1,
            explanation: "Word embeddings (like Word2Vec) capture the semantic meaning and relationships between words in a high-dimensional space."
        },
        {
            id: 18,
            question: "What is 'Reinforcement Learning' primarily about?",
            options: ["Finding patterns in data", "Making a series of decisions to maximize a reward", "Classifying images", "Predicting house prices"],
            answer: 1,
            explanation: "An agent learns to behave in an environment by performing actions and seeing the results (rewards or penalties)."
        },
        {
            id: 19,
            question: "Which of these is a popular ensemble method that builds trees sequentially?",
            options: ["Random Forest", "XGBoost / Gradient Boosting", "K-Means", "Logistic Regression"],
            answer: 1,
            explanation: "Boosting algorithms (like XGBoost) train trees one after another, each one trying to correct the errors of the previous ones."
        },
        {
            id: 20,
            question: "What is 'Hyperparameter Tuning'?",
            options: ["Changing the training data", "Finding the optimal settings for a learning algorithm (like learning rate or depth)", "Improving CPU performance", "Updating the model every hour"],
            answer: 1,
            explanation: "Hyperparameters are settings that are not learned from the data, but set before training starts."
        },
        {
            id: 21,
            question: "What does 'ReLU' stand for?",
            options: ["Rectified Linear Unit", "Recurrent Linear Unit", "Randomized Linear Utility", "Relative Linear Unit"],
            answer: 0,
            explanation: "ReLU is one of the most commonly used activation functions in deep learning (outputting max(0, x))."
        },
        {
            id: 22,
            question: "What is the 'Kernel Trick' in SVM?",
            options: ["Encrypting data", "Transforming low-dimensional data into higher-dimensional space to make it separable", "A way to speed up sorting", "A hardware optimization"],
            answer: 1,
            explanation: "Kernel functions allow SVMs to solve non-linear problems by implicitly mapping inputs into high-dimensional feature spaces."
        },
        {
            id: 23,
            question: "What is 'Early Stopping' used for?",
            options: ["To save electricity", "To prevent overfitting by stopping training when validation error starts increasing", "To delete old models", "To stop the user from using the app"],
            answer: 1,
            explanation: "It monitors the model's performance on a validation set and stops training once it stops improving."
        },
        {
            id: 24,
            question: "What is the difference between RNN and LSTM?",
            options: ["RNN is faster", "LSTM has memory cells to handle long-term dependencies better than standard RNN", "LSTM is only for images", "RNN is deprecated"],
            answer: 1,
            explanation: "Standard RNNs suffer from vanishing gradients; LSTMs solve this with gating mechanisms."
        },
        {
            id: 25,
            question: "What is 'MLOps'?",
            options: ["Machine Learning Operators", "Practices for reliable and efficient deployment of ML models in production", "A new machine learning library", "Operating systems for ML"],
            answer: 1,
            explanation: "MLOps focuses on the lifecycle of ML models, including versioning, monitoring, and automated deployment."
        }
    ]
};

export const getQuizByTopic = (topicId) => {
    return quizzes[topicId] || [];
}
