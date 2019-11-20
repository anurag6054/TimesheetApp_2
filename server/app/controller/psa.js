var Psa = require('../model/psaModel.js');

exports.create_a_psa = function (req, res) {
    var new_psa = new Psa(req.body);

    //handles null error 
    if (!new_psa.PSA_CODE || !new_psa.SYSTEM_TYPE) {

        res.status(400).send({ error: true, message: 'Please provide PSA_CODE/SYSTEM_TYPE' });

    }
    else {

        Psa.createPsa(new_psa, function (err, user) {

            if (err)
                res.send(err);
            res.json(user);
        });
    }
};