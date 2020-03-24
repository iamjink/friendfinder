var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friendslist", function(req,res) {
        res.json(friends);
    });
}