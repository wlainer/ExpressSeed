var express = require('express');
var router = express.Router();

var Cliente = require('../controllers/api/cliente');

var cb = function(err, data, res, url) {
    res.render(dir + '/' + name + '-preload', {
        cliente: data
    });
};

router.get('/:dir/:name', function(req, res) {
    var dir = req.params.dir;
    var name = req.params.name;
    res.render(dir + '/' + name);
});

router.get('/:dir/:name/preload', function(req, res) {
    var dir = req.params.dir;
    var name = req.params.name;
    var url = dir + '/' + name;
    // pegar data e passar na rota
    Cliente.retrieve(req, res, cb, url);
});


module.exports = router;