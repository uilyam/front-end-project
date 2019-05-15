const yelp = require('yelp-fusion');
const apiKey = '40hADv-nxnu8GuPus2aYG8_L9R94v43dgugobGKIUXBRlnFrOTS2eqMv-0VuFiWNsK11rTYo9jwUst6xiJ-i_MamRR2iPcLPiTHeg0AGDIv0el6SJr7dqtT1xprvWXYx';
const express = require('express')
const router = express.Router()
const client = yelp.client(apiKey);

const searchRequest = {
  term:'Food Truck',
  location: 'charlotte, nc'
};

router.get('/', async (req, res) => {
  const response = await client.search(searchRequest);
  const businesses = response.jsonBody.businesses;
  res.send(businesses);
});

module.exports = router;