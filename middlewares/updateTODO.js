/**
 * MW updateTODO
 * */
module.exports = (objRepo) => {
	const {todos} = objRepo;
	return (req, res, next) => {
		if (typeof req.body.todo === 'undefined' && typeof req.body.isCompleted === 'undefined'){
			return res.status(400).json({error: `Missing parameter for update`});
		} else {
			if (typeof req.body.todo !== 'undefined' && req.body.todo.length !== 0) {
				res.locals.todo.todo = req.body.todo;
			}
			if (typeof req.body.isCompleted !== 'undefined' && (req.body.isCompleted === true || req.body.isCompleted === false)) {
				res.locals.todo.isCompleted = req.body.isCompleted;
			}
			todos.update(res.locals.todo);
			return next();
		}
	}
}
