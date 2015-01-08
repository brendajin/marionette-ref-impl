var https = require('https'),
	express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 2500;

// for heroku
process.env.PWD = process.cwd();

app.use(bodyParser.json());

// manage proxy routes
app.get(['/json/*'], function( req, res ) {
	res.json( req.body );
});

app.get(['/*', '/#*'], express.static(__dirname + '/public'));

app.listen(port);
console.log("Listening on port " + port);