'user strict';
var sql = require('./db.js');

var Psa = function (psa) {
    this.PSA_CODE = psa.PSA_CODE;
    this.SYSTEM_TYPE = psa.SYSTEM_TYPE;
    this.SUB_SYSTEM_TYPE = psa.SUB_SYSTEM_TYPE;
    this.REC_TYPE = psa.REC_TYPE;
    this.PSA_DESC = psa.PSA_DESC;
};

Psa.createPsa = function createPsa(newPsa, result) {
    sql.query("INSERT INTO psa_mapping set ?", newPsa, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}; 

module.exports = Psa;

