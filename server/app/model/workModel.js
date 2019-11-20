'user strict';
var sql = require('./db.js');
var Work = function (work) {
    this.WORK_UNIT = work.WORK_UNIT;
    this.WORK_UNIT_DESC = work.WORK_UNIT_DESC;
    this.SYSTEM_TYPE = work.SYSTEM_TYPE;
    this.SUB_SYSTEM_TYPE = work.SUB_SYSTEM_TYPE;
    this.REC_TYPE = work.REC_TYPE;
    this.PSA_CODE = work.PSA_CODE;
    this.USER_ID = work.USER_ID;
    this.AUDIT_TIMESTAMP = work.AUDIT_TIMESTAMP;
};


Work.createWork = function createWork(newWork, result) {
    sql.query("INSERT INTO work_unit_detail set ?", newWork, function (err, res) {

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

module.exports = Work;



