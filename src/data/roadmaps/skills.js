export const skillRoadmaps = {
    // === LANGUAGES ===
    "react": {
        "id": "react",
        "title": "React",
        "description": "A JavaScript library for building user interfaces.",
        "icon": "⚛️",
        "color": "#61dafb",
        "estimatedTime": "3-5 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/react",
        "milestones": [
            { "id": "r_1", "title": "Fundamentals", "difficulty": "Beginner", "estimatedHours": 20, "content": "React is a UI library. Start with Create React App or Vite. Understand that everything is a 'Component'. Components return JSX, which looks like HTML but is JavaScript. Learn about Props to pass data down.", "topics": ["JSX", "Components", "Props", "Conditional Rendering"], "resources": [{ "title": "React Docs", "url": "https://react.dev/" }] },
            { "id": "r_2", "title": "State & Lifecycle", "difficulty": "Beginner", "estimatedHours": 30, "content": "State is data that changes over time. Understanding `useState` is 50% of React. Learn how updating state triggers a re-render. Learn the Component Lifecycle (Mount, Update, Unmount) via `useEffect`.", "topics": ["useState", "useEffect", "Lists & Keys", "Forms"], "resources": [] },
            { "id": "r_3", "title": "Advanced Hooks", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Beyond the basics. `useContext` prevents prop drilling. `useReducer` handles complex state logic (like Redux). `useRef` accesses DOM elements directly without re-renders.", "topics": ["useContext", "useReducer", "useRef", "useMemo", "useCallback"], "resources": [] },
            { "id": "r_4", "title": "Routing", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Single Page Apps (SPAs) need client-side routing. React Router is the standard. Learn to define Routes, use Link components, and handle dynamic route parameters (e.g., /user/:id).", "topics": ["React Router", "Dynamic Routes", "Nested Routes", "Protected Routes"], "resources": [] },
            { "id": "r_5", "title": "State Management", "difficulty": "Advanced", "estimatedHours": 40, "content": "For large apps, Context isn't enough. Redux Toolkit (RTK) is the industry standard for global state. Zustand is a lighter popular alternative. TanStack Query (React Query) is essential for server state.", "topics": ["Redux Toolkit", "Zustand", "TanStack Query"], "resources": [] },
            { "id": "r_6", "title": "Performance Optimization", "difficulty": "Expert", "estimatedHours": 30, "content": "React is fast, but you can make it slow. Learn to prevent unnecessary re-renders using `React.memo`, `useMemo`, and `useCallback`. Understand Code Splitting using `React.lazy` and Suspense.", "topics": ["Re-renders", "Memoization", "Code Splitting", "Suspense"], "resources": [] },
            { "id": "r_7", "title": "React Frameworks", "difficulty": "Advanced", "estimatedHours": 50, "content": "React is rarely used alone in production anymore. Next.js is the production framework. It adds Server Side Rendering (SSR), Static Site Generation (SSG), and API routes out of the box.", "topics": ["Next.js", "SSR", "SSG", "Remix"], "resources": [] }
        ]
    },
    "python": {
        "id": "python",
        "title": "Python",
        "description": "Versatile programming language.",
        "icon": "🐍",
        "color": "#3776ab",
        "estimatedTime": "3-5 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/python",
        "milestones": [
            { "id": "py_1", "title": "Syntax Basics", "difficulty": "Beginner", "estimatedHours": 20, "content": "Python is known for readability. Learn indentation rules (whitespace matters!). Variables, Data Types (int, float, str, bool), and basic Operators. Input/Output with print() and input().", "topics": ["Variables", "Operators", "Input/Output", "Indentation"], "resources": [{ "title": "Python Tutorial", "url": "https://docs.python.org/3/tutorial/" }] },
            { "id": "py_2", "title": "Control Structures", "difficulty": "Beginner", "estimatedHours": 20, "content": "Logic flow. Conditional statements (if, elif, else). Loops (for, while). Learn to iterate over sequences using range() and enumerate().", "topics": ["if/else", "Loops", "Break/Continue", "List Comprehensions"], "resources": [{ "title": "Control Flow", "url": "https://docs.python.org/3/tutorial/controlflow.html" }] },
            { "id": "py_3", "title": "Data Structures", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Python's power lies in its built-in structures. Lists (arrays), Tuples (immutable), Sets (unique items), and Dictionaries (key-value pairs). Master List Comprehensions for concise code.", "topics": ["Lists", "Dictionaries", "Tuples", "Sets"], "resources": [{ "title": "Data Structures", "url": "https://docs.python.org/3/tutorial/datastructures.html" }] },
            { "id": "py_4", "title": "Functions & Modules", "difficulty": "Intermediate", "estimatedHours": 30, "content": "DRY (Don't Repeat Yourself). Define functions with `def`. specific arguments vs *args/**kwargs. Lambda functions. Organizing code into Modules and Packages using __init__.py.", "topics": ["Functions", "Lambdas", "Modules", "Pip (Package Manager)"], "resources": [{ "title": "Modules", "url": "https://docs.python.org/3/tutorial/modules.html" }] },
            { "id": "py_5", "title": "Object Oriented Programming", "difficulty": "Advanced", "estimatedHours": 40, "content": "Python is an OOP language. Classes, Objects, Inheritance, Polymorphism. Understand `self`, the `__init__` constructor, and Magic Methods (`__str__`, `__len__`).", "topics": ["Classes", "Inheritance", "Magic Methods", "Decorators"], "resources": [{ "title": "Classes", "url": "https://docs.python.org/3/tutorial/classes.html" }] },
            { "id": "py_6", "title": "File I/O & Exceptions", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Working with files. Open/Read/Write using the `with` context manager (which handles closing automatically). Error handling using try/except/finally blocks.", "topics": ["File Handling", "Context Managers", "Exception Handling"], "resources": [{ "title": "Input and Output", "url": "https://docs.python.org/3/tutorial/inputoutput.html" }] }
        ]
    },
    // ... adding ALL other missing skills
    "springboot": {
        "id": "springboot",
        "title": "Spring Boot",
        "description": "Java-based framework.",
        "icon": "🍃",
        "color": "#6db33f",
        "estimatedTime": "3-4 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/spring-boot",
        "milestones": [
            { "id": "sb_1", "title": "Basics", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Auto-configuration, Starters. The Spring ecosystem.", "topics": ["Starters", "Beans"], "resources": [] }
        ]
    },
    "aspnetcore": {
        "id": "aspnetcore",
        "title": "ASP.NET Core",
        "description": ".NET framework.",
        "icon": "🔷",
        "color": "#512bd4",
        "estimatedTime": "3-5 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/aspnet-core",
        "milestones": [
            { "id": "asp_1", "title": "Core", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Middleware, Dependency Injection, Kestrel.", "topics": ["DI", "Middleware"], "resources": [] }
        ]
    },
    "laravel": {
        "id": "laravel",
        "title": "Laravel",
        "description": "PHP Framework.",
        "icon": "🔴",
        "color": "#ff2d20",
        "estimatedTime": "3-4 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/laravel",
        "milestones": [
            { "id": "lv_1", "title": "Fundamentals", "difficulty": "Beginner", "estimatedHours": 30, "content": "MVC Architecture, Routing, Blade.", "topics": ["MVC", "Blade"], "resources": [] }
        ]
    },
    "datastructures": {
        "id": "datastructures",
        "title": "Data Structures",
        "description": "CS Fundamentals.",
        "icon": "📚",
        "color": "#000000",
        "estimatedTime": "4-6 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/datastructures-and-algorithms",
        "milestones": [
            { "id": "dsa_1", "title": "Linear", "difficulty": "Beginner", "estimatedHours": 40, "content": "Arrays, Linked Lists, Stacks, Queues.", "topics": ["Arrays", "Lists"], "resources": [] },
            { "id": "dsa_2", "title": "Trees & Graphs", "difficulty": "Advanced", "estimatedHours": 50, "content": "Binary Trees, BST, Graphs (BFS/DFS).", "topics": ["Trees", "Graphs"], "resources": [] }
        ]
    },
    "promptengineering": {
        "id": "promptengineering",
        "title": "Prompt Engineering",
        "description": "AI Communication.",
        "icon": "💬",
        "color": "#10a37f",
        "estimatedTime": "1 Month",
        "category": "Skill Based",
        "link": "https://roadmap.sh/prompt-engineering",
        "milestones": [
            { "id": "pe_1", "title": "Techniques", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Chain of Thought, Few-Shot, ReAct.", "topics": ["Prompts"], "resources": [] }
        ]
    },
    // ... Restoring Languages/Tools from previous list
    "java": {
        "id": "java",
        "title": "Java",
        "description": "Robust, object-oriented language.",
        "icon": "☕",
        "color": "#007396",
        "estimatedTime": "4-6 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/java",
        "milestones": [
            { "id": "jv_1", "title": "Core Java", "difficulty": "Beginner", "estimatedHours": 60, "content": "The foundation. Syntax, Loops, Methods. Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation) is the heart of Java.", "topics": ["Syntax", "OOP Principles", "Methods"], "resources": [{ "title": "Java Tutorials (Oracle)", "url": "https://docs.oracle.com/javase/tutorial/" }, { "title": "Baeldung Java", "url": "https://www.baeldung.com/java-tutorial" }] },
            { "id": "jv_2", "title": "Collections Framework", "difficulty": "Intermediate", "estimatedHours": 50, "content": "Managing groups of objects. List (ArrayList, LinkedList), Set (HashSet), Map (HashMap, TreeMap). Iterators and the for-each loop.", "topics": ["List", "Set", "Map", "Queue"], "resources": [{ "title": "Java Collections", "url": "https://docs.oracle.com/javase/tutorial/collections/" }] },
            { "id": "jv_3", "title": "Java 8+ Features", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Modern Java. Lambdas for functional programming. Streams API for processing collections (filter, map, reduce). Optional class to avoid NullPointerExceptions.", "topics": ["Lambdas", "Streams API", "Optional"], "resources": [{ "title": "Java 8 Features", "url": "https://www.baeldung.com/java-8-features" }] },
            { "id": "jv_4", "title": "Concurrency (Multithreading)", "difficulty": "Advanced", "estimatedHours": 50, "content": "Doing multiple things at once. Threads, Runnables. The Executor Framework. Synchronization and Locks to prevent race conditions.", "topics": ["Threads", "Executors", "Synchronized"], "resources": [{ "title": "Java Concurrency", "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/" }] },
            { "id": "jv_5", "title": "Build Tools (Maven/Gradle)", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Dependency management. pom.xml vs build.gradle. compiling, testing, and packaging your application.", "topics": ["Maven", "Gradle", "Dependency Management"], "resources": [{ "title": "Maven in 5 Minutes", "url": "https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html" }] },
            { "id": "jv_6", "title": "Spring Framework", "difficulty": "Advanced", "estimatedHours": 80, "content": "The enterprise standard. Inversion of Control (IoC), Dependency Injection (DI). Spring Boot for rapid application development. Spring Data JPA for database access.", "topics": ["Spring Boot", "IoC", "Spring MVC"], "resources": [{ "title": "Spring Boot Guides", "url": "https://spring.io/guides" }, { "title": "Spring Boot Start", "url": "https://start.spring.io/" }] }
        ]
    },
    "javascript": {
        "id": "javascript",
        "title": "JavaScript",
        "description": "The language of the web.",
        "icon": "🟨",
        "color": "#f7df1e",
        "estimatedTime": "2-3 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/javascript",
        "milestones": [
            { "id": "js_1", "title": "Variables & Types", "difficulty": "Beginner", "estimatedHours": 20, "content": "Let vs Const vs Var. Primitives (String, Number, Boolean) vs Objects. Template Literals for strings.", "topics": ["Variables", "Data Types", "Operators"], "resources": [] },
            { "id": "js_2", "title": "Control Flow & Functions", "difficulty": "Beginner", "estimatedHours": 30, "content": "If/Else, Switch, Loops (for, while). Function Declarations vs Arrow Functions. Understanding Scope (Global, Function, Block).", "topics": ["Functions", "Loops", "Scope"], "resources": [] },
            { "id": "js_3", "title": "DOM Manipulation", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Interacting with the browser. selecting elements (querySelector). Event Listeners (click, submit). Modifying styles and classes.", "topics": ["DOM", "Events", "HTMLCollection"], "resources": [] },
            { "id": "js_4", "title": "Asynchronous JavaScript", "difficulty": "Advanced", "estimatedHours": 50, "content": "JavaScript is single-threaded. Callbacks (Callback Hell). Promises (.then/.catch). Async/Await syntax. The Event Loop.", "topics": ["Promises", "Async/Await", "Event Loop", "Fetch API"], "resources": [] },
            { "id": "js_5", "title": "Modern ES6+ Features", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Destructuring (Arrays/Objects). Spread/Rest operators (...). Modules (import/export). Classes in JS.", "topics": ["Destructuring", "Spread", "Modules"], "resources": [] },
            { "id": "js_6", "title": "Tooling", "difficulty": "Advanced", "estimatedHours": 20, "content": "npm/yarn for packages. Webpack/Vite for bundling. Babel for transpiling.", "topics": ["npm", "Vite", "Bundlers"], "resources": [] }
        ]
    },
    "typescript": {
        "id": "typescript",
        "title": "TypeScript",
        "description": "JavaScript with syntax for types.",
        "icon": "🔷",
        "color": "#3178c6",
        "estimatedTime": "1-2 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/typescript",
        "milestones": [
            { "id": "ts_1", "title": "Basic Types", "difficulty": "Beginner", "estimatedHours": 20, "content": "Superset of JS. Type annotations (string, number, boolean). Arrays and Tuples. The 'any' and 'unknown' types.", "topics": ["Type Annotations", "Inference", "Tuples"], "resources": [] },
            { "id": "ts_2", "title": "Interfaces & Types", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Defining shapes of objects. Type Aliases vs Interfaces. Optional properties (?). Readonly properties.", "topics": ["Interfaces", "Type Aliases"], "resources": [] },
            { "id": "ts_3", "title": "Functions", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Typing arguments and return values. Function Overloads. Optional parameters.", "topics": ["Function Types", "Overloads"], "resources": [] },
            { "id": "ts_4", "title": "Unions & Intersections", "difficulty": "Advanced", "estimatedHours": 30, "content": "Combining types. Union types (|) for 'this OR that'. Intersection types (&) for 'this AND that'. Type Narrowing/Guards.", "topics": ["Unions", "Intersections", "Type Guards"], "resources": [] },
            { "id": "ts_5", "title": "Generics", "difficulty": "Expert", "estimatedHours": 50, "content": "Reusable code components. Generic Functions (<T>). Generic Interfaces. Constraints (extends).", "topics": ["Generics", "Keyof", "Constraints"], "resources": [] },
            { "id": "ts_6", "title": "Utility Types", "difficulty": "Advanced", "estimatedHours": 20, "content": "Built-in helpers. Partial, Required, Pick, Omit, Record. Mapped Types.", "topics": ["Utility Types", "Mapped Types"], "resources": [] }
        ]
    },
    "cpp": {
        "id": "cpp",
        "title": "C++",
        "description": "High-performance programming.",
        "icon": "➕",
        "color": "#00599c",
        "estimatedTime": "4-6 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/cpp",
        "milestones": [
            { "id": "cpp_1", "title": "Basics & Flow Control", "difficulty": "Beginner", "estimatedHours": 30, "content": "Syntax, Variables, Input/Output (cin, cout). Decision making (if, switch) and Loops.", "topics": ["Syntax", "IO", "Control Flow"], "resources": [] },
            { "id": "cpp_2", "title": "Functions & Pointers", "difficulty": "Intermediate", "estimatedHours": 50, "content": "Pass by Value vs Reference. Pointers (* and &). Pointer arithmetic. Const correctness.", "topics": ["Pointers", "References", "Memory Addresses"], "resources": [] },
            { "id": "cpp_3", "title": "Memory Management", "difficulty": "Advanced", "estimatedHours": 60, "content": "Stack vs Heap. Dynamic allocation (new/delete). Memory leaks and how to avoid them (RAII). Smart Pointers (unique_ptr, shared_ptr).", "topics": ["Stack", "Heap", "Smart Pointers", "RAII"], "resources": [] },
            { "id": "cpp_4", "title": "OOP in C++", "difficulty": "Advanced", "estimatedHours": 50, "content": "Classes, Objects. Access specifiers (public, private, protected). Inheritance. Polymorphism (Virtual functions).", "topics": ["OOP", "Virtual Functions", "Inheritance"], "resources": [] },
            { "id": "cpp_5", "title": "STL (Standard Template Library)", "difficulty": "Advanced", "estimatedHours": 60, "content": "Don't reinvent the wheel. Vectors, Lists, Maps, Sets. Algorithms (sort, find, binary_search). Iterators.", "topics": ["Vectors", "Maps", "Algorithms", "Iterators"], "resources": [] },
            { "id": "cpp_6", "title": "Templates", "difficulty": "Expert", "estimatedHours": 40, "content": "Generic programming. Function Templates and Class Templates. Template Metaprogramming basics.", "topics": ["Templates", "Generics"], "resources": [] }
        ]
    },
    "go": {
        "id": "go",
        "title": "Go",
        "description": "Simple, reliable, efficient software.",
        "icon": "🐹",
        "color": "#00add8",
        "estimatedTime": "2-3 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/golang",
        "milestones": [
            { "id": "go_1", "title": "Go Basics", "difficulty": "Beginner", "estimatedHours": 20, "content": "Packages (main), Imports, Variables (var, :=). Basic Types. Control structures (if, for, switch). No while loop!", "topics": ["Syntax", "Variables", "Loops"], "resources": [] },
            { "id": "go_2", "title": "Data Structures", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Arrays (fixed size) vs Slices (dynamic). Maps (key-value). Structs (custom types). Range keyword.", "topics": ["Slices", "Maps", "Structs"], "resources": [] },
            { "id": "go_3", "title": "Functions & Interfaces", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Multiple return values. Named return values. Interfaces are satisfied implicitly (duck typing). Defer keyword.", "topics": ["Functions", "Interfaces", "Defer"], "resources": [] },
            { "id": "go_4", "title": "Concurrency", "difficulty": "Advanced", "estimatedHours": 50, "content": "Goroutines (lightweight threads managed by Go runtime). Channels (typed conduits for data). Select statement. WaitGroups.", "topics": ["Goroutines", "Channels", "WaitGroup"], "resources": [] },
            { "id": "go_5", "title": "Error Handling", "difficulty": "Intermediate", "estimatedHours": 20, "content": "No exceptions. Errors are values. checking `if err != nil`. Custom error types.", "topics": ["Errors", "Panic", "Recover"], "resources": [] },
            { "id": "go_6", "title": "Go Modules & Testing", "difficulty": "Advanced", "estimatedHours": 30, "content": "Dependency management (go.mod). Built-in testing framework (go test). Writing benchmarks.", "topics": ["Modules", "Testing", "Benchmarks"], "resources": [] }
        ]
    },
    "rust": {
        "id": "rust",
        "title": "Rust",
        "description": "Performance and safety.",
        "icon": "🦀",
        "color": "#000000",
        "estimatedTime": "4-6 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/rust",
        "milestones": [
            { "id": "rs_1", "title": "Ownership", "difficulty": "Advanced", "estimatedHours": 50, "content": "The unique feature. Ownership, Borrowing, Lifetimes. Guarantees memory safety without Garbage Collection.", "topics": ["Ownership", "Borrowing", "Lifetimes"], "resources": [] },
            { "id": "rs_2", "title": "Traits", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Rust's version of interfaces. Shared behavior.", "topics": ["Traits", "Impl"], "resources": [] }
        ]
    },
    "php": {
        "id": "php",
        "title": "PHP",
        "description": "Server-side scripting.",
        "icon": "🐘",
        "color": "#777bb4",
        "estimatedTime": "2-3 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/php",
        "milestones": [
            { "id": "php_1", "title": "Basics", "difficulty": "Beginner", "estimatedHours": 20, "content": "Server-side rendering. Arrays (associative). Superglobals ($_GET, $_POST).", "topics": ["Syntax", "Arrays", "Forms"], "resources": [] },
            { "id": "php_2", "title": "Laravel", "difficulty": "Advanced", "estimatedHours": 40, "content": "The dominant framework. MVC structure, Eloquent ORM, Blade templates.", "topics": ["Laravel", "MVC", "ORM"], "resources": [] }
        ]
    },
    "docker": {
        "id": "docker",
        "title": "Docker",
        "description": "Containerization standard.",
        "icon": "🐳",
        "color": "#2496ed",
        "estimatedTime": "1 Month",
        "category": "Skill Based",
        "link": "https://roadmap.sh/docker",
        "milestones": [
            { "id": "dk_1", "title": "Basics", "difficulty": "Beginner", "estimatedHours": 15, "content": "Images vs Containers. Docker Hub. Basic commands (run, pull, build).", "topics": ["Images", "Containers", "CLI"], "resources": [] },
            { "id": "dk_2", "title": "Dockerfile", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Writing recipes for images. FROM, RUN, COPY, CMD.", "topics": ["Dockerfile", "Layers"], "resources": [] }
        ]
    },
    "kubernetes": {
        "id": "kubernetes",
        "title": "Kubernetes",
        "description": "Container orchestration.",
        "icon": "☸️",
        "color": "#326ce5",
        "estimatedTime": "3-5 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/kubernetes",
        "milestones": [
            { "id": "k8s_1", "title": "Concepts", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Pods, Services, Deployments. The declarative model.", "topics": ["Pods", "Services", "YAML"], "resources": [] },
            { "id": "k8s_2", "title": "Architecture", "difficulty": "Advanced", "estimatedHours": 30, "content": "Control Plane vs Worker Nodes.", "topics": ["Control Plane", "Nodes"], "resources": [] }
        ]
    },
    "aws": {
        "id": "aws",
        "title": "AWS",
        "description": "Amazon Web Services.",
        "icon": "☁️",
        "color": "#ff9900",
        "estimatedTime": "3-6 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/aws",
        "milestones": [
            { "id": "aws_1", "title": "Compute (EC2)", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Virtual machines in the cloud. Instance types, Security Groups (Firewalls).", "topics": ["EC2", "Security Groups"], "resources": [] },
            { "id": "aws_2", "title": "Storage (S3)", "difficulty": "Beginner", "estimatedHours": 10, "content": "Object storage. Buckets, Objects, Permissions.", "topics": ["S3", "Buckets"], "resources": [] },
            { "id": "aws_3", "title": "Networking (VPC)", "difficulty": "Advanced", "estimatedHours": 30, "content": "Virtual Private Cloud. Subnets, Route Tables, Internet Gateways.", "topics": ["VPC", "Subnets"], "resources": [] }
        ]
    },
    "linux": {
        "id": "linux",
        "title": "Linux",
        "description": "Open source operating system.",
        "icon": "🐧",
        "color": "#fcc624",
        "estimatedTime": "1-2 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/linux",
        "milestones": [
            { "id": "lnx_1", "title": "CLI Basics", "difficulty": "Beginner", "estimatedHours": 20, "content": "Navigating the filesystem. ls, cd, mkdir, rm, mv, cp. Man pages.", "topics": ["CLI", "Filesystem"], "resources": [] },
            { "id": "lnx_2", "title": "Permissions", "difficulty": "Intermediate", "estimatedHours": 15, "content": "Chmod, chown. User and Group management.", "topics": ["Permissions", "Users"], "resources": [] }
        ]
    },
    "sql": {
        "id": "sql",
        "title": "SQL",
        "description": "Structured Query Language.",
        "icon": "🗄️",
        "color": "#00bcd4",
        "estimatedTime": "1-2 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/sql",
        "milestones": [
            { "id": "sql_1", "title": "Queries", "difficulty": "Beginner", "estimatedHours": 20, "content": "SELECT * FROM. Filtering (WHERE). Sorting (ORDER BY).", "topics": ["SELECT", "WHERE", "ORDER BY"], "resources": [] },
            { "id": "sql_2", "title": "Joins", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Combining tables. INNER, LEFT, RIGHT, FULL Joins.", "topics": ["JOINS", "Relationships"], "resources": [] }
        ]
    },
    "mongodb": {
        "id": "mongodb",
        "title": "MongoDB",
        "description": "NoSQL Database.",
        "icon": "🍃",
        "color": "#47a248",
        "estimatedTime": "1 Month",
        "category": "Skill Based",
        "link": "https://roadmap.sh/mongodb",
        "milestones": [
            { "id": "mgo_1", "title": "Documents", "difficulty": "Beginner", "estimatedHours": 15, "content": "JSON-like documents. Collections vs Tables. Flexible Schema.", "topics": ["BSON", "Collections"], "resources": [] },
            { "id": "mgo_2", "title": "Aggregation", "difficulty": "Advanced", "estimatedHours": 25, "content": "Aggregation Pipelines. Match, Group, Sort stages.", "topics": ["Pipelines", "Match/Group"], "resources": [] }
        ]
    },
    "graphql": {
        "id": "graphql",
        "title": "GraphQL",
        "description": "Query language for APIs.",
        "icon": "⚛️",
        "color": "#e535ab",
        "estimatedTime": "1 Month",
        "category": "Skill Based",
        "link": "https://roadmap.sh/graphql",
        "milestones": [
            { "id": "gql_1", "title": "Schema", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Types, Query, Mutation. Defining the graph.", "topics": ["Schema SDL", "Types"], "resources": [] },
            { "id": "gql_2", "title": "Resolvers", "difficulty": "Advanced", "estimatedHours": 20, "content": "Functions that fetch the data for fields. Solving the N+1 problem.", "topics": ["Resolvers", "N+1 Problem"], "resources": [] }
        ]
    },
    "cybersecurity": {
        "id": "cybersecurity",
        "title": "Cyber Security",
        "description": "Protecting systems and networks.",
        "icon": "🔒",
        "color": "#d32f2f",
        "estimatedTime": "6-12 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/cyber-security",
        "milestones": [
            { "id": "cs_1", "title": "Network Security", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Firewalls, VPNs, IDS/IPS. OSI Model layers.", "topics": ["Networking", "Firewalls"], "resources": [] },
            { "id": "cs_2", "title": "Penetration Testing", "difficulty": "Advanced", "estimatedHours": 50, "content": "Ethical Hacking. Kali Linux. Metasploit. Identifying vulnerabilities.", "topics": ["Ethical Hacking", "Kali Linux"], "resources": [] }
        ]
    },
    "uxdesign": {
        "id": "uxdesign",
        "title": "UX Design",
        "description": "User Experience Design.",
        "icon": "🎨",
        "color": "#e91e63",
        "estimatedTime": "3-6 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/ux-design",
        "milestones": [
            { "id": "ux_1", "title": "Research", "difficulty": "Beginner", "estimatedHours": 30, "content": "User Personas, User Journeys. Interviews and Surveys.", "topics": ["User Research", "Personas"], "resources": [] },
            { "id": "ux_2", "title": "Prototyping", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Wireframing (Figma/Sketch). Low-fi vs Hi-fi prototypes.", "topics": ["Figma", "Wireframing"], "resources": [] }
        ]
    },
    "blockchain": {
        "id": "blockchain",
        "title": "Blockchain",
        "description": "Decentralized technology.",
        "icon": "🔗",
        "color": "#f57c00",
        "estimatedTime": "4-8 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/blockchain",
        "milestones": [
            { "id": "bc_1", "title": "Cryptography", "difficulty": "Advanced", "estimatedHours": 30, "content": "Hashing (SHA-256), Public/Private Keys, Digital Signatures.", "topics": ["Hashing", "Encryption"], "resources": [] },
            { "id": "bc_2", "title": "Smart Contracts", "difficulty": "Expert", "estimatedHours": 50, "content": "Solidity (Ethereum). Writing code that lives on chain.", "topics": ["Solidity", "Ethereum", "Web3.js"], "resources": [] }
        ]
    },
    "systemdesign": {
        "id": "systemdesign",
        "title": "System Design",
        "description": "Designing scalable systems.",
        "icon": "🏗️",
        "color": "#607d8b",
        "estimatedTime": "2-3 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/system-design",
        "milestones": [
            { "id": "sd_1", "title": "Concepts", "difficulty": "Advanced", "estimatedHours": 30, "content": "Load Balancing, Caching, Database Sharding, Replication.", "topics": ["Scalability", "Reliability"], "resources": [] },
            { "id": "sd_2", "title": "Interviews", "difficulty": "Expert", "estimatedHours": 20, "content": "Design Twitter, Design Uber. Standard interview questions.", "topics": ["Interview Prep", "Architecture"], "resources": [] }
        ]
    },
    "swift": {
        "id": "swift-ui",
        "title": "Swift",
        "description": "Apple's programming language.",
        "icon": "🍎",
        "color": "#f05138",
        "estimatedTime": "2-3 Months",
        "category": "Skill Based",
        "link": "https://roadmap.sh/swift",
        "milestones": [
            { "id": "sw_1", "title": "Basics", "difficulty": "Beginner", "estimatedHours": 20, "content": "Variables, Optionals, Control Flow.", "topics": ["Syntax", "Optionals"], "resources": [] }
        ]
    }
};
