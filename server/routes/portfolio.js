const express = require('express');
const router = express.Router();
const { supabase } = require('../db/database');

// GET portfolio item by ID
router.get('/:type', async (req, res) => {
    try {
        const { type } = req.params;
        console.log(type);
        const { data, error } = await supabase
            .from(type)
            .select('*');
        
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

// POST new portfolio item
router.post('/', async (req, res) => {
    try {
        const { title, description, category, image_url, link_url, technologies } = req.body;
        
        const { data, error } = await supabase
            .from('education')
            .insert([{
                title,
                description,
                category,
                image_url,
                link_url,
                technologies
            }])
            .select()
            .single();
        
        if (error) throw error;
        
        res.status(201).json({
            status: 'SUCCESS',
            message: 'Portfolio item created successfully',
            data: data
        });
    } catch (error) {
        console.error('Error creating portfolio item:', error);
        res.status(500).json({
            status: 'ERROR',
            message: 'Failed to create portfolio item',
            error: error.message
        });
    }
});

// PUT update portfolio item
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, category, image_url, link_url, technologies } = req.body;
        
        const { data, error } = await supabase
            .from('education')
            .update({
                title,
                description,
                category,
                image_url,
                link_url,
                technologies,
                updated_at: new Date().toISOString()
            })
            .eq('id', id)
            .select()
            .single();
        
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
            message: 'Portfolio item updated successfully',
            data: data
        });
    } catch (error) {
        console.error('Error updating portfolio item:', error);
        res.status(500).json({
            status: 'ERROR',
            message: 'Failed to update portfolio item',
            error: error.message
        });
    }
});

// DELETE portfolio item
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('education')
            .delete()
            .eq('id', id)
            .select()
            .single();
        
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
            message: 'Portfolio item deleted successfully',
            data: data
        });
    } catch (error) {
        console.error('Error deleting portfolio item:', error);
        res.status(500).json({
            status: 'ERROR',
            message: 'Failed to delete portfolio item',
            error: error.message
        });
    }
});

// GET portfolio items by category
router.get('/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const { data, error } = await supabase
            .from('education')
            .select('*')
            .eq('category', category)
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        res.json({
            status: 'SUCCESS',
            data: data || [],
            count: data ? data.length : 0
        });
    } catch (error) {
        console.error('Error fetching portfolio items by category:', error);
        res.status(500).json({
            status: 'ERROR',
            message: 'Failed to fetch portfolio items by category',
            error: error.message
        });
    }
});

module.exports = router;

