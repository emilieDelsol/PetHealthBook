// Import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const report = require('./models/report');


// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
	console.log(`Request_Endpoint: ${req.method} ${req.url}`);
	next();
});

mongoose.connect('mongodb+srv://herve:hm4378363773hm@cluster0.rzuij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	{useNewUrlParser: true,
		useUnifiedTopology: true})
	.then(() => console.log('Connexion à MongoDb reussie'))
	.catch(() => console.log('Connexion à MongoDb echouée'));

// Configure the CORs middleware
app.use(cors());

app.use(express.json());

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	app.use(express.static(path.join(__dirname, 'front-pet-health-book/build')));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'front-pet-health-book/build', 'index.html'));
	});
}


// examples 
app.get('/msg', (request, response) => {
	response.status(200).json({
		msg: 'Catch All'
	});
});

app.get('/dashboard/reports', (request, response) => {
	report.find()
		.then(report => response.status(200).json(report))
		.catch(error => response.status(400).json({ error }));
});

app.post('/dashboard/reports', (req, res) => {
	delete req.body._id;
	const Product = new report({
		...req.body
	});
	console.log(Product);
	Product.save()
		.then(product => res.status(201).json({ product }))
		.catch(error => res.status(400).json({ error }));
});

app.get('/', (request, response) => {
	response.send('Welcome to Express');
});

app.get('/users/:name', (request, response) => {
	response.send(`Welcome ${request.params.name}`);
});
// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));