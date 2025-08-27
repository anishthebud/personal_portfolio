// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

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
        const response = await fetch(`http://localhost:5000/api/portfolio/${type}`);

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

// Generic API call function
async function apiCall<T>(
    endpoint: string, 
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

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

// Portfolio API functions


// Health check function
export const healthCheck = (): Promise<ApiResponse<{ timestamp: string }>> => 
    apiCall<{ timestamp: string }>('/health');

// Example usage in React components:
/*
import { portfolioApi, PortfolioItem } from '../utils/api';

const MyComponent = () => {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        setLoading(true);
        const response = await portfolioApi.getAll();
        if (response.status === 'SUCCESS' && response.data) {
            setItems(response.data);
        }
        setLoading(false);
    };

    const fetchItemsByCategory = async (category: string) => {
        setLoading(true);
        const response = await portfolioApi.getByCategory(category);
        if (response.status === 'SUCCESS' && response.data) {
            setItems(response.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // ... rest of component
};
*/

