var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(express.static(__dirname + '/src'));

 
const db = require('./config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
 

require('./app/routes/routes.js')(app);
 
 // Create a Server
var server = app.listen(5000, function () {
 
  console.log(server.address())
  //var host = server.address().address
  var host = "localhost"
  var port = server.address().port
 
  console.log(host+" >>>> "+port)
  console.log("App listening at http://%s:%s", host, port)
})