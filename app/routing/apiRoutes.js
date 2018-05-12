var friendData = require("../data/friends.js");

module.exports = function (app) {

    var bestMatchNumber = 0;


    app.get("/api/friends", function(req, res) {
        res.send(JSON.stringify(friendData[bestMatchNumber]));
    });


    app.post("/api/friends", function(req, res) {
        
        var userScores = req.body.scores;
        var parsedUserScore = [];
        var friendScoresArray = [];
        var friendScoresParsed = [];


        function compaireDifference (arr) {

            var totalDifference = 0;
            
            for (i = 0; i < parsedUserScore.length; i++) {
                var absVal = parsedUserScore[i] -arr[i];
                totalDifference += Math.abs(absVal);
            }
            return totalDifference;
        }


        for (i = 0; i < userScores.length; i++) {
            parsedUserScore.push(parseInt(userScores[i]));
        }


        for (i = 0; i < friendData.length; i++) {
            friendScoresArray.push(friendData[i].scores);
        }


        for (i = 0; i < friendScoresArray.length; i++) {
            friendScoresParsed.push(friendScoresArray[i].map(num => parseInt(num, 10)));
        }

        var firstFriend = compaireDifference(friendScoresParsed[0]);
        var secondFriend = compaireDifference(friendScoresParsed[1]);
        var thirdFriend = compaireDifference(friendScoresParsed[2]);

        if (firstFriend < secondFriend && firstFriend < thirdFriend) {
            bestMatchNumber = 0;
        } else if (secondFriend < firstFriend && secondFriend < thirdFriend) {
            bestMatchNumber = 1;
        } else {
            bestMatchNumber = 2;
        }

        // friendData.push(req.body);


    });
}