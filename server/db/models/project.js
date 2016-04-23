var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
	name:{type:String, required:true},
	description: String,
	repoLink:String,
	deployedLink:String,
	logoUrl:String,
	imageLinks:[String]
});

mongoose.model('Project', projectSchema);