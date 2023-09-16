const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const { getPexelsData } = require('./pexel-server');
const cors = require('cors');

const corsOptions = {
	origin: 'http://localhost:3000'
  };
  
  /* Middleware */
  app.use(express.json());
  app.use(express.static('public'));
  app.use(logger('dev'));
  
  app.use(cors(corsOptions));
  
  

app.use((req, res, next) => {
	res.locals.data = {};
	next();
});

app.get('/pexels', async (req, res, next) => {
	try {
		const pexelsData = await getPexelsData();
		//console.log("GET ROUTE", pexelsData);
		res.json(pexelsData);
	} catch (error) {
		console.error('Error fetching Pexels data:', error);
		res.status(500).json({ error: 'Failed to fetch Pexels data' });
	}
});

app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', require('./routes/api/items'));
app.use('/api/orders', require('./routes/api/orders'));
app.use('/api/profile', require('./routes/api/profile'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
});

module.exports = app;
