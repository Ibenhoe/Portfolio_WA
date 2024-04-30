const axios = require('axios');
const fs = require('fs');
const axios = require('axios');
const fs = require('fs');

// Import the axios and fs modules

// Define the fetchData function
const fetchData = async () => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=ethereum,bitcoin', {
      headers: {
        'X-CMC_PRO_API_KEY': '753e978f-0845-4046-8b8f-6a093111ecdc',
      },
    });

    // Log the received data
    console.log("API data: Successful");

    // Remove the tags from the data
    const dataWithoutTags = removeTags(response.data);
    fs.writeFileSync('apiData.json', JSON.stringify(dataWithoutTags));

    return response.data;
  } catch (error) {
    // Handle any errors
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Call the fetchData function
fetchData();

// Helper method to remove tags from the data
function removeTags(data) {
  return data;
}
