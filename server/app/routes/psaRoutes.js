'use strict';

module.exports = function (app) {
    var psalist = require('../controller/psa.js');
    app.route('/psa_mappings')
        .post(psalist.create_a_psa);
};