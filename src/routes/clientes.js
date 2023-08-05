const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');


router.post('/', async (req, res) => {
    try {
        const { nome, situacao, data } = req.body;
        const cliente = new Cliente({ nome, situacao, data });
        await cliente.save();
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/buscar/:nome', async (req, res) => {
    const nome = req.params.nome;
    try {
        const clientes = await Cliente.find({ nome: { $regex: nome, $options: 'i' } });
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndRemove(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json({ message: 'Cliente excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;