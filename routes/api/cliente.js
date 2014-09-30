var express = require('express');
var router = express.Router();
var _cliente = require('../../controllers/api/cliente');

var cb = function(err, data, res) {
  if (err) {
    msg = '{Erro: ' + err + '}';
  } else {
    msg = data;
  }
  console.log(msg);
  res.json(msg);
};

router.get('/', function(req, res) {
  _cliente.retrieve(req, res, cb);
});

router.get('/_id/:id', function(req, res) {
  _cliente.findOneBy_Id(req, res, cb);
});

router.post('/', function(req, res) {
  _cliente.create(req, res, cb);
});

router.put('/_id/:id', function(req, res) {
  _cliente.update(req, res, cb);
});

router.delete('/_id/:id', function(req, res) {
  _cliente.delete(req, res, cb);
});

module.exports = router;