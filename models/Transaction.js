const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
    transactionHash: {
        type: String
    },
    fromAddress: {
        type: String
    },
    toAddress: {
        type: String
    },
    amount: {
        type: Number
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = Transaction;