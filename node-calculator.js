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
        level1:{
            name:"Strong",
            cost:10,
            rewardRate:0.09226,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:0,
            qty:4,
            monthlyFee:14.95
        },
        level2:{
            name:"",
            cost:0,
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:0,
            qty:0,
            monthlyFee:0
        },
        level3:{
            name:"",
            cost:0,
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:0,
            qty:0,
            monthlyFee:0
        },
        level4:{
            name:"",
            cost:0,
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:0,
            qty:0,
            monthlyFee:0
        }
    },
    thor: {
        level1:{
            name:"Heimdall",
            cost:1.25,
            rewardRate:0.008,
            rewardPercentage:0,
            claimTax:1,
            compoundTax:0,
            sellTax:0,
            qty:7,
            monthlyFee:5
        },
        level2:{
            name:"Freya",
            cost:6.25,
            rewardRate:0.05,
            rewardPercentage:0,
            claimTax:5,
            compoundTax:0,
            sellTax:0,
            qty:1,
            monthlyFee:10
        },
        level3:{
            name:"Thor",
            cost:12.5,
            rewardRate:0.014375,
            rewardPercentage:0,
            claimTax:8,
            compoundTax:0,
            sellTax:0,
            qty:2,
            monthlyFee:20
        },
        level4:{
            name:"Odin",
            cost:78.125,
            rewardRate:1.015625,
            rewardPercentage:0,
            claimTax:10,
            compoundTax:0,
            sellTax:0,
            qty:1,
            monthlyFee:80
        }
    },
    pxt2: {
        level1:{
            name:"PXT2",
            cost:10,
            rewardRate:0.17,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:18,
            qty:3,
            monthlyFee:0
        },
        level2:{
            name:"",
            cost:"",
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:0,
            qty:0,
            monthlyFee:0
        },
        level3:{
            name:"",
            cost:"",
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:0,
            qty:0,
            monthlyFee:0
        },
        level4:{
            name:"",
            cost:"",
            rewardRate:0,
            rewardPercentage:0,
            claimTax:0,
            compoundTax:0,
            sellTax:0,
            qty:0,
            monthlyFee:0
        }
    }
}

function populateCardData(elem,obj){
    function addZero(str){
        let regex = /\.\d\b/;
        if(regex.test(str)){
            return str += "0";
        } else {
            return str;
        }
    }
    
    elem.querySelector(".coin-price").textContent = "$" + obj["prices"]["currentPrice"];
    elem.querySelector(".symbol").textContent = obj["symbol"];
    elem.querySelector(".network").textContent = obj["network"];
    elem.querySelector(".platforms").textContent = Object.keys(obj["platforms"])[0] + " : " + Object.values(obj["platforms"])[0];
    elem.querySelector(".ath").textContent = addZero("$" + obj["prices"]["ath"]);
    elem.querySelector(".ath-date").textContent = obj["prices"]["athDate"];
    elem.querySelector(".atl").textContent = addZero("$" + obj["prices"]["atl"]);
    elem.querySelector(".atl-date").textContent = obj["prices"]["atlDate"];
    elem.querySelector(".high-24h").textContent = addZero("$" + obj["prices"]["high_24h"]);
    elem.querySelector(".low-24h").textContent = addZero("$" + obj["prices"]["low_24h"]);
    elem.querySelector(".total-volume").textContent = obj["prices"]["totalVolume"];
    elem.querySelector(".market-cap").textContent = "$" + obj["prices"]["marketCap"];
}

function updateCoinData(elem,obj){
    let count=0;
    setInterval(function(){
        let url = coinGeckoURL + obj["id"];
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(count==0){
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