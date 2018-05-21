const express = require('express');
const router = express.Router();

/*default kitchen view */
 let kitchenArray = [
   {
     "name":"chicken",
     "quantity":2,
     "createdTillNow":123,
     "predicted":45,
     "status":"Done"
   }
 ];

// Login Form POST
router.post('/submit', (req, res, next) => {

  let kitchenObj = {
    "name":req.body.menu,
    "quantity":req.body.quantity,
    "createdTillNow":11,
    "predicted":123,
    "status":"Done"
  }

  kitchenArray.push(kitchenObj);
  res.render('user')
});


// router.get('/product', (req, res) => {
//   res.render('kitchen', {kitchenArray : kitchenArray});
// });

router.post('/login', (req, res) => {

  if (req.body.role == "kitchen") {
    res.render('kitchen', {kitchenArray : kitchenArray});
  }else {
    res.render('user');
  }
  //res.render('/kitchen', {kitchenArray : kitchenArray});
});


router.get('/logout', (req, res) => {
  res.render('login');
});
module.exports = router;
