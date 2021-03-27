import "core-js/stable";
import "regenerator-runtime/runtime";

import express from 'express';
import cors from 'cors';
import { config } from './configs/config';
import { combineRoutes } from './routes';
import { errorHandler } from './middlewares/errorHandling.middleware';
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

combineRoutes(app);

app.use(errorHandler);

app.listen(config.port, () => {
	console.log(`Example app listening at http://localhost:${config.port}`);
});
