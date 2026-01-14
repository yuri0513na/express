var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      
      res.json({
        api: 'Dog API',
        imageUrl: data.message,
        status: data.status
      });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Server error', error });
    }
  });
});

module.exports = router;