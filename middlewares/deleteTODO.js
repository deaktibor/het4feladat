/**
 * MW deleteTODO
 * */
module.exports = (objRepo) => {
	const {todos} = objRepo;
	return (req, res, next) => {
		todos.remove(res.locals.todo);
		return next();
	}
}
