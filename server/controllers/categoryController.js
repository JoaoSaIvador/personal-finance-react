const Category = require('../models/categoryModel');

const categoryController = {
    getCategories: async (req, res) => {
        try {
            // Find all categories
            const categories = await Category.find();

            return res.json(categories);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createCategory: async (req, res) => {
        try {
            const { name, color } = req.body;

            // Check if category already exists
            const category = await Category.findOne({ name });
            if (category) {
                return res.status(400).json({ msg: "Category already exists!" });
            }

            // Save new category
            const newCategory = new Category({ name, color });
            await newCategory.save();

            res.json({ msg: "Category created!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = categoryController;