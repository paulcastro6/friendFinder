var friends 		= require('../data/friends.js');
var path 			= require('path');


module.exports = function(app){
	//API Routes
	app.get('/API/friends', function(req, res){
		res.json(friends);
	});

	

	app.post('/API/friends', function(req,res){
	var newscore = req.body.scores;
	var newscoreint = 0;
	var matchScore = [];

//parse scores into integers	
	var question1 = parseInt(newscore[0]);
	var question2 = parseInt(newscore[1]);
	var question3 = parseInt(newscore[2]);
	var question4 = parseInt(newscore[3]);
	var question5 = parseInt(newscore[4]);
	var question6 = parseInt(newscore[5]);
	var question7 = parseInt(newscore[6]);
	var question8 = parseInt(newscore[7]);
	var question9 = parseInt(newscore[8]);
	var question10 = parseInt(newscore[9]);

//recreate friends object
	var newFriend = {
		name: req.body.name,
		photo: req.body.photo,
		scores: [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
	}



	for (var i = 0; i < friends.length; i++) {
		var absoluteScore = Math.abs(friends[i].scores[0] - question1) +
							Math.abs(friends[i].scores[1] - question2) +
							Math.abs(friends[i].scores[2] - question3) +
							Math.abs(friends[i].scores[3] - question4) +
							Math.abs(friends[i].scores[4] - question5) +
							Math.abs(friends[i].scores[5] - question6) +
							Math.abs(friends[i].scores[6] - question7) +
							Math.abs(friends[i].scores[7] - question8) +
							Math.abs(friends[i].scores[8] - question9) +
							Math.abs(friends[i].scores[9] - question10);
		matchScore.push(absoluteScore);
							
	}


	//find the lowest matching score
	var index = 0;
	var value = matchScore[0];
	for (var i = 1; i < matchScore.length; i++) {
	  if (matchScore[i] < value) {
	    value = matchScore[i];
	    index = i;
	  }
	}

//send the friend with the lowest matching score
	res.send(friends[index]);


	

	//console.log(index);
	
	
//push newFriend object to API	
	friends.push(newFriend);
	});



}