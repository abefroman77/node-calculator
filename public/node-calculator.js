let coinGeckoURL = "https://api.coingecko.com/api/v3/coins/";
// test coinGecko - https://api.coingecko.com/api/v3/coins/stronger
let dexURL = "https://api.dexscreener.io/latest/dex/pairs/";
//  test dexScreener - https://api.dexscreener.io/latest/dex/pairs/ethereum/0x453a43E2Bf3080f7a23c9BB034CcDD869e306102
let etherscanAPI = "https://api.etherscan.io/api?module=account&action=tokentx&address=";
let etherscanApiKey = "UCUT7TJ8PAV1SQ92GQV631GHR3RK4BD5V9";
// test etherscan - https://api.etherscan.io/api?module=account&action=tokentx&address=0xa52f82f04416645d632589c18EE195F3d51dBFD1&startblock=0&endblock=9999999999&sort=asc&apikey=UCUT7TJ8PAV1SQ92GQV631GHR3RK4BD5V9
let snowtraceAPI = "https://api.snowtrace.io/api?module=account&action=tokentx&address=";
let snowtraceApiKey = "9ZDQ11918D4GMKN5VMASWGIF92RHZQ9TPH";
// test snowtrace - https://api.snowtrace.io/api?module=account&action=tokentx&address=0xa52f82f04416645d632589c18EE195F3d51dBFD1&startblock=0&endblock=9999999999&sort=asc&apikey=9ZDQ11918D4GMKN5VMASWGIF92RHZQ9TPH
let bscScanAPI = "https://api.bscscan.com/api?module=account&action=tokentx&address="
let bscScanApiKey = "D31IC3T175RRICK5QYYZ1DB4RRMTU2Z2UJ"
// test bscScan - https://api.bscscan.com/api?module=account&action=tokentx&address=0xa52f82f04416645d632589c18EE195F3d51dBFD1&startblock=0&endblock=99999999&sort=asc&apikey=D31IC3T175RRICK5QYYZ1DB4RRMTU2Z2UJ

let userAddress = null;
let allUserTrxns = {};
let trxnsFromUser = {};
let trxnsToUser = {};

window.userAddress = null;

let userNetworks = ["ethereum", "avalanche", "bsc"]

let mainCoinData = {
    avax: {
        id:"avax",
        localName: "avax",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"avalanche-2",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z", // older -> newer
        chainID: ""
    },
    ethereum: {
        id:"ethereum",
        localName: "ethereum",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"ethereum",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: "", // older -> newer
        chainID: ""
    },
    busd: {
        id:"busd",
        localName: "busd",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"binance-usd",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: "0x4fabb145d64652a948d72533023f6e7a623c7c53", // older -> newer
        chainID: ""
    },
    fantom: {
        id:"ftm",
        localName: "fantom",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"fantom",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: "0x4e15361fd6b4bb609fa63c81a2be19d873717870", // older -> newer
        chainID: ""
    },
}

let coinData = {
    strngr: {
        _id:"stronger",
        localName: "strngr",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"stronger",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: ["0x990f341946A3fdB507aE7e52d17851B87168017c","0xDc0327D50E6C73db2F8117760592C8BBf1CDCF38"], // older -> newer
        contractAddress: ["0xfbddadd80fe7bda00b901fbaf73803f2238ae655"],
        abi: "",
        dexPairAddress: "0x453a43E2Bf3080f7a23c9BB034CcDD869e306102",
        chainID: "Ethereum"
    },
    thor: {
        _id:"thor",
        localName: "thor",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"thor",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: ["0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79"],
        contractAddress: ["0xbf431b2dfe4b549614f0d5954c0351f89e7e728f","0xf2e2e5baeffe24d7b6feb0f1f3837fc89fc7d674","0x2be139283d73cd3a335a94c50ba2b28fde1e06e1"],
        abi: "",
        dexPairAddress: "0x95189f25b4609120F72783E883640216E92732DA",
        chainID: "Avalanche"
    },
    pxt: {
        _id:"project-x-nodes",
        localName: "pxt",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: ["0x05c88F67fa0711b3a76ada2B6f0A2D3a54Fc775c","0x9e20af05ab5fed467dfdd5bb5752f7d5410c832e","0x9adcbba4b79ee5285e891512b44706f41f14cafd"], // older -> newer
        contractAddress: ["0x05c88F67fa0711b3a76ada2B6f0A2D3a54Fc775c","0x9e20af05ab5fed467dfdd5bb5752f7d5410c832e","0x9adcbba4b79ee5285e891512b44706f41f14cafd"],
        abi: "",
        dexPairAddress: "0xf17A02640E399E01Ee4A197ba101e0DF14e60A98",
        chainID: "Avalanche"
    },
    polar: {
        _id:"polar",
        localName: "polar",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"polar",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: ["0x6c1c0319d8ddcb0ffe1a68c5b3829fd361587db4"], // older -> newer
        contractAddress: ["0x2ec1849e12e1264db7379f5d17eccf5a94cf5fe8"],
        abi: "",
        dexPairAddress: "0xD81Cb1F7BCe1d539f3de6E7431a637cB5c66669d",
        chainID: "Avalanche"
    },
    fire: {
        _id:"fire",
        localName: "fire",
        symbol: "",
        description:"",
        network:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
        coinGeckoID:"",
        prices: {
            ath:"",
            athDate:"",
            atl:"",
            atlDate:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:"",
            marketCap:""
        },
        coinAddress: ["0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5"], // older -> newer
        contractAddress: ["0xbAd32DeaD95Eb55Ae849c6309ecA1b3d1b03bf69"],
        abi: "",
        dexPairAddress: "0xc71fA9D143ad905eE73B6EDB4cd44df427df1Fe7",
        chainID: "Avalanche"
    }
}

