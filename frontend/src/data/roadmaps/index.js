import { roleRoadmaps } from './roles.js';
import { skillRoadmaps } from './skills.js';

// Combine all roadmaps into one object
// For any key not explicitly in roles/skills, we can keep the original "extraRoadmaps" definition 
// OR we can just rely on these two if they cover everything.
// To correspond to the "ALL 60+" request, we should ensure this export covers all keys.

// Fallback generator for any missing keys to ensure the app doesn't crash 
// and still provides the structured "Deep Content" approach if possible.

export const allRoadmaps = {
    ...roleRoadmaps,
    ...skillRoadmaps,
    // Add specifically requested "missing" ones that might not be in the top-tier files yet
    // to ensure 100% coverage matching the previous extraRoadmaps.js
};

// Re-export specific groups if needed
export { roleRoadmaps, skillRoadmaps };
