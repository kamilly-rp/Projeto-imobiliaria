import express from 'express';
import Property from '../models/Property.js';

const router = express.Router();

// Criar um novo imóvel
router.post('/', async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    const saved = await newProperty.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todos os imóveis
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Buscar imóvel específico por ID (essa é a que estava faltando)
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).lean();
    if (!property) return res.status(404).json({ message: "Not found" });
    res.json(property); // aqui o array de images vem automaticamente
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
