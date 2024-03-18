const fs = require('fs');
const path = require('path');

// Lees de inhoud van apiData.json
// Lees de inhoud van het JSON-bestand
const filePath = path.join(__dirname, 'apiData.json');
const data = fs.readFileSync(filePath, 'utf8');

// Parseer de JSON-data naar een JavaScript-object
const jsonData = JSON.parse(data);

// Haal de prijs van Ethereum op uit het JavaScript-object
const ethereumPrice = jsonData.data["1027"].quote.USD.price;
const bitcoinPrice = jsonData.data["1"].quote.USD.price;

// Log de prijs van Ethereum in de console
console.log('Ethereum price:', ethereumPrice);
console.log('Bitcoin price:', bitcoinPrice);

