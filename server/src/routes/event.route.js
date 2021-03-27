import { query, response, Router } from 'express';
import { config } from '../configs/config';
import { eventService } from '../services/event.service';

const router = new Router();

router.get('/:uid', async (req, res, next) => {

    const response = await eventService.getPoint(req.params.uid);
    
    res.send(response);
});

router.get('/', async (req,res,next) => {
    const result = await eventService.getPoints();
    
    res.send(result);
})

router.post('/filtered', async (req,res,next) => {
    const query = req.body; 

    const result = await eventService.getPointsFiltered(query);
    
    res.send(result);
})

router.post('/event', async (req,res,next) => {
    const point = req.body; 

    let response = await eventService.addPoint(point);

    res.send(response);
})

export { router as eventRoutes };