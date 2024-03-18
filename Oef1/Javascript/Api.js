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
    console.log("API data: Successfull");

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
