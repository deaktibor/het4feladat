/**
 *MW searchTODO
 * */
module.exports = (objRepo) => {
	const {todos} = objRepo
	return (req, res, next) => {
		if (typeof req.body.search === 'undefined' || req.body.search.length === 0) {
			return res.status(400).json({error: `Missing search parameter`});
		} else {
			const sparam = req.body.search;
			const result = (todos.find({todo: { '$contains' : sparam }}));
			let todosApiRes = [];
			result.forEach(elm => {
				todosApiRes.push({
					id: elm.id,
					todo: elm.todo,
					isCompleted: elm.isCompleted
				});
			})
			return res.json(todosApiRes);
		}
	}
}
