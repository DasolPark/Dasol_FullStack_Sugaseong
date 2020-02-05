import express from 'express';
import map from '../controllers/mapController';

const mapRouter = express.Router();

mapRouter.get('/', map);

export default mapRouter;
