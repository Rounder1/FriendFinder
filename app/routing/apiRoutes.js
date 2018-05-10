var friendData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        console.log('friends api end point');
        res.send(JSON.stringify(friendData));
    });

    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
    });
}