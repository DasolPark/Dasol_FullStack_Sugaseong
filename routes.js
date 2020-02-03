// Global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';

// User
const USER = '/user';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/:id/edit-profile';
const CHANGE_PASSWORD = '/:id/change-password';

// About
const ABOUT = '/about';
const INTRO = '/intro';
const TIMETABLE = '/timetable';
const MAP = '/map';

// Board
const BOARD = '/board';
const WRITE = '/write';
const BOARD_DETAIL = '/:id';
const EDIT_BOARD = '/:id/edit';
const DELETE_BOARD = '/:id/delete';

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
  write: WRITE,
  boardDetail: BOARD_DETAIL,
  editBoard: EDIT_BOARD,
  deleteBoard: DELETE_BOARD
};

export default routes;