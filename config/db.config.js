const env = require('./db.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 

//const database = env.database;
//console.log(`Creating database "${database}"...`);
//sequelize.query(`CREATE DATABASE IF NOT EXISTS "${database}"`).then(() => console.log('Database created'));

const db = {};
 
 //return sequelize.query("CREATE DATABASE employeeportal;").then(data => {
  	db.Sequelize = Sequelize;
	db.sequelize = sequelize;
 
	//Models/tables
	db.empdetails = require('../app/model/employee.model.js')(sequelize, Sequelize);
 
//});

 
module.exports = db;