const express = require('express');
const { getAllMiners, createMiner } = require('../models/minerModel');

const router = express.Router();

// Obtener todos los mineros
router.get('/miners', async (req, res) => {
    try {
        const miners = await getAllMiners();
        res.json(miners);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los mineros', error });
    }
});

// Crear un nuevo minero
router.post('/miners', async (req, res) => {
    const { name, id_type, id_number, municipio_id, photo_url } = req.body;
    try {
        await createMiner(name, id_type, id_number, municipio_id, photo_url);
        res.status(201).json({ message: 'Minero creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el minero', error });
    }
});

module.exports = router;
