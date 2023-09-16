require('dotenv').config();
require('./config/database');
const app = require('./app-server');
const PORT = process.env.PORT || 8011;

app.listen(PORT, () => {
	console.log(`API Listening on port ${PORT}`);
});
