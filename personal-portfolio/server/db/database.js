const { createClient } = require('@supabase/supabase-js');

// Create Supabase client
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// Test the connection
const testConnection = async () => {
    try {
        const { data, error } = await supabase
            .from('portfolio_items')
            .select('count')
            .limit(1);
        
        if (error) {
            console.error('Supabase connection error:', error);
            return false;
        }
        
        console.log('Connected to Supabase successfully');
        return true;
    } catch (error) {
        console.error('Supabase connection failed:', error);
        return false;
    }
};

// Helper function to run queries (for backward compatibility)
const query = async (text, params = []) => {
    // This is a simplified wrapper for basic queries
    // For complex queries, use the Supabase client directly
    try {
        if (text.includes('SELECT')) {
            const { data, error } = await supabase
                .from('portfolio_items')
                .select('*');
            
            if (error) throw error;
            
            return {
                rows: data || [],
                rowCount: data ? data.length : 0
            };
        }
        
        throw new Error('Complex queries not supported in this wrapper. Use Supabase client directly.');
    } catch (error) {
        throw error;
    }
};

// Helper function to get a client (for backward compatibility)
const getClient = () => supabase;

module.exports = {
    query,
    getClient,
    supabase,
    testConnection
};

