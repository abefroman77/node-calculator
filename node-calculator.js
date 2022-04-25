let coinGeckoURL = "https://api.coingecko.com/api/v3/coins/";
let dexURL = "https://api.dexscreener.io/latest/dex/pairs/";
let etherscanAPI = "https://api.etherscan.io/api";
let etherscanApiKey = "UCUT7TJ8PAV1SQ92GQV631GHR3RK4BD5V9";
let snowtraceAPI = "https://api.snowtrace.io/api";
let snowtraceApiKey = "9ZDQ11918D4GMKN5VMASWGIF92RHZQ9TPH";

let userAddress = null;
let userTrxns = [];

window.userAddress = null;

let coinData = {
    strngr: {
        id:"stronger",
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
        coinAddress: ["0x990f341946A3fdB507aE7e52d17851B87168017c","0xDc0327D50E6C73db2F8117760592C8BBf1CDCF38"],
        contractAddress: "0xfbddadd80fe7bda00b901fbaf73803f2238ae655",
        abi: "",
        dexPairAddress: "0x453a43E2Bf3080f7a23c9BB034CcDD869e306102",
        chainID: "Ethereum"
    },
    thor: {
        id:"thor",
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
        contractAddress: "0xbf431b2dfe4b549614f0d5954c0351f89e7e728f",
        abi: "",
        dexPairAddress: "0x95189f25b4609120F72783E883640216E92732DA",
        chainID: "Avalanche"
    },
    pxt: {
        id:"project-x-nodes",
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
        coinAddress: ["0x9e20Af05AB5FED467dFDd5bb5752F7d5410C832e"],
        contractAddress: "0x05c88F67fa0711b3a76ada2B6f0A2D3a54Fc775c",
        abi: "",
        dexPairAddress: "0xf17A02640E399E01Ee4A197ba101e0DF14e60A98",
        chainID: "Avalanche"
    }
}

let nodeData = {
    strngr: {
        name: "strngr",
        level1:{
            name:"Strngr",
            cost:10,
            apiCost: BigInt(10000000000000000000),
            rewardRate:0.09226,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:0,
            monthlyFee:14.95,
            compounding: true,
            startingDay: 86,
            startingRewards: 0.376
        },
        level2:{
            name:"",
            cost:0,
            rewardRate:0,
            apiCost: BigInt(0),
            rewardPercentage:0,
            claimTax:0,
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
            rewardRate:0,
            apiCost: BigInt(0),
            rewardPercentage:0,
            claimTax:0,
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
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        tableData:[],
        startingNodes: [0,0,0,0],
        calLength: 30,
        walletBalance: 0,
        cashToday: 0
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
            compoundTax:0,
            sellTax:0,
            monthlyFee:20,
            compounding: true,
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
            compoundTax:0,
            sellTax:0,
            monthlyFee:80,
            compounding: false,
            startingDay: 43,
            startingRewards: 0
        },
        tableData: [],
        startingNodes: [0,0,0,0],
        calLength: 30,
        walletBalance: 0,
        cashToday: 0
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
            compoundTax:0,
            sellTax:0,
            monthlyFee:0,
            compounding: false,
            startingDay: 0,
            startingRewards: 0
        },
        tableData: [],
        startingNodes: [16,0,0,0],
        calLength: 30,
        walletBalance: 0,
        cashToday: 0
    }
}

function formatMoney(str1, str2){
    let regex = /\.\d\b/;
    if(regex.test(str1)){
        str1 += "0";   
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

function populateCardData(elem,obj){

    let url = "";
    elem.querySelector(".coin-price").textContent = formatMoney(obj["prices"]["currentPrice"], "usd");
    elem.querySelector(".symbol").textContent = obj["symbol"];
    elem.querySelector(".network").textContent = obj["chainID"];
    if(Object.keys(obj["platforms"])[0] == "ethereum"){
        url = "http://etherscan.io/address/";
    } else if(Object.keys(obj["platforms"])[0] == "avalanche"){
        url = "http://snowtrace.io/address/";
    }
    elem.querySelector(".platforms").innerHTML = "<a href='" + url + Object.values(obj["platforms"])[0] + "'>" + Object.values(obj["platforms"])[0] + "</a>";
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
}

function updateCoinData(elem,obj){
    let count = 0;
    let api = "";
    let url = "";
    if (obj["coinGeckoURL"] != "") {
        url = coinGeckoURL + obj["coinGeckoID"];
        api = "coinGecko";
    } else {
        url = dexURL + obj["chainID"].toLowerCase() + "/" + obj["dexPairAddress"];
        api = "dex";
    }
    setInterval(function(){
        // let url = dexURL + obj["chainID"].toLowerCase() + "/" + obj["dexPairAddress"];
        // url = coinGeckoURL + obj["coinGeckoID"];
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(count == 0){
                console.log(data);
                count++;
            }
            document.querySelector("#connectMM").removeAttribute("disabled");
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
                obj["prices"]["currentPrice"] = data["pair"]["priceUsd"];
                obj["prices"]["high_24h"] = data["market_data"]["high_24h"]["usd"];
                obj["prices"]["low_24h"] = data["market_data"]["low_24h"]["usd"];
                obj["prices"]["totalVolume"] = data["market_data"]["total_volume"]["usd"];
                obj["prices"]["marketCap"] = data["market_data"]["market_cap"]["usd"];
            } else {
                // using DEXScreener
                obj["symbol"] = data["pair"]["baseToken"]["symbol"].toUpperCase();
                obj["network"] = obj["chainID"]; 
            }
            populateCardData(elem,obj);
            // comparisonData(obj);

            // Update prices on Summary Card
            for (coin in coinData) {
                document.querySelector(".summary-coin-price ." + coinData[coin]["localName"] + "-price").innerHTML = formatMoney(coinData[coin]["prices"]["currentPrice"],"");
            }
            
        }).catch(function(error){
            console.log(error);
        });
    }, 5000)
}

