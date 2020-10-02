/*
    Event Routes
    /api/alimentos
*/
const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const { validarCampos } = require('../middlewares/validar-campos');
const { getAlimentos, crearAlimento, eliminarElemento } = require('../controllers/food');

// Obtener alimentos
router.get('/', getAlimentos);

// Crear un evento nuevo
router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('porcion', 'La porcion es obligatoria').not().isEmpty(),
        check('calorias', 'Total de calorias es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearAlimento
);

// Eliminar un alimento
router.delete('/:id', eliminarElemento);

module.exports = router;