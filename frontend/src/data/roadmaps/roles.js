export const roleRoadmaps = {
    "frontend": {
        "id": "frontend",
        "title": "Frontend Developer",
        "description": "Comprehensive guide to becoming a modern Frontend Developer.",
        "icon": "⚛️",
        "color": "#3b82f6",
        "estimatedTime": "6-9 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/frontend",
        "milestones": [
            { "id": "fe_1", "title": "Internet Fundamentals", "difficulty": "Beginner", "estimatedHours": 10, "content": "Before writing code, you must understand how the web works. Key concepts include HTTP/HTTPS (the protocol for transferring data), DNS (how domain names map to IPs), and Hosting. Browsers are the engine that renders code; understand how they interpret HTML/CSS.", "topics": ["HTTP/HTTPS", "DNS", "Domain Names", "Hosting", "Browsers"], "resources": [{ "title": "How the Internet Works (MDN)", "url": "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work" }] },
            { "id": "fe_2", "title": "HTML: The Skeleton", "difficulty": "Beginner", "estimatedHours": 20, "content": "HTML (HyperText Markup Language) provides the structure of web pages. Learn about Semantic HTML (using the right tag for the right job, like <article> vs <div>) which is crucial for SEO and accessibility. Master forms, inputs, and validations.", "topics": ["Semantic HTML", "Forms & Validations", "SEO Basics", "Accessibility (a11y)"], "resources": [] },
            { "id": "fe_3", "title": "CSS: Style", "difficulty": "Beginner", "estimatedHours": 40, "content": "Master the Box Model, Flexbox, and Grid. Responsive design with Media Queries is mandatory.", "topics": ["Box Model", "Flexbox", "Grid"], "resources": [] },
            { "id": "fe_4", "title": "JavaScript", "difficulty": "Intermediate", "estimatedHours": 60, "content": "The programming language of the web. DOM manipulation, Fetch API, and modern ES6+ syntax.", "topics": ["Variables", "Functions", "DOM", "ES6+"], "resources": [] },
            { "id": "fe_9", "title": "React", "difficulty": "Advanced", "estimatedHours": 80, "content": "The industry standard UI library. Components, Props, State, Hooks.", "topics": ["React", "Hooks", "Context"], "resources": [] }
        ]
    },
    "backend": {
        "id": "backend",
        "title": "Backend Developer",
        "description": "Server-side logic, databases, and APIs.",
        "icon": "🖥️",
        "color": "#8b5cf6",
        "estimatedTime": "8-12 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/backend",
        "milestones": [
            { "id": "be_1", "title": "OS & Knowledge", "difficulty": "Beginner", "estimatedHours": 30, "content": "Terminal usage, Process management, Basic Networking.", "topics": ["Terminal", "OS", "Networking"], "resources": [] },
            { "id": "be_2", "title": "Languages", "difficulty": "Intermediate", "estimatedHours": 60, "content": "Pick one: Node.js, Python, Go, Java, or PHP.", "topics": ["Languages", "Runtimes"], "resources": [] },
            { "id": "be_3", "title": "Databases", "difficulty": "Advanced", "estimatedHours": 60, "content": "Relational (PostgreSQL) and NoSQL (MongoDB). Design schemas.", "topics": ["SQL", "NoSQL", "ORM"], "resources": [] }
        ]
    },
    "devops": {
        "id": "devops",
        "title": "DevOps Engineer",
        "description": "Bridge between Development and Operations.",
        "icon": "♾️",
        "color": "#ef4444",
        "estimatedTime": "6-12 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/devops",
        "milestones": [
            { "id": "ops_1", "title": "Linux Fundamentals", "difficulty": "Intermediate", "estimatedHours": 50, "content": "Mastering the terminal is step zero. File manipulation (awk, sed, grep), Permissions (chmod, chown), Process management (ps, top, kill), and Networking basics (curl, ssh, netstat).", "topics": ["Bash", "VIM/Nano", "Permissions", "Networking"], "resources": [{ "title": "Linux Journey", "url": "https://linuxjourney.com/" }, { "title": "Command Line for Beginners", "url": "https://ubuntu.com/tutorials/command-line-for-beginners" }] },
            { "id": "ops_2", "title": "Git & CI/CD", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Version control is essential. Learn Git branching strategies. Then, automate testing and deployment using GitHub Actions or GitLab CI. Understand the pipeline concept: Build -> Test -> Deploy.", "topics": ["Git Flow", "GitHub Actions", "Pipelines", "Artifacts"], "resources": [{ "title": "Pro Git Book", "url": "https://git-scm.com/book/en/v2" }, { "title": "GitHub Actions", "url": "https://docs.github.com/en/actions" }] },
            { "id": "ops_3", "title": "Infrastructure as Code (IaC)", "difficulty": "Advanced", "estimatedHours": 60, "content": "Terraform is the industry standard. Stop clicking buttons in the AWS console. Define your infrastructure in HCL files. State management is key.", "topics": ["Terraform", "State Files", "Modules", "Providers"], "resources": [{ "title": "Terraform Intro", "url": "https://developer.hashicorp.com/terraform/intro" }, { "title": "Terraform Best Practices", "url": "https://www.terraform-best-practices.com/" }] },
            { "id": "ops_4", "title": "Containerization", "difficulty": "Advanced", "estimatedHours": 40, "content": "Docker allows consistent environments. Learn how to write Dockerfiles, build images, and optimize layer caching. Understand Multi-stage builds for smaller images.", "topics": ["Docker", "Dockerfiles", "Docker Compose", "Images"], "resources": [{ "title": "Docker Get Started", "url": "https://docs.docker.com/get-started/" }, { "title": "Docker Curriculum", "url": "https://docker-curriculum.com/" }] },
            { "id": "ops_5", "title": "Kubernetes (K8s)", "difficulty": "Expert", "estimatedHours": 80, "content": "The de-facto orchestrator. Pods, Deployments, Services, Ingres. Understanding the Control Plane vs Worker Nodes. Helm for package management.", "topics": ["Pods", "Kubectl", "Helm", "Ingress"], "resources": [{ "title": "Kubernetes Basics", "url": "https://kubernetes.io/docs/tutorials/kubernetes-basics/" }, { "title": "Helm Docs", "url": "https://helm.sh/docs/" }] },
            { "id": "ops_6", "title": "Cloud Providers (AWS)", "difficulty": "Advanced", "estimatedHours": 60, "content": "Pick one, mastering AWS is a safe bet. EC2 (Compute), S3 (Storage), VPC (Networking), IAM (Security/Permissions).", "topics": ["EC2", "S3", "VPC", "IAM"], "resources": [{ "title": "AWS Fundamentals", "url": "https://aws.amazon.com/getting-started/fundamentals-core-concepts/" }] },
            { "id": "ops_7", "title": "Monitoring & Observability", "difficulty": "Advanced", "estimatedHours": 40, "content": "If you can't measure it, you can't improve it. Prometheus for metrics, Grafana for visualization. ELK stack or Loki for logs.", "topics": ["Prometheus", "Grafana", "ELK", "Alerting"], "resources": [{ "title": "Prometheus Overview", "url": "https://prometheus.io/docs/introduction/overview/" }, { "title": "Grafana Tutorials", "url": "https://grafana.com/tutorials/" }] },
            { "id": "ops_8", "title": "Networking & Security", "difficulty": "Expert", "estimatedHours": 40, "content": "DNS, Load Balancers, Firewalls. Understanding OSI model layers (L4 vs L7 lb). SSL/TLS certificates.", "topics": ["DNS", "Load Balancing", "Firewalls", "SSL/TLS"], "resources": [{ "title": "How DNS Works", "url": "https://howdns.works/" }, { "title": "SSL/TLS Explained", "url": "https://www.cloudflare.com/learning/ssl/what-is-ssl/" }] }
        ]
    },
    "fullstack": {
        "id": "fullstack",
        "title": "Full Stack Developer",
        "description": "Mastering both ends of the stack.",
        "icon": "🚀",
        "color": "#f59e0b",
        "estimatedTime": "12+ Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/full-stack",
        "milestones": [
            { "id": "fs_1", "title": "Frontend (HTML/CSS/JS)", "difficulty": "Intermediate", "estimatedHours": 60, "content": "The visual layer. Semantic HTML, CSS Flexbox/Grid, and JavaScript ES6+ (Promises, Async/Await). DOM manipulation.", "topics": ["HTML5", "CSS3", "ES6+", "DOM"], "resources": [{ "title": "MDN Web Docs", "url": "https://developer.mozilla.org/" }, { "title": "CSS Tricks", "url": "https://css-tricks.com/" }] },
            { "id": "fs_2", "title": "Frontend Framework (React)", "difficulty": "Advanced", "estimatedHours": 60, "content": "Building complex UIs. Components, Hooks, State Management (Redux/Zustand), and Client-side Routing.", "topics": ["React", "Components", "Hooks", "State"], "resources": [{ "title": "React Documentation", "url": "https://react.dev/" }, { "title": "Redux Toolkit", "url": "https://redux-toolkit.js.org/" }] },
            { "id": "fs_3", "title": "Backend (Node.js/API)", "difficulty": "Advanced", "estimatedHours": 60, "content": "Server-side logic. Building REST APIs with Express.js. Understanding Middleware, Authentication (JWT), and Controllers.", "topics": ["Node.js", "Express", "REST API", "JWT"], "resources": [{ "title": "Node.js Integration", "url": "https://nodejs.org/en/docs/" }, { "title": "Express.js", "url": "https://expressjs.com/" }] },
            { "id": "fs_4", "title": "Databases (SQL & NoSQL)", "difficulty": "Advanced", "estimatedHours": 50, "content": "Storing data. Relational (PostgreSQL) for structured data, NoSQL (MongoDB) for flexible documents. ORMs like Prisma or Mongoose.", "topics": ["PostgreSQL", "MongoDB", "Prisma", "SQL"], "resources": [{ "title": "PostgreSQL Docs", "url": "https://www.postgresql.org/docs/" }, { "title": "MongoDB University", "url": "https://university.mongodb.com/" }] },
            { "id": "fs_5", "title": "Deployment & DevOps Basics", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Hosting your app. Vercel/Netlify for frontend, Render/Railway/AWS for backend. Basic CI/CD to deploy on git push.", "topics": ["Vercel", "AWS", "CI/CD", "Docker"], "resources": [{ "title": "Vercel Deployment", "url": "https://vercel.com/docs" }, { "title": "GitHub Actions", "url": "https://docs.github.com/en/actions" }] },
            { "id": "fs_6", "title": "System Design Basics", "difficulty": "Expert", "estimatedHours": 40, "content": "Scalability. Caching (Redis), Load Balancing, horizontal scaling. Designing simple architectures like URL shortener.", "topics": ["Caching", "Scalability", "Architecture", "Redis"], "resources": [{ "title": "System Design Primer", "url": "https://github.com/donnemartin/system-design-primer" }, { "title": "Redis Intro", "url": "https://redis.io/docs/about/" }] }
        ]
    },
    "android": {
        "id": "android",
        "title": "Android Developer",
        "description": "Mobile apps for Android.",
        "icon": "🤖",
        "color": "#3ddc84",
        "estimatedTime": "6-8 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/android",
        "milestones": [
            { "id": "and_1", "title": "Kotlin Programming", "difficulty": "Intermediate", "estimatedHours": 50, "content": "Kotlin is the primary language for Android. Master Variables, Null Safety (?!), Collections, and Higher-Order Functions. Learn Coroutines for asynchronous programming to keep the UI smooth.", "topics": ["Basics", "Null Safety", "Coroutines", "Flow"], "resources": [{ "title": "Official Kotlin Docs", "url": "https://kotlinlang.org/docs/home.html" }, { "title": "Kotlin Koans", "url": "https://play.kotlinlang.org/koans" }] },
            { "id": "and_2", "title": "Android SDK Basics", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Understand the building blocks. Activity Lifecycle, Fragments (even with Compose, understanding them helps), Intents for navigation, and the Android Manifest file.", "topics": ["Activity Lifecycle", "Intents", "Manifest", "Gradle"], "resources": [{ "title": "Activity Lifecycle", "url": "https://developer.android.com/guide/components/activities/activity-lifecycle" }, { "title": "Intents and Filters", "url": "https://developer.android.com/guide/components/intents-filters" }] },
            { "id": "and_3", "title": "Jetpack Compose", "difficulty": "Advanced", "estimatedHours": 60, "content": "The modern UI toolkit. Shift from XML to declarative UI. Learn Composables, State hoisting, Recomposition, and Lazy layouts (LazyColumn/LazyRow).", "topics": ["Composables", "State Management", "LazyColumn", "Modifiers"], "resources": [{ "title": "Compose Documentation", "url": "https://developer.android.com/jetpack/compose" }, { "title": "Compose Pathway", "url": "https://developer.android.com/courses/pathways/compose" }] },
            { "id": "and_4", "title": "Navigation & Architecture", "difficulty": "Advanced", "estimatedHours": 40, "content": "Building single-activity apps. Navigation Compose. MVVM (Model-View-ViewModel) architecture is standard. Unidirectional Data Flow (UDF).", "topics": ["Navigation Compose", "MVVM", "UDF", "ViewModel"], "resources": [{ "title": "Navigation with Compose", "url": "https://developer.android.com/guide/navigation/navigation-compose" }, { "title": "Guide to App Architecture", "url": "https://developer.android.com/topic/architecture" }] },
            { "id": "and_5", "title": "Networking & API", "difficulty": "Advanced", "estimatedHours": 30, "content": "Apps need data. Retrofit is the standard HTTP client. OkHttp for interceptors. Moshi/Kotlin Serialization for JSON parsing. Handle loading states and errors gracefully.", "topics": ["Retrofit", "OkHttp", "JSON Parsing", "REST APIs"], "resources": [{ "title": "Retrofit Documentation", "url": "https://square.github.io/retrofit/" }, { "title": "Kotlin Serialization", "url": "https://github.com/Kotlin/kotlinx.serialization" }] },
            { "id": "and_6", "title": "Local Storage", "difficulty": "Advanced", "estimatedHours": 30, "content": "Offline capability. Room (SQL abstraction) for complex structured data. DataStore for simple key-value pairs (replacing SharedPreferences).", "topics": ["Room Database", "DataStore", "SQL"], "resources": [{ "title": "Save data in a local DB", "url": "https://developer.android.com/training/data-storage/room" }, { "title": "DataStore", "url": "https://developer.android.com/topic/libraries/architecture/datastore" }] },
            { "id": "and_7", "title": "Dependency Injection", "difficulty": "Expert", "estimatedHours": 40, "content": "managing dependencies. Hilt is the built-in recommendation (wrapper around Dagger). Koin is a popular Kotlin-first alternative.", "topics": ["Hilt", "Dagger", "Koin", "Dependency Injection"], "resources": [{ "title": "Dependency Injection with Hilt", "url": "https://developer.android.com/training/dependency-injection/hilt-android" }, { "title": "Koin Framework", "url": "https://insert-koin.io/" }] },
            { "id": "and_8", "title": "Background Work", "difficulty": "Advanced", "estimatedHours": 20, "content": "Tasks that run when the app is closed. WorkManager is the API for reliable, deferrable background work (e.g. uploading logs, syncing data).", "topics": ["WorkManager", "Services", "Background Sync"], "resources": [{ "title": "Schedule tasks with WorkManager", "url": "https://developer.android.com/topic/libraries/architecture/workmanager" }] },
            { "id": "and_9", "title": "Testing", "difficulty": "Advanced", "estimatedHours": 30, "content": "Don't ship bugs. Unit Tests (JUnit, Mockk) for logic. UI Tests (Compose Test Rule, Espresso) for screens. Flaky tests are the enemy.", "topics": ["JUnit", "Mockk", "Espresso", "Compose Testing"], "resources": [{ "title": "Test your app", "url": "https://developer.android.com/training/testing" }, { "title": "Mockk", "url": "https://mockk.io/" }] },
            { "id": "and_10", "title": "Publishing", "difficulty": "Intermediate", "estimatedHours": 10, "content": "Getting onto the Play Store. App Bundles (.aab) vs APKs. ProGuard/R8 for removing unused code and obfuscation. Play Console management.", "topics": ["Play Store", "App Bundles", "R8/ProGuard"], "resources": [{ "title": "Publish your app", "url": "https://developer.android.com/studio/publish" }, { "title": "Shrink, obfuscate, and optimize", "url": "https://developer.android.com/build/shrink-code" }] }
        ]
    },
    "ios": {
        "id": "ios",
        "title": "iOS Developer",
        "description": "Mobile apps for iOS.",
        "icon": "📱",
        "color": "#000000",
        "estimatedTime": "6-8 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/ios",
        "milestones": [
            { "id": "ios_1", "title": "Swift Basics", "difficulty": "Beginner", "estimatedHours": 40, "content": "Swift is a modern, type-safe language. Learn Variables, Collections, Optionals (?!), Control Flow, and Functions.", "topics": ["Variables", "Optionals", "Functions", "Loops"], "resources": [{ "title": "The Swift Programming Language", "url": "https://docs.swift.org/swift-book/" }] },
            { "id": "ios_2", "title": "Object Oriented Swift", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Classes vs Structs (Reference vs Value types). Protocols (Interfaces). Extensions to add functionality to existing types.", "topics": ["Classes", "Structs", "Protocols", "Extensions"], "resources": [{ "title": "Swift Classes and Structures", "url": "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/" }] },
            { "id": "ios_3", "title": "SwiftUI Framework", "difficulty": "Advanced", "estimatedHours": 60, "content": "Apple's declarative UI. Views, Modifiers, State (@State, @Binding), and ObservableObjects. Building responsive layouts.", "topics": ["SwiftUI", "Views", "State Management", "Layouts"], "resources": [{ "title": "SwiftUI Overview", "url": "https://developer.apple.com/xcode/swiftui/" }, { "title": "100 Days of SwiftUI", "url": "https://www.hackingwithswift.com/100/swiftui" }] },
            { "id": "ios_4", "title": "Networking", "difficulty": "Advanced", "estimatedHours": 30, "content": "Fetching data from APIs. URLSession is the native API. Parsing JSON with Codable protocol (Encodable/Decodable).", "topics": ["URLSession", "JSON", "Codable", "APIs"], "resources": [{ "title": "URLSession", "url": "https://developer.apple.com/documentation/foundation/url_loading_system" }] },
            { "id": "ios_5", "title": "Core Data & Persistence", "difficulty": "Expert", "estimatedHours": 40, "content": "Saving data on device. UserDefaults for settings, Core Data (or SwiftData) for complex objects. Application logic persistence.", "topics": ["Core Data", "SwiftData", "UserDefaults"], "resources": [{ "title": "Core Data", "url": "https://developer.apple.com/documentation/coredata" }] },
            { "id": "ios_6", "title": "Concurrency (GCD/Async Await)", "difficulty": "Advanced", "estimatedHours": 30, "content": "Running tasks off the main thread. Grand Central Dispatch (GCD) is the old way, async/await is the modern standard.", "topics": ["Async/Await", "GCD", "MainActor", "Tasks"], "resources": [{ "title": "Swift Concurrency", "url": "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" }] },
            { "id": "ios_7", "title": "App Store & Publishing", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Provisioning Profiles, Certificates, TestFlight. Guidelines for submitting to the App Store.", "topics": ["App Store Connect", "TestFlight", "Certificates"], "resources": [{ "title": "App Store Connect", "url": "https://appstoreconnect.apple.com/" }] }
        ]
    },
    "qa": {
        "id": "qa",
        "title": "QA Engineer",
        "description": "Quality Assurance.",
        "icon": "✅",
        "color": "#22c55e",
        "estimatedTime": "3-5 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/qa",
        "milestones": [
            { "id": "qa_1", "title": "QA Fundamentals", "difficulty": "Beginner", "estimatedHours": 30, "content": "Understanding the SDLC (Software Development Life Cycle). Difference between Verification and Validation. Bug Life Cycle.", "topics": ["SDLC", "STLC", "Bug Life Cycle"], "resources": [{ "title": "Software Testing Help", "url": "https://www.softwaretestinghelp.com/" }, { "title": "Guru99 QA", "url": "https://www.guru99.com/software-testing.html" }] },
            { "id": "qa_2", "title": "Manual Testing", "difficulty": "Beginner", "estimatedHours": 40, "content": "Writing effective Test Plans and Test Cases. Black Box vs White Box testing. Regression testing vs Sanity testing.", "topics": ["Test Plans", "Test Cases", "Regression", "Exploratory"], "resources": [{ "title": "Test Case Template", "url": "https://www.guru99.com/test-case.html" }] },
            { "id": "qa_3", "title": "API Testing", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Testing without a UI. Postman is the industry standard. Understanding HTTP Status Codes (200, 404, 500).", "topics": ["Postman", "REST", "Status Codes", "JSON"], "resources": [{ "title": "Postman Learning Center", "url": "https://learning.postman.com/" }] },
            { "id": "qa_4", "title": "Web Automation (Selenium/Cypress)", "difficulty": "Advanced", "estimatedHours": 60, "content": "Automating browser interactions. Selenium is classic, Cypress/Playwright are modern. Selectors (XPath, CSS). Page Object Model.", "topics": ["Selenium", "Cypress", "Playwright", "POM"], "resources": [{ "title": "Selenium Dev", "url": "https://www.selenium.dev/" }, { "title": "Cypress Docs", "url": "https://docs.cypress.io/" }] },
            { "id": "qa_5", "title": "Performance Testing", "difficulty": "Advanced", "estimatedHours": 30, "content": "Load Testing using JMeter or k6. Stress testing to break the system. Analyzing bottlenecks.", "topics": ["JMeter", "Load Testing", "Stress Testing"], "resources": [{ "title": "JMeter Apache", "url": "https://jmeter.apache.org/" }] },
            { "id": "qa_6", "title": "CI/CD Integration", "difficulty": "Advanced", "estimatedHours": 20, "content": "Running tests automatically in the pipeline. Jenkins, GitHub Actions. Failing the build on test failure.", "topics": ["CI/CD", "Jenkins", "Automated Runs"], "resources": [{ "title": "Jenkins User Doc", "url": "https://www.jenkins.io/doc/" }] }
        ]
    },
    "softwarearchitect": {
        "id": "softwarearchitect",
        "title": "Software Architect",
        "description": "Designing systems.",
        "icon": "🏛️",
        "color": "#607d8b",
        "estimatedTime": "12+ Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/software-architect",
        "milestones": [
            { "id": "sa_1", "title": "Patterns", "difficulty": "Advanced", "estimatedHours": 50, "content": "Microservices, Event-Driven, Monolith.", "topics": ["Patterns"], "resources": [] }
        ]
    },
    "technicalwriter": {
        "id": "technicalwriter",
        "title": "Technical Writer",
        "description": "Documentation specialist.",
        "icon": "✍️",
        "color": "#667eea",
        "estimatedTime": "3-4 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/technical-writer",
        "milestones": [
            { "id": "tw_1", "title": "Writing Fundamentals", "difficulty": "Beginner", "estimatedHours": 40, "content": "Mastering the English language. Grammar, Syntax, and Punctuation (Oxford Comma matters!). Style Guides (Google Developer Style Guide, Microsoft Manual of Style). Active Voice vs Passive Voice.", "topics": ["Grammar", "Style Guides", "Active Voice"], "resources": [{ "title": "Google Developer Style Guide", "url": "https://developers.google.com/style" }, { "title": "Microsoft Manual of Style", "url": "https://learn.microsoft.com/en-us/style-guide/welcome/" }] },
            { "id": "tw_2", "title": "Markup Languages", "difficulty": "Beginner", "estimatedHours": 30, "content": "Writing in Markdown. Understanding HTML/XML basics. RST (reStructuredText) for Python docs. AsciiDoc for enterprise docs.", "topics": ["Markdown", "HTML", "RST", "AsciiDoc"], "resources": [{ "title": "Markdown Guide", "url": "https://www.markdownguide.org/" }] },
            { "id": "tw_3", "title": "Docs as Code", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Treating documentation like software. Git version control. Static Site Generators (SSG) like Docusaurus, Jekyll, or MkDocs. CI/CD for docs.", "topics": ["Git", "Docusaurus", "SSG", "CI/CD"], "resources": [{ "title": "Docs as Code", "url": "https://www.writethedocs.org/guide/docs-as-code/" }] },
            { "id": "tw_4", "title": "API Documentation", "difficulty": "Advanced", "estimatedHours": 50, "content": "The highest paid skill. Documenting REST APIs. OpenAPI Specification (Swagger). Postman collections. Authentication docs.", "topics": ["OpenAPI", "Swagger", "REST", "JSON"], "resources": [{ "title": "Documenting APIs", "url": "https://idratherbewriting.com/learnapidoc/" }] },
            { "id": "tw_5", "title": "Information Architecture", "difficulty": "Advanced", "estimatedHours": 30, "content": "Organizing contect. Taxonomy, Navigation structures, Searchability. User Personas.", "topics": ["Taxonomy", "Navigation", "UX Writing"], "resources": [{ "title": "Information Architecture", "url": "https://www.usability.gov/what-and-why/information-architecture.html" }] }
        ]
    },
    "gamedeveloper": {
        "id": "gamedeveloper",
        "title": "Game Developer",
        "description": "Creating video games.",
        "icon": "🎮",
        "color": "#9c27b0",
        "estimatedTime": "6-12 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/game-developer",
        "milestones": [
            { "id": "gd_1", "title": "Game Design Basics", "difficulty": "Beginner", "estimatedHours": 40, "content": "What makes a game fun? Mechanics, Dynamics, Aesthetics (MDA Framework). Level Design principles. Game Loops.", "topics": ["Game Loop", "Level Design", "MDA"], "resources": [{ "title": "Game Design Patterns", "url": "https://gameprogrammingpatterns.com/" }] },
            { "id": "gd_2", "title": "Unity Engine", "difficulty": "Intermediate", "estimatedHours": 80, "content": "Mastering the engine. C# Scripting. GameObjects, Prefabs, Components. Physics (Rigidbody, Colliders). UI System (Canvas).", "topics": ["Unity", "C#", "Physics", "Prefabs"], "resources": [{ "title": "Unity Learn", "url": "https://learn.unity.com/" }] },
            { "id": "gd_3", "title": "Unreal Engine (Alternative)", "difficulty": "Intermediate", "estimatedHours": 80, "content": "Visual Scripting with Blueprints. C++ for performance. High fidelity graphics (Lumen, Nanite).", "topics": ["Unreal", "Blueprints", "C++"], "resources": [{ "title": "Unreal Engine Docs", "url": "https://docs.unrealengine.com/" }] },
            { "id": "gd_4", "title": "Math for Games", "difficulty": "Advanced", "estimatedHours": 50, "content": "3D Math. Vectors (Dot/Cross Product), Quaternions (Rotation), Matrices. Collision Detection algorithms.", "topics": ["Vectors", "Matrix", "Quaternions"], "resources": [{ "title": "3D Math Primer", "url": "https://gamemath.com/" }] },
            { "id": "gd_5", "title": "Graphics & Shaders", "difficulty": "Expert", "estimatedHours": 60, "content": "How rendering works. The Graphics Pipeline. Writing Shaders (HLSL/GLSL). Lighting models (PBR). Optimization (Draw calls).", "topics": ["Shaders", "GLSL", "Rendering", "Optimization"], "resources": [{ "title": "The Book of Shaders", "url": "https://thebookofshaders.com/" }] }
        ]
    },
    "dataanalyst": {
        "id": "dataanalyst",
        "title": "Data Analyst",
        "description": "Analyzing data.",
        "icon": "📈",
        "color": "#20b2aa",
        "estimatedTime": "4-6 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/data-analyst",
        "milestones": [
            { "id": "da_1", "title": "Excel & Spreadsheets", "difficulty": "Beginner", "estimatedHours": 30, "content": "The universal tool. Learn Pivot Tables, VLOOKUP/XLOOKUP, and basic data cleaning. Power Query is a bonus.", "topics": ["Excel", "Pivot Tables", "VLOOKUP", "Data Cleaning"], "resources": [{ "title": "Excel Guide (Microsoft)", "url": "https://support.microsoft.com/en-us/excel" }] },
            { "id": "da_2", "title": "Statistics & Maths", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Understanding the data. Mean, Median, Mode. Standard Deviation. Probability distributions. Confidence intervals.", "topics": ["Statistics", "Probability", "Distributions"], "resources": [{ "title": "Statistics by Jim", "url": "https://statisticsbyjim.com/" }, { "title": "Khan Academy Statistics", "url": "https://www.khanacademy.org/math/statistics-probability" }] },
            { "id": "da_3", "title": "SQL for Analytics", "difficulty": "Intermediate", "estimatedHours": 50, "content": "Querying data. SELECT, FROM, WHERE. Aggregations (GROUP BY, SUM, AVG). Joins (INNER, LEFT). Window Functions (RANK, ROW_NUMBER) occupy the advanced tier.", "topics": ["SQL", "Joins", "Aggregations", "Window Functions"], "resources": [{ "title": "SQLZoo", "url": "https://sqlzoo.net/" }, { "title": "Mode SQL Tutorial", "url": "https://mode.com/sql-tutorial/" }] },
            { "id": "da_4", "title": "Data Visualization (BI Tools)", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Storytelling with data. Tableau or PowerBI. Creating dashboards. Choosing the right chart (Bar vs Line vs Scatter).", "topics": ["Tableau", "PowerBI", "Dashboards", "Storytelling"], "resources": [{ "title": "Tableau Public", "url": "https://public.tableau.com/en-us/s/" }, { "title": "PowerBI Learning", "url": "https://learn.microsoft.com/en-us/power-bi/" }] },
            { "id": "da_5", "title": "Python for Data (Pandas)", "difficulty": "Advanced", "estimatedHours": 50, "content": "Beyond Excel. Pandas for data manipulation. Matplotlib/Seaborn for plotting. Jupyter Notebooks for reproducible analysis.", "topics": ["Pandas", "Matplotlib", "Jupyter", "DataFrames"], "resources": [{ "title": "Pandas Docs", "url": "https://pandas.pydata.org/" }, { "title": "RealPython Data Science", "url": "https://realpython.com/tutorials/data-science/" }] },
            { "id": "da_6", "title": "Business Acumen", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Asking the right questions. KPI (Key Performance Indicator) definition. Understanding business metrics (churn, retention, ARPU).", "topics": ["KPIs", "Metrics", "Strategy", "Communication"], "resources": [{ "title": "Lean Analytics Book", "url": "http://leananalyticsbook.com/" }] }
        ]
    },
    "aiengineer": {
        "id": "aiengineer",
        "title": "AI Engineer",
        "description": "Building AI apps.",
        "icon": "🧠",
        "color": "#8b5cf6",
        "estimatedTime": "12+ Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/ai-engineer",
        "milestones": [
            { "id": "ai_1", "title": "Python & AI Basics", "difficulty": "Intermediate", "estimatedHours": 50, "content": "Python is the lingua franca. Numpy for numerical computing, Pandas for data processing. PyTorch or TensorFlow fundamentals.", "topics": ["Python", "Numpy", "PyTorch", "TensorFlow"], "resources": [{ "title": "PyTorch Tutorials", "url": "https://pytorch.org/tutorials/" }, { "title": "TensorFlow Guide", "url": "https://www.tensorflow.org/guide" }] },
            { "id": "ai_2", "title": "Deep Learning Fundamentals", "difficulty": "Advanced", "estimatedHours": 60, "content": "Neural Networks. Perceptrons, Backpropagation, Loss Functions, Optimizers (SGD, Adam). CNNs for Vision (optional), RNNs/LSTMs.", "topics": ["Neural Networks", "Backprop", "Optimizers", "Deep Learning"], "resources": [{ "title": "Deep Learning Book", "url": "https://www.deeplearningbook.org/" }, { "title": "Fast.ai", "url": "https://www.fast.ai/" }] },
            { "id": "ai_3", "title": "Transformers & NLP", "difficulty": "Expert", "estimatedHours": 60, "content": "The architecture that changed everything. Attention Mechanism. BERT, GPT. Tokenization, Embeddings. Hugging Face Library.", "topics": ["Attention", "Transformers", "BERT", "Hugging Face"], "resources": [{ "title": "Hugging Face NLP Course", "url": "https://huggingface.co/learn/nlp-course" }, { "title": "The Illustrated Transformer", "url": "https://jalammar.github.io/illustrated-transformer/" }] },
            { "id": "ai_4", "title": "LLMs & Prompt Engineering", "difficulty": "Expert", "estimatedHours": 40, "content": "Working with Large Language Models. Zero-shot, Few-shot prompting. Chain of Thought. OpenAI API, Anthropic, Gemini.", "topics": ["LLMs", "Prompting", "OpenAI API", "Context Window"], "resources": [{ "title": "OpenAI Prompt Engineering", "url": "https://platform.openai.com/docs/guides/prompt-engineering" }, { "title": "Anthropic Prompt Library", "url": "https://docs.anthropic.com/claude/prompt-library" }] },
            { "id": "ai_5", "title": "RAG (Retrieval Augmented Generation)", "difficulty": "Expert", "estimatedHours": 50, "content": "Connecting LLMs to your data. Vector Databases (Pinecone, Chroma). Embeddings. LangChain or LlamaIndex frameworks.", "topics": ["RAG", "Vector DB", "LangChain", "Embeddings"], "resources": [{ "title": "LangChain Docs", "url": "https://python.langchain.com/docs/get_started/introduction" }, { "title": "Pinecone Learning Center", "url": "https://www.pinecone.io/learn/" }] },
            { "id": "ai_6", "title": "Fine-Tuning", "difficulty": "Expert", "estimatedHours": 40, "content": "Adapting models to specific tasks. LoRA (Low-Rank Adaptation), PEFT. Instruction Tuning. RLHF (Reinforcement Learning from Human Feedback).", "topics": ["PEFT", "LoRA", "Fine-Tuning", "RLHF"], "resources": [{ "title": "Hugging Face PEFT", "url": "https://huggingface.co/docs/peft/index" }] },
            { "id": "ai_7", "title": "AI Agents", "difficulty": "Expert", "estimatedHours": 40, "content": "Autonomous systems. ReAct pattern (Reasoning + Acting). Tool use. AutoGPT, BabyAGI concepts.", "topics": ["Agents", "ReAct", "Tool Use", "Autonomy"], "resources": [{ "title": "LangChain Agents", "url": "https://python.langchain.com/docs/modules/agents/" }] }
        ]
    },
    // === RE-ADDED ROLES ===
    "machinelearning": {
        "id": "machinelearning",
        "title": "Machine Learning",
        "description": "Building predictive models.",
        "icon": "🤖",
        "color": "#f97316",
        "estimatedTime": "9-12 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/machine-learning",
        "milestones": [
            { "id": "ml_1", "title": "Mathematics for ML", "difficulty": "Intermediate", "estimatedHours": 60, "content": "The foundation. Linear Algebra (Vectors, Matrices), Calculus (Derivatives, Gradients), Probability, and Statistics (Distributions, Hypothesis Testing).", "topics": ["Linear Algebra", "Calculus", "Probability", "Statistics"], "resources": [{ "title": "Mathematics for Machine Learning", "url": "https://mml-book.github.io/" }, { "title": "Khan Academy Stats", "url": "https://www.khanacademy.org/math/statistics-probability" }] },
            { "id": "ml_2", "title": "Data Preprocessing", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Cleaning data. Handling missing values. Feature Engineering (Scaling, Normalization, Encoding). Splitting data into Train/Test/Validation sets.", "topics": ["Pandas", "Scikit-Learn", "Feature Scaling", "Imputation"], "resources": [{ "title": "Scikit-Learn Preprocessing", "url": "https://scikit-learn.org/stable/modules/preprocessing.html" }, { "title": "Pandas User Guide", "url": "https://pandas.pydata.org/docs/user_guide/index.html" }] },
            { "id": "ml_3", "title": "Supervised Learning", "difficulty": "Advanced", "estimatedHours": 50, "content": "Learning with labels. Regression (Linear, Logistic). Classification (Decision Trees, SVM, Random Forest). Ensembling methods (Gradient Boosting, XGBoost).", "topics": ["Regression", "Classification", "Decision Trees", "XGBoost"], "resources": [{ "title": "Supervised Learning (Scikit-Learn)", "url": "https://scikit-learn.org/stable/supervised_learning.html" }] },
            { "id": "ml_4", "title": "Unsupervised Learning", "difficulty": "Advanced", "estimatedHours": 40, "content": "Learning without labels. Clustering (K-Means, DBSCAN). Dimensionality Reduction (PCA, t-SNE). Association Rule Mining.", "topics": ["Clustering", "PCA", "K-Means", "Dimensionality Reduction"], "resources": [{ "title": "Unsupervised Learning (Scikit-Learn)", "url": "https://scikit-learn.org/stable/unsupervised_learning.html" }] },
            { "id": "ml_5", "title": "Model Evaluation", "difficulty": "Advanced", "estimatedHours": 30, "content": "How good is the model? Metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC. Confusion Matrix. Cross-Validation (K-Fold). Overfitting vs Underfitting (Bias-Variance Tradeoff).", "topics": ["Cross-Validation", "F1-Score", "ROC Curve", "Bias-Variance"], "resources": [{ "title": "Model Evaluation (Scikit-Learn)", "url": "https://scikit-learn.org/stable/modules/model_evaluation.html" }] },
            { "id": "ml_6", "title": "Deployment (MLOps Basics)", "difficulty": "Expert", "estimatedHours": 40, "content": "Putting models into production. Saving/Loading models (Pickle, Joblib). Serving via API (FastAPI, Flask). Monitoring model drift.", "topics": ["MLOps", "FastAPI", "Model Serving", "Drift"], "resources": [{ "title": "FastAPI with ML", "url": "https://fastapi.tiangolo.com/tutorial/" }] }
        ]
    },
    "dataengineer": {
        "id": "dataengineer",
        "title": "Data Engineer",
        "description": "Building data pipelines.",
        "icon": "🗄️",
        "color": "#795548",
        "estimatedTime": "8-12 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/data-engineer",
        "milestones": [
            { "id": "de_1", "title": "Data Modeling", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Structure your data. Normalization vs Denormalization. Star Schema vs Snowflake Schema. Fact Tables vs Dimension Tables.", "topics": ["Data Modeling", "Warehousing", "Star Schema"], "resources": [{ "title": "Data Warehouse Toolkit", "url": "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-toolkit/" }] },
            { "id": "de_2", "title": "Big Data Frameworks (Spark)", "difficulty": "Advanced", "estimatedHours": 80, "content": "Processing massive datasets. Apache Spark is King. RDDs vs DataFrames. PySpark. Handling TBs of data.", "topics": ["Spark", "PySpark", "Hadoop", "MapReduce"], "resources": [{ "title": "Spark Documentation", "url": "https://spark.apache.org/docs/latest/" }] },
            { "id": "de_3", "title": "Streaming Data (Kafka)", "difficulty": "Advanced", "estimatedHours": 60, "content": "Real-time pipelines. Apache Kafka architecture: Producers, Consumers, Brokers, Zookeeper/KRaft. Topics and Partitions.", "topics": ["Kafka", "Streaming", "Real-time"], "resources": [{ "title": "Kafka Documentation", "url": "https://kafka.apache.org/documentation/" }] },
            { "id": "de_4", "title": "Orchestration (Airflow)", "difficulty": "Advanced", "estimatedHours": 40, "content": "Managing dependency graphs (DAGs). Apache Airflow is the standard. Scheduling jobs, retries, and monitoring.", "topics": ["Airflow", "DAGs", "Orchestration"], "resources": [{ "title": "Apache Airflow", "url": "https://airflow.apache.org/" }] },
            { "id": "de_5", "title": "Cloud Data Warehouses", "difficulty": "Advanced", "estimatedHours": 40, "content": "Modern storage. Snowflake, Google BigQuery, or Amazon Redshift. Separation of Compute and Storage.", "topics": ["Snowflake", "BigQuery", "Redshift"], "resources": [{ "title": "Snowflake Docs", "url": "https://docs.snowflake.com/" }] },
            { "id": "de_6", "title": "Data Lakes", "difficulty": "Advanced", "estimatedHours": 30, "content": "Storing raw data. S3/GCS. File formats: Parquet, Avro, ORC (Columnar storage is key). Data Catalogs (Glue).", "topics": ["Data Lake", "Parquet", "S3"], "resources": [{ "title": "Data Lake Architecture", "url": "https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/" }] }
        ]
    },
    "mlops": {
        "id": "mlops",
        "title": "MLOps",
        "description": "Operations for ML.",
        "icon": "⚡",
        "color": "#607d8b",
        "estimatedTime": "6-9 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/mlops",
        "milestones": [
            { "id": "mlo_1", "title": "Experiment Tracking", "difficulty": "Intermediate", "estimatedHours": 30, "content": "No more spreadsheets. MLflow or Weights & Biases. Logging params, metrics, and artifacts. Reproducibility is the goal.", "topics": ["MLflow", "W&B", "Tracking"], "resources": [{ "title": "MLflow Tracking", "url": "https://mlflow.org/docs/latest/tracking.html" }] },
            { "id": "mlo_2", "title": "Model Serving & Deployment", "difficulty": "Advanced", "estimatedHours": 40, "content": "REST APIs (FastAPI), TorchServe, TensorFlow Serving. KServe for serverless. ONNX Runtime for interoperability.", "topics": ["Serving", "FastAPI", "KServe", "ONNX"], "resources": [{ "title": "TorchServe", "url": "https://pytorch.org/serve/" }] },
            { "id": "mlo_3", "title": "Model Monitoring", "difficulty": "Advanced", "estimatedHours": 30, "content": "Data Drift and Concept Drift. Prometheus + Grafana for metrics. Evidently AI for detecting drift.", "topics": ["Drift", "Monitoring", "Evidently"], "resources": [{ "title": "Evidently AI", "url": "https://www.evidentlyai.com/" }] },
            { "id": "mlo_4", "title": "Feature Stores", "difficulty": "Expert", "estimatedHours": 30, "content": "Consistent features for training and serving. Feast or Tecton. Point-in-time correctness.", "topics": ["Feast", "Feature Store"], "resources": [{ "title": "Feast Docs", "url": "https://feast.dev/" }] },
            { "id": "mlo_5", "title": "Kubeflow & Pipelines", "difficulty": "Expert", "estimatedHours": 60, "content": "End-to-end ML on Kubernetes. Kubeflow Pipelines. TFX (TensorFlow Extended). Automated training triggers.", "topics": ["Kubeflow", "TFX", "Pipelines"], "resources": [{ "title": "Kubeflow", "url": "https://www.kubeflow.org/" }] }
        ]
    },
    "productmanager": {
        "id": "productmanager",
        "title": "Product Manager",
        "description": "Leading product.",
        "icon": "📋",
        "color": "#3f51b5",
        "estimatedTime": "3-6 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/product-manager",
        "milestones": [
            { "id": "pm_1", "title": "Product Lifecycle", "difficulty": "Intermediate", "estimatedHours": 40, "content": "From Idea to Launch (and sunset). Discovery, Definition, Design, Development, Delivery. The Double Diamond design process.", "topics": ["Lifecycle", "Discovery", "Delivery"], "resources": [{ "title": "Atlassian Product Guide", "url": "https://www.atlassian.com/agile/product-management" }] },
            { "id": "pm_2", "title": "Prioritization Frameworks", "difficulty": "Intermediate", "estimatedHours": 20, "content": "Deciding what to build. RICE (Reach, Impact, Confidence, Effort), MoSCoW, Kano Model. Saying 'No' effectively.", "topics": ["RICE", "MoSCoW", "Prioritization"], "resources": [{ "title": "RICE Framework", "url": "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" }] },
            { "id": "pm_3", "title": "Agile & Scrum", "difficulty": "Intermediate", "estimatedHours": 30, "content": "How software gets built. Sprints, Standups, Retrospectives. Writing User Stories and Acceptance Criteria (Gherkin syntax).", "topics": ["Agile", "Scrum", "User Stories"], "resources": [{ "title": "Scrum Guide", "url": "https://scrumguides.org/" }] },
            { "id": "pm_4", "title": "Metrics & Analytics", "difficulty": "Advanced", "estimatedHours": 30, "content": "Measuring success. Pirate Metrics (AARRR). north Star Metric. Cohort Analysis. NPS and CSAT.", "topics": ["AARRR", "North Star", "Cohorts"], "resources": [{ "title": "Amplitude Analytics", "url": "https://amplitude.com/blog/product-analytics-guide" }] }
        ]
    },
    "engineeringmanager": {
        "id": "engineeringmanager",
        "title": "Engineering Manager",
        "description": "Leading teams.",
        "icon": "👔",
        "color": "#2196f3",
        "estimatedTime": "Indefinite",
        "category": "Role Based",
        "link": "https://roadmap.sh/engineering-manager",
        "milestones": [
            { "id": "em_1", "title": "People Management", "difficulty": "Advanced", "estimatedHours": 50, "content": "1-on-1s are your most important meeting. Coaching vs Mentoring. Performance Reviews. Radical Candor.", "topics": ["1-on-1s", "Coaching", "Performance"], "resources": [{ "title": "The Manager's Path", "url": "https://www.oreilly.com/library/view/the-managers-path/9781491973882/" }] },
            { "id": "em_2", "title": "Hiring & Onboarding", "difficulty": "Advanced", "estimatedHours": 40, "content": "Building the team. Writing job descriptions. Designing interview loops. The 'First 90 Days' for new hires.", "topics": ["Hiring", "Interviews", "Onboarding"], "resources": [{ "title": "Holloway Guide to Hiring", "url": "https://www.holloway.com/g/technical-recruiting-hiring" }] },
            { "id": "em_3", "title": "Project Management", "difficulty": "Advanced", "estimatedHours": 30, "content": "Delivery. Managing scope creep. Stakeholder communication. Velocity tracking. Incident Management.", "topics": ["Delivery", "Stakeholders", "Incidents"], "resources": [{ "title": "Basecamp Shape Up", "url": "https://basecamp.com/shapeup" }] },
            { "id": "em_4", "title": "Technical Strategy", "difficulty": "Expert", "estimatedHours": 30, "content": "Balancing tech debt vs new features. Build vs Buy decisions. Architecture reviews. Engineering culture.", "topics": ["Strategy", "Tech Debt", "Culture"], "resources": [{ "title": "Staff Engineer Path", "url": "https://staffeng.com/" }] }
        ]
    },
    "postgresqldba": {
        "id": "postgresqldba",
        "title": "PostgreSQL DBA",
        "description": "Database Administrator.",
        "icon": "🐘",
        "color": "#336791",
        "estimatedTime": "4-6 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/postgresql-dba",
        "milestones": [
            { "id": "dba_1", "title": "Administration Basics", "difficulty": "Expert", "estimatedHours": 60, "content": "Installing and configuring PostgreSQL. pg_hba.conf for authentication. Roles and Privileges (GRANT/REVOKE).", "topics": ["Config", "Auth", "Roles"], "resources": [{ "title": "PostgreSQL Documentation", "url": "https://www.postgresql.org/docs/" }] },
            { "id": "dba_2", "title": "Architecture & Tuning", "difficulty": "Expert", "estimatedHours": 60, "content": "Understanding MVCC (Multi-Version Concurrency Control). VACUUM and Autovacuum. Write-Ahead Logging (WAL). Tuning shared_buffers and work_mem.", "topics": ["MVCC", "VACUUM", "WAL", "Tuning"], "resources": [{ "title": "PostgreSQL Optimization", "url": "https://wiki.postgresql.org/wiki/Performance_Optimization" }] },
            { "id": "dba_3", "title": "High Availability (HA)", "difficulty": "Expert", "estimatedHours": 50, "content": "Replication (Streaming vs Logical). Failover strategies. Patroni. PGBouncer for connection pooling.", "topics": ["Replication", "Patroni", "Connection Pooling"], "resources": [{ "title": "Patroni Docs", "url": "https://patroniKey.readthedocs.io/" }] },
            { "id": "dba_4", "title": "Backup & Recovery", "difficulty": "Expert", "estimatedHours": 40, "content": "pg_dump vs pg_basebackup. Point-in-Time Recovery (PITR). Barman or pgBackRest for automated backups.", "topics": ["PITR", "Backups", "pgBackRest"], "resources": [{ "title": "pgBackRest User Guide", "url": "https://pgbackrest.org/user-guide.html" }] }
        ]
    },
    "aiagents": {
        "id": "aiagents",
        "title": "AI Agents",
        "description": "Autonomous AI systems.",
        "icon": "🤖",
        "color": "#9c27b0",
        "estimatedTime": "4-6 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/ai-agents",
        "milestones": [
            { "id": "ag_1", "title": "Agentic Design Patterns", "difficulty": "Advanced", "estimatedHours": 40, "content": "ReAct (Reason + Act). Chain of Thought (CoT). Tree of Thoughts. Reflection and Self-Correction.", "topics": ["ReAct", "CoT", "Reflection"], "resources": [{ "title": "ReAct Paper", "url": "https://react-lm.github.io/" }] },
            { "id": "ag_2", "title": "Frameworks", "difficulty": "Expert", "estimatedHours": 50, "content": "LangChain Agents. AutoGen (Multi-agent conversation). CrewAI. BabyAGI.", "topics": ["LangChain", "AutoGen", "CrewAI"], "resources": [{ "title": "AutoGen Docs", "url": "https://microsoft.github.io/autogen/" }] },
            { "id": "ag_3", "title": "Tool Use & Function Calling", "difficulty": "Expert", "estimatedHours": 40, "content": "Teaching LLMs to use APIs. OpenAI Function Calling. Defining tools (Calculator, Search, Database).", "topics": ["Function Calling", "Tools", "APIs"], "resources": [{ "title": "OpenAI Function Calling", "url": "https://platform.openai.com/docs/guides/function-calling" }] }
        ]
    },
    "aidatascientist": {
        "id": "aidatascientist",
        "title": "AI Data Scientist",
        "description": "Data Scientist for AI.",
        "icon": "📊",
        "color": "#00bcd4",
        "estimatedTime": "8-12 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/ai-data-scientist",
        "milestones": [
            { "id": "ads_1", "title": "Statistical Foundations", "difficulty": "Advanced", "estimatedHours": 50, "content": "Bayesian Statistics. Hypothesis Testing (A/B Testing). Distributions. Bias vs Variance.", "topics": ["Bayesian", "Hypothesis Testing", "Bias/Variance"], "resources": [{ "title": "Think Stats", "url": "https://greenteapress.com/wp/think-stats-2e/" }] },
            { "id": "ads_2", "title": "Exploratory Data Analysis (EDA)", "difficulty": "Intermediate", "estimatedHours": 40, "content": "Visualizing distributions. Correlation matrices. Handling imbalance (SMOTE). Feature Selection.", "topics": ["EDA", "Visualization", "Feature Selection"], "resources": [{ "title": "Kaggle EDA", "url": "https://www.kaggle.com/learn/data-visualization" }] },
            { "id": "ads_3", "title": "Casual Inference", "difficulty": "Expert", "estimatedHours": 40, "content": "Correlation does not equal causation. Propensity Scores. Instrumental Variables. Do-calculus.", "topics": ["Causal Inference", "Propensity Score"], "resources": [{ "title": "Causal Inference Book", "url": "https://www.bradyneal.com/causal-inference-course" }] }
        ]
    },
    "devrel": {
        "id": "devrel",
        "title": "DevRel",
        "description": "Developer Relations.",
        "icon": "🤝",
        "color": "#e91e63",
        "estimatedTime": "3-6 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/devrel",
        "milestones": [
            { "id": "dr_1", "title": "Understanding Developers", "difficulty": "Intermediate", "estimatedHours": 30, "content": "Empathy for the developer journey. Identifying pain points. The 'Developer Experience' (DX).", "topics": ["DX", "Empathy", "User Journey"], "resources": [{ "title": "What is DevRel?", "url": "https://www.swyx.io/devrel-guide" }] },
            { "id": "dr_2", "title": "Content Creation", "difficulty": "Intermediate", "estimatedHours": 60, "content": "Writing tutorials. Creating video courses. Speaking at conferences. Writing sample code that actually works.", "topics": ["Blogging", "Speaking", "Sample Code"], "resources": [{ "title": "Technical Writing Guide", "url": "https://developers.google.com/tech-writing" }] },
            { "id": "dr_3", "title": "Community Management", "difficulty": "Advanced", "estimatedHours": 50, "content": "Building and nurturing communities. Discord/Slack moderation. Code of Conduct. Ambassador programs.", "topics": ["Community", "Moderation", "Growth"], "resources": [{ "title": "Community Management", "url": "https://cmxhub.com/the-community-engagement-cycle/" }] },
            { "id": "dr_4", "title": "Product Feedback Loop", "difficulty": "Advanced", "estimatedHours": 30, "content": "Being the customer zero. Reporting bugs. Advocating for developer needs within the product team.", "topics": ["Feedback", "Product", "Advocacy"], "resources": [{ "title": "DevRel as Product Input", "url": "https://dev.to" }] }
        ]
    },
    "serversidegamedeveloper": {
        "id": "serversidegamedeveloper",
        "title": "Game Server Dev",
        "description": "Backend for games.",
        "icon": "🎮",
        "color": "#673ab7",
        "estimatedTime": "6-9 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/server-side-game-developer",
        "milestones": [
            { "id": "sgd_1", "title": "Networking Protocols", "difficulty": "Expert", "estimatedHours": 60, "content": "UDP vs TCP. WebSockets. Reliable UDP (ENet, RakNet, KCP). Packet loss and Jitter handling.", "topics": ["UDP", "TCP", "WebSockets"], "resources": [{ "title": "Gaffer on Games", "url": "https://gafferongames.com/" }] },
            { "id": "sgd_2", "title": "Synchronization", "difficulty": "Expert", "estimatedHours": 60, "content": "State synchronization. Deterministic Lockstep vs Snapshot Interpolation. Lag Compensation techniques. Client-side prediction.", "topics": ["Lag Compensation", "Interpolation", "Prediction"], "resources": [{ "title": "Valve Developer Networking", "url": "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking" }] },
            { "id": "sgd_3", "title": "Architecture", "difficulty": "Expert", "estimatedHours": 50, "content": "Authoritative Server design. P2P (Peer-to-Peer) vs Dedicated Server. Matchmaking systems. Spatial Partitioning.", "topics": ["Dedicated Server", "P2P", "Matchmaking"], "resources": [{ "title": "Game Server Architecture", "url": "https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html" }] }
        ]
    },
    "bianalyst": {
        "id": "bianalyst",
        "title": "BI Analyst",
        "description": "Business Intelligence.",
        "icon": "📊",
        "color": "#ffeb3b",
        "estimatedTime": "4-6 Months",
        "category": "Role Based",
        "link": "https://roadmap.sh/bi-analyst",
        "milestones": [
            { "id": "bi_1", "title": "Data Warehousing", "difficulty": "Intermediate", "estimatedHours": 40, "content": "The Star Schema. Fact Tables vs Dimension Tables. ETL vs ELT processes. Data Marts.", "topics": ["Data Warehouse", "Star Schema", "ETL"], "resources": [{ "title": "Kimball Group", "url": "https://www.kimballgroup.com/" }] },
            { "id": "bi_2", "title": "BI Tools (PowerBI/Tableau)", "difficulty": "Intermediate", "estimatedHours": 60, "content": "Creating interactive reports. DAX (Data Analysis Expressions) for PowerBI. LOD Expressions for Tableau. Data blending.", "topics": ["PowerBI", "DAX", "Tableau", "LOD"], "resources": [{ "title": "PowerBI Documentation", "url": "https://docs.microsoft.com/en-us/power-bi/" }] },
            { "id": "bi_3", "title": "Data Governance", "difficulty": "Advanced", "estimatedHours": 30, "content": "Data Quality, Security, and Master Data Management (MDM). Ensuring 'One Version of the Truth'.", "topics": ["Data Quality", "Governance", "MDM"], "resources": [{ "title": "Data Governance Framework", "url": "https://www.dataversity.net/what-is-data-governance/" }] }
        ]
    }
};
