// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL;

// Types for portfolio items
export interface PortfolioItem {
    id: number;
    name: string;
    category: string;
    subCategory: string;
    description: string;
    image_url?: string;
    link?: string;
    skills: string[];
    created_at: string;
}

// Types for movie items
export interface MovieItem {
    name: string;
    year: number;
    director: string;
    image_url: string;
    ranking: number;
    description: string;
}

export interface ApiResponse<T> {
    status: 'SUCCESS' | 'ERROR';
    data?: T;
    message?: string;
    error?: string;
    count?: number;
}

// Generic function to get data from the API
export async function getData<T>(type: string): Promise<ApiResponse<T[]>> {
    try {
        const response = await fetch(`${API_BASE_URL}/portfolio/${type}`);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `HTTP error! status: ${response.status}`);
        }

        return data;
    } catch (error) {
        console.error('API call failed:', error);
        return {
            status: 'ERROR',
            error: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
}

// Type-specific convenience functions
export async function getPortfolioData(type: string): Promise<ApiResponse<PortfolioItem[]>> {
    return getData<PortfolioItem>(type);
}

export async function getMovieData(type: string): Promise<ApiResponse<MovieItem[]>> {
    return getData<MovieItem>(type);
}
