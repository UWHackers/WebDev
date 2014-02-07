var express = require('express'),
	app = express();

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('fun', {title: 'My first'});
});
app.post('/post', function(req, res) {
    console.log(req);
});

app.listen(8888);
console.log('Listening on port ' + 8888);
