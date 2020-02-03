import express from 'express';
import routes from '../routes';

const boardRouter = express.Router();

boardRouter.get(routes.board, (req, res) => res.send('board'));
boardRouter.get(routes.write, (req, res) => res.send('write'));
boardRouter.get(routes.boardDetail, (req, res) => res.send('boardDetail'));
boardRouter.get(routes.editBoard, (req, res) => res.send('editBoard'));
boardRouter.get(routes.deleteBoard, (req, res) => res.send('deleteBoard'));

export default boardRouter;
