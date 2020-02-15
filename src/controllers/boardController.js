import routes from '../routes';
import Board from '../models/Board';
import Comment from '../models/Comment';
import User from '../models/User';

export const board = async (req, res) => {
  try {
    const boards = await Board.find({}).populate('creator');
    let first = 0;
    let last = 10;
    const pages = [];
    const pageIndex = [];
    for (let i = 0; i < Math.ceil(boards.length / 10); i++) {
      pageIndex.push(i + 1);
      pages.push(boards.slice(first, last));
      first += last;
      last += 10;
    }
    const nowPage = pages[0] || [];
    res.render('board', { pageTitle: '게시판', nowPage, pageIndex });
  } catch (error) {
    console.log(error);
    res.render('board', { pageTitle: '게시판', nowPage: [] });
  }
};

export const selectBoard = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const boards = await Board.find({}).populate('creator');
    let first = 0;
    let last = 10;
    const pages = [];
    const pageIndex = [];
    for (let i = 0; i < Math.ceil(boards.length / 10); i++) {
      pageIndex.push(i + 1);
      pages.push(boards.slice(first, last));
      first += last;
      last += 10;
    }
    const nowPage = pages[parseInt(id, 10) - 1 || 0] || [];
    res.render('board', { pageTitle: '게시판', nowPage, pageIndex });
  } catch (error) {
    console.log(error);
    res.render('board', { pageTitle: '게시판', nowPage: [] });
  }
};

export const searchBoard = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  try {
    const boards = await Board.find({
      title: { $regex: searchingBy, $options: 'i' }
    });
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
      content,
      creator: req.user.id
    });
    req.user.boards.push(newBoard.id);
    req.user.save();
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
    const oneBoard = await Board.findById(id)
      .populate('creator')
      .populate('comments');
    oneBoard.views += 1;
    oneBoard.save();
    res.render('boardDetail', { pageTitle: '게시판 내용', oneBoard });
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
    const oneBoard = await Board.findById(id);
    if (oneBoard.creator.toString() === req.user.id.toString()) {
      res.render('editBoard', { pageTitle: '게시판 수정', oneBoard });
    } else {
      throw Error();
    }
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
    const oneBoard = await Board.findById(id);
    const creator = await User.findById({ _id: req.user.id });
    if (oneBoard.creator.toString() !== req.user.id.toString()) {
      throw Error();
    } else {
      await Board.findByIdAndRemove(id);
      creator.boards = creator.boards.filter(
        boardId => id.toString() !== boardId.toString()
      );
      creator.save();
    }
    res.redirect(routes.board);
  } catch (error) {
    console.log(error);
    res.redirect(routes.board);
  }
};

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user
  } = req;
  try {
    const oneBoard = await Board.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id
    });
    oneBoard.comments.push(newComment.id);
    oneBoard.save();
    res.send(newComment.id);
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

export const postDelComment = async (req, res) => {
  const {
    params: { id },
    body: { listId }
  } = req;
  try {
    const oneBoard = await Board.findById(id);
    const delComment = await Comment.findByIdAndRemove(listId);
    oneBoard.comments = oneBoard.comments.filter(
      commentId => commentId.toString() !== delComment.id.toString()
    );
    oneBoard.save();
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};