let maxLevels = 5;
let nodeData = {
    strngr: {
        name: "strngr",
        level1:{
            name:"Entangled",
            cost:10,
            apiCost: BigInt(10000000000000000000),
            rewardRate:0.075,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:14.95,
            compounding: false,
            startingDay: 86,
            startingRewards: 0.376
        },
        level2:{
            name:"Ethereum",
            cost:10,
            apiCost: BigInt(10000000000000000000),
            rewardRate:0.09266,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:14.95,
            compounding: true,
            startingDay: 0,
            startingRewards: 0
        },
        level3:{
            name:"",
            cost:0,
            rewardRate:0,
            apiCost: BigInt(0),
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level4:{
            name:"",
            cost:0,
            rewardRate:0,
            apiCost: BigInt(0),
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level5:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        tableData:[],
        startingNodes: [0,8,0,0,0],
        calLength: 30,
        walletBalance: 0,
        cashToday: 0,
        tokensToMatchTarget: 0,
        dateTargetReached: ""
    },
    thor: {
        name: "thor",
        level1:{
            name:"Heimdall",
            cost:1.25,
            apiCost: BigInt(1250000000000000000),
            rewardRate:0.008,
            rewardPercentage:0,
            claimTax:1,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:5,
            compounding: false,
            startingDay: 32,
            startingRewards: 0
        },
        level2:{
            name:"Freya",
            cost:6.25,
            apiCost: BigInt(6250000000000000000),
            rewardRate:0.05,
            rewardPercentage:0,
            claimTax:5,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:10,
            compounding: false,
            startingDay: 47,
            startingRewards: 0
        },
        level3:{
            name:"Thor",
            cost:12.5,
            apiCost: BigInt(12500000000000000000),
            rewardRate:0.14375,
            rewardPercentage:0,
            claimTax:8,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:20,
            compounding: false,
            startingDay: 43,
            startingRewards: 0
        },
        level4:{
            name:"Odin",
            cost:78.125,
            apiCost: BigInt(78125000000000000000),
            rewardRate:1.015625,
            rewardPercentage:0,
            claimTax:10,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:80,
            compounding: true,
            startingDay: 43,
            startingRewards: 0
        },
        level5:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        tableData: [],
        startingNodes: [7,1,10,2,0],
        calLength: 30,
        walletBalance: 0,
        cashToday: 0,
        tokensToMatchTarget: 0,
        dateTargetReached: ""
    },
    pxt: {
        name: "pxt",
        level1:{
            name:"PXT",
            cost:10,
            apiCost: BigInt(10000000000000000000),
            rewardRate:0.17,
            rewardPercentage:0,
            claimTax:30,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: true,
            startingDay: 60,
            startingRewards: 0
        },
        level2:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level3:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level4:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level5:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        tableData: [],
        startingNodes: [24,0,0,0,0],
        calLength: 30,
        walletBalance: 0,
        cashToday: 0,
        tokensToMatchTarget: 0,
        dateTargetReached: ""
    },
    polar: {
        name: "polar",
        level1:{
            name:"Fuji",
            cost:35,
            apiCost: BigInt(35000000000000000000),
            rewardRate:0.45,
            rewardPercentage:0,
            claimTax:10,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level2:{
            name:"MontBlanc",
            cost:65,
            apiCost: BigInt(65000000000000000000),
            rewardRate:0.99,
            rewardPercentage:0,
            claimTax:15,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level3:{
            name:"Kilimanjaro",
            cost:250,
            apiCost: BigInt(250000000000000000000),
            rewardRate:5,
            rewardPercentage:0,
            claimTax:17,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level4:{
            name:"Ushuaia",
            cost:430,
            apiCost: BigInt(430000000000000000000),
            rewardRate:9.2,
            rewardPercentage:0,
            claimTax:20,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level5:{
            name:"Everest",
            cost:1000,
            apiCost: BigInt(1000000000000000000000),
            rewardRate:35,
            rewardPercentage:0,
            claimTax:22,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: true,
            startingDay: 0,
            startingRewards: 0
        },
        tableData: [],
        startingNodes: [0,0,2,0,2],
        calLength: 30,
        walletBalance: 0,
        cashToday: 0,
        tokensToMatchTarget: 0,
        dateTargetReached: ""
    },
    fire: {
        name: "fire",
        level1:{
            name:"Nest",
            cost:10,
            apiCost: BigInt(10000000000000000000),
            rewardRate:0.225,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0.5,
            claimFeeCoin: "avax",
            // FIRE HAS A 0.05 AVAX CLAIM FEE PER NODE
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: true,
            startingDay: 0,
            startingRewards: 0
        },
        level2:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level3:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level4:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        level5:{
            name:"",
            cost:0,
            apiCost: BigInt(0),
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            claimFee: 0,
            claimFeeCoin: "",
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        tableData: [],
        startingNodes: [0,0,0,0,0],
        calLength: 30,
        walletBalance: 0,
        cashToday: 0,
        tokensToMatchTarget: 0,
        dateTargetReached: ""
    }
}

let userNodeData = {}

function formatMoney(str1, str2){
    if (typeof(str1) == "number") {
        if (str1%Math.floor(str1) == 0) {
            str1 = String(str1 + ".00");
        } else {
            str1 = String(Math.floor(str1 * 100) / 100);
        }
    }
    if (typeof(str1) == "string") {
        let regex = /\.\d\b/;
        if(regex.test(str1)){
            str1 += "0";   
        } else if (!(/\./).test(str1)) {
            str1 += ".00"
        }
    }
    if(str2 != "") {
        str1 += " " + str2;
    }
    return "$" + str1;
    
}

function addDay(date){
    var next = new Date(date.valueOf());
    next.setDate(next.getDate() + 1);
    return next;
}

function dayOfYearIndex(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000 - 1;
}

function doyToDate(doy, year) {
    return new Date(year, 0, doy);
}

function truncateAddress(address) {
    if (!address) {
      return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
      address.length - 5,
      address.length
    )}`;
}

function truncateNum(num, int) {
    num = num * 10 ** int;
    num = Math.round(num);
    return num / (10 ** int);
}

function capitalizeFirst(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1);
}

function populateCardData(elem,obj){

    let url = "";
    elem.querySelector(".coin-price").textContent = formatMoney(obj["prices"]["currentPrice"], "usd");
    elem.querySelector(".symbol").textContent = obj["symbol"];
    elem.querySelector(".network").textContent = obj["chainID"];
    if(obj["chainID"].toLowerCase() == "ethereum"){
        url = "http://etherscan.io/address/";
    } else if(obj["chainID"].toLowerCase() == "avalanche"){
        url = "http://snowtrace.io/address/";
    }
    if (obj["coinGeckoID"] != "") {
        elem.querySelector(".platforms").innerHTML = "<a href='" + url + Object.values(obj["platforms"])[0] + "'>" + truncateAddress(Object.values(obj["platforms"])[0]) + "</a>";
        elem.querySelector(".ath").textContent = formatMoney(obj["prices"]["ath"], "usd");
        elem.querySelector(".ath-date").textContent = obj["prices"]["athDate"];
        elem.querySelector(".atl").textContent = formatMoney(obj["prices"]["atl"], "usd");
        elem.querySelector(".atl-date").textContent = obj["prices"]["atlDate"];
        elem.querySelector(".high-24h").textContent = formatMoney(obj["prices"]["high_24h"], "usd");
        elem.querySelector(".low-24h").textContent = formatMoney(obj["prices"]["low_24h"], "usd");
        elem.querySelector(".total-volume").textContent = obj["prices"]["totalVolume"];
        elem.querySelector(".market-cap").textContent = "$" + obj["prices"]["marketCap"];
        elem.querySelector(".homepage").setAttribute("href", obj["homepage"]);
        elem.querySelector(".logo").setAttribute("src", obj["imageLinks"]["thumb"]);
    } else {
        elem.querySelector(".platforms").innerHTML = "<a href='" + url + obj["coinAddress"][0] + "'>" + truncateAddress(obj["coinAddress"][0]) + "</a>";
    }
}

function updateCoinData(elem,obj){
    let count = 0;
    let api = "";
    let url = "";
    if (obj["coinGeckoID"] != "") {
        url = coinGeckoURL + obj["coinGeckoID"];
        api = "coinGecko";
    } else {
        url = dexURL + obj["chainID"].toLowerCase() + "/" + obj["dexPairAddress"];
        api = "dex";
    }
        // let url = dexURL + obj["chainID"].toLowerCase() + "/" + obj["dexPairAddress"];
        // url = coinGeckoURL + obj["coinGeckoID"];
    (function getCoinData() {
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(count == 0){
                console.log(data);
                count++;
            }
            document.querySelector("#connectMM").classList.remove("disabled");
            if (api == "coinGecko") {
                let dateRegex = /\d{4}-\d\d-\d\d/;
                obj["symbol"] = data["symbol"].toUpperCase();
                obj["description"] = data["description"]["en"];
                obj["imageLinks"] = data["image"];
                obj["network"] = data["asset_platform_id"];
                obj["mediumLink"] = data["links"]["announcement_url"];
                obj["homepage"] = data["links"]["homepage"][0];
                obj["platforms"] = data["platforms"];
                obj["prices"]["ath"] = data["market_data"]["ath"]["usd"];
                obj["prices"]["athDate"] = data["market_data"]["ath_date"]["usd"].match(dateRegex);
                obj["prices"]["atl"] = data["market_data"]["atl"]["usd"];
                obj["prices"]["atlDate"] = data["market_data"]["atl_date"]["usd"].match(dateRegex);
                obj["prices"]["currentPrice"] = data["market_data"]["current_price"]["usd"];
                obj["prices"]["high_24h"] = data["market_data"]["high_24h"]["usd"];
                obj["prices"]["low_24h"] = data["market_data"]["low_24h"]["usd"];
                obj["prices"]["totalVolume"] = data["market_data"]["total_volume"]["usd"];
                obj["prices"]["marketCap"] = data["market_data"]["market_cap"]["usd"];
            } else {
                // using DEXScreener
                obj["symbol"] = data["pair"]["baseToken"]["symbol"];
                obj["network"] = obj["chainID"].toLowerCase(); 
                obj["prices"]["currentPrice"] = data["pair"]["priceUsd"];
            }
            populateCardData(elem,obj);
            if (userAddress != null) {
                comparisonData(nodeData[obj["localName"]]);
            }

            // Update prices on Summary Card
            for (coin in coinData) {
                document.querySelector(".summary-coin-price ." + coinData[coin]["localName"] + "-price").innerHTML = formatMoney(coinData[coin]["prices"]["currentPrice"],"");
            }
            
        }).catch(function(error){
            console.log(error);
        });
        setTimeout(getCoinData, 10000);
    })();
}

function updateMainCoinData(obj) {
    let count = 0;
    let url = coinGeckoURL + obj["coinGeckoID"];
    (function getMainCoinData(){
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(count == 0){
                console.log(data);
                count++;
            }
            document.querySelector("#connectMM").removeAttribute("disabled");

            let dateRegex = /\d{4}-\d\d-\d\d/;
            obj["symbol"] = data["symbol"].toUpperCase();
            obj["description"] = data["description"]["en"];
            obj["imageLinks"] = data["image"];
            obj["network"] = data["asset_platform_id"];
            obj["mediumLink"] = data["links"]["announcement_url"];
            obj["homepage"] = data["links"]["homepage"][0];
            obj["platforms"] = data["platforms"];
            obj["prices"]["ath"] = data["market_data"]["ath"]["usd"];
            obj["prices"]["athDate"] = data["market_data"]["ath_date"]["usd"].match(dateRegex);
            obj["prices"]["atl"] = data["market_data"]["atl"]["usd"];
            obj["prices"]["atlDate"] = data["market_data"]["atl_date"]["usd"].match(dateRegex);
            obj["prices"]["currentPrice"] = data["market_data"]["current_price"]["usd"];
            obj["prices"]["high_24h"] = data["market_data"]["high_24h"]["usd"];
            obj["prices"]["low_24h"] = data["market_data"]["low_24h"]["usd"];
            obj["prices"]["totalVolume"] = data["market_data"]["total_volume"]["usd"];
            obj["prices"]["marketCap"] = data["market_data"]["market_cap"]["usd"];

            // Update prices on Summary Card
            for (coin in mainCoinData) {
                document.querySelector(".summary-coin-price ." + mainCoinData[coin]["localName"] + "-price").innerHTML = formatMoney(mainCoinData[coin]["prices"]["currentPrice"],"");
            }
            
        }).catch(function(error){
            console.log(error);
        });
        setTimeout(getMainCoinData, 10000);
    })();
}

// updateCoinData
document.addEventListener('DOMContentLoaded', function() {
    let cards = document.getElementsByClassName("card");
    let i=2;
    for(obj in coinData){
        updateCoinData(cards[i],coinData[obj]);
        i++;
    }
    for (coin in mainCoinData) {
        updateMainCoinData(mainCoinData[coin]);
    }
})

// mmLogin
let connectMM = document.getElementById("connectMM");
window.addEventListener('DOMContentLoaded', function() {
    if(!window.ethereum) {
        connectMM.innerText = "MetaMask not installed";
        // style button
    } else {
        connectMM.addEventListener("click", mmLogin);
    }
})

async function mmLogin() {
    window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
            if (!accounts) {return};
            userAddress = accounts[0];
            window.userAddress = userAddress;
            connectMM.innerText = "Logged In";

            // i loops through coinData (strngr, thor, pxt, etc)
            for (let i = 0; i < userNetworks.length; i++) {
                let url = ""
                let apiKey = "";
                let network = userNetworks[i];
                if (network == "ethereum") {
                    url = etherscanAPI;
                    apiKey = etherscanApiKey;
                } else if (network == "avalanche") {
                    url = snowtraceAPI;
                    apiKey = snowtraceApiKey;
                } else if (network == "bsc") {
                    url = bscScanAPI;
                    apiKey = bscScanApiKey;
                }
                fetch(url +
                    // "&contractaddress=" +
                    // coinData[Object.keys(coinData)[i]]["coinAddress"][0] +
                    userAddress +
                    "&startblock=0&endblock=9999999999&sort=asc&apikey=" +
                    apiKey).then(
                        response => response.text()
                    ).then(
                        data => {
                            data = JSON.parse(data);
                            allUserTrxns[network] = data["result"];
                            fromUserTrxns();
                            toUserTrxns();
                            // console.log(allUserTrxns);
                            for (node in nodeData) {
                                if (coinData[nodeData[node]["name"]]["network"] == network) {
                                    getNodeCounts(nodeData[node]);
                                }
                            }
                        }
                    ).catch(
                        error => {
                            console.error(error)
                    }
                )
            }
        })
        .catch((e) => {
            console.error(e.message);
            return
    });  
}

function fromUserTrxns() {
    for (network in allUserTrxns) {
        trxnsFromUser[network] = [];
        for (i = 0; i < allUserTrxns[network].length; i++) {
            if (allUserTrxns[network][i]["from"] == userAddress) {
                trxnsFromUser[network].push(allUserTrxns[network][i]);
            }
        }
    }
}

function toUserTrxns() {
    for (network in allUserTrxns) {
        trxnsToUser[network] = [];
        for (i = 0; i < allUserTrxns[network].length; i++) {
            if (allUserTrxns[network][i]["to"] == userAddress) {
                trxnsToUser[network].push(allUserTrxns[network][i]);
            }
        }
    }
}

function getNodeCounts(obj) {
    // obj = nodeData[x]
    let counts = [];
    for (let i = 0; i < maxLevels; i++) {
        counts.push(0);
    }
    let trxns = trxnsFromUser[coinData[obj["name"]]["network"]];
    let trxnsCounted = [];
    // j loops through transactions for each coin pulled by fetch
    for (let k = 0; k < trxns.length; k++) {
        // k loops through node levels (level5, level4, etc)
        for (let l = maxLevels; l > 0; l--) {
            if (obj["level" + l]["apiCost"] > 0) {
                if (BigInt(trxns[k]["value"]) % obj["level" + l]["apiCost"] == 0 && trxnsCounted.indexOf(trxns[k]) == -1) {
                    for (let m = 0; m < coinData[obj["name"]]["contractAddress"].length; m ++) {
                        if(trxns[k]["to"] == coinData[obj["name"]]["contractAddress"][m].toLowerCase()) {
                            counts[l-1] += parseInt(BigInt(trxns[k]["value"]) / obj["level" + (l)]["apiCost"]);
                            trxnsCounted.push(trxns[k]);
                        }
                    }
                }
            }
        }
    }
    obj["startingNodes"] = counts;
    fillTableData(obj);
    createTable(document.getElementById(obj["name"] + "Card"), obj);
}

function showHideCard(id){
    let thisTab = document.getElementById(id);
    let otherTabs = document.getElementsByClassName("nav-link");
    var thisCard = document.getElementById(id.replace("Tab","Card"));
    var otherCards = document.getElementsByClassName("card");
    thisCard.style.display = "flex";
    thisTab.classList.add("tab-dark");
    thisTab.classList.remove("tab-light");
    for(let i=0; i<otherCards.length; i++){
        if(otherCards[i] != thisCard){
            otherCards[i].style.display = "none";
            otherTabs[i].classList.remove("tab-dark");
            otherTabs[i].classList.add("tab-light");
        }
    }
}

// Fill Table data the first time
function fillTableData(obj) {
    // tableData = 
        // {
            // cash: 0
            // cashout: false
            // cumCash: 0
            // date: "3/16/2022"
            // dr: 0.64582
            // drb: 4.4168199999999915
            // index: 74
            // node1: 7
            // node2: 0
            // node3: 0
            // node4: 0
        // }

    obj["tableData"]["days"] = [];
    let days = obj["tableData"]["days"];
    obj["tableData"]["months"] = [];
    let months = obj["tableData"]["months"];
    let date = new Date();
    let startingNodes = obj["startingNodes"];
    let prevDaysObj;
    let emptyObj = {
        index: 0,
        date: "",
        node1: 0,
        node2: 0,
        node3: 0,
        node4: 0,
        node5: 0,
        drb: 0.0,
        dr: 0.0,
        cash: 0.0,
        cumCash: 0,
        cashout: false
    };

    let todayIndex = dayOfYearIndex(date);

    for (let d = 0; d < todayIndex; d++) {
        days.push(emptyObj);
    }

    // Fill daily data
    for (let j = todayIndex; j < 365; j++) {
        let daysObjPush = {
            index: 0,
            date: "",
            node1: 0,
            node2: 0,
            node3: 0,
            node4: 0,
            node5: 0,
            drb: 0.0,
            dr: 0.0,
            cash: 0,
            cumCash: 0,
            cashout: false
        };

        daysObjPush["index"] = j;
        daysObjPush["date"] = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
        
        if (j == todayIndex) {
            for (let k = 0; k < maxLevels; k++) {
                daysObjPush["node" + (k + 1)] = startingNodes[k];
            }
        } else if (j > todayIndex) {
            prevDaysObj = days[(j-1)];
        }

        let dr = 0;
        let drb = 0;

        for (let i=1; i <= maxLevels; i++) {    
            if (obj["level" + i]["name"] != "") {
                let rew = obj["level" + i]["rewardRate"];
                let cost = obj["level" + i]["cost"];
                let comp = obj["level" + i]["compounding"];

                // daysObjPush["node" + i], daysObjPush["drb"]
                if (j > todayIndex) {    
                    if (comp) {    
                        if (prevDaysObj["drb"] + prevDaysObj["dr"] >= cost) {
                            daysObjPush["node" + i] = prevDaysObj["node" + i] + ~~((prevDaysObj["drb"] + prevDaysObj["dr"]) / cost);
                            drb = prevDaysObj["drb"] + prevDaysObj["dr"] - ((daysObjPush["node" + i] - prevDaysObj["node" + i]) * cost);
                        } else {
                            daysObjPush["node" + i] = prevDaysObj["node" + i];
                            drb = prevDaysObj["drb"] + prevDaysObj["dr"];
                        }
                    }
                    else {
                        daysObjPush["node" + i] = prevDaysObj["node" + i];
                        daysObjPush["drb"] = prevDaysObj["drb"] + prevDaysObj["dr"];
                    }
                }

                if (j == todayIndex) {
                    // daysObjPush["node" + i] = obj["startingNodes"][i-1];
                    drb = obj["level" + i]["startingRewards"];
                }

                daysObjPush["dr"] += daysObjPush["node" + i] * rew;
            }
        }
        
        daysObjPush["drb"] = drb;
        days.push(daysObjPush);
        if (j == todayIndex) {
            obj["cashToday"] = getTodayCash(obj, todayIndex);
        }
        date = addDay(date);
    }
    for (let k = 0; k < 12; k++) {
        months.push({
            "index": "m" + k,
            "total": 0
        });
    }
    obj["cashToday"] = getTodayCash(obj, todayIndex);
}

function updateTableDataRow(rowElem, e) {
    // tableData[x] = 
        // {
            // cash: 0
            // cashout: false
            // cumCash: 0
            // date: "3/16/2022"
            // dr: 0.64582
            // drb: 4.4168199999999915
            // index: 74
            // node1: 7
            // node2: 0
            // node3: 0
            // node4: 0
            // node5: 0
        // }

    // let classList;
    // if (e != false) {
    //     classList = e.target.classList;
    // }
    let coinObj = nodeData[rowElem.parentNode.classList[0]];
    let days = coinObj["tableData"]["days"];
    let rowIndex;
    let todayIndex = dayOfYearIndex(new Date());
    
    // If the row to be edited is a .day-row
    if (rowElem.classList[1] == "day-row") {
        rowIndex = parseInt(rowElem.classList[2].slice(1));
        let thisRow = days[rowIndex];
        let prevRow;

        if (rowIndex > 0) {
            prevRow = days[rowIndex - 1];
        }

        // Capture previous checkbox value
        if (rowIndex > todayIndex) {
            if(rowElem.previousElementSibling.classList[1] != "total-row") {
                prevRow["cashout"] = rowElem.previousElementSibling.querySelector(".cashout").checked;
            } else {
                prevRow["cashout"] = rowElem.previousElementSibling.previousElementSibling.querySelector(".cashout").checked;
            }
        }
        // else if (rowIndex == todayIndex) {
        //     prevRow["cashout"] = false;
        // }



// ADDING NODES IS OVERWRITING CASHOUT & CASH VALUES


        // If row was edited, get new values and calculate the rest
        if (e != false) {
            if (e.target.parentElement.classList[0] == "cashout-cell") {
                thisRow["cashout"] = rowElem.querySelector(".cashout").checked;
            } else if (e.target.parentElement.classList[0] != "cashout-cell") {
                let dr = 0;
                let edited = e.target;
                let parent = edited.parentElement;
                if (parent.classList[0] == "drb-cell") {
                    thisRow["drb"] = parseFloat(edited.value);
                } else if (parent.classList[1].slice(0,3) == "lev") {
                    let levelNum = parent.classList[1].slice(parent.classList[1].length - 1);
                    thisRow["node" + levelNum] = parseInt(edited.value);

                    for (let k = 1; k <= maxLevels; k++) {
                        if (coinObj["level" + k]["name"] != "") {
                            dr += thisRow["node" + k] * coinObj["level" + k]["rewardRate"];
                        }
                    }
                    thisRow["dr"] = dr;
                }
            }

        } else {    
            // if updateTableDataRow was called sequentially, calculate values
            let drb = 0;
            let dr = 0; 
            for (let i=1; i <= maxLevels; i++) {   
                if (coinObj["level" + i]["name"] != "") {
                    let rew = coinObj["level" + i]["rewardRate"];
                    let cost = coinObj["level" + i]["cost"];
                    let comp = coinObj["level" + i]["compounding"];

                    // thisRow["node" + i]
                    if (rowIndex > 0) {
                        if(!prevRow["cashout"]) {
                            if (comp) {    
                                if (prevRow["drb"] + prevRow["dr"] >= cost) {
                                    thisRow["node" + i] = prevRow["node" + i] + ~~((prevRow["drb"] + prevRow["dr"]) / cost);
                                } else {
                                    thisRow["node" + i] = prevRow["node" + i];
                                }
                            }
                            else {
                                thisRow["node" + i] = prevRow["node" + i];
                            }
                        } else {
                            thisRow["node" + i] = prevRow["node" + i];
                        }
                        
                    }
                    if (rowIndex == coinObj["level" + i]["startingDay"]) {
                        thisRow["node" + i] = coinObj["startingNodes"][i-1];
                    }

                    // thisRow["drb"]
                    if (rowIndex > 0) {
                        if(!prevRow["cashout"]) {
                            if (comp) {    
                                if (prevRow["drb"] + prevRow["dr"] >= cost) {
                                    drb = prevRow["drb"] + prevRow["dr"] - ((thisRow["node" + i] - prevRow["node" + i]) * cost);
                                } else {
                                    drb = prevRow["drb"] + prevRow["dr"];
                                }
                            }
                        } else {
                            drb = 0;
                        }
                    } else {
                        drb = 0;
                    }
        
                    dr += thisRow["node" + i] * rew;
                }
                if (rowIndex == coinObj["level" + i]["startingDay"]) {
                    drb = coinObj["level" + i]["startingRewards"];
                }
            }
            thisRow["drb"] = drb;
            thisRow["dr"] = dr;
        }

        // Cash cell
        if (thisRow["cashout"]) {
            thisRow["cash"] = (thisRow["drb"] + thisRow["dr"]) * coinData[coinObj["name"]]["prices"]["currentPrice"];
        } else {
            thisRow["cash"] = 0;
        }

        // Cumulative cash cell
        if (rowIndex == todayIndex) {
            thisRow["cumCash"] = thisRow["cash"];
            
        } else {
            if (thisRow["cashout"]) {
                thisRow["cumCash"] = prevRow["cumCash"] + thisRow["cash"]; 
            } else {
                thisRow["cumCash"] = prevRow["cumCash"];
            }
        }

        coinObj["tableData"]["days"][rowIndex] = thisRow;

    } else if (rowElem.classList[1] == "total-row") {
        // if the row to be edited is a total-row
        let months = coinObj["tableData"]["months"];
        let monthIndex = rowElem.classList[0];
        
        let monthTotal = 0;
        let thisRow = rowElem.previousElementSibling;
        // let prevRow = rowElem.previousElementSibling.previousElementSibling;
        let count = 0;

        do {
            // count = 0, thisRow = rowElem.prev, prevRow = rowElem - 2
            if(thisRow.classList[0] != "header-row" && thisRow.classList[0] != "total-row") {
                if (thisRow.querySelector(".cash-cell").textContent != "") {
                    
                    monthTotal += parseFloat(thisRow.querySelector(".cash-cell").textContent.slice(1));
                }
                thisRow = thisRow.previousElementSibling;
            } else {
                break;
            }
            count++;
        }
        while (thisRow != null && thisRow.classList[1] == "day-row");
        
        months[parseInt(monthIndex.slice(1))]["total"] = monthTotal;
    }
}

function createCard(obj) {




}

function createTable(elem,obj){
    // elem is card element
    // obj is nodeData[x]
    let div;
    if (elem.children[3].contains(elem.querySelector(".table-div"))){
        div = elem.querySelector(".table-div");
    } else {
        div = document.createElement("div");
        div.classList.add("table-div");
    }

    if (div.childNodes.length > 0) {
        div.removeChild(div.childNodes[0]);
    }
    let table = document.createElement("table");
    table.classList.add("calc-table","table");
    let tHead = document.createElement("thead");
    let body = document.createElement("tbody");
    body.className = obj["name"];

    let num = 1;
    let date = new Date();
    let monthIndex = date.getMonth();
    let today = date;

    table.classList.add(obj["name"] + "-table");

    // Create header row
    let tHeadRow = "";
    tHeadRow += "<tr class='header-row calc-table'>";
    tHeadRow += "<th scope='col'>Date</th>";
    tHeadRow += "<th scope='col'>" + obj["level1"]["name"] + " Nodes</th>";
    if(obj["level2"]["name"] != ""){
        num += 1;
        tHeadRow += "<th scope='col'>" + obj["level2"]["name"] + " Nodes</th>";

    };
    if(obj["level3"]["name"] != ""){
        num += 1;
        tHeadRow += "<th scope='col'>" + obj["level3"]["name"] + " Nodes</th>";

    };
    if(obj["level4"]["name"] != ""){
        num += 1;
        tHeadRow += "<th scope='col'>" + obj["level4"]["name"] + " Nodes</th>";

    };
    if(obj["level5"]["name"] != ""){
        num += 1;
        tHeadRow += "<th scope='col'>" + obj["level5"]["name"] + " Nodes</th>";

    };
    tHeadRow += "<th scope='col'>Daily Rewards Balance</th><th scope='col'>Daily Rewards</th><th scope='col'>Cash</th><th scope='col'>Cumulative Gross Cash</th><th scope='col'>Cashout?</th></tr>";
    tHead.innerHTML = tHeadRow;
    table.appendChild(tHead);

    // Create a row for each day
    let tableData = obj["tableData"];
    let days = obj["tableData"]["days"];
    for(let i = dayOfYearIndex(today); i < dayOfYearIndex(today) + obj["calLength"]; i++){
        let row = document.createElement("tr");
        
        let dateStr = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
        let dateClassStr = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
        row.className = "_" + dateClassStr + " day-row d" + (i);

        let dateCell = document.createElement("td");
        dateCell.classList.add("date-cell");
        dateCell.textContent = dateStr;
        row.append(dateCell);

        for(let j = 1; j <= num; j++){
            let cell = document.createElement("td");
            cell.classList.add(obj["level" + j]["name"].toLowerCase(),"lev" + j);
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("onclick", "this.select()");
            input.setAttribute("name", obj["level" + j]["name"].toLowerCase());
            input.setAttribute("value", days[i]["node" + j]);
            cell.append(input);
            row.append(cell);
        }
        
        // Daily Rewards Balance cell
        let drbCell = document.createElement("td");
        drbCell.classList.add("drb-cell");
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("onclick", "this.select()");
        input.setAttribute("name", "drb");
        input.setAttribute("value", days[i]["drb"].toFixed(4));
        drbCell.append(input);
        row.append(drbCell);

        // Daily Rewards cell
        let drCell = document.createElement("td");
        drCell.classList.add("dr-cell");
        drCell.innerText = days[i]["dr"].toFixed(4);
        row.append(drCell);

        // Cash cell
        let cashCell = document.createElement("td");
        cashCell.classList.add("cash-cell");
        if (days[i]["cash"] > 0) {
            cashCell.textContent = formatMoney(days[i]["cash"],"");
        } else {
            cashCell.textContent = "";
        }
        row.append(cashCell);

        // Cumulative Gross Cash cell
        let cumCashCell = document.createElement("td");
        cumCashCell.classList.add("cum-cash-cell");
        if (days[i]["cumCash"]) {
            cumCashCell.textContent = formatMoney(days[i]["cumCash"],"");
        } else {
            cumCashCell.textContent = "";
        }
        row.append(cumCashCell);

        // Cashout? cell (checkbox)
        let cashoutCell = document.createElement("td");
        cashoutCell.classList.add("cashout-cell");
        let check = document.createElement("input");
        check.setAttribute("type","checkbox");
        check.setAttribute("name", "cashout");
        check.setAttribute("value", "cashout");
        check.classList.add("cashout");
        check.checked = days[i]["cashout"];
        cashoutCell.append(check);
        row.append(cashoutCell);

        // row.innerHTML += rowStr;
        row.setAttribute("contenteditable", "false");
        row.childNodes[1].setAttribute("contenteditable", "true");
        row.childNodes[2].setAttribute("contenteditable", "true");
        if(num >= 2){
            row.childNodes[2].setAttribute("contenteditable", "true");
            row.childNodes[3].setAttribute("contenteditable", "true");
        };
        if(num >= 3){
            row.childNodes[3].setAttribute("contenteditable", "true");
            row.childNodes[4].setAttribute("contenteditable", "true");
        };
        if(num >= 4){
            row.childNodes[4].setAttribute("contenteditable", "true");
            row.childNodes[5].setAttribute("contenteditable", "true");
        };

        body.appendChild(row);
        

        let tomorrow = addDay(date);
        if(date.getMonth() < tomorrow.getMonth() || (date.getMonth() == 11 && tomorrow.getMonth() == 0)){
            let totalRow = "";
            totalRow += "<tr contenteditable='false' class='table-active m" + monthIndex + " total-row " + date.toLocaleString('default', { month: 'long' }).toLowerCase() + "'>";
            totalRow += "<td>" + date.toLocaleString('default', { month: 'long' }) + " Total</td>";
            totalRow += "<td></td>";
            if(num >= 2){
                totalRow += "<td></td>";
            };
            if(num >= 3){
                totalRow += "<td></td>";
            };
            if(num >= 4){
                totalRow += "<td></td>";
            };
            if(num >= 5){
                totalRow += "<td></td>";
            };
            totalRow += "<td></td><td></td><td class='month-cash-total'>" + tableData["months"][monthIndex]["total"] + "</td><td></td><td></td>";
            body.innerHTML += totalRow;
            monthIndex ++;
        }
        date = addDay(date);
    };
    
    table.appendChild(body);
    table.addEventListener('keydown', (e) => {
        if ((e.key === "Enter" || e.key === "Tab") && e.target.classList[0] != "cashout") {
            e.preventDefault();
        // Validate input - only allow numbers & decimal
        
        
            // console.log(e);
            updateRow(e.target.parentNode.parentNode, e);
        }
    });
    table.addEventListener("input", (e) => {
        if(e.target.classList[0] == "cashout") {
            // console.log(e);
            updateRow(e.target.parentNode.parentNode, e);
        }
    })
    div.appendChild(table);
    elem.children[3].appendChild(div);
}

function fillCoinStatsData(obj) {
    // obj = nodeData[x]
    // loop through levels
        // Rewards/day
        // Node cost
    // EOY total cash
    // Daily cash today
    // Total all projects
    // Monthly totals?

    let div = document.querySelector("#" + obj["name"] + "Card .coin-stats");

    if (!!div.querySelector(".cash-today")) {
        div.querySelector(".cash-today").textContent = formatMoney(obj["cashToday"],"");
    } else {
        let cashToday = document.createElement("li");
        cashToday.classList = "cash-today";
        cashToday.textContent = formatMoney(obj["cashToday"],"");
        div.append(cashToday);
    }

    for (i = 1; i <= maxLevels; i++) {
        let ul;
        if (!!div.querySelector(".node-level, .level" + i)) {
            ul = div.querySelector(".level" + i);
        } else {
            let ul = document.createElement("ul");
            ul.classList = "node-level level" + i;
            div.append(ul);
        }
        if (!!ul.querySelector(".rewards-per-day")) {
            ul.querySelector(".rewards-per-day").textContent = obj["level" + i]["rewardRate"];
        } else {
            let rewPerDay = document.createElement("li");
            rewPerDay.classList = "rewards-per-day";
            rewPerDay.textContent = obj["level" + i]["rewardRate"];
            ul.append(rewPerDay);
        }
        if (!!ul.querySelector(".node-cost")) {
            ul.querySelector(".node-cost").textContent = obj["level" + i]["cost"];
        } else {
            let nodeCost = document.createElement("li");
            nodeCost.classList = "node-cost";
            nodeCost.textContent = obj["level" + i]["rewardRate"];
            ul.append(nodeCost);
        }
    }
}

// Event listeners for .cal-length-buttons buttons
let calOneMonth = document.querySelectorAll(".cal-30");
let calTwoMonths = document.querySelectorAll(".cal-60");
let calThreeMonths = document.querySelectorAll(".cal-90");
let calYear = document.querySelectorAll(".cal-365");

function calLengthClick(e, num) {
    if (num == 365) {
        num = dayOfYearIndex(new Date(2022,11,31)) - dayOfYearIndex(new Date()) + 1;
    }
    nodeData[e.target.parentElement.nextElementSibling.children[0].children[1].classList[0]]["calLength"] = num;
    createTable(document.getElementById(e.target.parentElement.nextElementSibling.children[0].children[1].classList[0] + "Card"), nodeData[e.target.parentElement.nextElementSibling.children[0].children[1].classList[0]]);

    let buttons = e.target.parentElement.querySelectorAll("button");

    for (i=0; i < buttons.length; i++) {
        buttons[i].classList.remove("underline");
    }
    e.target.classList.add("underline");
}

// update row UI
function updateRow(rowElem, e){
    updateTableDataRow(rowElem, e);
    // Get relative nodeData
    let coinObj = nodeData[rowElem.closest("tbody").classList[0]];

    // Update row of daily data
    if (rowElem.classList[1] == "day-row") {
        let days = coinObj["tableData"]["days"];
        // Get row index
        let rowIndex;
        if (rowElem.classList[1] == "day-row") {
            rowIndex = parseInt(rowElem.classList[2].slice(1));
        }

        // Update node counts
        for (let i=1; i <= maxLevels; i++) {   
            if (coinObj["level" + i]["name"] != "") {
                let nodeCount = rowElem.querySelector(".lev" + i).children[0];
                nodeCount.value = days[rowIndex]["node" + i];
            }
        }

        // Cashout cell
        let cashoutInput = rowElem.querySelector(".cashout");
        cashoutInput.checked = days[rowIndex]["cashout"];

        // Cash cell
        let cashCell = rowElem.querySelector(".cash-cell");
        if (days[rowIndex]["cashout"]) {
            cashCell.innerText = formatMoney(days[rowIndex]["cash"],"");
        } else {
            cashCell.innerText = "";
        }

        // Cumulative cash cell
        let cumCash = rowElem.querySelector(".cum-cash-cell");
        if (days[rowIndex]["cumCash"] > 0) {
            cumCash.innerText = formatMoney(days[rowIndex]["cumCash"],"");
        } else {
            cumCash.innerText = "";
        }

        // Set Daily Rewards
        let drCell = rowElem.querySelector(".dr-cell");
        drCell.textContent = days[rowIndex]["dr"].toFixed(4);

        // Set Daily Rewards Balance
        let drbCell = rowElem.querySelector(".drb-cell").children[0];
        drbCell.value = days[rowIndex]["drb"].toFixed(4);

    // update row of monthly data
    } else if (rowElem.classList[1] == "total-row") {
        let months = coinObj["tableData"]["months"];
        let monthTotal = rowElem.querySelector(".month-cash-total");
        let val = formatMoney(months[parseInt(rowElem.classList[0].slice(1))]["total"].toFixed(2), "");
        monthTotal.innerText = val;
        let monthIndex = monthTotal.parentElement.classList[0];
        let classNames = "." + rowElem.parentElement.classList[0] + "-summary ." + monthIndex;
        document.querySelector(classNames).innerText = val;
    }
    
    if (rowElem.classList[0] != "m11") {
        if (parseInt(rowElem.classList[2].slice(1)) < dayOfYearIndex(new Date()) + coinObj["calLength"] - 1) {
            updateRow(rowElem.nextElementSibling, false);
        } else if(rowElem.classList[1] == "total-row" && parseInt(rowElem.nextElementSibling.classList[2].slice(1)) < dayOfYearIndex(new Date()) + coinObj["calLength"]) {
            updateRow(rowElem.nextElementSibling, false);
        }
    };
}

function getTodayCash(obj, todayIndex) {
    // let todayIndex = dayOfYearIndex(new Date());
    let total = 0;
    for (let i = 1; i <= maxLevels; i++) {
        total += obj["tableData"]["days"][todayIndex]["node" + i] * obj["level" + i]["rewardRate"] * ((100 - obj["level" + i]["claimTax"])/100);
    }
    return total * coinData[obj["name"]]["prices"]["currentPrice"];
}

// COMPARISON TABLE----------------------------------------------------------------

let compTable = document.querySelector("#comparisonCard>table>tbody");
let initialInput = document.getElementById("initial");
let minumum = document.querySelector("#minimumCompare");
let initial = parseFloat(initialInput.value)
initialInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
    // Validate input - only allow numbers & decimal
        initial = parseFloat(initialInput.value);
        for (node in nodeData) {
            comparisonData(nodeData[node]);
        }
    
        console.log(e);
    }
})
let compNodeData = {};

function comparisonData(obj) {
    // obj is nodeData[obj]
    compNodeData[obj["name"]] = {};
    for (let i = 1; i <= maxLevels; i++) {

        if (obj["level" + i]["name"] != "") {

            compNodeData[obj["name"]]["level" + i] = {};
            let level = compNodeData[obj["name"]]["level" + i];
            let nodeLevel = obj["level" + i];

            if (obj["name"].toLowerCase() == obj["level" + i]["name"].toLowerCase()) {
                level["name"] = obj["level" + i]["name"];
                level["className"] = level["name"].toLowerCase();
            } else {
                level["name"] = capitalizeFirst(obj["name"]) + " - " + capitalizeFirst(obj["level" + i]["name"]);
                level["className"] = obj["level" + i]["name"].toLowerCase();
            }

            level["coinPrice"] = truncateNum(coinData[obj["name"]]["prices"]["currentPrice"],2);
            level["cost"] = truncateNum(nodeLevel["cost"],3);
            level["costUsd"] = truncateNum(level["cost"] * level["coinPrice"],2);
            level["rewardRate"] = truncateNum(nodeLevel["rewardRate"],3);
            level["rewPercent"] = truncateNum((level["rewardRate"] / level["cost"] * 100),2);
            level["addedNodes"] = Math.floor(initial/level["cost"]/level["coinPrice"]);
            level["currentNodes"] = nodeData[obj["name"]]["tableData"]["days"][dayOfYearIndex(new Date())]["node" + i];
            level["moneySpent"] = truncateNum((level["addedNodes"] * level["cost"] * level["coinPrice"]),2);
            level["currentRewards"] = truncateNum(nodeData[obj["name"]]["tableData"]["days"][dayOfYearIndex(new Date())]["dr"],3);
            level["currentRewardsUsd"] = truncateNum((level["currentRewards"] * level["coinPrice"]),2);
            level["newRewards"] = truncateNum((level["currentRewards"] + (level["addedNodes"] * level["rewardRate"])),3);
            level["newRewardsUsd"] = truncateNum((level["newRewards"] * level["coinPrice"]),2);
            level["difference"] = truncateNum((level["newRewardsUsd"] - level["currentRewardsUsd"]),2);

            if (level["currentRewardsUsd"] > 0) {
                level["differencePercent"] = truncateNum((level["newRewardsUsd"] / level["currentRewardsUsd"] * 100),2);
            } else {
                level["differencePercent"] = "---";
            }

            if (level["newRewards"] > 0) {
                level["rot"] = truncateNum(((level["cost"] * level["addedNodes"]) / level["newRewards"]),0);
            } else {
                level["rot"] = "---";
            }

            compNodeData[obj["name"]]["level" + i] = level;
            updateCompRow(level);
        }
    }
}

function updateCompRow(obj) {
    // obj = compNodeData[node["name"]]["level" + i]
    let row;
    if (!document.body.contains(compTable.querySelector("." + obj["className"]))) {
        let row = document.createElement("tr");
        row.classList = obj["className"];
        let cell = document.createElement("td");
        cell.classList = "name";
        cell.textContent = obj["name"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "price";
        cell.textContent = formatMoney(obj["coinPrice"],"");
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "cost";
        cell.textContent = obj["cost"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "cost-usd";
        cell.textContent = formatMoney(obj["costUsd"],"");
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "rewards";
        cell.textContent = obj["rewardRate"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "rewards-percent";
        cell.textContent = obj["rewPercent"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "added-nodes";
        cell.textContent = obj["addedNodes"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "current-nodes";
        cell.textContent = obj["currentNodes"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "money-spent";
        cell.textContent = formatMoney(obj["moneySpent"],"");
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "current-rewards";
        cell.textContent = obj["currentRewards"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "current-rewards-usd";
        cell.textContent = formatMoney(obj["currentRewardsUsd"],"");
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "new-rewards";
        cell.textContent = obj["newRewards"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "new-rewards-usd";
        cell.textContent = formatMoney(obj["newRewardsUsd"],"");
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "difference";
        cell.textContent = formatMoney(obj["difference"],"");
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "difference-percent";
        cell.textContent = obj["differencePercent"];
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "rot";
        cell.textContent = obj["rot"];
        row.append(cell);
        compTable.append(row);
    } else {
        row = document.querySelector("." + obj["className"]);
        row.childNodes[0].textContent = obj["name"];
        row.childNodes[1].textContent = formatMoney(obj["coinPrice"],"");
        row.childNodes[2].textContent = obj["cost"];
        row.childNodes[3].textContent = formatMoney(obj["costUsd"],"");
        row.childNodes[4].textContent = obj["rewardRate"];
        row.childNodes[5].textContent = obj["rewPercent"];
        row.childNodes[6].textContent = obj["addedNodes"];
        row.childNodes[7].textContent = obj["currentNodes"];
        row.childNodes[8].textContent = formatMoney(obj["moneySpent"],"");
        row.childNodes[9].textContent = obj["currentRewards"];
        row.childNodes[10].textContent = formatMoney(obj["currentRewardsUsd"],"");
        row.childNodes[11].textContent = obj["newRewards"];
        row.childNodes[12].textContent = formatMoney(obj["newRewardsUsd"],"");
        row.childNodes[13].textContent = formatMoney(obj["difference"],"");
        row.childNodes[14].textContent = obj["differencePercent"];
        row.childNodes[15].textContent = obj["rot"];
    }
}

