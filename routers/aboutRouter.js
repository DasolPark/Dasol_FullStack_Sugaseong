import express from 'express';
import routes from '../routes';

const aboutRouter = express.Router();

aboutRouter.get(routes.about, (req, res) => res.send('about'));
aboutRouter.get(routes.intro, (req, res) => res.send('intro'));
aboutRouter.get(routes.timeTable, (req, res) => res.send('timeTable'));
aboutRouter.get(routes.map, (req, res) => res.send('map'));

export default aboutRouter;
