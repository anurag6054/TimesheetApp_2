'use strict';

var User = require('../model/userModel.js');
// var Psa = require('../model/appModel.js');
// var Work = require('../model/appModel.js');
  exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);

     if(!new_user.FIRST_NAME || !new_user.USER_ID){
  
              res.status(400).send({ error:true, message: 'Please provide FIRST_NAME/USER_ID' });
  
          }
  else{
    
    User.createUser(new_user, function(err, user) {
      
      if (err)
        res.send(err);
      res.json(user);
    });
  }
  };

// exports.create_a_psa = function (req, res) {
//   var new_psa = new Psa(req.body);

//   //handles null error 
//   if (!new_psa.PSA_CODE || !new_psa.SYSTEM_TYPE) {

//     res.status(400).send({ error: true, message: 'Please provide PSA_CODE/SYSTEM_TYPE' });

//   }
//   else {

//     Psa.createPsa(new_psa, function (err, user) {

//       if (err)
//         res.send(err);
//       res.json(user);
//     });
//   }
// };

// exports.create_a_work = function (req, res) {
//   var new_work = new Work(req.body);

//   //handles null error 
//   if (!new_work.WORK_UNIT|| !new_work.SYSTEM_TYPE) {

//     res.status(400).send({ error: true, message: 'Please provide WORK_UNIT/SYSTEM_TYPE' });

//   }
//   else {

//     Work.createWork(new_work, function (err, user) {

//       if (err)
//         res.send(err);
//       res.json(user);
//     });
//   }
// };