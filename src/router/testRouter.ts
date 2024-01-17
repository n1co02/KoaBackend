import ServerError from '../utility/serverError';
import type {Context} from 'koa';
async function testRouter(ctx: Context): Promise<boolean> {
  try {
    ctx.body = true;
    return true;
  } catch (e) {
    console.error(e);
    throw new ServerError('TEST_ERROR', 500, {additionalDetail: 'some detail'});
  }
}

export default testRouter;
