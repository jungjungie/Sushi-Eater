const express = require('express');
const router = express.Router();

// Imports sushi model
const sushi = require('../models/sushiModel.js');

// Creates all routes
router.get('/', function(req, res) {
  sushi.all(function(data) {
    let hbsObject = {
      sushi: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/sushi', function(req, res) {
  sushi.create(['sushi_name', 'eaten'], [
    req.body.sushi_name, req.body.eaten
  ], function(result) {
    // Sends back the ID of the new sushi roll
    console.log({ id: result.insertId });
    res.json({ id: result.insertId });
  });
});

router.put('/api/sushi/:id', function(req, res) {
  let sushiId = req.params.id;

  sushi.update('eaten', '1', 'id', sushiId, function(result) {
      res.status(200).end();
  });
});

router.delete("/api/sushi/:id", function(req, res) {
  var sushiId = req.params.id;
  // console.log(sushiId);

  sushi.delete('id', sushiId, function (result) {
    res.status(200).end();
  });
});

// Exports routes for use in server.js
module.exports = router;