import type Koa from 'koa';
import type {Server} from 'http';

export default function startKoaApp(app: Koa, port: number): Promise<Server> {
  return new Promise(resolve => {
    const server = app.listen(port, () => {
      resolve(server);
    });
  });
}
