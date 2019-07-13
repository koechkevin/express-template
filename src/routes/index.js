import express from 'express';

const routers = [];
const router = express.Router();

const routes = (app) => {
  routers.forEach((route) => {
    router.use(route);
  });
  app.use('/api', router);
  return app;
};

export default routes;
