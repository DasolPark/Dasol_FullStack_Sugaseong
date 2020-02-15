import express from 'express';
import routes from '../routes';
import {
  board,
  selectBoard,
  searchBoard,
  getWriteBoard,
  postWriteBoard,
  boardDetail,
  getEditBoard,
  postEditBoard,
  deleteBoard
} from '../controllers/boardController';
import { onlyPrivate } from '../middlewares';

const boardRouter = express.Router();

// To Do onlyPrivate after index

boardRouter.get('/', board);

boardRouter.get(routes.selectBoard, selectBoard);

boardRouter.get(routes.searchBoard, searchBoard);

boardRouter.get(routes.writeBoard, getWriteBoard);
boardRouter.post(routes.writeBoard, postWriteBoard);

boardRouter.get(routes.boardDetail(), onlyPrivate, boardDetail);

boardRouter.get(routes.editBoard(), getEditBoard);
boardRouter.post(routes.editBoard(), postEditBoard);

boardRouter.get(routes.deleteBoard(), deleteBoard);

export default boardRouter;
