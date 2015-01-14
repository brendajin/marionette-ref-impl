var https 		= require('https'),
	express 	= require('express'),
    app 		= express(),
    bodyParser 	= require('body-parser'),
    fs 			= require('fs'),
    port 		= process.env.PORT || 2500;

// for heroku
process.env.PWD = process.cwd();

app.use(bodyParser.json());

// manage proxy routes
app.get(['/api/*'], function( req, res ) {
	var filepath = __dirname + req.path,
		json = fs.readFileSync(filepath, 'utf8');

	res.setHeader('Content-Type', 'application/json');
	res.send( json );
});

app.get(['/*', '/#*'], express.static(__dirname + '/src'));

app.listen(port);
console.log("Listening on port " + port);