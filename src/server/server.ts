import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import type {Server} from 'http';
import {OK} from '../constants';
import startKoaApp from '../utility/startKoaApp';
import router from '../router/testRouter';
export async function startServer(port: number): Promise<Server> {
  const app = new Koa();
  app.use(cors());
  app.use(bodyParser());

  app.use(router.routes()).use(router.allowedMethods());

  app.use(async ctx => {
    if (ctx.path === '/ping') {
      ctx.body = `server is ${OK}🚀`;
    }
  });

  return startKoaApp(app, port);
}
