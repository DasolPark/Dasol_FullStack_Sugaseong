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

export const searchBoard = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  try {
    const boards = await Board.find({ title: searchingBy });
    res.render('searchBoard', {
      pageTitle: '게시판 검색',
      searchingBy,
      boards
    });
  } catch (error) {
    console.log(error);
    res.render('searchBoard', {
      pageTitle: '게시판 검색',
      searchingBy,
      boards: []
    });
  }
};

export const getWriteBoard = (req, res) => {
  res.render('writeBoard', { pageTitle: '게시판 작성' });
};
export const postWriteBoard = async (req, res) => {
  const {
    body: { title, content }
  } = req;
  try {
    const newBoard = await Board.create({
      title,
      content
    });
    res.redirect(routes.boardDetail(newBoard.id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.board);
  }
};

export const boardDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const board = await Board.findById(id);
    res.render('boardDetail', { pageTitle: '게시판 내용', board });
  } catch (error) {
    console.log(error);
    res.render('boardDetail', { pageTitle: '게시판 내용', board: [] });
  }
};

export const getEditBoard = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const board = await Board.findById(id);
    console.log(board.id);
    res.render('editBoard', { pageTitle: '게시판 수정', board });
  } catch (error) {
    console.log(error);
    res.redirect(routes.board);
  }
};
export const postEditBoard = async (req, res) => {
  const {
    params: { id },
    body: { title, content }
  } = req;
  try {
    await Board.findOneAndUpdate({ _id: id }, { title, content });
    res.redirect(routes.boardDetail(id));
  } catch (error) {
    console.log(error);
    res.render('editBoard', { pageTitle: '게시판 수정' });
  }
};

export const deleteBoard = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Board.findByIdAndRemove(id);
    res.redirect(routes.board);
  } catch (error) {
    console.log(error);
    res.redirect(routes.board);
  }
};
