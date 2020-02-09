import dotenv from 'dotenv';
import multer from 'multer';
import routes from './routes';
import slogan from '../public/homeSloganManifest';

dotenv.config();

const multerAvatar = multer({ dest: './src/uploads/avatars/' });

export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = '수가성 교회';
  res.locals.routes = routes;
  res.locals.slogan = slogan;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadAvatar = multerAvatar.single('avatarFile');
