/**
 * YouTube API Service
 * Handles all YouTube Data API v3 interactions
 */

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

/**
 * Search for YouTube videos based on a query
 * @param {string} query - Search query (skill or course name)
 * @param {number} maxResults - Maximum number of results to return (default: 20)
 * @returns {Promise<Array>} Array of video objects
 */
export async function searchVideos(query, maxResults = 20) {
    if (!query || query.trim() === '') {
        throw new Error('Search query cannot be empty');
    }

    if (!YOUTUBE_API_KEY) {
        throw new Error('YouTube API key is not configured. Please add VITE_YOUTUBE_API_KEY to your .env file.');
    }

    try {
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: query,
            type: 'video',
            maxResults: maxResults,
            order: 'relevance',
            key: YOUTUBE_API_KEY,
            videoEmbeddable: 'true',
            safeSearch: 'moderate'
        });

        const searchResponse = await fetch(
            `${YOUTUBE_API_BASE_URL}/search?${searchParams.toString()}`
        );

        if (!searchResponse.ok) {
            const errorData = await searchResponse.json();
            throw new Error(errorData.error?.message || 'Failed to fetch videos from YouTube');
        }

        const searchData = await searchResponse.json();

        if (!searchData.items || searchData.items.length === 0) {
            return [];
        }

        // Get video IDs to fetch additional statistics
        const videoIds = searchData.items.map(item => item.id.videoId).join(',');

        // Fetch video statistics (views, likes, etc.)
        const statsParams = new URLSearchParams({
            part: 'statistics,contentDetails',
            id: videoIds,
            key: YOUTUBE_API_KEY
        });

        const statsResponse = await fetch(
            `${YOUTUBE_API_BASE_URL}/videos?${statsParams.toString()}`
        );

        const statsData = statsResponse.ok ? await statsResponse.json() : null;

        // Combine search results with statistics
        const videos = searchData.items.map((item, index) => {
            const stats = statsData?.items?.[index]?.statistics || {};
            const contentDetails = statsData?.items?.[index]?.contentDetails || {};

            return {
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
                channelTitle: item.snippet.channelTitle,
                publishedAt: item.snippet.publishedAt,
                viewCount: stats.viewCount || '0',
                likeCount: stats.likeCount || '0',
                duration: contentDetails.duration || 'N/A',
                url: `https://www.youtube.com/watch?v=${item.id.videoId}`
            };
        });

        return videos;
    } catch (error) {
        console.error('YouTube API Error:', error);
        throw error;
    }
}

/**
 * Format view count to human-readable format
 * @param {string|number} count - View count
 * @returns {string} Formatted view count
 */
export function formatViewCount(count) {
    const num = parseInt(count, 10);

    if (isNaN(num)) return '0 views';

    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M views`;
    } else if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K views`;
    }

    return `${num} views`;
}

/**
 * Format publish date to relative time
 * @param {string} dateString - ISO date string
 * @returns {string} Relative time string
 */
export function formatPublishDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;

    return `${Math.floor(diffInDays / 365)} years ago`;
}

/**
 * Parse ISO 8601 duration to readable format
 * @param {string} duration - ISO 8601 duration string (e.g., "PT15M33S")
 * @returns {string} Formatted duration
 */
export function formatDuration(duration) {
    if (!duration || duration === 'N/A') return 'N/A';

    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    if (!match) return 'N/A';

    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');

    let result = '';

    if (hours) result += `${hours}:`;
    if (minutes) result += hours ? minutes.padStart(2, '0') : minutes;
    else result += '0';
    result += ':';
    result += seconds ? seconds.padStart(2, '0') : '00';

    return result;
}
