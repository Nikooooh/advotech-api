const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  situacao: { type: String, required: true },
  data: { type: Date, required: true }
});

module.exports = mongoose.model('Cliente', clienteSchema);