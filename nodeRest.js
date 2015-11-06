var express = require('express');
var app = express();
var fs = require("fs");

//var bodyParser = require('body-parser');

/* get all nodes*/
app.get('/nodes', function (req, res) {
   fs.readFile( __dirname + "/" + "nodes.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
/* get specific node
app.get('/:1/LED', function (req, res) {
   fs.readFile( __dirname + "/" + "nodes.json", 'utf8', function (err, data) {
     data = JSON.parse( data );
     res.end( JSON.stringify(data [ "node" + req.params.id]) );
   });
})

/* replace a node color*/
app.put('/:id/LED', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "nodes.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["node" + req.params.id];
       console.log( data );
       res.end( JSON.stringify(data));
   });


/* put the server up */
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
