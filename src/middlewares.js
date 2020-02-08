import dotenv from 'dotenv';
import multer from 'multer';
import routes from './routes';
import slogan from '../public/homeSloganManifest';

dotenv.config();

const multerAvatar = multer({ dest: './src/uploads/avatars/' });

export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = '수가성 교회';
  res.locals.routes = routes;
  res.locals.NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
  res.locals.slogan = slogan;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadAvatar = multerAvatar.single('avatarFile');
