const axios = require('axios');
const fs = require('fs');

const fetchData = async () => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=ethereum,bitcoin', {
      headers: {
      'X-CMC_PRO_API_KEY': '753e978f-0845-4046-8b8f-6a093111ecdc',
      },
    });

    // Log de data die je ontvangt
    console.log(response.data);

    // Sla de data op in een lokale bestand zonder de tags
    const dataWithoutTags = removeTags(response.data);
    fs.writeFileSync('apiData.json', JSON.stringify(dataWithoutTags));

    return response.data;
  } catch (error) {
    // Behandel eventuele fouten
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Roep de functie aan
fetchData();

// Hulpmethode om tags te verwijderen uit de data
function removeTags(data) {
  // Implementeer de logica om tags te verwijderen
  // Hier kun je bijvoorbeeld reguliere expressies gebruiken
  // om de tags te verwijderen
  return data;
}






/*
// Maak een asynchrone functie voor het ophalen van de Bitcoin-prijs
async function fetchBitcoinPrice() {
  const url = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'; // De URL van de API

  try {
    // Maak het HTTP GET-verzoek met fetch
    const response = await fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': '753e978f-0845-4046-8b8f-6a093111ecdc',
      },
    });

    // Controleer of het verzoek succesvol was (status 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Haal de JSON-gegevens op uit de respons
    const data = await response.json();

    // Haal de prijs van Bitcoin op uit de JSON-gegevens
    const bitcoinPrice = data.data['1'].quote.USD.price;

    // Geef de Bitcoin-prijs terug
    return bitcoinPrice;
  } catch (error) {
    // Vang eventuele fouten op en log ze naar de console
    console.error('Error fetching Bitcoin price:', error);
    return null;
  }
}

// Roep de fetchBitcoinPrice-functie aan en verwerk de geretourneerde gegevens
fetchBitcoinPrice()
  .then(price => {
    // Handel de Bitcoin-prijs verder af
    console.log('Bitcoin price:', price);
  })
  .catch(error => {
    // Handel eventuele fouten af
    console.error(error);
  });
*/
