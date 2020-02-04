// Global
const HOME = '/';

// User
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';

const USER = '/user';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

// About
const ABOUT = '/about';
const INTRO = '/intro';

// Time Table
const TIMETABLE = '/time-table';

// Board
const BOARD = '/board';
const SEARCH_BOARD = '/search-board';
const WRITE_BOARD = '/write-board';
const BOARD_DETAIL = '/:id';
const EDIT_BOARD = '/:id/edit';
const DELETE_BOARD = '/:id/delete';

// Map
const MAP = '/map';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  user: USER,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  about: ABOUT,
  intro: INTRO,
  timeTable: TIMETABLE,
  map: MAP,
  board: BOARD,
  searchBoard: SEARCH_BOARD,
  writeBoard: WRITE_BOARD,
  boardDetail: BOARD_DETAIL,
  editBoard: EDIT_BOARD,
  deleteBoard: DELETE_BOARD
};

export default routes;
