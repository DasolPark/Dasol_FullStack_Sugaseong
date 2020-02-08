import passport from 'passport';
import routes from '../routes';
import User from '../models/User';

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: '회원 가입' });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password1, password2 }
  } = req;
  if (password1 !== password2) {
    res.status(400);
    res.render('Join', { pageTitle: '회원 가입' });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password1);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: '로그인' });
};
export const postLogin = passport.authenticate('local', {
  failureRedirect: `/user${routes.login}`,
  successRedirect: routes.home
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render('userDetail', { pageTitle: '사용자 정보' });

export const getEditProfile = (req, res) =>
  res.render('editProfile', { pageTitle: '사용자 정보 수정' });
export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file: { path }
  } = req;

  res.render('editProfile', { pageTitle: '사용자 정보 수정' });
};

export const changePassword = (req, res) =>
  res.render('changePassword', { pageTitle: '비밀번호 변경' });
