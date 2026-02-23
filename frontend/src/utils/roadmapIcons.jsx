
import React from 'react';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiAngular,
    SiNextdotjs, SiNodedotjs, SiSpringboot, SiLaravel, SiPhp, SiPython,
    SiGo, SiRust, SiCplusplus, SiKotlin, SiSwift, SiFlutter, SiMongodb,
    SiPostgresql, SiMysql, SiRedis, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud,
    SiLinux, SiGit, SiGithub, SiGraphql, SiWordpress, SiTerraform,
    SiCloudflare, SiElasticsearch, SiAndroid, SiIos, SiApachekafka, SiSolidity,
    SiOpenai, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn, SiGnubash,
    SiDotnet
} from 'react-icons/si';
import {
    FaServer, FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaCogs, FaShieldAlt,
    FaGamepad, FaNetworkWired, FaBrain, FaChartBar, FaUserTie, FaPencilRuler,
    FaProjectDiagram, FaSearch, FaCode, FaRobot, FaLock, FaMicrosoft, FaKeyboard
} from 'react-icons/fa';
import { MdArchitecture, MdDesignServices, MdOutlineSecurity } from 'react-icons/md';
import { GoChecklist } from 'react-icons/go';
import { VscAzure } from 'react-icons/vsc';

// Default icon if no match found
import { RiRoadMapLine } from 'react-icons/ri';

const iconMap = {
    // Role Based
    'frontend': SiHtml5,
    'backend': FaServer,
    'fullstack': FaLaptopCode,
    'devops': SiDocker,
    'android': SiAndroid,
    'ios': SiIos,
    'postgresql': SiPostgresql,
    'postgresqldba': SiPostgresql,
    'qa': GoChecklist,
    'software-architect': MdArchitecture,
    'softwarearchitect': MdArchitecture,
    'technical-writer': FaPencilRuler,
    'technicalwriter': FaPencilRuler,
    'devrel': FaUserTie,
    'machine-learning': FaBrain,
    'machinelearning': FaBrain,
    'ai-data-scientist': SiPandas,
    'aidatascientist': SiPandas,
    'ai-engineer': FaBrain,
    'aiengineer': FaBrain,
    'ai-agents': FaRobot,
    'aiagents': FaRobot,
    'data-analyst': FaChartBar,
    'dataanalyst': FaChartBar,
    'bi-analyst': FaChartBar,
    'bianalyst': FaChartBar,
    'data-engineer': FaDatabase,
    'dataengineer': FaDatabase,
    'mlops': FaCogs,
    'product-manager': FaUserTie,
    'productmanager': FaUserTie,
    'engineering-manager': FaUserTie,
    'engineeringmanager': FaUserTie,
    'game-developer': FaGamepad,
    'gamedeveloper': FaGamepad,
    'server-side-game-developer': FaServer,
    'serversidegamedeveloper': FaServer,
    'ux-design': MdDesignServices,
    'uxdesign': MdDesignServices,
    'blockchain': SiSolidity,
    'cyber-security': FaShieldAlt,
    'cybersecurity': FaShieldAlt,
    'api-design': FaNetworkWired,
    'apidesign': FaNetworkWired,
    'system-design': FaProjectDiagram,
    'systemdesign': FaProjectDiagram,
    'systemDesign': FaProjectDiagram,
    'frontend-beginner': SiHtml5,
    'frontendbeginner': SiHtml5,
    'backend-beginner': FaServer,
    'backendbeginner': FaServer,
    'devops-beginner': SiDocker,
    'devopsbeginner': SiDocker,

    // Skill Based
    'html': SiHtml5,
    'css': SiCss3,
    'javascript': SiJavascript,
    'typescript': SiTypescript,
    'react': SiReact,
    'react-native': SiReact,
    'reactnative': SiReact,
    'vue': SiVuedotjs,
    'angular': SiAngular,
    'nextjs': SiNextdotjs,
    'node.js': SiNodedotjs,
    'nodejs': SiNodedotjs,
    'spring-boot': SiSpringboot,
    'springboot': SiSpringboot,
    'asp.net-core': SiDotnet,
    'aspnetcore': SiDotnet,
    'laravel': SiLaravel,
    'php': SiPhp,
    'python': SiPython,
    'java': FaCode,
    'go': SiGo,
    'golang': SiGo,
    'rust': SiRust,
    'c++': SiCplusplus,
    'cpp': SiCplusplus,
    'kotlin': SiKotlin,
    'swift': SiSwift,
    'swift-ui': SiSwift,
    'swiftui': SiSwift,
    'flutter': SiFlutter,
    'mongodb': SiMongodb,
    'redis': SiRedis,
    'sql': FaDatabase,
    'docker': SiDocker,
    'kubernetes': SiKubernetes,
    'aws': SiAmazonwebservices,
    'linux': SiLinux,
    'git-github': SiGit,
    'gitgithub': SiGit,
    'graphql': SiGraphql,
    'wordpress': SiWordpress,
    'terraform': SiTerraform,
    'cloudflare': SiCloudflare,
    'elasticsearch': SiElasticsearch,
    'bash': SiGnubash,
    'shell-bash': SiGnubash,
    'shellbash': SiGnubash,
    'computer-science': FaLaptopCode,
    'computerscience': FaLaptopCode,
    'dsa': FaCode,
    'datastructures-and-algorithms': FaCode,
    'datastructuresandalgorithms': FaCode,
    'design-and-architecture': MdArchitecture,
    'softwaredesignarchitecture': MdArchitecture,
    'code-review': FaSearch,
    'codereview': FaSearch,
    'ai-red-teaming': MdOutlineSecurity,
    'airedteaming': MdOutlineSecurity,
    'prompt-engineering': FaKeyboard,
    'promptengineering': FaKeyboard,
    'design-system': MdDesignServices,
    'designsystem': MdDesignServices,
};

export const getRoadmapIcon = (id, size = 24) => {
    // Normalize ID just in case
    const normalizedId = id;

    const IconComponent = iconMap[normalizedId] || RiRoadMapLine;

    return <IconComponent size={size} />;
};

export const getRoadmapIconComponent = (id) => {
    return iconMap[id] || RiRoadMapLine;
}
