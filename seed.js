/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var Project = Promise.promisifyAll(mongoose.model('Project'));

var seedProjects = function () {

    var projects = [
        {
            name:'Fireframe',
            description:'Fireframe is a web-based wireframing tool with real-time collaboration and easy-to-use version control.',
            repoLink:'https://github.com/gerickson808/fireframe',
            deployedLink:'http://firefra.me',
            logoUrl: 'img/FireFrame.jpg',
            imageLinks:['img/fireframe-editor.jpg', 'img/fireframe-projects.jpg', 'img/version-control.jpg']
        },
        {
            name:'Help Jimmy',
            description:'Jimmy is a little red ball in a dangerous world, learning to navigate with the help of a Q-learning neural network.',
            repoLink: 'https://github.com/gerickson808/learningblob',
            deployedLink: 'http://rawgit.com/gerickson808/learningblob/presentation/index.html',
            logoUrl: 'img/jimmy.jpg',
            imageLinks: ['img/jimmy-roll.jpg','img/jimmy-jump.jpg','img/jimmy-control.jpg']
        },
        {
            name:'STOR',
            description:'A questionnaire-centric, recommendation-based marketplace for vendors to sell anything and everything.',
            repoLink: 'https://github.com/gholevas/stackstore',
            deployedLink: 'http://stackstore.herokuapp.com',
            logoUrl: 'img/stor.jpg',
            imageLinks:['img/stor-frontpage.jpg', 'img/stor-stors.jpg','img/stor-question1.jpg','img/stor-question2.jpg','img/stor-product.jpg']
        },
        {
            name:'Bingle',
            description: 'A chrome extension combining the beauty of the Bing homepage with the usefulness of Google search results. Don\'t tell them.',
            repoLink: 'https://github.com/gerickson808/bingle',
            deployedLink: null,
            logoUrl: 'img/bingle-logo.jpg',
            imageLinks: ['img/bingle-homepage.jpg','img/bingle-results.jpg']
        }

    ];

    return Project.createAsync(projects);

};

connectToDb.then(function () {
    mongoose.connection.db.dropDatabase();
}).then(function(){
    return seedProjects();
}).then(function () {
    console.log(chalk.green('Seed successful!'));
    process.kill(0);
}).catch(function (err) {
    console.error(err);
    process.kill(1);
});
