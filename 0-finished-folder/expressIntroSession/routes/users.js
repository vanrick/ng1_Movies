var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var sess = req.session
  var suffix = "";
  if(sess.counter){
    ++sess.counter
    suffix="s"
  }else{
    sess.counter = 1
  }
  // (sess.counter) ? (++sess.counter suffix="s") : sess.counter = 1
  // sess.counter = sess.counter ? sess.counter+1 : 1;
  res.send('You have been here ' + sess.counter + " time"+suffix)
});

//express-session destroy
router.get('/clear',function(req, res, next){
  var sess = req.session
  sess.destroy(function(x){
    
  })
  res.redirect('/users')
})



module.exports = router;
