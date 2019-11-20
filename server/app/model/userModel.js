'user strict';
var sql = require('./db.js');
var User = function(user){
    this.USER_ID = user.USER_ID;
    this.FIRST_NAME = user.FIRST_NAME ;
    this.LAST_NAME = user.LAST_NAME;
    this.AUTH_CODE = user.AUTH_CODE;
    this.ROLE = user.ROLE;
};

User.createUser = function createUser(newUser, result) {    
    sql.query("INSERT INTO user_profile set ?", newUser, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

// Psa.createPsa = function createPsa(newPsa, result) {
//     sql.query("INSERT INTO psa_mapping set ?", newPsa, function (err, res) {

//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });
// }; 


// Work.createWork = function createWork(newWork, result) {
//     sql.query("INSERT INTO work_unit_detail set ?", newWork, function (err, res) {

//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });
// };

module.exports = User;
// module.exports = Psa;
// module.exports = Work;
