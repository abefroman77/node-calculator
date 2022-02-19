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
            atl:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:""
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
            atl:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:""
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
            atl:"",
            currentPrice:"",
            high_24h:"",
            low_24h:"",
            totalVolume:""
        }
    }
}

function updateCoinData(obj){
    let span = document.getElementsByClassName(obj["localName"] + "-price")[0];

    setInterval(function(){
        let url = coinGeckoURL + obj["id"];

        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            obj["network"] = data["network"];
            obj["symbol"] = data["symbol"];
            obj["description"] = data["description"]["en"];
            obj["imageLinks"] = data["image"];
            obj["mediumLink"] = data["links"]["announcement_url"];
            obj["homepage"] = data["links"]["homepage"][0];
            obj["platforms"] = data["platforms"];
            obj["prices"]["ath"] = data["market_data"]["ath"]["usd"];
            obj["prices"]["atl"] = data["market_data"]["atl"]["usd"];
            obj["prices"]["currentPrice"] = data["market_data"]["current_price"]["usd"];
            obj["prices"]["high_24h"] = data["market_data"]["high_24h"]["usd"];
            obj["prices"]["low_24h"] = data["market_data"]["low_24h"]["usd"];
            obj["prices"]["totalVolume"] = data["market_data"]["total_volume"]["usd"];
            let regex = /\.\d\b/;
            let content = "$" + obj["prices"]["currentPrice"]
            if(regex.test(obj["prices"]["currentPrice"])){
                content += "0";
            }
            span.textContent = content;
        }).catch(function(error){
            console.log(error);
        });
    }, 5000)
}

document.addEventListener('DOMContentLoaded', function() {
    updateCoinData(coinData["strong"]);
    updateCoinData(coinData["thor"]);
    updateCoinData(coinData["pxt2"]);
})

fetch(coinGeckoURL + coinData["pxt2"]["id"]).then(function(response) {
    return response.json();
}).then(function(data){
    console.log(data);
})

function showHideCard(id){
    var x = document.getElementById(id.replace("Tab","Card"));
    var other = document.getElementsByClassName("card");
    for(let i=0; i=other.length; i++){
        if(other.id = id.replace)
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
}