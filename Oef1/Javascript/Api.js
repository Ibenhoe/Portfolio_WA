
function fetchCryptoData() {

  const bitcoinURL = 'https://api.coingecko.com/api/v3/coins/bitcoin';
  const ethereumURL = 'https://api.coingecko.com/api/v3/coins/ethereum';
  const solanaURL = 'https://api.coingecko.com/api/v3/coins/solana';
  const cardanoURL = 'https://api.coingecko.com/api/v3/coins/cardano';

  // Bitcoin gegevens ophalen van de API
  fetch(bitcoinURL)
      .then(response => response.json())
      .then(data => {
          const bitcoinPrice = data.market_data.current_price.usd;
          const bitcoinMarketCap = data.market_data.market_cap.usd;
          const bitcoinChange = data.market_data.price_change_percentage_24h;
          document.getElementById('Price_Bitcoin').textContent = 'Price: $' + bitcoinPrice.toFixed(2);
          document.getElementById('MarketCap_Bitcoin').textContent = 'Market Cap: $' + formatMarketCap(bitcoinMarketCap);
          document.getElementById('Change_Bitcoin').textContent = 'Daily Change: ' + bitcoinChange.toFixed(2) + '%';
      })
      .catch(error => console.error('Error fetching Bitcoin data:', error));

  // Ethereum gegevens ophalen van de API
  fetch(ethereumURL)
      .then(response => response.json())
      .then(data => {
          const ethereumPrice = data.market_data.current_price.usd;
          const ethereumMarketCap = data.market_data.market_cap.usd;
          const ethereumChange = data.market_data.price_change_percentage_24h;
          document.getElementById('Price_Ethereum').textContent = 'Price: $' + ethereumPrice.toFixed(2);
          document.getElementById('MarketCap_Ethereum').textContent = 'Market Cap: $' + formatMarketCap(ethereumMarketCap);
          document.getElementById('Change_Ethereum').textContent = 'Daily Change: ' + ethereumChange.toFixed(2) + '%';
      })
      .catch(error => console.error('Error fetching Ethereum data:', error));

  // HEX gegevens ophalen van de API
  fetch(solanaURL)
        .then(response => response.json())
        .then(data => {
            const solanaPrice = data.market_data.current_price.usd;
            const solanaMarketCap = data.market_data.market_cap.usd;
            const solanaChange = data.market_data.price_change_percentage_24h;
            document.getElementById('Price_SOL').textContent = 'Price: $' + solanaPrice.toFixed(2);
            document.getElementById('MarketCap_SOL').textContent = 'Market Cap: $' + formatMarketCap(solanaMarketCap);
            document.getElementById('Change_SOL').textContent = 'Daily Change: ' + solanaChange.toFixed(2) + '%';
        })
        .catch(error => console.error('Error fetching Solana (SOL) data:', error));


  // Cardano gegevens ophalen van de API
  fetch(cardanoURL)
      .then(response => response.json())
      .then(data => {
          const cardanoPrice = data.market_data.current_price.usd;
          const cardanoMarketCap = data.market_data.market_cap.usd;
          const cardanoChange = data.market_data.price_change_percentage_24h;
          document.getElementById('Price_Cardano').textContent = 'Price: $' + cardanoPrice.toFixed(2);
          document.getElementById('MarketCap_Cardano').textContent = 'Market Cap: $' + formatMarketCap(cardanoMarketCap);
          document.getElementById('Change_Cardano').textContent = 'Daily Change: ' + cardanoChange.toFixed(2) + '%';
      })
      .catch(error => console.error('Error fetching Cardano data:', error));
}


function formatMarketCap(marketCap) {
  if (marketCap >= 1e12) {
      return (marketCap / 1e12).toFixed(2) + 'T';
  } else if (marketCap >= 1e9) {
      return (marketCap / 1e9).toFixed(2) + 'B';
  } else if (marketCap >= 1e6) {
      return (marketCap / 1e6).toFixed(2) + 'M';
  } else {
      return marketCap.toFixed(2);
  }
}

// Functie om te wachten tot de pagina geladen is en dan de gegevens op te halen
document.addEventListener('DOMContentLoaded', function() {
  fetchCryptoData();
});
