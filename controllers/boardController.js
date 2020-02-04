import { boards } from '../db';

export const board = (req, res) => {
  res.render('board', { pageTitle: '게시판', boards });
};

export const searchBoard = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render('search-board', { pageTitle: '게시판 검색' });
};

export const writeBoard = (req, res) =>
  res.render('writeBoard', { pageTitle: '게시판 작성' });

export const boardDetail = (req, res) =>
  res.render('boardDetail', { pageTitle: '게시판 내용' });

export const editBoard = (req, res) =>
  res.render('editBoard', { pageTitle: '게시판 수정' });

export const deleteBoard = (req, res) =>
  res.render('deleteBoard', { pageTitle: '게시판 삭제' });
