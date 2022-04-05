let coinGeckoURL = "https://api.coingecko.com/api/v3/coins/";

let coinData = {
    strong: {
        id:"strong",
        localName: "strong",
        symbol: "",
        network:"",
        description:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
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
        }
    },
    thor: {
        id:"thor",
        localName: "thor",
        symbol: "",
        network:"",
        description:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
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
        }
    },
    pxt2: {
        id:"project-x-nodes",
        localName: "pxt2",
        symbol: "",
        network:"",
        description:"",
        imageLinks:"",
        mediumLink:"",
        homepage:"",
        platforms:"",
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
        }
    }
}

let coinIDs = [];

for(let i=0; i<Object.keys(coinData).length; i++){
    coinIDs.push(coinData[Object.keys(coinData)[i]]);
}

let nodeData = {
    strong: {
        name: "strong",
        level1:{
            name:"Strong",
            cost:10,
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
        startingNodes: [6,0,0,0],
        calLength: 30
    },
    thor: {
        name: "thor",
        level1:{
            name:"Heimdall",
            cost:1.25,
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
        startingNodes: [7,1,4,1],
        calLength: 30
    },
    pxt2: {
        name: "pxt2",
        level1:{
            name:"PXT2",
            cost:10,
            rewardRate:0.17,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:18,
            monthlyFee:0,
            compounding: true,
            startingDay: 60,
            startingRewards: 0
        },
        level2:{
            name:"",
            cost:"",
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
            cost:"",
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
            cost:"",
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
        calLength: 30
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

function populateCardData(elem,obj){

    let url = "";
    elem.querySelector(".coin-price").textContent = formatMoney(obj["prices"]["currentPrice"], "usd");
    elem.querySelector(".symbol").textContent = obj["symbol"];
    elem.querySelector(".network").textContent = obj["network"];
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
    setInterval(function(){
        let url = coinGeckoURL + obj["id"];
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(count == 0){
                console.log(data);
                count++;
            }
            let dateRegex = /\d{4}-\d\d-\d\d/;
            obj["network"] = data["asset_platform_id"].charAt(0).toUpperCase() + data["asset_platform_id"].slice(1);
            obj["symbol"] = data["symbol"].toUpperCase();
            obj["description"] = data["description"]["en"];
            obj["imageLinks"] = data["image"];
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
            populateCardData(elem,obj);
            
        }).catch(function(error){
            console.log(error);
        });
    }, 5000)
}

document.addEventListener('DOMContentLoaded', function() {
    let cards = document.getElementsByClassName("card");
    let i=1;
    for(obj in coinData){
        updateCoinData(cards[i],coinData[obj]);
        i++;
    }
})

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
    let date = new Date('2022-01-01T12:00:00');
    let startingNodes = obj["startingNodes"];
    let prevDaysObj = {
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

    // Fill daily data
    for (let j = 0; j < 365; j++) {
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
        
        // if (j==0) {
        //     for (let k = 0; k < 4; k++) {
        //         daysObjPush["node" + (k + 1)] = startingNodes[k];
        //     }
        // } else {
        //     prevDaysObj = days[(j-1)];
        // }

        if(j > 0) {
            prevDaysObj = days[(j-1)];
        }

        for (let k; k < 4; k++) {
            if (j == obj) {

            }
        }

        let dr = 0;
        let drb = 0;

        for (let i=1; i < 5; i++) {    
            if (obj["level" + i]["name"] != "") {
                let rew = obj["level" + i]["rewardRate"];
                let cost = obj["level" + i]["cost"];
                let comp = obj["level" + i]["compounding"];

                // daysObjPush["node" + i], daysObjPush["drb"]
                if (j > 0) {    
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

                if (j == obj["level" + i]["startingDay"]) {
                    daysObjPush["node" + i] = obj["startingNodes"][i-1];
                    drb = obj["level" + i]["startingRewards"];
                }

                daysObjPush["dr"] += daysObjPush["node" + i] * rew;
            }
        }
        daysObjPush["drb"] = drb;
        days.push(daysObjPush);
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
    let coinObj = nodeData[rowElem.closest("tbody").classList[0]];
    let days = coinObj["tableData"]["days"];
    let rowIndex;
    
    // If the row to be edited is a .day-row
    if (rowElem.classList[1] == "day-row") {
        rowIndex = parseInt(rowElem.classList[2].slice(1));
        let thisRow = days[rowIndex];
        let prevRow;

        if (rowIndex > 0) {
            prevRow = days[rowIndex - 1];
        }

            // Capture previous checkbox value
        if (rowIndex > dayOfYearIndex(new Date())) {
            if(rowElem.previousElementSibling.classList[1] != "total-row") {
                if (rowElem.previousElementSibling.querySelector("input[type='checkbox']").checked) {
                    prevRow["cashout"] = true;
                } else{
                    prevRow["cashout"] = false;
                }
            } else {
                if (rowElem.previousElementSibling.previousElementSibling.querySelector("input[type='checkbox']").checked) {
                    prevRow["cashout"] = true;
                } else{
                    prevRow["cashout"] = false;
                }
            }
        }
        
        

        // Capture checkbox value
        if (rowElem.querySelector("input[type='checkbox']").checked) {
            thisRow["cashout"] = true;
        } else{
            thisRow["cashout"] = false;
        }
        
        // if row was directly edited, pull values directly from UI
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
                    console.log(drb);
                }
            }
            thisRow["drb"] = drb;
            thisRow["dr"] = dr;
        }

        // Cash cell
        if (thisRow["cashout"]) {
            // if (prevRow["drb"] + prevRow["dr"] >= cost) {
                thisRow["cash"] = (thisRow["drb"] + thisRow["dr"]) * coinData[coinObj["name"]]["prices"]["currentPrice"];
            // }
        }

        // Cumulative cash cell
        if (rowIndex == dayOfYearIndex(new Date())) {
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

    div.innerHTML = "";
    let table = document.createElement("table");
    table.className = "calc-table";
    let tHead = document.createElement("thead");
    let body = document.createElement("tbody");
    body.className = obj["name"];

    let num = 1;
    let monthIndex = 0;
    let date = new Date();
    let today = date;

    table.classList.add(obj["name"] + "-table");

    // // Create button row for 30/60/90/365
    // let buttonDiv = document.createElement("div");
    // buttonDiv.className = "cal-length-buttons";
    // buttonDiv.innerHTML = "";
    // div.appendChild(buttonDiv);

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

        let rowStr = "<td class='date-cell'>" + dateStr + "</td>";
        for(let j=0; j < num; j++){
            rowStr += "<td class='" + obj["level" + (j+1)]["name"].toLowerCase() + " lev" + (j+1) + "'><input type='text' onclick='this.select();' name='" + obj["level" + (j+1)]["name"].toLowerCase() + "' value='" + tableData[i]["node" + (j+1)] + "'></td>";
        }
        
        // Daily Rewards Balance cell
        rowStr += "<td class='drb-cell'><input type='text' onclick='this.select();' name='drb' value='" + tableData[i]["drb"].toFixed(4) + "'></td>";

        // Daily Rewards cell
        rowStr += "<td class='dr-cell'><input type='text' onclick='this.select();' name='dr' value='" + tableData[i]["dr"].toFixed(4) + "'></td>";
        // Cash cell
        rowStr += "<td class='cash-cell'></td>";

        // Cumulative Gross Cash cell
        rowStr += "<td class='cum-cash-cell'></td>";

        // Cashout? cell (checkbox)
        rowStr += "<td class='cashout-cell'><input class='cashout' name='cashout' value='cashout' type='checkbox'></td>";

        row.innerHTML += rowStr;
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
    div.appendChild(table);
    elem.children[3].appendChild(div);
}

fillTableData(nodeData["strong"]);
fillTableData(nodeData["thor"]);
fillTableData(nodeData["pxt2"]);

createTable(document.getElementById("strongCard"), nodeData["strong"]);
createTable(document.getElementById("thorCard"), nodeData["thor"]);
createTable(document.getElementById("pxt2Card"), nodeData["pxt2"]);

// Event listeners for row changes
for(let l = 1; l < 5; l++) {
    let cells = document.querySelectorAll(".lev" + l);
    let checks = document.querySelectorAll("input[type='checkbox']");
    let drbs = document.querySelectorAll(".drb-cell");
    for (let k = 0; k < cells.length; k++) {
        cells[k].addEventListener('input', (e) => {
            // Validate input - only allow numbers & decimal
            
            
            console.log(e);
            updateRow(e.target.parentNode.parentNode, e);
        });
        if (l == 1) {
            checks[k].addEventListener('input', (e) => {
                console.log(e);
                updateRow(e.target.parentNode.parentNode, e);
            });
            drbs[k].addEventListener('input', (e) => {
                // Validate input - only allow numbers & decimal
                console.log(e);
            


                updateRow(e.target.parentNode.parentNode, e);
            });
        }
    };
}

// Event listeners for .cal-length-buttons buttons
let calOneMonth = document.querySelectorAll(".cal-30");
let calTwoMonths = document.querySelectorAll(".cal-60");
let calThreeMonths = document.querySelectorAll(".cal-90");
let calYear = document.querySelectorAll(".cal-365");

// for (let i = 0; i < calOneMonth.length; i++) {
//     calOneMonth[i].addEventListener('click', (e) => {
//         nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]["calLength"] = 30;
//         createTable(document.getElementById(e.target.parentElement.nextElementSibling.children[1].classList[0] + "Card"), nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]);
//     });
//     calTwoMonths[i].addEventListener('click', (e) => {
//         nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]["calLength"] = 60;
//         createTable(document.getElementById(e.target.parentElement.nextElementSibling.children[1].classList[0] + "Card"), nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]);
//     });
//     calThreeMonths[i].addEventListener('click', (e) => {
//         nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]["calLength"] = 90;
//         createTable(document.getElementById(e.target.parentElement.nextElementSibling.children[1].classList[0] + "Card"), nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]);
//     });
//     calYear[i].addEventListener('click', (e) => {
//         if (parseInt(new Date().getFullYear()) % 4 == 0) {
//             nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]["calLength"] = 366;
//         }
//         else {
//             nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]["calLength"] = 365;
//         }
//         createTable(document.getElementById(e.target.parentElement.nextElementSibling.children[1].classList[0] + "Card"), nodeData[e.target.parentElement.nextElementSibling.children[1].classList[0]]);
//     });
// }

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
    console.log(e.target.classList);
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
        let drCell = rowElem.querySelector(".dr-cell").children[0];
        drCell.value = days[rowIndex]["dr"].toFixed(4);

        // Set Daily Rewards Balance
        let drbCell = rowElem.querySelector(".drb-cell").children[0];
        drbCell.value = days[rowIndex]["drb"].toFixed(4);

    // update row of monthly data
    } else if (rowElem.classList[1] == "total-row") {
        let months = coinObj["tableData"]["months"];
        let monthTotal = rowElem.querySelector(".month-cash-total");
        monthTotal.innerText = formatMoney(months[parseInt(rowElem.classList[0].slice(1))]["total"].toFixed(2), "");
    }
    
    if (rowElem.classList[0] != "m11" && parseInt(rowElem.classList[2].slice(1)) < dayOfYearIndex(new Date()) + coinObj["calLength"]) {
        updateRow(rowElem.nextElementSibling, false);
    };
}