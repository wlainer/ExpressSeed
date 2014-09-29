var express = require('express');
var router = express.Router();
var _cliente = require('../../controllers/api/cliente');

var cb = function(err, data, res){
  if (err){
    msg = '{Erro: ' + err +'}' ;
  }
  else{
    msg = data;
  }
  console.log(msg);
  res.json(msg);
};

router.post('/', function(req, res) {
    _cliente.create(req,res, cb);
});

module.exports = router;