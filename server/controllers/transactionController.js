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
    },
    getLabels: async (req, res) => {
        Transaction.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: 'type',
                    foreignField: "name",
                    as: "categories_info"
                }
            },
            {
                $unwind: "$categories_info"
            }
        ]).then(result => {
            let data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, date: v.date, color: v.categories_info['color'] }));
            res.json(data);
        }).catch(error => {
            res.status(400).json("Lookup Collection Error");
        });
    }
};

module.exports = transactionController;