// Helper script to add AnimatedBackground to all pages except Landing
// This documents the changes needed for each page

const pagesToUpdate = [
    {
        file: 'Quiz.jsx',
        importLine: 'import AnimatedBackground from \'../components/AnimatedBackground\'',
        componentLine: '<AnimatedBackground />'
    },
    {
        file: 'Roadmap.jsx',
        importLine: 'import AnimatedBackground from \'../components/AnimatedBackground\'',
        componentLine: '<AnimatedBackground />'
    },
    {
        file: 'JobTracker.jsx',
        importLine: 'import AnimatedBackground from \'../components/AnimatedBackground\'',
        componentLine: '<AnimatedBackground />'
    },
    {
        file: 'ResumeAnalyzer.jsx',
        importLine: 'import AnimatedBackground from \'../components/AnimatedBackground\'',
        componentLine: '<AnimatedBackground />'
    },
    {
        file: 'StudyPlan.jsx',
        importLine: 'import AnimatedBackground from \'../components/AnimatedBackground\'',
        componentLine: '<AnimatedBackground />'
    },
    {
        file: 'CodingPractice.jsx',
        importLine: 'import AnimatedBackground from \'../components/AnimatedBackground\'',
        componentLine: '<AnimatedBackground />'
    },
    {
        file: 'TopicDetail.jsx',
        importLine: 'import AnimatedBackground from \'../components/AnimatedBackground\'',
        componentLine: '<AnimatedBackground />'
    }
];

// For each page:
// 1. Add import after other component imports
// 2. Add <AnimatedBackground /> as first child in main container div

console.log('Pages to update:', pagesToUpdate.map(p => p.file));
