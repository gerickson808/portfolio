var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Project = mongoose.model('Project');

router.get('/', function(req, res, next){
	Project.find({})
	.then(projects=>{
		res.send(projects);
	})
	.then(null,next);
});