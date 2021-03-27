  
require('dotenv').config();



export const config = {
	port: 5000,
	mongodbClientUri: process.env.MONGO_URI,
	hostname: 'http://localhost',
};