/**
 * MW MatchTODO
 * */
module.exports = (objRepo) => {
	const {todos} = objRepo;
	return (req, res, next) => {
		if (typeof req.params.id === 'undefined') {
			return res.status(404).json({error: `Missing todo id`});
		} else {
			res.locals.todo = todos.findOne({id: req.params.id});
			if (res.locals.todo === null) {
				return res.status(404).json({error: `Missing todo with id: ${req.params.id}`});
			} else {
				return next();
			}
		}
	}
}
