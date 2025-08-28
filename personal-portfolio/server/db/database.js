const { createClient } = require('@supabase/supabase-js');

// Create Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Test the connection
const testConnection = async () => {
    try {
        const { data, error } = await supabase
            .from('experience')
            .select('*')
            .limit(1);
        
        if (error) {
            console.error('Supabase connection error:', error);
            return false;
        }
        
        console.log(data);
        console.log('Connected to Supabase successfully');
        return true;
    } catch (error) {
        console.error('Supabase connection failed:', error);
        return false;
    }
};

testConnection();

// Helper function to run queries (for backward compatibility)
const query = async (text, params = []) => {
    // This is a simplified wrapper for basic queries
    // For complex queries, use the Supabase client directly
    try {
        if (text.includes('SELECT')) {
            const { data, error } = await supabase
                .from('education')
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
const getClient = () => {supabase};

module.exports = {
    query,
    getClient,
    supabase,
    testConnection
};

