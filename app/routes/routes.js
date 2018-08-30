module.exports = function(app) {
 
    const employee = require('../controller/EmpServer.controller.js');
 
    // Create a new Customer
    app.post('/api/employee/add', employee.create);
 
    // Retrieve all Customer
    app.get('/api/employee/getall', employee.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/employee/:empId', employee.findById);
 
    // Update a Customer with Id
    app.put('/api/employee/update/:empId', employee.update);
 
    // Delete a Customer with Id
    app.delete('/api/employee/:empId', employee.delete);
}