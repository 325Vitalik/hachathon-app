import { ObjectID } from 'bson';
import { dbService } from './dbService';


const getPoints = async () => {
    let points = await dbService.getPointCollection();

    const res = await points.find().toArray();

    return res;    
}

const getPointsFiltered = async (query) => {
    let points = await dbService.getPointCollection();
     
    const res = await points.find(query).toArray();

    return res;
}

const getPoint = async (id) => {
    let points = await dbService.getPointCollection();

    let x =  await points.findOne(new ObjectID(id));
   
    return x;
}

const addPoint = async (point) => {
    let points = await dbService.getPointCollection();

    let res = await points.insert(point);
    
    return res.ops[0];
}

export const eventService = {
	getPoints, addPoint, getPoint, getPointsFiltered
};