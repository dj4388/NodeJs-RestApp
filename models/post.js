
var restful = require('node-restful');

var mongoose = restful.mongoose;

var postSchema = new mongoose.Schema({
	title: String,
	name: String,
	author: String
}); 

module.exports = restful.model('Posts', postSchema);