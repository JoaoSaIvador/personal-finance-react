const Transaction = require('../models/transactionModel');

const transactionController = {
    getTransactions: async (req, res) => {
        try {
            // Find all transactions
            const transactions = await Transaction.find();

            return res.json(transactions);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createTransaction: async (req, res) => {
        try {
            const { name, type, amount } = req.body;
            const date = new Date().toJSON().slice(0, 10);

            // Save new transaction
            const newTransaction = new Transaction({ name, type, amount, date });
            await newTransaction.save();

            res.json({ msg: "Transaction created!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteTransaction: async (req, res) => {
        try {
            const deletedTransaction = await Transaction.deleteOne({ _id: req.params.id });
            res.json(deletedTransaction);
        } catch (error) {
            res.json({ message: error });
        }
    }
};

module.exports = transactionController;