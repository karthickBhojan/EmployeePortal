var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(express.static(__dirname + '/src'));

 
const db = require('./config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});
 

require('./app/routes/routes.js')(app);
 
 // Create a Server
var server = app.listen(5000, function () {
  //var host = server.address().address
  var host = "localhost"
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})