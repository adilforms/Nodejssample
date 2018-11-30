var express = require('express');
var app = express();
app.get('/', function (req,res) {
	res.send('Hello All, Welcome to CB nodejs app')
});
app.listen(2888, function () {
	console.log('Example app listening on port 2888!');
});

