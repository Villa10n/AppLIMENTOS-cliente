const { response } = require('express');
const Alimento = require('../models/Alimento');

const getAlimentos = async (req, res = response) => {
    const alimentos = await Alimento.find();
    return res.json({
        ok: true,
        alimentos
    });
};

const crearAlimento = async (req, res = response) => {
    // Creamos el alimento con los datos del formulario
    const alimento = new Alimento(req.body);
    try {
        const alimentoGuardado = await alimento.save();
        return res.json({
            ok: true,
            alimento: alimentoGuardado
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
};

const eliminarElemento = async (req, res = response) => {
    const alimentoID = req.params.id;
    try {
        // Buscamos el alimento por ID
        const alimento = await Alimento.findById(alimentoID);
        // Comprobamos si existe
        if (!alimento) {
            return res.status(4040).json({
                ok: false,
                msg: 'El alimento ID no existe'
            });
        }
        // Eliminamos el alimento por su ID
        await Alimento.findByIdAndDelete(alimentoID);
        return res.json({
            ok: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
};

module.exports = {
    getAlimentos,
    crearAlimento,
    eliminarElemento
};