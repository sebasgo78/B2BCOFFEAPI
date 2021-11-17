const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProductoreSchema = new Schema({
	id: Number,
    nombre: String,
    documento: {
        tipo: [ {
            CC: String,
            CE: String }
        ],
        numero: Number
    },
    pais: [],
    departamento: [],
    municipio: [],
    direccion: String,
    nombrePredio: String,
    alturaCultivo: Number,
    correo: String,
    celular: Number,
    tipoProducto: String,
    calidad: String,
    puntaje: Number,
    cantidadProducto_kg: Number,
    valorunitario: Number,
    Descripcion: String
});

module.exports = mongoose.model('Productore', ProductoreSchema)