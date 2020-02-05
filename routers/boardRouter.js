import express from 'express';
import routes from '../routes';
import {
  board,
  boardDetail,
  editBoard,
  deleteBoard,
  searchBoard,
  postWriteBoard,
  getWriteBoard
} from '../controllers/boardController';

const boardRouter = express.Router();

boardRouter.get('/', board);

boardRouter.get(routes.searchBoard, searchBoard);

boardRouter.get(routes.writeBoard, getWriteBoard);
boardRouter.post(routes.writeBoard, postWriteBoard);

boardRouter.get(routes.boardDetail(), boardDetail);

boardRouter.get(routes.editBoard, editBoard);

boardRouter.get(routes.deleteBoard, deleteBoard);

export default boardRouter;
