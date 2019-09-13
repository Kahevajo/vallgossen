var express = require('express');
var router = express.Router();

var redis = require('redis')
var client = redis.createClient()

client.on('error', function (err) {
  console.log('Error ' + err)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Test api call
router.get("/marco", function (req, res, next) {
  res.send("polo")
})

router.post("/createBooking", function(req, res, next) {
  if(!req.body.bookingData) {
    res.status(400)
    res.end()
    return
  }
  var data = req.body.bookingData

  client.get(data.date, function(err, reply) {
    var toBeWritten = {}

    if(err) throw err;
    if(reply) {
      toBeWritten = JSON.parse(reply)
    }
    toBeWritten[data.timeStamp] = data

    client.set(data.date, JSON.dumps(toBeWritten))
    res.status(200)
    res.send()
    return
  })
});

router.get("/getAllBookings", function(req, res, next) {
  if(!req.query.date) {
    res.status(400)
    res.end()
    return
  }

  var data = req.query.data

  client.get(data.date, function(erry, reply) {
    if(err) throw err;
    res.json(reply)
  })
});

router.post("/deleteBooking", function (req, res, next) {
  if(!(req.body.date && req.body.timeStamp)) {
    res.status(400)
    res.end()
    return
  }
  var date = req.body.date
  var ts = req.body.timeStamp

  client.get(date, function (err, reply) {
    if (err) throw err;

    if(reply) {
      var temp = JSON.parse(reply)
      delete temp[ts]
      res.status(200)
      res.send()
      return
    } else {
      res.status(304)
      res.send()
      return
    }
  })
});

router.post("/updateBooking", function (req, res, next) {
  if (!req.body.bookingData) {
    res.status(400)
    res.end()
    return
  }
  var data = req.body.bookingData

  client.get(data.date, function (err, reply) {
    var toBeWritten = {}

    if (err) throw err;
    if (reply) {
      toBeWritten = JSON.parse(reply)
    }
    delete toBeWritten[data.timeStamp]
    toBeWritten[data.timeStamp] = data

    client.set(data.date, JSON.dumps(toBeWritten))
    res.status(200)
    res.send()
    return
  })
});


module.exports = router;
