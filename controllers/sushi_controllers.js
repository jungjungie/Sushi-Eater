const express = require('express');
const router = express.Router();

// Imports the model (sushi.js) to use its database functions
const sushi = require('../models/sushi.js');

// Creates all routes and sets up logic within those routes where required
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
  sushi.create([
    'sushi_name', 'eaten'
  ], [
    req.body.sushi_name, req.body.eaten
  ], function(result) {
    // Sends back the ID of the new sushi roll
    res.json({ id: result.insertId });
  });
});

router.put('/api/sushi/:id', function(req, res) {
  let condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  sushi.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Exports routes for server.js to use
module.exports = router;