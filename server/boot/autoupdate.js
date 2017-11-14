module.exports = function(app) {

var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'assessment'];

  app.dataSources.mysqldata.autoupdate(lbTables, function(err) {
    if (err) throw err;
    });


};