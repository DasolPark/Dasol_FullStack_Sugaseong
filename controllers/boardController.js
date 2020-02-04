import routes from '../routes';
import Board from '../models/Board';

export const board = async (req, res) => {
  try {
    const boards = await Board.find({});
    res.render('board', { pageTitle: '게시판', boards });
  } catch (error) {
    console.log(error);
    res.render('board', { pageTitle: '게시판', boards: [] });
  }
};

export const searchBoard = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render('searchBoard', { pageTitle: '게시판 검색', searchingBy });
};

export const getWriteBoard = (req, res) => {
  res.render('writeBoard', { pageTitle: '게시판 작성' });
};
export const postWriteBoard = async (req, res) => {
  const {
    body: { title, content }
  } = req;
  const newBoard = await Board.create({
    title,
    content
  });
  res.redirection(routes.boardDetail(newBoard.id));
};

export const boardDetail = (req, res) =>
  res.render('boardDetail', { pageTitle: '게시판 내용' });

export const editBoard = (req, res) =>
  res.render('editBoard', { pageTitle: '게시판 수정' });

export const deleteBoard = (req, res) =>
  res.render('deleteBoard', { pageTitle: '게시판 삭제' });
