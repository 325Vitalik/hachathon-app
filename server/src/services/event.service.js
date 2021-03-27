import { ObjectID } from "bson";
import { dbService } from "./dbService";

const getPoints = async () => {
  let points = await dbService.getPointCollection();

  const res = await points.find().toArray();

  return res;
};

const getPointsFiltered = async (query) => {
  let points = await dbService.getPointCollection();

  const res = await points.aggregate(createQuery(query)).toArray();

  return res;
};

const getPoint = async (id) => {
  let points = await dbService.getPointCollection();

  let x = await points.findOne(new ObjectID(id));

  return x;
};

const addPoint = async (point) => {
  let points = await dbService.getPointCollection();

  const createdAt = new Date();
  let res = await points.insertOne({ ...point, createdAt });

  return res.ops[0];
};

const createQuery = (query) => {
  let queryObj1;

  if (query.location) {
    queryObj1 = {
      $geoNear: {
        near: query.location,
        maxDistance: query.radius || 500,
        spherical: true,
        distanceField: "calcDistance",
      },
    };
  }

  let queryObj2;

  if (query.name && !query.location) {
    queryObj2 = {
      $match: {
        $text: { $search: query.name },
      },
    };
  }

  let queryObj3;

  if (query.createdAt && query.createdAt.length > 0) {
    queryObj3 = {
      $match: {
        createdAt: {
          $gte: new Date(query.createdAt[0]),
          $lt: new Date(query.createdAt[1]),
        },
      },
    };
  }

  let queryObj4;

  if (query.type) {
    queryObj4 = {
      $match: { type: query.type },
    };
  }

  return [queryObj1, queryObj2, queryObj3, queryObj4].filter(Boolean);
};

export const eventService = {
  getPoints,
  addPoint,
  getPoint,
  getPointsFiltered,
};
