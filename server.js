var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

var index= require('./index');
var api = require('./api');

var app = express();
var port = 3000;
// set static file rendering system in the ejs for the node js application 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}))



app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
app.use(express.static('clients'))
/*app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/views/index.html');
});*/
//app.use(express.static(path.join(__dirname,'clients')));
//this line is for the user inter face api rendring 
app.use('/',index);
app.use('/api',api);


//this line listens to the port 300 and this is not defined here will also be fetched form env  
var server= app.listen(port,function (){
	console.log('server started');
	var host = server.address().address;
	var port = server.address().port;
})
