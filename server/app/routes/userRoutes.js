'use strict';
module.exports = function(app) {
  var userlist = require('../controller/user.js');
  app.route('/user_profiles')
    .post(userlist.create_a_user);
};