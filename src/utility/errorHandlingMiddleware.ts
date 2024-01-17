import type {Context, Next} from 'koa';
import ServerError from '../utility/serverError';

export async function errorHandlingMiddleware(ctx: Context, next: Next): Promise<void> {
  try {
    await next();
  } catch (error) {
    if (error instanceof ServerError) {
      ctx.status = error.statusCode || 500;
      ctx.body = {
        message: error.message,
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        ...(error.details ? {details: error.details} : {}),
      };
    } else {
      ctx.status = 500;
      ctx.body = {message: 'Internal Server Error'};
      console.error('Unexpected Error:', error);
    }
  }
}
