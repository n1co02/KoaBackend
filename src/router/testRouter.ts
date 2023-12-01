import Router from 'koa-router';
import ServerError from '../utility/serverError';

const router = new Router();
type RequestBody = {
  test: string;
};

router.get('/testRouter', async ctx => {
  try {
    const {test} = ctx.request.body as RequestBody;
    return test;
    ctx.body = test;
  } catch (e) {
    throw new ServerError('TEST_ERROR', {info: 500});
  }
});

export default router;
