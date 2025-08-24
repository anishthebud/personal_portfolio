// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Types for portfolio items
export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    category: string;
    image_url?: string;
    link_url?: string;
    technologies: string[];
    created_at: string;
    updated_at: string;
}

export interface ApiResponse<T> {
    status: 'SUCCESS' | 'ERROR';
    data?: T;
    message?: string;
    error?: string;
    count?: number;
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
export const portfolioApi = {
    // Get all portfolio items
    getAll: (): Promise<ApiResponse<PortfolioItem[]>> => 
        apiCall<PortfolioItem[]>('/portfolio'),

    // Get portfolio item by ID
    getById: (id: number): Promise<ApiResponse<PortfolioItem>> => 
        apiCall<PortfolioItem>(`/portfolio/${id}`),

    // Create new portfolio item
    create: (item: Omit<PortfolioItem, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse<PortfolioItem>> => 
        apiCall<PortfolioItem>('/portfolio', {
            method: 'POST',
            body: JSON.stringify(item),
        }),

    // Update portfolio item
    update: (id: number, item: Partial<Omit<PortfolioItem, 'id' | 'created_at' | 'updated_at'>>): Promise<ApiResponse<PortfolioItem>> => 
        apiCall<PortfolioItem>(`/portfolio/${id}`, {
            method: 'PUT',
            body: JSON.stringify(item),
        }),

    // Delete portfolio item
    delete: (id: number): Promise<ApiResponse<PortfolioItem>> => 
        apiCall<PortfolioItem>(`/portfolio/${id}`, {
            method: 'DELETE',
        }),

    // Get portfolio items by category
    getByCategory: (category: string): Promise<ApiResponse<PortfolioItem[]>> => 
        apiCall<PortfolioItem[]>(`/portfolio/category/${encodeURIComponent(category)}`),
};

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

