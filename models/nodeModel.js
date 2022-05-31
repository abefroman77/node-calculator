const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    _id: String,
    level1:{
        name:String,
        cost:Number,
        apiCost: Number,
        rewardRate: Number,
        rewardPercentage: Number,
        claimTax: Number,
        claimFee: Number,
        claimFeeCoin: String,
        compoundTax: Number,
        sellTax: Number,
        monthlyFee:Number,
        compounding: Boolean,
        startingDay: Number,
        startingRewards: Number
    },
    level2:{
        name:String,
        cost:Number,
        apiCost: Number,
        rewardRate: Number,
        rewardPercentage: Number,
        claimTax: Number,
        claimFee: Number,
        claimFeeCoin: String,
        compoundTax: Number,
        sellTax: Number,
        monthlyFee:Number,
        compounding: Boolean,
        startingDay: Number,
        startingRewards: Number
    },
    level3:{
        name:String,
        cost:Number,
        apiCost: Number,
        rewardRate: Number,
        rewardPercentage: Number,
        claimTax: Number,
        claimFee: Number,
        claimFeeCoin: String,
        compoundTax: Number,
        sellTax: Number,
        monthlyFee:Number,
        compounding: Boolean,
        startingDay: Number,
        startingRewards: Number
    },
    level4:{
        name:String,
        cost:Number,
        apiCost: Number,
        rewardRate: Number,
        rewardPercentage: Number,
        claimTax: Number,
        claimFee: Number,
        claimFeeCoin: String,
        compoundTax: Number,
        sellTax: Number,
        monthlyFee:Number,
        compounding: Boolean,
        startingDay: Number,
        startingRewards: Number
    },
    level5:{
        name:String,
        cost:Number,
        apiCost: Number,
        rewardRate: Number,
        rewardPercentage: Number,
        claimTax: Number,
        claimFee: Number,
        claimFeeCoin: String,
        compoundTax: Number,
        sellTax: Number,
        monthlyFee:Number,
        compounding: Boolean,
        startingDay: Number,
        startingRewards: Number
    },
    tableData: {
        days: [
            {
                cash: Number,
                cashout: Boolean,
                cumCash: Number,
                date: String,
                dr: Number,
                drb: Number,
                index: Number,
                node1: Number,
                node2: Number,
                node3: Number,
                node4: Number
            }
        ],
        months: [
            {
                index: String,
                total: Number
            }
        ]
    },
    startingNodes: [Number],
    calLength: Number,
    walletBalance: Number,
    cashToday: Number,
    tokensToMatchTarget: Number,
    dateTargetReached: String
});

const Node = mongoose.model('Node', nodeSchema);