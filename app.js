var express = require('express');
var app = express();
var rooms = require('./data/rooms.json');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

app.set('view engine', 'jade');


app.get('/', function(req, res){
	res.render('index',{ title: 'Home' });
});

app.get('/rooms', function(req, res){
	res.render('room',{ title: 'Rooms', rooms:rooms });
});

app.listen(3000, function(){
	console.log('Express server running on port :3000');
});
