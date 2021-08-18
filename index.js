const express = require('express')
const bodyParser = require('body-parser');
const initdb = require('./services/db')
const apiRoutes = require('./routes/api')
const port = 6000;
const app = express()

// parse application/json
app.use(bodyParser.json())


initdb((err, db, todos) =>{
	if (err){
		return console.error(err)
	}
	//add api routes
	apiRoutes(app, db, todos);

	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	})
})










