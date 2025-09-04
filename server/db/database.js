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
    
        console.log('Connected to Supabase successfully');
        return true;
    } catch (error) {
        console.error('Supabase connection failed:', error);
        return false;
    }
};

// Helper function to get a client (for backward compatibility)
const getClient = () => {supabase};

module.exports = {
    getClient,
    supabase,
    testConnection
};

