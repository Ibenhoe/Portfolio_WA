const { time } = require('console');
const fs = require('fs');
const path = require('path');


// Import and execute the code from Api.js
require('./Api.js');

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

console.log('Ethereum price:', ethPrice, 'USD');
console.log('Ethereum volume 24h:', ethVolume, 'USD');
console.log('Ethereum volume change 24h:', ethVolumeChange, '%');
console.log('Ethereum market cap:', ethMarketCap, 'USD');
console.log('----------------------------');

const bitcoinObject = jsonData.data["1"].quote.USD;
const { price: btcPrice, volume_24h: btcVolume, volume_change_24h: btcVolumeChange, market_cap: btcMarketCap } = bitcoinObject;
console.log('Bitcoin price:', btcPrice, 'USD');
console.log('Bitcoin volume 24h:', btcVolume, 'USD');
console.log('Bitcoin volume change 24h:', btcVolumeChange, '%');
console.log('Bitcoin market cap:', btcMarketCap, 'USD'); 
console.log('----------------------------');


// Schrijf de prijs van Ethereum naar een bestand
const ethereumPriceFile = path.join(__dirname, 'ethereumPrice.txt');
fs.writeFileSync(ethereumPriceFile, `Ethereum price: ${ethPrice} USD\n`, { flag: 'a' },Date );

// Schrijf de prijs van Bitcoin naar een bestand
const bitcoinPriceFile = path.join(__dirname, 'bitcoinPrice.txt');
fs.writeFileSync(bitcoinPriceFile, `Bitcoin price: ${btcPrice} USD\n`, { flag: 'a' },Date);

// Log de prijs van Ethereum in de console
//console.log('Ethereum price:', ethereumPrice);
//console.log('Bitcoin price:', bitcoinPrice);

