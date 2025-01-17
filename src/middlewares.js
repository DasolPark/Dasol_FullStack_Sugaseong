import dotenv from 'dotenv';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import routes from './routes';
import slogan from './public/homeSloganManifest';

dotenv.config();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: 'ap-northeast-1'
});

const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'sugaseong/avatar'
  })
});

export const uploadAvatar = multerAvatar.single('avatarFile');

export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = '수가성 교회';
  res.locals.routes = routes;
  res.locals.slogan = slogan;
  res.locals.loggedUser = req.user || null;
  if (process.env.NODE_ENV === 'development') {
    res.locals.imagePath = 'dist/images/';
  } else {
    res.locals.imagePath = 'dist/images/';
  }
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
