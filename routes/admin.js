var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get(['/', '/login'], function(req, res, next) {
  // res.send('respond with a resoufgfdgdgdfrce');
  res.render('admin/login', { title: 'Login!' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('admin/dashboard', { title: 'Dashboard!' });
});

router.get('/pages', function(req, res, next) {

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({teste: 'OK', type: "tudo certo!"}))
  // console.log('req', req)
  // console.log('res', res)
  // res.render('admin/dashboard', { title: 'Dashboard!' });
  // req = JSON.stringify(req);
  // res.send('Pages'+'<hr />'+req+'<hr />'+res);
});

router.get('/pages/create', function(req, res, next) {
  // res.render('admin/dashboard', { title: 'Dashboard!' });
  res.send('Pages Create');
});

module.exports = router;


// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });