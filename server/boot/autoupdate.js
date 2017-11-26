module.exports = function(app) {

var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'JobsApplied', 'Interviews',
                'Comments','Posts','PaymentTypes','Connections','ServiceTypes','Service','Guilds' ,
                'AssessmentsTaken', 'JobSaved','Accounts','Jobs'];

  app.dataSources.mysqldata.autoupdate(lbTables, function(err) {
    if (err) throw err;
    });
  console.log("error");


};