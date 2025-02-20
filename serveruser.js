var express = require('express');
var router = express.Router();

const data = [{
    id: 1,
    name: 'yakuis mujic',
    age: 29,
    height: '2.00 meters'
  },
  {
    id: 2,
    name: 'Vasya lopata',
    age: 12,
    height: '1.92 meters'
  },
  {
    id: 3,
    name: 'Dima Kolyadenko',
    age: 65,
    height: '1.96 meters'
  },
]

router.get('/', function (req, res, next) {
  console.log(req.query.id);

  res.json(data);
});

module.exports = router;