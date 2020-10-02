const { Schema, model } = require('mongoose');

const AlimentoSchema = Schema({
    name: {
        type: String,
        required: true
    },
    porcion: {
        type: Number,
        required: true,
    },
    calorias: {
        type: Number,
        required: true
    }
});

module.exports = model('Alimento', AlimentoSchema);