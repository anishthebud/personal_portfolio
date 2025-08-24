-- Create portfolio_items table
CREATE TABLE IF NOT EXISTS portfolio_items (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,
    image_url VARCHAR(500),
    link_url VARCHAR(500),
    technologies TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on category for faster queries
CREATE INDEX IF NOT EXISTS idx_portfolio_items_category ON portfolio_items(category);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_portfolio_items_created_at ON portfolio_items(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now (you can restrict this later)
CREATE POLICY "Allow all operations for portfolio items" ON portfolio_items
    FOR ALL USING (true)
    WITH CHECK (true);

-- Insert some sample data
INSERT INTO portfolio_items (title, description, category, image_url, link_url, technologies) VALUES
    ('Personal Portfolio Website', 'A modern React-based portfolio website showcasing my skills and projects', 'Projects', '/images/portfolio.png', 'https://github.com/yourusername/portfolio', ARRAY['React', 'TypeScript', 'CSS3', 'Node.js']),
    ('Data Structures Implementation', 'Implementation of common data structures in Python', 'Projects', '/images/ds.png', 'https://github.com/yourusername/datastructures', ARRAY['Python', 'Algorithms', 'Data Structures']),
    ('CS 1332: Data Structures and Algorithms', 'Advanced course covering fundamental data structures and algorithmic techniques', 'Education', '/images/cs1332.png', 'https://www.gatech.edu/cs1332', ARRAY['Algorithms', 'Data Structures', 'Java']),
    ('CS 3600: Introduction to AI', 'Introduction to artificial intelligence concepts and machine learning', 'Education', '/images/cs3600.png', 'https://www.gatech.edu/cs3600', ARRAY['AI', 'Machine Learning', 'Python', 'TensorFlow']);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_portfolio_items_updated_at 
    BEFORE UPDATE ON portfolio_items 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Grant necessary permissions (adjust based on your Supabase setup)
GRANT ALL ON portfolio_items TO authenticated;
GRANT ALL ON portfolio_items TO anon;
GRANT USAGE, SELECT ON SEQUENCE portfolio_items_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE portfolio_items_id_seq TO anon;

