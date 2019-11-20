var Work = require('../model/workModel.js');

exports.create_a_workunit = function (req, res) {
    var new_work = new Work(req.body);
    if (!new_work.WORK_UNIT || !new_work.SYSTEM_TYPE) {
        res.status(400).send({ error: true, message: 'Please provide WORK_UNIT/SYSTEM_TYPE' });
    }
    else {
        Work.createWork(new_work, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }
};