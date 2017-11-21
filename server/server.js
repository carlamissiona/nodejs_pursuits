'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();






//app.use(loopback.token({
//  model: app.models.accessToken,
//currentUserLiteral: 'me'
//}));
// var User = app.models.User;
// var TWO_WEEKS = 60 * 60 * 24 * 7 * 3;
// var User = loopback.User;
// app.model(User, { dataSource: 'mysqldata' });
//console.log(User); 

// User.login({
//   email: 'allovanilla@mail.com',           // must provide email or "username"
//   password: 'nopenopass' ,
//   ttl: TWO_WEEKS                   // keep the AccessToken alive for at least two weeks
// }, function (err, accessToken) {
//   console.log(accessToken.id);      // => GOkZRwg... the access token
//   console.log(accessToken.ttl);     // => 1209600 time to live
//   console.log(accessToken.created); // => 2013-12-20T21:10:20.377Z
//   console.log(accessToken.userId);  // => 1
// });

// this is how we add mysql export data script
//console.log( app.DataSource );

//connector.execute('mysql.sql');
// this is how we add mysql export data script

  

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
