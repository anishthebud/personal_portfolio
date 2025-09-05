const express = require('express');
const router = express.Router();
const { supabase } = require('../db/database');

// GET portfolio item by ID
router.get('/:type', async (req, res) => {
    try {
        const { type } = req.params;
        const { data, error } = await supabase
            .from(type)
            .select('*')
            .order('id', { ascending: true });
        
        if (error) {
            if (error.code === 'PGRST116') {
                return res.status(404).json({
                    status: 'ERROR',
                    message: 'Portfolio item not found'
                });
            }
            throw error;
        }
        
        res.json({
            status: 'SUCCESS',
            data: data
        });
    } catch (error) {
        console.error('Error fetching portfolio item:', error);
        res.status(500).json({
            status: 'ERROR',
            message: 'Failed to fetch portfolio item',
            error: error.message
        });
    }
});

module.exports = router;

