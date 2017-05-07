let friends = require("./data/friends.js")

module.exports = function(app){
	app.get("/api/friends", (req, res) =>{
		response.json(friends)
	})

	app.post("api/friends", function(req, res){
		
	})
}