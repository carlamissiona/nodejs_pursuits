module.exports = function(app) {

  	var User = app.models.User;
  	User.create({email: 'allovanilla@mail.com', password: 'nopenopass'}, 
  		function(err, userInstance) {
 			 
    	}
	);

 }