const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    _id: String,
    localName: String,
    symbol: String,
    description:String,
    network:String,
    imageLinks:String,
    mediumLink:String,
    homepage:String,
    platforms:String,
    coinGeckoID:String,
    prices: {
        ath:String,
        athDate:String,
        atl:String,
        atlDate:String,
        currentPrice:String,
        high_24h:String,
        low_24h:String,
        totalVolume:String,
        marketCap:String
    },
    coinAddress: [String], // older -> newer
    contractAddress: [String],
    abi: String,
    dexPairAddress: String,
    chainID: String
});

const Coin = mongoose.model('Coin', coinSchema);