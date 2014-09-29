var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    id: { type: String, default: ''},
    nome: { type: String, default: ''},
    telefone: { type: String, default: ''},
    email: { type: String, default: ''},
    observacao: { type: String, default: ''},
    endereco: {
        logradouro: {type: String, default: ''},
        complemento: {type: String, default: ''},
        bairro: {type: String, default: ''},
        cidade: {type: String, default: ''},
        estado: {type: String, default: ''}
    },
    contato: [{
        nome: { type: String, default: ''},
        email: { type: String, default: ''},
        telefone: { type: String, default: ''},
        setor: { type: String, default: ''}
    }],
    configuracao: [{
        descricao: { type: String, default: ''},
        servidor: { type: String, default: ''},
        porta: { type: String, default: ''},
        endereco_web: { type: String, default: ''}
    }]
});

module.exports = mongoose.model("Cliente", ClienteSchema);