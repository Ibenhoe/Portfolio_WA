// Maak een asynchrone functie voor het maken van het HTTP-verzoek
async function fetchData() {
    const url = 'https://pro-api.coinmarketcap.com'; // De URL van de API
  
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
      const json = await response.json();
  
      // Geef de JSON-gegevens terug
      return json;
    } catch (error) {
      // Vang eventuele fouten op en log ze naar de console
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  // Roep de fetchData-functie aan en verwerk de geretourneerde gegevens
  fetchData()
    .then(data => {
      // Handel de gegevens verder af
      console.log(data);
    })
    .catch(error => {
      // Handel eventuele fouten af
      console.error(error);
    });