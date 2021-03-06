let friends = require("../data/friends.js")

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friends)
    })

    app.post("/api/friends", function(req, res) {
        // Variable from user
        let newFriendArray = req.body
        let newFriend = newFriendArray.scores;

        // Best Match variables

        let bestmatch = 0;
        let totalDifference = 50; //greatest difference possible

        // Loop through friends json
        for (var i = 0; i < friends.length; i++) {


            // Check for each question
            let diff = 0;
            for (var j = 0; j < newFriend.length; j++) {
                diff += Math.abs(friends[i].scores[j] - newFriend[j]);


                // Lower score = a better match, remove previous match if new difference is lower
                if (diff < totalDifference) {

                    totalDifference = diff;
                    bestmatch = i;

                }

            }
        }
        // Add new friend
        friends.push(req.body)
        res.json(friends[bestmatch])

    })

}
