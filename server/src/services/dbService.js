import { config } from '../configs/config';
const { MongoClient } = require('mongodb');

const mongoClient = new MongoClient(config.mongodbClientUri, { useUnifiedTopology: true });

let db = null;

const getDb = async () => {
	if (mongoClient.isConnected() && db !== null) {
		return db;
	}

	const client = await mongoClient.connect();
	db = client.db('hack_db');

	return db;
};

const getPointCollection = async () => {
	const db = await getDb();

	return db.collection('points');
};

export const dbService = { getDb, getPointCollection };