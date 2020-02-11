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
const ME = '/me';

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
const EDIT_BOARD = '/:id/edit-board';
const DELETE_BOARD = '/:id/delete-board';

// Map
const MAP = '/map';

// Github
const GITHUB = '/auth/github';
const GITHUB_CALLBACK = '/auth/github/callback';

// Facebook
const FACEBOOK = '/auth/facebook';
const FACEBOOK_CALLBACK = '/auth/facebook/callback';

// Google
const GOOGLE = '/auth/google';
const GOOGLE_CALLBACK = '/auth/google/callback';

// API
const API = '/api';
const REGISTER_VIEW = '/:id/view';
const ADD_COMMENT = '/:id/comment';
const DEL_COMMENT = '/:id/delComment';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  user: USER,
  userDetail: id => {
    if (id) {
      return `/user/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  me: ME,
  about: ABOUT,
  intro: INTRO,
  timeTable: TIMETABLE,
  map: MAP,
  board: BOARD,
  searchBoard: SEARCH_BOARD,
  writeBoard: WRITE_BOARD,
  boardDetail: id => {
    if (id) {
      return `/board/${id}`;
    }
    return BOARD_DETAIL;
  },
  editBoard: id => {
    if (id) {
      return `/board/${id}/edit-board`;
    }
    return EDIT_BOARD;
  },
  deleteBoard: id => {
    if (id) {
      return `/board/${id}/delete-board`;
    }
    return DELETE_BOARD;
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  delComment: DEL_COMMENT
};

export default routes;
