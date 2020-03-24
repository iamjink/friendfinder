var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friendslist", function (req, res) {
        res.json(friends);
    });

    //new API
    app.post("/api/friendslist", function (req, res) {
        var userInput = req.body;
        var userScores = userInput.score;

        var matchName = "";
        var matchPhoto = "";

        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friends[i].score[j] - userScores[j]);
            }
            if (diff < totalDifference) {

                totalDifference = diff;
                matchName = friends[i].userName;
                matchPhoto = friends[i].userPhoto;
           
                // console.log(matchName);
                // console.log(matchPhoto);

            }     console.log(totalDifference);
        }
        friends.push(userInput);
        res.json({
            status: 'OK',
            matchName: matchName,
            matchPhoto: matchPhoto
        });
        // console.log(userInput)
    })
}