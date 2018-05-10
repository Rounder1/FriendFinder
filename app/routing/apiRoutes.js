var friendData = require("../data/friends.js");

module.exports = function (app) {





    app.get("/api/friends", function(req, res) {
        res.send(JSON.stringify(friendData));
    });


    app.post("/api/friends", function(req, res) {
        
        var userScores = req.body.scores;
        var parsedUserScore = [];
        var friendScoresArray = [];
        var friendScoresParsed = [];


        for (i = 0; i < friendData.length; i++) {
            friendScoresArray.push(friendData[i].scores);
        }


        for (i = 0; i < friendScoresArray.length; i++) {
            friendScoresParsed.push(friendScoresArray[i].map(num => parseInt(num, 10)));
        }

        console.log(friendScoresParsed);


        for (i = 0; i < userScores.length; i++) {
            parsedUserScore.push(parseInt(userScores[i]));
        }
        
        
        friendData.push(req.body);
    
    });
}