/**
 * MW createTODO
 * */
module.exports = (objRepo) => {
	const {id,todos} = objRepo;
	return (req, res, next) => {
		if (typeof req.body.todo === 'undefined' || req.body.todo.length === 0){
			return res.status(400).json({error: 'Parameter todo missing'});
		} else{
			res.locals.todo ={
				id: id.getNewId(),
				todo: req.body.todo,
				//default on create
				isCompleted: false
			}
			todos.insert(res.locals.todo);
			return next();
		}
	}
}



