  
require('dotenv').config();

export const config = {
	port: 5000,
	mongodbClientUri: process.env.MONGO_URI,
	hostname: process.env.PROD_MODE ? 'https://hack-app.azurewebsites.net' : 'http://localhost',
};