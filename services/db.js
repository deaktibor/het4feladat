const loki = require('lokijs');
const db = new loki('data.db', /*{autosave: true, autosaveInterval: 1000 ,autoload: true}*/)

module.exports = function initdb(cb){
	db.loadDatabase({},err => {
		let todos = db.getCollection("todos");
		if (todos === null) {
			todos = db.addCollection("todos");
		}
		db.saveDatabase(err => {
			cb(err,db, todos);
		})
	})
}

