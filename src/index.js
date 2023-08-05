const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const clientesRouter = require('./routes/clientes');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI =  "mongodb+srv://nicolastrevis:q9u5Ncq0UIX2YQLw@advotech.ekzhqgm.mongodb.net/clientes-node";
app.use(cors()); 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });
  app.use(cors());
app.use(bodyParser.json());
app.use('/clientes', clientesRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
