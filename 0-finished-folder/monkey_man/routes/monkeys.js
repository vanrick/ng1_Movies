var express = require('express');
var router = express.Router();
var Monkeys = require('../lib/queries')
var Clothes = require('../lib/clothes')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//    Monkeys.all().then(function(monkeys){
//      console.log(monkeys.rows);
//      Clothes.all().then(function(clothes){
//        console.log(clothes.rows);
//        res.render('monkeys/index',{
//          monkeys: monkeys.rows,
//          clothes: clothes.rows
//       })
//      })
//    })
// });

router.get('/', function(req, res, next) {
  Monkeys.findAll().then(function(data) {
    console.log(data.rows);
    res.render('monkeys/index', {data: data.rows})
  })
});

router.get('/new', function(req, res, next) {
    res.render('monkeys/new')
});

// router.post('/', function(req, res, next) {
//   console.log(req.body);
//   Monkeys.create(req.body).then(function(){
//     Clothes.create(req.body).then(function(){
//       res.redirect('/monkeys')
//     })
//   })
// });

router.post('/', function(req, res, next) {
  console.log(req.body);
  Monkeys.createAll(req.body).then(function() {
    res.redirect('/monkeys')
  })
});





module.exports = router;
