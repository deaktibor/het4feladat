/**
 * MW getTODOList
 * */
module.exports = (objRepo) => {
	const {todos} = objRepo;
	return (req, res, next) => {
		const todolist = todos.find();
		console.table(todolist);
		let todosApiRes = [];
		todolist.forEach(elm => {
			todosApiRes.push({
				id: elm.id,
				todo: elm.todo,
				isCompleted: elm.isCompleted
			});
		})
		return res.json(todosApiRes);
	}
}


