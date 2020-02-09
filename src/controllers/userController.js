import passport from 'passport';
import routes from '../routes';
import User from '../models/User';

// Join
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

// Log In
export const getLogin = (req, res) => {
  res.render('login', { pageTitle: '로그인' });
};

export const postLogin = passport.authenticate('local', {
  failureRedirect: `/user${routes.login}`,
  successRedirect: routes.home
});

// Log In(Github)
export const githubLogin = passport.authenticate('github');

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  } catch (error) {
    console.log(error);
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

// Log Out

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

// Get User
export const getMe = (req, res) => {
  res.render('userDetail', { pageTitle: '프로필', user: req.user });
};

// User Detail
export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    res.render('userDetail', { pageTitle: '프로필', user });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Edit Profile
export const getEditProfile = (req, res) =>
  res.render('editProfile', { pageTitle: '프로필 수정' });

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file: { path }
  } = req;
  res.render('editProfile', { pageTitle: '프로필 수정' });
};

// Change Password
export const changePassword = (req, res) =>
  res.render('changePassword', { pageTitle: '비밀번호 변경' });
