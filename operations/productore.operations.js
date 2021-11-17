const coleccionProductores = require('../schemas/productore.schema');
const productoreOperations = {};

productoreOperations.getProductores = async function(req, res) {
	const productores = await coleccionProductores.find();
	res.json(productores);
}

productoreOperations.getProductore = async function(req, res) {
	const productore = await coleccionProductores.findById(req.params.id);
	res.json(productore);
}

productoreOperations.crearProductore = async function(req, res) {
	const productore = new coleccionProductores(req.body);
	await productore.save();
	res.json({"status":"Información del productor guardada"});
}

/*

productoreOperations.actualizarProductore = async function(req, res) {
	const productores = new coleccionProductores(req.body);
	await productore.save();
	res.json({"status":"Información del productor guardada"});
*/

module.exports = productoreOperations

