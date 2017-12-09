
var restful = require('node-restful');

var mongoose = restful.mongoose;

var productSchema = new mongoose.Schema({
	name: String,
	desc: String,
	price: Number
}); 

module.exports = restful.model('Products', productSchema);