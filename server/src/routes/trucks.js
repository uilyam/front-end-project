const yelp = require('yelp-fusion');
const apiKey = '';
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
/*
const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});*/