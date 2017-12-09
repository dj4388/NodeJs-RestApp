var express = require('express');
var router = express.Router();

var Product = require('../models/product');

// router.get('/products', function(req,res){
// 	res.send('api is working');
// });

Product.methods(['get','put','post','delete']);
Product.register(router,'/products');

var Post = require('../models/post');

Post.methods(['get','put','post','delete']);
Post.register(router,'/posts');


module.exports = router;
