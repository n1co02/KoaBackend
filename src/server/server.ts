import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import type {Server} from 'http';
import {OK} from '../constants';
import startKoaApp from '../utility/startKoaApp';
import Router from 'koa-router';
import addUser from '../router/addUser';
import {errorHandlingMiddleware} from '../utility/errorHandlingMiddleware';
import testRouter from '../router/testRouter';
import getAllUsers from '../router/getAllUsers';
export async function startServer(port: number): Promise<Server> {
  const app = new Koa();
  const router = new Router();

  app.use(errorHandlingMiddleware);
  app.use(cors());
  app.use(bodyParser());

  app.use(router.routes()).use(router.allowedMethods());
  router.post('/addUser', addUser);
  router.get('/getAllUsers', getAllUsers);
  router.get('/test', testRouter);
  app.use(async ctx => {
    if (ctx.path === '/ping') {
      ctx.body = `server is ${OK}🚀`;
    }
  });

  return startKoaApp(app, port);
}
