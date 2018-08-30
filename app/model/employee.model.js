module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('empdetails', {
	  name: {
		type: Sequelize.STRING
	  },
	  email: {
		type: Sequelize.STRING
	  },
	  dob: {
		  type: Sequelize.DATE
	  },
	  phone: {
		  type: Sequelize.BIGINT
	  },
	  designation: {
		  type: Sequelize.STRING
	  }
	});
	
	return Customer;
}