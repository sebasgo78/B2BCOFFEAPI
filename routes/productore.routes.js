const router = require('express').Router();
const productoreOperations = require('../operations/productore.operations');

/*
	Archivo de operaciones
	-----------------------------------------
	cosnt operacion = require('archivo de operaciones');

	Ruta base
	-----------------------------------------
	'/api/productores'

	Puntos de conexión
	-----------------------------------------
	crear un dato: 				post('/',      operacion.metodo)
	obtener todos los datos: 	get('/',       operacion.metodo)
	obtener un dato: 			get('/:id',    operacion.metodo)
	modificar un dato: 			put('/:id',    operacion.metodo)
	eliminar un dato: 			delete('/:id', operacion.metodo)
*/
router.get('/', productoreOperations.getProductores);
router.get('/:id', productoreOperations.getProductore)

/*
router.get('/', productoreOperations.getProductores)
router.get('/:id', productoreOperations.getProductore);
router.post('/', productoreOperations.crearProductore);
router.put('/:id', productoreOperations.actualizarProductore);
router.delete('/:id', productoreOperations.borrarProductore);
*/

module.exports = router