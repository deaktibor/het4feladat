/**
 * MW getTODO
 * */
module.exports = (objRepo) => {
	const {db} = objRepo
	return (req, res, next) => {
		db.saveDatabase(err => {
			try {
				console.table(res.locals.todo);
				return res.json(res.locals.todo);
			}catch (err){
				console.error(err);
			}
		})
	}
}
