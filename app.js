var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var rooms = require('./data/rooms.json');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');


app.get('/', function(req, res){
	res.render('index',{
		title: 'Home'
	});
});

app.get('/rooms', function(req, res){
	res.render('room',{
		title: 'Rooms',
		rooms:rooms
	});
});

app.get('/rooms/add', function(req, res){
	res.render('add');
});

app.post('/rooms/add', function(req, res){
	var room = {
		name: req.body.name
}

	res.json(room);
});

app.listen(3000, function(){
	console.log('Express server running on port :3000');
});
