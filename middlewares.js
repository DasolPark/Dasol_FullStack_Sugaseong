import routes from './routes';

export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = '수가성 교회';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
