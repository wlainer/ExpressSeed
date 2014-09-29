var Cliente = require('../../models/cliente');

module.exports = {
    create: function(req, res, cb) {
        var dados = req.body;
        var model = new Cliente(dados);
        model.save(function(err, data){
            cb(err, data, res);
        });
    }
};