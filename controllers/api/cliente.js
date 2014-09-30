var Cliente = require('../../models/cliente');

module.exports = {
    create: function(req, res, cb) {
        var dados = req.body;
        var model = new Cliente(dados);
        model.save(function(err, data) {
            cb(err, data, res);
        });
    },
    retrieve: function(req, res, cb) {
        Cliente.find({}, function(err, data) {
            cb(err, data, res);
        });
    },
    findOneBy_Id: function(req, res, cb) {
        var id = req.params.id;
        var query = {
            _id: id
        };

        Cliente.findOne(query, function(err, data) {
            cb(err, data, res);
        });
    },
    update: function(req, res, cb) {
        var id = req.params.id;
        var query = {
            _id: id
        };
        var mod = req.body;
        delete mod._id;
        Cliente.update(query, mod, function(err, data) {
            cb(err, data, res);
        });
    },
    delete: function(req, res, cb) {
        var id = req.params.id;
        var query = {
            _id: id
        };

        Cliente.remove(query, function(err, data) {
            cb(err, data, res);
        });
    },
};