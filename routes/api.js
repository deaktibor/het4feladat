const getAllMW = require('../middlewares/getAllTODO');
const getMW = require('../middlewares/getTODO');
const createMW = require('../middlewares/createTODO');
const matchMW = require('../middlewares/matchTODO');
const updateMW = require('../middlewares/updateTODO');
const deleteMW = require('../middlewares/deleteTODO');
const searchMW = require('../middlewares/searchTODO');
const id = require('../services/id')

function apiRoutes(app, db, todos){

	const objRepo = {id, db, todos};

	app.get('/api/todo',
		getAllMW(objRepo));

	app.get('/api/todo/:id',
		matchMW(objRepo),
		getMW(objRepo));

	app.post('/api/todo',
		createMW(objRepo),
		getMW(objRepo));

	app.put('/api/todo/:id',
		matchMW(objRepo),
		updateMW(objRepo),
		getMW(objRepo));

	app.delete('/api/todo/:id',
		matchMW(objRepo),
		deleteMW(objRepo),
		getMW(objRepo));

	app.post('/api/todo/search',
		searchMW(objRepo));
}

module.exports = apiRoutes;