// updateCoinData
document.addEventListener('DOMContentLoaded', function() {
    let cards = document.getElementsByClassName("card");
    let i=2;
    for(obj in coinData){
        updateCoinData(cards[i],coinData[obj]);
        i++;
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
            for (let i = 0; i < Object.keys(coinData).length; i++) {
                let url = ""
                let apiKey = "";
                if (coinData[Object.keys(coinData)[i]]["chainID"] == "Ethereum") {
                    url = etherscanAPI;
                    apiKey = etherscanApiKey;
                } else if (coinData[Object.keys(coinData)[i]]["chainID"] == "Avalanche") {
                    url = snowtraceAPI;
                    apiKey = snowtraceApiKey;
                }
                // Need to make sure fetch has time to return data and update local data before next fetch call - async, await?
                fetch(url +
                    "?module=account&action=tokentx" +
                    "&contractaddress=" +
                    coinData[Object.keys(coinData)[i]]["coinAddress"][0] +
                    "&address=" +
                    userAddress +
                    "&startblock=0&endblock=9999999999&sort=asc&apikey=" +
                    apiKey).then(
                        response => response.text()
                    ).then(
                        data => {
                            data = JSON.parse(data);
                            userTrxns = data["result"];
                            // console.log(userTrxns);
                            let counts = [0,0,0,0];

                            // j loops through transactions for each coin pulled by fetch
                            for (let j = 0; j < userTrxns.length; j++) {
                                let trxnsCounted = [];
                                // k loops through node levels (level4, level3, etc)
                                for (let k = 4; k > 0; k--) {
                                    if (
                                    nodeData[Object.keys(nodeData)[i]]["level" + k]["apiCost"] > 0 &&
                                        // userTrxns[j]["to"] == coinData[Object.keys(coinData)[i]]["contractAddress"] &&
                                    userTrxns[j]["from"] == userAddress && 
                                    BigInt(userTrxns[j]["value"]) % nodeData[Object.keys(nodeData)[i]]["level" + k]["apiCost"] == 0 && 
                                    trxnsCounted.indexOf(userTrxns[j]) == -1) {
                                        counts[k-1] += parseInt(BigInt(userTrxns[j]["value"]) / nodeData[Object.keys(nodeData)[i]]["level" + (k)]["apiCost"]);
                                        trxnsCounted.push(userTrxns[j]);
                                    }
                                }
                            }
                            nodeData[Object.keys(nodeData)[i]]["startingNodes"] = counts;
                            fillTableData(nodeData[Object.keys(nodeData)[i]]);
                            createTable(document.getElementById(Object.keys(nodeData)[i] + "Card"), nodeData[Object.keys(nodeData)[i]]);
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

function showHideCard(id){
    let thisTab = document.getElementById(id);
    let otherTabs = document.getElementsByClassName("tab");
    var thisCard = document.getElementById(id.replace("Tab","Card"));
    var otherCards = document.getElementsByClassName("card");
    thisCard.style.display = "block";
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
            drb: 0.0,
            dr: 0.0,
            cash: 0,
            cumCash: 0,
            cashout: false
        };

        daysObjPush["index"] = j;
        daysObjPush["date"] = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
        
        if (j == todayIndex) {
            for (let k = 0; k < 4; k++) {
                daysObjPush["node" + (k + 1)] = startingNodes[k];
            }
        } else if (j > todayIndex) {
            prevDaysObj = days[(j-1)];
        }

        let dr = 0;
        let drb = 0;

        for (let i=1; i < 5; i++) {    
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
            obj["cashToday"] = getTodayCash(obj);
        }
        date = addDay(date);
    }
    for (let k = 0; k < 12; k++) {
        months.push({
            "index": "m" + k,
            "total": 0
        });
    }
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
        // }

    let classList;
    if (e != false) {
        classList = e.target.classList;
    }
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
                prevRow["cashout"] = rowElem.previousElementSibling.querySelector("input[type='checkbox']").checked;
            } else {
                prevRow["cashout"] = rowElem.previousElementSibling.previousElementSibling.querySelector("input[type='checkbox']").checked;
            }
        }
        
        thisRow["cashout"] = rowElem.querySelector("input[type='checkbox']").checked;
        
        // if row was directly edited, pull values directly from UI

        // 

        // FIGURE OUT WHICH ELEMENT WAS EDITED; GET VALUE FOR THAT ELEMENT AND CALCULATE THE REST 
        //                                      |
        //                                      V

        if (e != false) {
            let dr = 0;
            thisRow["drb"] = parseFloat(rowElem.querySelector(".drb-cell").children[0].value);
            for (let k = 1; k < 5; k++) {
                if (coinObj["level" + k]["name"] != "") {
                    let rew = coinObj["level" + k]["rewardRate"];
                    thisRow["node" + k] = parseInt(rowElem.querySelector(".lev" + k).children[0].value);
                    dr += thisRow["node" + k] * rew;
                }
            }
            thisRow["dr"] = dr;

            

        } else {    
            // if updateTableDataRow was called sequentially, calculate values
            let drb = 0;
            let dr = 0; 
            for (let i=1; i < 5; i++) {   
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
                        drb
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

function createTable(elem,obj){
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
    table.className = "calc-table";
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
    tHeadRow += "<th>Date</th>";
    tHeadRow += "<th>" + obj["level1"]["name"] + " Nodes</th>";
    if(obj["level2"]["name"] != ""){
        num += 1;
        tHeadRow += "<th>" + obj["level2"]["name"] + " Nodes</th>";

    };
    if(obj["level3"]["name"] != ""){
        num += 1;
        tHeadRow += "<th>" + obj["level3"]["name"] + " Nodes</th>";

    };
    if(obj["level4"]["name"] != ""){
        num += 1;
        tHeadRow += "<th>" + obj["level4"]["name"] + " Nodes</th>";

    };
    tHeadRow += "<th>Daily Rewards Balance</th><th>Daily Rewards</th><th>Cash</th><th>Cumulative Gross Cash</th><th>Cashout?</th></tr>";
    tHead.innerHTML = tHeadRow;
    table.appendChild(tHead);

    // Create a row for each day
    let tableData = obj["tableData"]["days"];
    for(let i = dayOfYearIndex(today); i < dayOfYearIndex(today) + obj["calLength"]; i++){
        let row = document.createElement("tr");
        
        let dateStr = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
        let dateClassStr = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
        row.className = "_" + dateClassStr + " day-row d" + (i);

        let dateCell = document.createElement("td");
        dateCell.classList.add("date-cell");
        dateCell.textContent = dateStr;
        row.append(dateCell);

        for(let j=0; j < num; j++){
            let cell = document.createElement("td");
            cell.classList.add(obj["level" + (j+1)]["name"].toLowerCase(),"lev" + (j+1));
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("onclick", "this.select()");
            input.setAttribute("name", obj["level" + (j+1)]["name"].toLowerCase());
            input.setAttribute("value", tableData[i]["node" + (j+1)]);
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
        input.setAttribute("value", tableData[i]["drb"].toFixed(4));
        drbCell.append(input);
        row.append(drbCell);

        // Daily Rewards cell
        let drCell = document.createElement("td");
        drCell.classList.add("dr-cell");
        drCell.innerText = tableData[i]["dr"].toFixed(4);
        row.append(drCell);

        // Cash cell
        let cashCell = document.createElement("td");
        cashCell.classList.add("cash-cell");
        row.append(cashCell);

        // Cumulative Gross Cash cell
        let cumCashCell = document.createElement("td");
        cumCashCell.classList.add("cum-cash-cell");
        row.append(cumCashCell);

        // Cashout? cell (checkbox)
        let cashoutCell = document.createElement("td");
        cashoutCell.classList.add("cashout-cell");
        let check = document.createElement("input");
        check.setAttribute("type","checkbox");
        check.setAttribute("name", "cashout");
        check.setAttribute("value", "cashout");
        check.classList.add("cashout");
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
            totalRow += "<tr contenteditable='false' class='m" + monthIndex + " total-row " + date.toLocaleString('default', { month: 'long' }).toLowerCase() + "'>";
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
            totalRow += "<td></td><td></td><td class='month-cash-total'>$0.00</td><td></td><td></td>";
            body.innerHTML += totalRow;
            monthIndex ++;
        }
        date = addDay(date);
    };
    
    table.appendChild(body);
    table.addEventListener('keydown', (e) => {
        if (e.key === "Enter" && e.target.classList[0] != "cashout") {
            e.preventDefault();
        // Validate input - only allow numbers & decimal
        
        
            console.log(e);
            updateRow(e.target.parentNode.parentNode, e);
        }
    });
    table.addEventListener("input", (e) => {
        if(e.target.classList[0] == "cashout") {
            console.log(e.target);
            updateRow(e.target.parentNode.parentNode, e);
        }
    })
    div.appendChild(table);
    elem.children[3].appendChild(div);
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

    let buttons = document.querySelectorAll(".cal-length-buttons button");

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
        for (let i=1; i < 5; i++) {   
            if (coinObj["level" + i]["name"] != "") {
                let nodeCount = rowElem.querySelector(".lev" + i).children[0];
                nodeCount.value = days[rowIndex]["node" + i];
            }
        }

        // Cash cell
        let cashCell = rowElem.querySelector(".cash-cell");
        if (days[rowIndex]["cashout"]) {
            cashCell.innerText = "$" + days[rowIndex]["cash"].toFixed(2);
        } else {
            cashCell.innerText = "";
        }

        // Cumulative cash cell
        let cumCash = rowElem.querySelector(".cum-cash-cell");
        if (days[rowIndex]["cumCash"] > 0) {
            cumCash.innerText = "$" + days[rowIndex]["cumCash"].toFixed(2);
        } else {
            cumCash.innerText = "";
        }

        // Set Daily Rewards
        let drCell = rowElem.querySelector(".dr-cell");
        drCell.value = days[rowIndex]["dr"].toFixed(4);

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
        if (parseInt(rowElem.classList[2].slice(1)) < dayOfYearIndex(new Date()) + coinObj["calLength"]) {
            updateRow(rowElem.nextElementSibling, false);
        } else if(rowElem.classList[1] == "total-row" && parseInt(rowElem.nextElementSibling.classList[2].slice(1)) < dayOfYearIndex(new Date()) + coinObj["calLength"]) {
            updateRow(rowElem.nextElementSibling, false);
        }
    };
}

function getTodayCash(obj) {
    let todayIndex = dayOfYearIndex(new Date());
    let total = 0;
    for (let i = 1; i < 5; i++) {
        total += obj["tableData"]["days"][todayIndex]["node" + i] * obj["level" + i]["rewardRate"] * ((100 - obj["level" + i]["claimTax"])/100);
    }
    return total * coinData[obj["name"]]["prices"]["currentPrice"];
}

// COMPARISON TABLE----------------------------------------------------------------

let compTable = document.querySelector("#comparisonCard>table>tbody");
let initial = parseFloat(document.getElementById("initial").value)

function comparisonData() {
    // obj is coinData[node]
    setInterval(function(){
        // for (t = 0; t < Object.keys(compNodeData).length; t++) {
        for (node in nodeData) {
            for (level in compNodeData[node]) {
                compNodeData[node][level]["costUSD"] = compNodeData[node]["cost"] * obj["prices"]["currentPrice"];
                compNodeData[node][level]["rewPercent"] = compNodeData[node]["rew"] / compNodeData[node]["cost"] * 100;
                compNodeData[node][level]["addedNodes"] = Math.floor(initial/compNodeData[node][level]["cost"]/compNodeData[node]["price"]);
                compNodeData[node][level]["currentCount"] = nodeData[node]["tableData"]["days"][dayOfYearIndex(new Date())]["node1"];
                compNodeData[node][level]["moneySpent"] = compNodeData[node][level]["addedNodes"] * compNodeData[node]["price"]

                updateCompRow(compNodeData[node][level]);
            }
        }
    }, 5000)
}

function updateCompRow(obj) {
    let row;
    if (!document.body.contains(compTable.querySelector("." + obj["localName"]))) {
        let row = document.createElement("tr");
        row.classList = obj["name"];
        let cell = document.createElement("td");
        cell.classList = "name";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "price";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "cost";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "cost-usd";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "rewards";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "rewards-percent";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "added-nodes";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "current-nodes";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "money-spent";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "current-rewards";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "current-rewards-usd";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "new-rewards";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "new-rewards-usd";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "difference";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "difference-percent";
        row.append(cell);
        cell = document.createElement("td");
        cell.classList = "rot";
        row.append(cell);
        compTable.append(row);
    } else {
        row = document.querySelector("." + obj["name"]);
    }
    
    // compTable.lastChild.lastChild.querySelector(".name").textContent = "wvkwbr";



    


}