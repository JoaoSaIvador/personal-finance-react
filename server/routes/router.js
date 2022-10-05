const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const transactionController = require('../controllers/transactionController');

router.route('/api/categories')
    .get(categoryController.getCategories)
    .post(categoryController.createCategory);

router.route('/api/transactions')
    .get(transactionController.getTransactions)
    .post(transactionController.createTransaction);

router.route('/transactions/:id')
    .delete(transactionController.deleteTransaction);

router.route('/api/labels')
    .get(transactionController.getLabels);

module.exports = router;