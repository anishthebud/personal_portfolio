const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config({'path': '.env'});

const { testConnection } = require('./db/database');
const portfolioRoutes = require('./routes/portfolio');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection test
app.get('/api/health', async (req, res) => {
    try {
        const isConnected = await testConnection();
        if (isConnected) {
            res.json({ 
                status: 'OK', 
                message: 'Supabase connected successfully',
                timestamp: new Date().toISOString()
            });
        } else {
            res.status(500).json({ 
                status: 'ERROR', 
                message: 'Supabase connection failed'
            });
        }
    } catch (error) {
        res.status(500).json({ 
            status: 'ERROR', 
            message: 'Supabase connection failed',
            error: error.message 
        });
    }
});

// Routes
app.use('/api/portfolio', portfolioRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        status: 'ERROR', 
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        status: 'ERROR', 
        message: 'Route not found' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;

