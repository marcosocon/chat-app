var express = require('express');
var app = express();

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));


app.get('/', function(req, res){
	res.render('index.jade',{ title: "Home" });
});

app.get('/rooms', function(req, res){
	res.render('room.jade',{ title: "Rooms" });
});

app.listen(3000, function(){
	console.log('Express server running on port :3000');
});
