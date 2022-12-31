module.exports = function(app){

	const baseController = require("./controllers/base");
	
	app.get('/', baseController.home);

	app.get('/:key1',  baseController.request);

	app.get('/:key1/:key2', baseController.request);

	app.get('/:key1/:key2/:key3', baseController.request);
}