import {PrismaClient} from '@prisma/client';
import type {Context} from 'koa';
import ServerError from '../utility/serverError';
import {handlePrismaError} from '../utility/prismaError';
import log from '../utility/log';
import {MessageType} from '../types';
const prisma = new PrismaClient();

type RequestBody = {
  email: string;
  name: string;
};

async function addUser(ctx: Context): Promise<boolean> {
  const {email, name} = ctx.request.body as RequestBody;

  if (!email || !name) {
    log('Email and name are required', MessageType.Error);
    throw new ServerError('Email and name are required', 400, {missingFields: ['email', 'name']});
  }

  try {
    await prisma.user.create({
      data: {
        email,
        name,
      },
    });
  } catch (error: unknown) {
    const isPrismaError = await handlePrismaError(error);
    if (error instanceof Error) {
      if (!isPrismaError) log('Error creating user', MessageType.Error, error.message);
      throw new ServerError('Error creating user', 500, {errorDetails: error});
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (!isPrismaError) {
        log('Unknown error occurred while creating user', MessageType.Error);
      }
      throw new ServerError('Unknown error occurred while creating user', 500);
    }
  }

  return (ctx.body = true);
}

export default addUser;
