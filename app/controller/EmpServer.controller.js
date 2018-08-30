const db = require('../../config/db.config.js');
const Employee = db.empdetails;
 
// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	Employee.create({  
	  name: req.body.name,
	  email: req.body.email,
	  dob: req.body.dob,
	  phone: req.body.phone,
	  designation: req.body.designation
	}).then(employee => {		
		// Send created customer to client
		//res.send(employee);
		res.status(200).send("employee created successfully ...");
	});
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Employee.findAll().then(empdetails => {
	  // Send all customers to Client
	  res.send(empdetails);
	});
};
 
// Find a Customer by Id
exports.findById = (req, res) => {	
	Employee.findById(req.params.empId).then(employee => {
		res.send(employee);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	const id = req.params.empId;
	Employee.update( { name: req.body.name, 
					   email: req.body.email, 
					   dob: req.body.dob,
					   phone: req.body.phone,
	                   designation: req.body.designation}, 
					 { where: {id: req.params.empId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a employee with id = " + id);
				   });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.empId;
	Employee.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a customer with id = ' + id);
	});
};
