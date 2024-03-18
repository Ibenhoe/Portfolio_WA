const fs = require('fs');
const path = require('path');

// Import and execute the code from Api.js
//require('./Api.js');

// Lees de inhoud van apiData.json
// Lees de inhoud van het JSON-bestand
const filePath = path.join(__dirname, 'apiData.json');
const data = fs.readFileSync(filePath, 'utf8');

// Parseer de JSON-data naar een JavaScript-object
const jsonData = JSON.parse(data);

// Haal de prijs van Ethereum op uit het JavaScript-object
const ethereumPrice = jsonData.data["1027"].quote.USD.price;
const bitcoinPrice = jsonData.data["1"].quote.USD.price;


const ethereumObject = jsonData.data["1027"].quote.USD;
const { price: ethPrice, volume_24h: ethVolume, volume_change_24h: ethVolumeChange, market_cap: ethMarketCap } = ethereumObject;

console.log('Ethereum price:', ethPrice);
console.log('Ethereum volume 24h:', ethVolume);
console.log('Ethereum volume change 24h:', ethVolumeChange);
console.log('Ethereum market cap:', ethMarketCap);
console.log('----------------------------');

const bitcoinObject = jsonData.data["1"].quote.USD;
const { price: btcPrice, volume_24h: btcVolume, volume_change_24h: btcVolumeChange, market_cap: btcMarketCap } = bitcoinObject;
console.log('Bitcoin price:', btcPrice);
console.log('Bitcoin volume 24h:', btcVolume);
console.log('Bitcoin volume change 24h:', btcVolumeChange);
console.log('Bitcoin market cap:', btcMarketCap); 
console.log('----------------------------');


// Log de prijs van Ethereum in de console
//console.log('Ethereum price:', ethereumPrice);
//console.log('Bitcoin price:', bitcoinPrice);

