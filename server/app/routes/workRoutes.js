'use strict';

module.exports = function (app) {
    var worklist = require('../controller/work.js');
    app.route('/work_unit_details')
        .post(worklist.create_a_workunit);
};