const fs = require('fs');
const path = require('path');
const express = require('express');

// Express specific configuration
const app = express();
app.use('/static', express.static(path.join(__dirname, '/static')));
app.set('views', './views');

// Pug specific configuration
app.set('view engine', 'pug');

// Routers
app.get('/', (req, res) => {
	res.status(200).render('home');
});

app.get('/know-me', (req, res) => {
	res.status(200).render('know-me');
});

app.get('/projects-data', (req, res) => {
	const data = JSON.parse(
		fs.readFileSync(path.join(__dirname, './data/projects.json'), 'utf8')
	);

	res.status(200).json({
		status: 'success',
		ok: true,
		results: data.length,
		data: {
			projects: data,
		},
	});
});

app.get('/projects', (req, res) => {
	res.status(200).render('projects');
});

// Listen to server
const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', (err, res) => {
	console.log(`Server listening on ${port}`);
});
